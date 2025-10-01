# Recipe Manager

A full-stack web application for managing recipes, built with FastAPI (backend) and React (frontend).

## Features

- Add new recipes with ingredients and instructions (Create)
- Search recipes by name or ingredients (Read)
- Filter by meal type (breakfast, lunch, dinner, snack, dessert)
- Filter by cuisine (Italian, Chinese, Mexican, Indian, etc.)
- Edit existing recipes (Update)
- Delete recipes (Delete)
- Web interface

## Prerequisites

Before running this application, make sure you have:

- **Python** 
- **Node.js +** 
- **npm** (comes with Node.js)

## Installation

### 1. Clone

```bash
git clone https://github.com/halayaghi-git/recipe_manager.git
cd recipe_manager

```

### 2. Backend 

```bash
# Create virtual environment (first time only)
python -m venv venv

# Activate virtual environment
source venv/bin/activate  
# Or: venv\Scripts\activate

# Install backend dependencies
pip install fastapi uvicorn python-multipart sqlalchemy
```

### 3. Frontend 

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


## Technologies Used

- **Backend**: FastAPI, SQLAlchemy, SQLite
- **Frontend**: React, Axios, CSS
- **Database**: SQLite (file-based)

---

**Happy cooking!**