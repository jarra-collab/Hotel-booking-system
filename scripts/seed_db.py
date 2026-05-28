from backend.app import create_app
from backend.extensions import db

from backend.models.hotel import Hotel
from backend.models.room import Room
from backend.models.user import User
from backend.models.booking import Booking

app = create_app()

def seed_data():
    with app.app_context():

        print("🧹 Clearing old data...")
        db.drop_all()
        db.create_all()

        print("🏨 Adding hotels...")

        hotel1 = Hotel(
            name="Grand Palace Hotel",
            location="Nairobi",
            description="Luxury hotel in city center"
        )

        hotel2 = Hotel(
            name="Sea View Resort",
            location="Mombasa",
            description="Beautiful beach resort"
        )

        db.session.add_all([hotel1, hotel2])
        db.session.commit()

        print("🛏️ Adding rooms...")

        room1 = Room(
            hotel_id=hotel1.id,
            room_type="Single",
            price=50,
            available=True
        )

        room2 = Room(
            hotel_id=hotel1.id,
            room_type="Double",
            price=90,
            available=True
        )

        room3 = Room(
            hotel_id=hotel2.id,
            room_type="Suite",
            price=150,
            available=True
        )

        db.session.add_all([room1, room2, room3])
        db.session.commit()

        print("👤 Adding users...")

        user1 = User(
            name="Admin User",
            email="admin@test.com",
            password="123456",
            role="admin"
        )

        user2 = User(
            name="John Doe",
            email="john@test.com",
            password="123456",
            role="customer"
        )

        db.session.add_all([user1, user2])
        db.session.commit()

        print("📅 Adding bookings...")

        booking1 = Booking(
            user_id=user2.id,
            room_id=room1.id,
            check_in="2026-06-01",
            check_out="2026-06-05",
            status="confirmed"
        )

        db.session.add(booking1)
        db.session.commit()

        print("✅ Database seeded successfully!")

if __name__ == "__main__":
    seed_data()