test1 = [1,6,3,7]
test2 = [2,3,4,5]
test3 = [10,2,3,5]

testMultiple = [[1,2,3,4], [2,3,4,5], [6,7,1,4], [1,2,0,4,5], [3,2,0,4,1], [5,1,0], [3,0,4,1]]

testPath = "../../tests/harmonizer.txt"
outputPath = "../../tempProj.txt"

aggPath = "../../aggregates.txt"

def assembleAllProjects(projectsPath, recomsList):
    with open(projectsPath, 'r') as file:
        projects = file.read().split("핧")
        print(len(projects))
        for i in range(len(recomsList)):
            assembled = assembleProject(projects[i], recomsList[i])

def assembleProject(project, projDex):
    answers = []
    for line in project:
        try:
            if int(line[1]) in projDex:
                answers.append(line.strip()[4:])
        except IndexError as e:
            pass
    with open(outputPath, 'w') as file:
        file.write("highlights:\n")
        for a in answers:
            file.write(f'\t- "{a}"\n')

assembleAllProjects(aggPath, testMultiple)
