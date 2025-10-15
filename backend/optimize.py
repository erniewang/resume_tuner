from backend.render import renderResume
from backend.assProj import assembleProject, read_and_split_projects
from backend.callGPT import askChat
import ast
import os
from pathlib import Path
from tqdm import tqdm

#testOptimized = [[1,2,3,4], [2,3,4,5], [6,7,1,4], [1,2,0,4,5], [3,2,0,4,1], [5,1,0]]
def optimize_resume(projPath, jobDesc, outputPath, answerPath, promptFile, projectRoot, tempProjectFile, jobCatalogFile):
    companyIndex = input("Company Name:")
    optimizedIndicies = []
    rawProjects = read_and_split_projects(projPath)
    for p in tqdm(rawProjects):
        optimizedIndicies.append(ast.literal_eval(askChat(p, jobDesc, promptFile)))
        pass
    companyIndex += ":" + str(optimizedIndicies)
    renderResume(projectRoot, tempProjectFile)
    
    # Create job catalog directory if it doesn't exist
    os.makedirs(Path(jobCatalogFile).parent, exist_ok=True)
    
    # Open in append mode, create if doesn't exist
    with open(jobCatalogFile, 'a+') as file:
        file.write(companyIndex + "\n")
    return
