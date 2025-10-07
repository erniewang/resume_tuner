import os
import subprocess
import fileinput

#replace tabs with 2 spaces
def renderResume():
    # Change to the project root directory
    project_root = os.path.join(os.path.dirname(__file__), "..")
    os.chdir(project_root)
    
    for line in fileinput.input("tempProj.yaml", inplace=True):
        print(line.replace("\t", "  "), end="")
        
    result = subprocess.run(["rendercv", "render", 'tempProj.yaml'], capture_output=True, text=True)
    print(f"Command output: {result.stdout}")

if __name__ == "__main__":
    renderResume()

