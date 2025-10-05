# Recipe Manager

A web application for managing recipes, built with FastAPI (backend) and React (frontend).

## Features
- CRUD Operations:
    - Add new recipes with ingredients and instructions (Create)
    - Read existing recipes (Read)
    - Edit existing recipes (Update)
    - Delete recipes (Delete)
- Search Functionality: 
    - Search recipes by title, ingredients, or instructions
- Filter Functionality:
    - Filter by meal type (breakfast, lunch, dinner, snack, dessert)
    - Filter by cuisine (Italian, Chinese, Mexican, Indian, etc.)
- SQLite Database: Stores recipes persistently with SQLAlchemy ORM
- Interactive API Docs: Automatic OpenAPI/Swagger documentation for backend endpoints
- Comprehensive Tests: 97% test coverage with 14 focused backend tests
- Web Interface: User-friendly React frontend for browsing, searching, filtering, adding, editing, and deleting recipes.

## Prerequisites
Before starting, ensure you have the following installed on your system:
- **Python 3+**
- **Node.js 18+** (includes npm)
  - Download from: https://nodejs.org/
  - Verify install
- **npm** (comes with Node.js)

## Technologies Used
- **Framework**: FastAPI 0.117.1
- **Database**: SQLite with SQLAlchemy 2.0.43
- **Validation**: Pydantic 2.11.9
- **Server**: Uvicorn 0.37.0
- **Testing**: Pytest with coverage reporting

## Installation

### 1. Clone

```bash
git clone https://github.com/halayaghi-git/recipe_manager.git
cd recipe_manager

```
### 2. Setup Environment

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install frontend dependencies
npm install

# Go back to project root
cd ..
```

## How to Run the Application

You need to run **both** the backend and frontend servers simultaneously.

### Terminal 1 - Start Backend Server

```bash
# Navigate to project root
cd recipe_manager

# Activate virtual environment
source venv/bin/activate

# Start backend server (KEEP RUNNING)
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Terminal 2 - Start Frontend Server

Open a **new terminal window** and run:

```bash
# Navigate to frontend directory
cd recipe_manager/frontend

# Start React development server (KEEP RUNNING)
npm start
```

## Using the Application

1. **Open your browser** and go to: http://localhost:3000
2. **Add recipes** using the "Add Recipe" button
3. **Search recipes** using the search bar
4. **Filter recipes** by meal type or cuisine using the dropdown filters
5. **Edit recipes** by clicking on any recipe card
6. **Delete recipes** using the delete button on recipe cards


When the backend is running, you can view the interactive API documentation at:
**http://localhost:8000/docs**

## Stopping the Application

To stop the servers:
- Press `Ctrl+C` in each terminal window
- Or run: `pkill -f "uvicorn"` and `pkill -f "npm start"`

### Project Structure
```
recipe_manager/
├── main.py              # FastAPI application & routes
├── models.py            # SQLAlchemy database models
├── schemas.py           # Pydantic data schemas
├── crud.py              # Database operations
├── database.py          # Database configuration
├── requirements.txt     # Project dependencies
├── requirements-test.txt # Test dependencies
├── run_tests.sh         # Test runner script
├── pytest.ini           # Test configuration
├── README.md            # Project explanation and installation instructions
└── tests/               # 97% coverage
    ├── conftest.py      # Test fixtures & config
    ├── test_api.py      # API endpoint tests (8 tests)
    ├── test_crud.py     # Database operation tests (5 tests)
    └── test_models.py   # Model tests (1 test)
```
### Testing Strategy

**14 comprehensive tests** achieve **97% code coverage**:

- **API Tests (8)**: Complete CRUD lifecycle, error handling, search/filter
- **CRUD Tests (5)**: Database operations, pagination, edge cases  
- **Model Tests (1)**: SQLAlchemy model validation

### Installing Test Dependencies

To install the testing dependencies, run (in the project root):

```bash
pip install -r requirements-test.txt

# Running specific test categories
PYTHONPATH=. pytest tests/test_api.py -v  
PYTHONPATH=. pytest tests/test_crud.py -v  
PYTHONPATH=. pytest tests/test_models.py -v

# Running all tests with coverage reporting
PYTHONPATH=. pytest --cov=. --cov-report=term-missing -v
```

### Dependencies

**Project (`requirements.txt`):**
```
fastapi==0.117.1
uvicorn[standard]==0.37.0
SQLAlchemy==2.0.43
pydantic==2.11.9
```

**Testing (`requirements-test.txt`):**
```
pytest==7.4.0
pytest-cov==4.1.0
httpx==0.24.1
pytest-asyncio==0.21.1
```
---

**Happy cooking!**