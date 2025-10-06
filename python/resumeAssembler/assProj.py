import re
testMultiple = [[1,2,3,4], [2,3,4,5], [6,7,1,4], [1,2,0,4,5], [3,2,0,4,1], [5,1,0]]
#testPath = "../../tests/harmonizer.txt"
outputPath = "../../tempProj.yaml"
aggPath = "../../aggregates.txt"
answerPath = "../../boilderPlate.yaml"

def assembleAllProjects(projectsPath, recomsList):
    assList = []
    with open(projectsPath, 'r') as file:
        projects = file.read().split("핧")
        for i in range(len(recomsList)):
            assList.append(assembleProject(projects[i], recomsList[i]))
    with open(answerPath, 'r') as file:
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

assembleAllProjects(aggPath, testMultiple)
