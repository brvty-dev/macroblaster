from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone


db = SQLAlchemy()


class Traffic(db.Model):
    """
    For local storage
    """
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String(64), unique=True, nullable=False)
    landing_page = db.Column(db.String(7), nullable=False)
    timestamp = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    converted = db.Column(db.Boolean, default=False)
    page_variants = db.relationship('PageVariant', backref='traffic', lazy=True)


class PageVariant(db.Model):
    """
    For page headings
    """
    id = db.Column(db.Integer, primary_key=True)
    traffic_id = db.Column(db.Integer, db.ForeignKey('traffic.id'))
    page = db.Column(db.String(100))
    variant = db.Column(db.String(10))
    converted = db.Column(db.Boolean, default=False)