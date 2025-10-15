from openai import OpenAI
from dotenv import load_dotenv
import json

load_dotenv()

client = OpenAI()

def askChat(proj, jobDesc, prompt_file):
    # Read prompt from file
    with open(prompt_file, 'r') as file:
        prompt = file.read()
    
    result = client.responses.create(
        model="gpt-5-nano",
        input=prompt + proj + "\n Job Description:" + jobDesc,
        reasoning={ "effort": "low" },
        text={ "verbosity": "low" },
    )
    #print(json.dumps(result.model_dump(), indent=2))
    print(f"\nTotal tokens used: {result.usage.total_tokens}")
    return result.output_text