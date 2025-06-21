from macroblaster.env import load_env_vars
load_env_vars()

from flask import Flask, render_template, request
from flask_migrate import Migrate

from datetime import datetime

from macroblaster.models import db, PageVariant, Traffic
from macroblaster.routes_cookies import cooks
from macroblaster.routes_main import main
from macroblaster.routes_admin import admin
from macroblaster.utils import generate_csrf_token


def create_app():
    app = Flask(__name__)
    app.config.from_object("macroblaster.config.DevConfig")
    app.jinja_env.globals.update({
        'csrf_token': generate_csrf_token,
    })

    db.init_app(app)
    Migrate(app, db)

    for bp in (cooks, main, admin):
        app.register_blueprint(bp)

    @app.context_processor
    def inject_globals():

        return {
            'cookie_accepted': request.cookies.get('cookie_accepted'),
            'cookie_rejected': request.cookies.get('cookie_rejected'),
            'message_viewed_closed': request.cookies.get('message_viewed_closed'),
            'current_year': datetime.now().year,
        }

    def page_not_found(error):
        return render_template('page404.html'), 404
    app.register_error_handler(404, page_not_found)

    with app.app_context():
        print("Tables:", db.metadata.tables.keys())

    return app