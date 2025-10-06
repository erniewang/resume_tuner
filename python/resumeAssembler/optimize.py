import sys
sys.path.append('../llmEndpoint')
from assProj import assembleAllProjects, read_and_split_projects, AGG_PATH, OUTPUT_PATH
from callGPT import askChat
import ast

def optimize_resume(projPath, jobDesc, outputPath):
    optimizedIndicies = []
    rawProjects = read_and_split_projects(projPath)
    for p in rawProjects:
        optimizedIndicies.append(ast.literal_eval(askChat(p, jobDesc)))
    assembleAllProjects(projPath, optimizedIndicies, outputPath)
    return

def main():
    with open('../../jobtests/frontend.txt', 'r') as file:
        testJob = file.read()
    optimize_resume(AGG_PATH, testJob, OUTPUT_PATH)

if __name__ == "__main__":
    main()

#TypeError: object str can't be used in 'await' expression so fucking picky