# Exploratory Data Analysis (EDA)

This directory contains the Exploratory Data Analysis (EDA) for the Stress and Mental Health Prediction dataset (`S2_chest_data.csv`). The analysis is broken down into overall dataset characteristics and individual signal analyses.

## Dataset Overview

The dataset contains various physiological signals collected from chest sensors. The key features include:
- `ACC_X`, `ACC_Y`, `ACC_Z`: Accelerometer data (X, Y, Z axes) measuring physical movement.
- `ECG`: Electrocardiogram signal measuring heart electrical activity.
- `EMG`: Electromyography signal measuring muscle electrical activity.
- `EDA`: Electrodermal Activity (Skin Conductance), measuring sweat gland activity.
- `Temp`: Body temperature.
- `Resp`: Respiration signal.
- `Label`: The target classification for the subject's state.

## Target Labels

The dataset defines several subject states:
- **0**: Undefined / transient state (Ignored)
- **1**: Baseline (relaxed, resting state)
- **2**: Stress condition
- **3**: Amusement (watching funny videos)
- **4**: Meditation
- **5, 6, 7**: Not used (Ignored)

For the purpose of stress prediction, the labels are aggregated into two main classes:
- **Stressed**: Label 2
- **Not Stressed**: Labels 1, 3, and 4
*(Labels 0, 5, 6, and 7 are removed from the training dataset as they do not provide clear stress states).*

## Key Findings from EDA

1. **Class Imbalance**: The dataset is highly imbalanced. The "Not Stressed" class dominates the data with 1,591,799 samples, while the "Stressed" class contains 430,500 samples.
2. **Missing Values**: The dataset is perfectly clean with **zero null/missing values** across all columns.
3. **Outlier Detection**: Boxplot visualizations reveal the presence of outliers across several sensor columns (such as `EDA` and `Resp`). 
   - Feature analyses (e.g., in `EDA_signal.ipynb`) indicate that EDA measures sweat gland activity. Thus, stress usually activates sweat glands leading to high EDA, whereas lower EDA corresponds to non-stressed situations. However, many EDA outliers are present within the "Not Stressed" class as well.
4. **Dedicated Signal Analyses**: The folder provides individually dedicated notebooks (`ACC.ipynb`, `ECG_signal.ipynb`, `EDA_signal.ipynb`, `EMG_signal.ipynb`, `RESP_signal.ipynb`, `TEMP_signal.ipynb`) that dive deeply into the distribution, range, and behavior of each biological signal. These compare signal variations across the stressed and non-stressed target states to determine useful feature patterns.
Kv