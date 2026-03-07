**Dataset:** \
[WESAD (Wearable Stress and Affect Detection)](https://www.kaggle.com/datasets/orvile/wesad-wearable-stress-affect-detection-dataset)

# To load Dataset
### perquisite:

make sure you have python installed
```bash
python --version
```
make sure you have uv installed
```bash
uv --version
```
To install uv run following command
```bash
pip install uv
```
Make sure you have `DRIVE_FILE_ID` in your `.env` file

### Download Dataset
1. open the terminal and run following command to install dependencies
```
uv sync
```
2. navigate to Dataset folder 
```bash
cd Dataset
```
3. run `loadData.py` script to start downloading dataset
```bash
uv run loadData.py
```
**Now let the script finish and it will download the `.zip` file of dataset and extract it**

# Understand the Dataset Features

Once we load our dataset:
```python
df = pd.read_csv("./S2_chest_data.csv")
df.head(2)
```
Output:
|    | ACC_X  | ACC_Y  | ACC_Z  | ECG       | EMG       | EDA      | Temp      | Resp      | Label |
|----|--------|--------|--------|-----------|-----------|----------|-----------|-----------|-------|
| 0  | 0.9554 | -0.2220| -0.5580| 0.021423  | -0.004440 | 5.250549 | 30.120758 | -1.148987 | 0     |
| 1  | 0.9258 | -0.2216| -0.5538| 0.020325  | 0.004349  | 5.267334 | 30.129517 | -1.124573 | 0     |

### 1. ACC_X, ACC_Y, ACC_Z (Accelerometer)
Type: Motion sensor\
Unit: g (gravitational acceleration)

These three columns represent movement in 3D space.

| Feature | Positive (+)                        | Negative (−)                 |
| ---- | ----------------------------------- | ---------------------------- |
| ACC_X    | movement toward +X direction        | movement toward −X direction |
| ACC_Y    | movement toward +Y direction        | movement toward −Y direction |
| ACC_Z    | movement upward / toward sensor top | movement downward            |


**Why important for stress research**

Movement changes when people are stressed:
- stressed → restless movement
- calm → steady posture

Example:
```
ACC_X = 0.955
ACC_Y = -0.222
ACC_Z = -0.558
```
Interpretation:
- strong acceleration in +X
- slight movement in −Y
- moderate movement in −Z

### 2. ECG (Electrocardiogram)
Type: Heart electrical signal\
Unit: millivolts (mV)

ECG measures electrical activity of the heart.

It helps calculate:
- Heart Rate (HR)
- Heart Rate Variability (HRV)

**Why ECG is critical for stress**

Stress activates the sympathetic nervous system, causing:
| Condition  | Heart Rate |
| ---------- | ---------- |
| Relaxed    | lower HR   |
| Stress     | higher HR  |
| Meditation | stable HRV |

### 3. EMG (Electromyography)
Type: Muscle activity sensor\
Unit: mV

EMG measures muscle tension.

**Why EMG helps detect stress**

When stressed:
- muscles tighten
- jaw / shoulders tense
- small muscle activations increase

Example:
| State  | Muscle activity |
| ------ | --------------- |
| Calm   | low EMG         |
| Stress | high EMG        |

> negative values in EMG are completely normal and expected.

Muscle electrical activity behaves like a wave signal.

When a muscle fiber activates, it creates action potentials that move across the muscle. Because electrodes measure voltage difference, the signal can go:
- positive
- negative
- positive again

Example raw EMG signal:
```
time → 

0.004
0.002
-0.003
-0.005
0.001
0.006
```
Raw EMG values are not used directly in most models.

Researchers usually transform them first i.e, Convert negatives to positive values.
```
EMG_raw = [-0.004, 0.003, -0.002]

EMG_rectified = [0.004, 0.003, 0.002]
```
### 4. EDA (Electrodermal Activity)
Type: Skin conductance sensor\
Unit: microsiemens (μS)

EDA measures sweat gland activity.

**Why EDA is extremely important for stress detection**

Stress activates sweat glands, even if you don't see sweat.
| Condition | EDA  |
| --------- | ---- |
| Relaxed   | low  |
| Stress    | high |

### 5. Temp (Skin Temperature)
Type: Temperature sensor\
Unit: °C

**Why temperature helps detect stress**

Stress causes vasoconstriction (blood vessels tighten).
| State   | Skin Temperature   |
| ------- | ------------------ |
| Relaxed | stable             |
| Stress  | slightly decreases |


### 6. Resp (Respiration)
Type: Breathing sensor\
Unit: percentage variation

This represents breathing expansion/contraction of chest.

**Stress effect on breathing**
| State  | Breathing        |
| ------ | ---------------- |
| Calm   | slow and deep    |
| Stress | fast and shallow |

The dataset calculates respiration using this transformation: 

$$Resp = \frac{signal}{{chan \ bit}} - 0.5 \times 100$$

chan_bit = 2^16 ..... { from WESAD dataset documentation }

Because of the −0.5 shift, the signal is centered around zero, so it naturally produces positive and negative values.

| Resp Value   | Meaning                          |
| ------------ | -------------------------------- |
| Positive (+) | chest expanding → **inhaling**   |
| Negative (−) | chest contracting → **exhaling** |
| Near 0       | neutral point between breaths    |

Breathing has two phases:

1. Inhalation → chest expands
2. Exhalation → chest contracts

The signal behaves like a wave.
```
Respiration signal

   ↑ chest expansion (inhale)
 +1 |      /\        /\
    |     /  \      /  \
  0 |----/----\----/----\-----
    |   /      \  /      \
 -1 |  /        \/        \
   ↓ chest contraction (exhale)

              time →
```
> each value in the `Resp` column is simply the instantaneous breathing signal at that moment.

### 7. Label (Ground Truth)
| Label       | Meaning                           |
| ----------- | --------------------------------- |
| **0**       | Undefined / transient state       |
| **1**       | Baseline (relaxed, resting state) |
| **2**       | Stress condition                  |
| **3**       | Amusement (watching funny videos) |
| **4**       | Meditation                        |
| **5, 6, 7** | Not used / should be ignored      |

> Label = 0 means: The subject is not clearly in baseline, stress, amusement, or meditation.