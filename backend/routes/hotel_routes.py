from flask import Blueprint, request, jsonify

hotel_bp = Blueprint("hotel", __name__)

hotels = [
    {
        "id": 1,
        "name": "Serena Hotel",
        "location": "Nairobi"
    },
    {
        "id": 2,
        "name": "Hilton Hotel",
        "location": "City Center"
    }
]

@hotel_bp.route("/", methods=["GET"])
def get_hotels():
    return jsonify(hotels)

@hotel_bp.route("/", methods=["POST"])
def add_hotel():
    data = request.json
    hotels.append(data)
    return jsonify({"message": "Hotel added"})