import re
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
#__file__ holds path of curr file
#dirname is the directory part of that file. #combines with the parent directory
from config import AGG_PATH, OUTPUT_PATH, ANSWER_PATH

#testMultiple = [[1,2,3,4], [2,3,4,5], [6,7,1,4], [1,2,0,4,5], [3,2,0,4,1], [5,1,0]]

def read_and_split_projects(projectsPath):
    """Helper function to read projects file and split by delimiter"""
    with open(projectsPath, 'r') as file:
        return file.read().split("핧")

def assembleAllProjects(projectsPath, recomsList, outputPath):
    #partial filter
    recomsList = recomsList[:3]

    assList = []
    projects = read_and_split_projects(projectsPath)
    for i in range(len(recomsList)):
        assList.append(assembleProject(projects[i], recomsList[i]))
    with open(ANSWER_PATH, 'r') as file:
        content = file.read()
    for ass in assList:
        content = content.replace("{}", ass, 1)
    with open(outputPath, "w") as f:
        f.write(content)

def assembleProject(project, projDex):
    answers = []
    project = re.split(r'\[.*?\]', project)
    project = [p[1:-1] for p in project if p != ""]
    for idx in projDex:
        try:
            answers.append(project[idx])
        except IndexError:
            pass
    retString = "highlights:\n"
    for a in answers:
        if a != "":
            retString += f'\t\t\t\t- "{a}"\n'
    return retString

#assembleAllProjects(AGG_PATH, testMultiple, OUTPUT_PATH)
