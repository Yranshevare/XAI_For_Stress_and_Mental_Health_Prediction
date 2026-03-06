import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

print("Loading dataset...")

# load dataset
data = pd.read_csv("Dataset/S2_chest_data.csv")

print("Cleaning dataset...")

# remove missing values
data = data.dropna()

# keep only numeric columns
data = data.select_dtypes(include=['number'])

# example: last column as label
X = data.iloc[:, :-1]
y = data.iloc[:, -1]

print("Splitting data...")

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print("Training model...")

model = RandomForestClassifier(n_estimators=50, n_jobs=-1)
model.fit(X_train, y_train)

accuracy = model.score(X_test, y_test)
print("Accuracy:", accuracy)

print("Saving model...")

with open("ModelTraining/stress_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Model trained and saved!")