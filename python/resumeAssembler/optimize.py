import sys
sys.path.append('../llmEndpoint')
from assProj import assembleAllProjects, read_and_split_projects
from callGPT import askChat
import ast

projPath = "../../aggregates.txt"

def optimize_resume(projPath, jobDesc):
    optimizedIndicies = []
    rawProjects = read_and_split_projects(projPath)
    for p in rawProjects:
        gptChoices = askChat(p, jobDesc)
        print(gptChoices)
    return

def main():
    with open('../../jobtests/frontend.txt', 'r') as file:
        testJob = file.read()
    optimize_resume(projPath, testJob)

if __name__ == "__main__":
    main()

#TypeError: object str can't be used in 'await' expression so fucking picky