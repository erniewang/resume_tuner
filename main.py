from backend import *
from pathlib import Path
import re
import ast
from tqdm import tqdm

bd = Path.cwd()
#input: 
inputFolder = bd / "input"
backendFolder = bd / "backend"
clean_yaml = inputFolder / "boilderPlate.yaml"
job_description = inputFolder / "jobDesc.txt"
project_list = inputFolder / "aggregates.txt" 
prompt_file = backendFolder / "prompt.txt"

#output: destination paths, 
outPath = bd / "output"
filled_yaml = inputFolder / "tempProj.yaml"

def main():
    #IDE stuff for now
    company_name = input("enter company name:")

    # Read job description
    with open(job_description, 'r') as file:
        jobDesc = file.read()

    # GPT optimization - construct optimized indices
    optimizedIndicies = []
    rawProjects = read_and_split_projects(project_list)[0:3] #limit for now
    for p in tqdm(rawProjects):
        optimizedIndicies.append(ast.literal_eval(askChat(p, jobDesc, prompt_file)))

    #construct the project queue using optimized indices
    projectQueue = []
    for i, project in enumerate(rawProjects):
        projectQueue.append(assembleProject(project, optimizedIndicies[i]))

    #writing the yaml file
    writeYaml(clean_yaml, filled_yaml, projectQueue)

    #rendering the output
    renderResume(filled_yaml, outPath)
    return

main()