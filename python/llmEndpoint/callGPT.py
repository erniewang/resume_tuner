from openai import OpenAI
from dotenv import load_dotenv
import os
import json

load_dotenv()

# Get the directory where this file lives
_current_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_current_dir, 'prompt.txt'), 'r') as file:
    prompt = file.read()

client = OpenAI()

def askChat(proj, jobDesc):
    result = client.responses.create(
        model="gpt-5-nano",
        input=prompt + proj + "\n Job Description:" + jobDesc,
        reasoning={ "effort": "medium" },
        text={ "verbosity": "low" },
    )
    #print(json.dumps(result.model_dump(), indent=2))
    print(f"\nTotal tokens used: {result.usage.total_tokens}")
    return result.output_text
    
if __name__ == "__main__":
    with open('../tests/harmonizer.txt', 'r') as file:
        testProject = file.read()
    with open('../jobtests/frontend.txt', 'r') as file:
        testJob = file.read()
    askChat(testProject, testJob)
