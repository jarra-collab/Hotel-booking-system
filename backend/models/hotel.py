from extensions import db

class Hotel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150))
    location = db.Column(db.String(150))
    description = db.Column(db.Text(500))
    rating = db.Column(db.Float)