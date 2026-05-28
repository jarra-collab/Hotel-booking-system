from flask import Flask
from config import Config
from extensions import db, jwt, cors, migrate

from routes.auth_routes import auth_bp
from routes.hotel_routes import hotel_bp
from routes.room_routes import room_bp
from routes.booking_routes import booking_bp


def create_app():
    app = Flask(__name__)

    # Load config (DB, JWT secrets, etc.)
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(app)

    # Register Blueprints WITH PREFIXS (VERY IMPORTANT)
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(hotel_bp, url_prefix="/api/hotels")
    app.register_blueprint(room_bp, url_prefix="/api/rooms")
    app.register_blueprint(booking_bp, url_prefix="/api/bookings")

    # Create database tables
    with app.app_context():
        db.create_all()

    return app


app = create_app()


# Home route (API test route)
@app.route("/")
def home():
    return {"message": "Hotel Booking API running"}


# Run server
if __name__ == "__main__":
    app.run(debug=True, port=5000)