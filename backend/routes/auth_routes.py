from flask import Blueprint, request, jsonify

auth_bp = Blueprint("auth", __name__)

# TEMP storage (replace later with database)
users = []

# REGISTER
@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json

    # simple validation
    if not data.get("email") or not data.get("password"):
        return jsonify({"message": "Missing fields"}), 400

    # check if user exists
    for u in users:
        if u["email"] == data["email"]:
            return jsonify({"message": "User already exists"}), 409

    user = {
        "id": len(users) + 1,
        "name": data.get("name"),
        "email": data["email"],
        "password": data["password"]  # (⚠️ should be hashed later)
    }

    users.append(user)

    return jsonify({
        "message": "User registered successfully",
        "user": {
            "id": user["id"],
            "name": user["name"],
            "email": user["email"]
        }
    }), 201


# LOGIN
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json

    for user in users:
        if user["email"] == data["email"] and user["password"] == data["password"]:
            return jsonify({
                "message": "Login successful",
                "user": {
                    "id": user["id"],
                    "name": user["name"],
                    "email": user["email"]
                },
                "token": "fake-jwt-token"
            })

    return jsonify({"message": "Invalid credentials"}), 401