import re

#testMultiple = [[1,2,3,4], [2,3,4,5], [6,7,1,4], [1,2,0,4,5], [3,2,0,4,1], [5,1,0]]

def read_and_split_projects(projectsPath):
    """Helper function to read projects file and split by delimiter"""
    with open(projectsPath, 'r') as file:
        return file.read().split("핧")

def assembleProject(project, projDex):
    answers = []  # Initialize the answers list
    project = re.split(r'\[.*?\]', project)
    project = [p[1:-1] for p in project if p != ""] #critical bug the list has more than 9
    for idx in projDex:
        try:
            answers.append(project[int(idx)])
        except IndexError:
            pass
    retString = "highlights:\n"
    for a in answers:
        if a != "":
            retString += f'\t\t\t\t- "{a}"\n'
    return retString

