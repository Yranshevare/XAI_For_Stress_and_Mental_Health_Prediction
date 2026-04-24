# XAI for Stress and Mental Health Prediction

An AI-powered system that predicts stress and mental health states using machine learning, with Explainable AI (XAI) techniques to interpret and visualize model predictions.

## Overview

This project implements an end-to-end pipeline for stress detection from physiological sensor data. It uses the WESAD (Wearable Stress and Affect Detection) dataset containing multimodal sensor recordings including ECG, EDA, EMG, respiration, and accelerometer data. The system trains an XGBoost classifier and provides model interpretability through LIME and SHAP explanations, helping users understand which physiological factors contribute most to stress predictions.

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4** - Utility-first CSS framework
- **Recharts** - Charting library for data visualization
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Axios** - HTTP client

### Backend
- **Flask** - Lightweight Python web framework
- **Python 3.12+** - Programming language

### Machine Learning & Data Processing
- **scikit-learn** - Machine learning utilities
- **XGBoost** - Gradient boosting classifier
- **SHAP** - SHapley Additive exPlanations for model interpretability
- **LIME** - Local Interpretable Model-agnostic Explanations
- **Pandas** - Data manipulation
- **Matplotlib** - Plotting and visualization
- **imbalanced-learn** - Handling class imbalance usin SMOTH

### Datasets
- **WESAD (Wearable Stress and Affect Detection)** - Primary dataset with physiological signals

## Project Structure

```
├── Backend/
│   └── main.py                 # Flask API with prediction and XAI endpoints
├── Frontend/
│   ├── src/
│   │   ├── app/              # Next.js App Router pages
│   │   │   ├── Results/     # Results visualization page
│   │   │   ├── page.tsx     # Home page
│   │   │   └── layout.tsx   # Root layout
│   │   └── components/      # React components
│   └── package.json
├── ModelTraining/
│   ├── 01-featureExtraction.ipynb   # Extract features from raw sensor data
│   ├── 02-preprocessing.ipynb     # Data cleaning and preparation
│   ├── 03-modelTraning.ipynb      # XGBoost model training
│   └── model.pkl                  # Trained model file
├── XAI/
│   ├── LIME.ipynb                 # LIME explanation analysis
│   ├── SHAP.ipynb                 # SHAP explanation analysis
│   └── featureImportance.ipynb   # Feature importance analysis
├── Dataset/
│   ├── train_feature.csv          # Training features
│   ├── train_target.csv           # Training labels
│   ├── test_feature.csv          # Test features
│   ├── test_target.csv           # Test labels
│   └── loadData.py                # Script to download WESAD dataset
└── pyproject.toml                # Python dependencies
```

## Features

1. **Stress Level Prediction**: classifies stress states (low, mild, moderate, high) based on physiological features
2. **Model Interpretability**: Uses LIME and SHAP to explain individual predictions
3. **Waterfall Visualization**: Displays feature contributions graphically
4. **AI Insights**: Generates natural language explanations using LangChain
5. **Interactive Dashboard**: Modern UI with animated charts and visualizations

## How It Works

1. **Data Collection**: Physiological sensor data (ECG, EDA, EMG, accelerometer) from WESAD dataset
2. **Feature Extraction**: Processing raw signals to extract meaningful features (means, std, min, max, etc.)
3. **Model Training**: Training XGBoost classifier on physiological features
4. **Prediction**: Real-time stress prediction via Flask API
5. **Explanation**: LIME explains local predictions; SHAP provides global feature importance
6. **Visualization**: Waterfall plots and charts display results in the UI

## API Endpoints

- `POST /predict` - Returns prediction probabilities, LIME features, SHAP features, and waterfall plot

## Getting Started

### Prerequisites
- Python 3.12+
- Node.js 18+

### Backend Setup
```bash
cd Backend
uv sync
uv run main.py
```

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

## License

This project is for research and educational purposes.
