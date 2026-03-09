import zipfile
import os
import zipfile

folder = "data_folder"  # place all the file that you want to compress in this folder
zip_name = "data.zip"  # name of the zip file

with zipfile.ZipFile(zip_name, "w", compression=zipfile.ZIP_DEFLATED) as z:
    for root, dirs, files in os.walk(folder):
        for file in files:
            path = os.path.join(root, file)
            z.write(path, os.path.relpath(path, folder))

print("Zip created successfully")

# code to extract the zip file
# with zipfile.ZipFile(zip_name, "r") as zip_ref:
#     zip_ref.extractall("./")