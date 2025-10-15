import os
import subprocess
import fileinput

def writeYaml(template_file_path, output_file_path, project_queue):
    """Write YAML file by replacing {} placeholders with projects from queue"""
    with open(template_file_path, 'r') as file:
        new_yaml = file.read()
    for project in project_queue:
        new_yaml = new_yaml.replace("{}", project, 1)
    with open(output_file_path, "w") as file:
        file.write(new_yaml)

#replace tabs with 2 spaces
def renderResume(temp_project_file, output_folder):
    for line in fileinput.input(temp_project_file, inplace=True):
        print(line.replace("\t", "  "), end="")
    result = subprocess.run(["rendercv", "render", str(temp_project_file), "--output-folder-name", output_folder], capture_output=True, text=True)
    print(f"Command output: {result.stdout}")
