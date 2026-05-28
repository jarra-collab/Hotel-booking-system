#!/bin/bash

echo "Starting backend..."
cd backend
source venv/bin/activate
python app.py &

echo "Starting frontend..."
cd ../frontend
npm run dev &