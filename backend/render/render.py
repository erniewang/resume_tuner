import os
import sys
import subprocess
import fileinput

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from config import TEMP_PROJECT_FILE, PROJECT_ROOT

#replace tabs with 2 spaces
def renderResume():
    # Change to the project root directory
    os.chdir(PROJECT_ROOT)
    
    for line in fileinput.input(TEMP_PROJECT_FILE, inplace=True):
        print(line.replace("\t", "  "), end="")
        
    result = subprocess.run(["rendercv", "render", str(TEMP_PROJECT_FILE), "--output-folder-name", "output"], capture_output=True, text=True)
    print(f"Command output: {result.stdout}")

if __name__ == "__main__":
    renderResume()

