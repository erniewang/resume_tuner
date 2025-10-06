test1 = [1,6,3,7]
test2 = [2,3,4,5]
test3 = [10,2,3,5]

testPath = "../../tests/harmonizer.txt"
outputPath = "../../tempProj.txt"

def assembleProject(projectPath, projDex):
    answers = []
    try:
        with open(projectPath, 'r') as file:
            for line in file:
                try:
                    if int(line[1]) in projDex:
                        answers.append(line.strip()[4:])
                except IndexError as e:
                    pass
    except FileNotFoundError: 
        print(f"'{filename}' not found")
    with open(outputPath, 'w') as file:
        file.write("highlights:\n")
        for a in answers:
            file.write(f'\t- "{a}"\n')

assembleProject(testPath, test1)

