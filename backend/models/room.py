from extensions import db

class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hotel_id = db.Column(db.Integer, db.ForeignKey("hotel.id"))
    room_type = db.Column(db.String(100))
    price = db.Column(db.Float)
    available = db.Column(db.Boolean, default=True)