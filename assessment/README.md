# VectorShift Assessment

## Running the app

### Clone this repository 

```bash
git clone git@github.com:sanam2405/vectorshift.git
cd vectorshift
```

### Navigate to the assessment directory 

```bash
cd assessment
```

### Prerequisites 

```bash
brew install redis-server
pip install uvicorn
```

### Dependencies

- [Redis](https://redis.io/)

- [FastAPI](https://fastapi.tiangolo.com/)

- [Uvicorn](https://www.uvicorn.org/)

### Starting a redis server

```bash
redis-server --port 6380
```

### Running the backend

```bash
cd backend 
pip install -r requirements.txt
uvicorn main:app --reload
```

### Running the frontend

```bash
cd frontend
npm install
npm start
```

## The frontend should be live at `http://localhost:3000/`