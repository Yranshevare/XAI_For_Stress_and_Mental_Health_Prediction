import gdown
import zipfile
from dotenv import load_dotenv
import os

load_dotenv()

file_id = os.getenv("DRIVE_FILE_ID")
url = f"https://drive.google.com/uc?id={file_id}"

output = "./wesad.zip"

gdown.download(url, output, quiet=False)

print("Dataset downloaded")

with zipfile.ZipFile(output, "r") as zip_ref:
    zip_ref.extractall("./")

print("Dataset extracted")

os.remove(output)

print("Zip file removed")