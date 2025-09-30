# Recipe Manager Frontend

A React frontend for the Recipe Manager application.

## Prerequisites (Install These First)

- **Node.js 14+**: Download from [nodejs.org](https://nodejs.org/)
- **Python 3.8+**: For the backend server
- **npm**: Comes with Node.js

## How to Run the Application

### Step 1: Install Dependencies (First Time Only)

```bash
# Navigate to frontend directory
cd /frontend

# Install React dependencies
npm install
```

### Step 2: Start Backend Server (Terminal 1)

```bash
# Navigate to project root
cd /recipe_manager

# Activate Python virtual environment
source venv/bin/activate

# Install backend dependencies (first time only)
pip install fastapi uvicorn python-multipart sqlalchemy

# Start backend server (KEEP THIS RUNNING)
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Backend will be running at: http://localhost:8000**

### Step 3: Start Frontend Server (Terminal 2)

Open a **NEW terminal window** and run:

```bash
# Navigate to frontend directory
cd /frontend

# Start React app (KEEP THIS RUNNING)
npm start
```

**Frontend will be running at: http://localhost:3000**

## Important Notes

- **Both servers must run simultaneously** - don't close either terminal
- **Don't press Ctrl+C** in either terminal while using the app
- The frontend connects to the backend to fetch recipe data
- If you see "Failed to fetch recipes", make sure the backend is running

## Quick Start Commands

```bash
# Terminal 1 - Backend
cd /recipe_manager
source venv/bin/activate
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Terminal 2 - Frontend  
cd /frontend
npm start
```

## Accessing the Application

Open your browser and go to: **http://localhost:3000**

You should see the Recipe Manager with options to:
- View all recipes
- Search recipes
- Filter by meal type and cuisine
- Add new recipes
- Edit existing recipes

