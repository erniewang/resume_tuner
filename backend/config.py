from pathlib import Path

# Anchor to project root (optimize.py runs from project root)
PROJECT_ROOT = Path(__file__).parent.parent.resolve()

# Main directories
BACKEND_DIR = PROJECT_ROOT / "backend"
ELECTRON_APP_DIR = PROJECT_ROOT / "electronApp"
INPUT_DIR = PROJECT_ROOT / "input"
OUTPUT_DIR = PROJECT_ROOT / "output"
NOTES_DIR = PROJECT_ROOT / "notes"

# Backend subdirectories
AI_ENDPOINTS_DIR = BACKEND_DIR / "aiEndpoints"
RESUME_PROCESSING_DIR = BACKEND_DIR / "resumeProcessing"
RENDER_DIR = BACKEND_DIR / "render"
TEMPLATES_DIR = RENDER_DIR / "classic"
TIGHTER_TEMPLATES_DIR = RENDER_DIR / "tighterthanyourmom"

# Input subdirectories
JOB_TESTS_DIR = INPUT_DIR / "jobtests"
PROJECT_TESTS_DIR = INPUT_DIR / "tests"

# Specific files
BOILERPLATE_FILE = RESUME_PROCESSING_DIR / "boilderPlate.yaml"
AGGREGATES_FILE = INPUT_DIR / "aggregates.txt"
TEMP_PROJECT_FILE = INPUT_DIR / "tempProj.yaml"
JOB_CATALOG_FILE = JOB_TESTS_DIR / "jobCatalog.txt"
PROMPT_FILE = AI_ENDPOINTS_DIR / "prompt.txt"

# Exports for backward compatibility
AGG_PATH = str(AGGREGATES_FILE)
OUTPUT_PATH = str(TEMP_PROJECT_FILE)
ANSWER_PATH = str(BOILERPLATE_FILE)
TIGHTER_TEMPLATES_PATH = str(TIGHTER_TEMPLATES_DIR)