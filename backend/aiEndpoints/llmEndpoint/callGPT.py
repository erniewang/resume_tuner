from openai import OpenAI
from dotenv import load_dotenv
import os
import sys
import json

# Add backend to path so we can import config
sys.path.insert(0, str(os.path.join(os.path.dirname(__file__), '..', '..')))
from config import PROMPT_FILE, PROJECT_TESTS_DIR, JOB_TESTS_DIR

load_dotenv()

# Use config path - always correct
with open(PROMPT_FILE, 'r') as file:
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
    with open(PROJECT_TESTS_DIR / 'harmonizer.txt', 'r') as file:
        testProject = file.read()
    with open(JOB_TESTS_DIR / 'frontend.txt', 'r') as file:
        testJob = file.read()
    askChat(testProject, testJob)
