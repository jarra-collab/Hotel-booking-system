# Hotel Booking System

A full-stack Hotel Booking System built with **Flask (Backend)** and **React + Vite (Frontend)**.
The application allows users to browse hotels, view rooms, make bookings, and manage reservations, while admins can manage hotels, rooms, and bookings.

---

# Features

## User Features

* User registration and login with JWT authentication
* Browse available hotels
* View hotel details and room availability
* Book hotel rooms
* View personal booking history
* Responsive modern UI

## Admin Features

* Add, update, and delete hotels
* Manage rooms and pricing
* View all bookings
* Dashboard for hotel management

---

# Tech Stack

## Backend

* Flask
* Flask-JWT-Extended
* Flask-SQLAlchemy
* Flask-CORS
* SQLite
* Python Dotenv

## Frontend

* React
* Vite
* React Router DOM
* Axios
* Context API
* CSS

---

# Project Structure

```bash
hotel-booking-system/
│
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── extensions.py
│   ├── requirements.txt
│   ├── .env
│   │
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── middleware/
│   └── database/
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── .env
│   └── src/
│
├── docs/
├── scripts/
├── README.md
└── LICENSE
```

---

# Installation Guide

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/hotel-booking-system.git
cd hotel-booking-system
```

---

# Backend Setup

## 1. Navigate to Backend

```bash
cd backend
```

## 2. Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux/Mac

```bash
python3 -m venv venv
source venv/bin/activate
```

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

## 4. Configure Environment Variables

Create a `.env` file inside the backend directory:

```env
SECRET_KEY=your_secret_key
JWT_SECRET_KEY=your_jwt_secret
DATABASE_URL=sqlite:///database/hotel.db
```

## 5. Run Backend Server

```bash
python app.py
```

Backend will run on:

```bash
http://127.0.0.1:5000
```

---

# Frontend Setup

## 1. Navigate to Frontend

```bash
cd frontend
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Configure Frontend Environment

Create a `.env` file inside frontend:

```env
VITE_API_URL=http://127.0.0.1:5000
```

## 4. Run Frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

# API Endpoints

## Authentication

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | User login        |

## Hotels

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| GET    | `/api/hotels`      | Get all hotels    |
| GET    | `/api/hotels/<id>` | Get hotel details |
| POST   | `/api/hotels`      | Add hotel (Admin) |

## Rooms

| Method | Endpoint                | Description      |
| ------ | ----------------------- | ---------------- |
| GET    | `/api/rooms/<hotel_id>` | Get hotel rooms  |
| POST   | `/api/rooms`            | Add room (Admin) |

## Bookings

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/bookings`      | Create booking    |
| GET    | `/api/bookings/my`   | Get user bookings |
| DELETE | `/api/bookings/<id>` | Cancel booking    |

---

# Database Models

## User

* id
* username
* email
* password
* role

## Hotel

* id
* name
* location
* description
* image_url

## Room

* id
* hotel_id
* room_type
* price
* capacity
* availability

## Booking

* id
* user_id
* room_id
* check_in
* check_out
* total_price

---

# Screenshots

Add screenshots inside the `docs/` folder and reference them here.

Example:

```markdown
![Home Page](docs/home.png)
```

---

# Future Improvements

* Online payment integration
* Hotel ratings and reviews
* Email notifications
* Room filtering and search
* Booking analytics dashboard
* Docker deployment
* CI/CD integration

---

# Scripts

## Seed Database

```bash
python scripts/seed_db.py
```

## Run Development Servers

```bash
bash scripts/run_dev.sh
```

---

# Author

Developed by Abdiaziz

---

# License

This project is licensed under the MIT License.
