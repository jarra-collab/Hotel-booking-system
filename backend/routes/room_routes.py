from flask import Blueprint, request, jsonify

room_bp = Blueprint("room", __name__)

rooms = []

# GET all rooms
@room_bp.route("/", methods=["GET"])
def get_rooms():
    return jsonify(rooms)

# CREATE room
@room_bp.route("/", methods=["POST"])
def add_room():
    data = request.json
    rooms.append(data)
    return jsonify({"message": "Room added"})