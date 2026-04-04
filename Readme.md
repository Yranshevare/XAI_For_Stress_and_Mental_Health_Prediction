# Available Online Dataset:
1. [WESAD (Wearable Stress and Affect Detection)](https://www.kaggle.com/datasets/orvile/wesad-wearable-stress-affect-detection-dataset)
2. [SWELL dataset](https://www.kaggle.com/datasets/qiriro/swell-heart-rate-variability-hrv)

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

https://pmc.ncbi.nlm.nih.gov/articles/PMC9215837/
https://zenodo.org/records/14566207