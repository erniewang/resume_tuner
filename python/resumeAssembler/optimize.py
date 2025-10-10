import sys
import os
sys.path.append('../llmEndpoint')
sys.path.append('../')
from render import renderResume
from assProj import assembleAllProjects, read_and_split_projects, AGG_PATH, OUTPUT_PATH
from callGPT import askChat
import ast
from tqdm import tqdm

#testOptimized = [[1,2,3,4], [2,3,4,5], [6,7,1,4], [1,2,0,4,5], [3,2,0,4,1], [5,1,0]]
def optimize_resume(projPath, jobDesc, outputPath):
    companyIndex = input("Company Name:")
    optimizedIndicies = []
    rawProjects = read_and_split_projects(projPath)
    for p in tqdm(rawProjects):
        optimizedIndicies.append(ast.literal_eval(askChat(p, jobDesc)))
        pass
    companyIndex += ":" + str(optimizedIndicies)
    assembleAllProjects(projPath, optimizedIndicies, outputPath)
    renderResume()
    
    # Get path relative to project root
    catalog_path = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), 'jobtests', 'jobCatalog.txt')
    
    # Create directory if it doesn't exist
    os.makedirs(os.path.dirname(catalog_path), exist_ok=True)
    
    # Open in append mode, create if doesn't exist
    with open(catalog_path, 'a+') as file:
        file.write(companyIndex + "\n")
    return

def main():
    with open('../../jobtests/fullstack.txt', 'r') as file:
        testJob = file.read()
    optimize_resume(AGG_PATH, testJob, OUTPUT_PATH)

if __name__ == "__main__":
    main()

#TypeError: object str can't be used in 'await' expression so fucking picky