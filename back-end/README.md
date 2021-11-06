## Sailbot Web-app Backend

#### To run:
1. Install all required dependencies, so run ```pipenv install -r requirements.txt ```
2. Start up a python environment shell: ``` pipenv shell ```
3. Run the backend server for development purposes: ```uvicorn main:app  --reload --host 0.0.0.0 --port 8000```