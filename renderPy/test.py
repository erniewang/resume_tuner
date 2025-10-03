import sys
import subprocess
res = subprocess.run(["rendercv", "render", "renderPy/resume_CV.yaml"]) 
print(res.stdout) #1
sys.stdout.flush()



