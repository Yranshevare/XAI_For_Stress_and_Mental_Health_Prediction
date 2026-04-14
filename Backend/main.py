import matplotlib
matplotlib.use('Agg') 
from flask import Flask, request, jsonify
import pandas as pd
from flask_cors import CORS, cross_origin
import pickle
from lime.lime_tabular import LimeTabularExplainer
import shap
import numpy as np
import matplotlib.pyplot as plt
import io
import base64

# Init
app = Flask(__name__)
CORS(app)

# Load model
model = pickle.load(open("../ModelTraining/model.pkl", "rb"))

# Load dataset ONCE (startup only)
df1 = pd.read_csv("../Dataset/train_feature.csv")
df2 = pd.read_csv("../Dataset/test_feature.csv")
df = pd.concat([df1, df2], ignore_index=True)

# LIME Explainer
lime_explainer = LimeTabularExplainer(
    training_data=df.values,
    feature_names=df.columns,
    mode="classification",
    discretize_continuous=False
)

# SHAP Explainer
shap_explainer = shap.TreeExplainer(model)


@app.post('/predict')
@cross_origin()
def predict():
    try:
        data = request.get_json()

        # Convert input to DataFrame
        input_df = pd.DataFrame([data])

        # ---- Prediction ----
        proba = model.predict_proba(input_df)[0]
        classes = model.classes_

        prob_dict = {
            str(cls): float(prob)
            for cls, prob in zip(classes, proba)
        }

        # ---- LIME ----
        lime_exp = lime_explainer.explain_instance(
            data_row=input_df.iloc[0].values,
            predict_fn=model.predict_proba,
            num_features=15
        )

        lime_list = lime_exp.as_list()
        lime_sorted = sorted(lime_list, key=lambda x: abs(x[1]), reverse=True)

        total = sum(abs(v) for _, v in lime_sorted) or 1

        lime_clean = [
            {
                "feature": feature,
                "importance": float(value / total)
            }
            for feature, value in lime_sorted[:10]
        ]

        # ---- SHAP ----
        shap_values = shap_explainer.shap_values(input_df)

        if isinstance(shap_values, list):
            shap_vals = shap_values[1]
            base_value = shap_explainer.expected_value[1]
        else:
            shap_vals = shap_values
            base_value = shap_explainer.expected_value

        shap_vals = shap_vals[0]

        shap_clean = sorted(
            [
                {
                    "feature": col,
                    "importance": float(val)
                }
                for col, val in zip(input_df.columns, shap_vals)
            ],
            key=lambda x: abs(x["importance"]),
            reverse=True
        )[:10]

        # ---- WATERFALL PLOT ----
        exp = shap.Explanation(
            values=shap_vals,
            base_values=base_value,
            data=input_df.iloc[0].values,
            feature_names=input_df.columns.tolist()
        )

        plt.figure()
        shap.plots.waterfall(exp, show=False)

        buf = io.BytesIO()
        plt.savefig(buf, format='png', bbox_inches='tight')
        plt.close()
        buf.seek(0)

        img_base64 = base64.b64encode(buf.read()).decode('utf-8')

        # ---- FINAL RESPONSE ----
        response = {
            "prediction_probability": prob_dict,
            "lime_top_features": lime_clean,
            "shap_top_features": shap_clean,
            "waterfall_plot": img_base64   # ✅ merged here
        }

        return jsonify(response), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route('/')
def home():
    return "Flask API Running 🚀"


if __name__ == "__main__":
    app.run(debug=True)