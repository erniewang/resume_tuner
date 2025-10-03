from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

with open(file_path, 'r') as file:
    content = file.read()

client = OpenAI()

result = client.responses.create(
    model="gpt-5-nano",
    input="Write a haiku about code.",
    reasoning={ "effort": "low" },
    text={ "verbosity": "low" },
)

print(result.output_text)