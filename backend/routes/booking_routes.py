from flask import Blueprint, request, jsonify
from services.booking_service import create_booking, get_all_bookings

booking_bp = Blueprint("booking", __name__)

# GET all bookings
@booking_bp.route("/", methods=["GET"])
def get_bookings():
    bookings = get_all_bookings()

    return jsonify([
        {
            "id": b.id,
            "user_id": b.user_id,
            "room_id": b.room_id,
            "status": b.status
        }
        for b in bookings
    ])

# CREATE booking
@booking_bp.route("/", methods=["POST"])
def book():
    data = request.json

    booking = create_booking(
        data["user_id"],
        data["room_id"],
        data["check_in"],
        data["check_out"]
    )

    return jsonify({
        "message": "Booking created",
        "id": booking.id
    })