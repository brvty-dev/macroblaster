from flask import Blueprint, render_template, send_from_directory, session, request, url_for, make_response, redirect, abort, jsonify, Response, current_app
from macroblaster.models import db, Traffic, PageVariant
from sqlalchemy import func
import secrets
import json
import random
import uuid
import csv
from io import StringIO


main = Blueprint("main", __name__)


# PAGES


@main.route('/')
def homepage():
    if 'landing_page' in session:
        return redirect(session['landing_page'])

    user_id = str(uuid.uuid4())
    session['user_id'] = user_id

    landing_page = '/index_b' if uuid.uuid4().int % 2 == 0 else '/index'

    new_entry = Traffic(user_id=user_id, landing_page=landing_page)
    db.session.add(new_entry)
    db.session.commit()

    session['landing_page'] = landing_page

    return redirect(landing_page)


@main.route('/index')
def index():
    page_name = 'index'
    page_key = f'variant_{page_name}'

    if page_key not in session:
        session[page_key] = random.choice(['A', 'A'])

    variant = session[page_key]
    user_id = session.get('user_id')

    if user_id:
        traffic = Traffic.query.filter_by(user_id=user_id).first()
        if traffic:
            existing_variant = PageVariant.query.filter_by(
                traffic_id=traffic.id,
                page=page_name,
                variant=variant
            ).first()

            if not existing_variant:
                view = PageVariant(
                    traffic_id=traffic.id,
                    page=page_name,
                    variant=variant,
                    converted=False
                )
                db.session.add(view)
                db.session.commit()

    return render_template("index.html", variant=session[page_key])


@main.route('/index_b')
def index_b():
    page_name = 'index_b'
    page_key = f'variant_{page_name}'

    if page_key not in session:
        session[page_key] = random.choice(['B', 'B'])

    variant = session[page_key]
    user_id = session.get('user_id')

    if user_id:
        traffic = Traffic.query.filter_by(user_id=user_id).first()
        if traffic:
            existing_variant = PageVariant.query.filter_by(
                traffic_id=traffic.id,
                page=page_name,
                variant=variant
            ).first()

            if not existing_variant:
                view = PageVariant(
                    traffic_id=traffic.id,
                    page=page_name,
                    variant=variant,
                    converted=False
                )
                db.session.add(view)
                db.session.commit()
                
    return render_template("index_b.html", variant=session[page_key])


@main.route("/guides")
def guides():
    blog_pages = ['macros', 'warm', 'aerobics', 'resistance', 'injury']

    variants = {}
    for page in blog_pages:
        session_key = f'variant_{page}'
        if session_key not in session:
            session[session_key] = random.choice(['A', 'B'])
        variants[session_key] = session[session_key]

    return render_template('guides.html', **variants)


@main.route("/what_are_macros")
def what_are_macros():
    page_name = 'macros'
    page_key = f'variant_{page_name}'

    if page_key not in session:
        session[page_key] = random.choice(['A', 'B'])

    variant = session[page_key]
    user_id = session.get('user_id')

    if user_id:
        traffic = Traffic.query.filter_by(user_id=user_id).first()
        if traffic:
            existing_variant = PageVariant.query.filter_by(
                traffic_id=traffic.id,
                page=page_name,
                variant=variant
            ).first()

            if not existing_variant:
                view = PageVariant(
                    traffic_id=traffic.id,
                    page=page_name,
                    variant=variant,
                    converted=False
                )
                db.session.add(view)
                db.session.commit()

    return render_template('what_are_macros.html', variant=session[page_key])


@main.route("/warming_up")
def warming_up():
    page_name = 'warm'
    page_key = f'variant_{page_name}'

    if page_key not in session:
        session[page_key] = random.choice(['A', 'B'])

    variant = session[page_key]
    user_id = session.get('user_id')

    if user_id:
        traffic = Traffic.query.filter_by(user_id=user_id).first()
        if traffic:
            existing_variant = PageVariant.query.filter_by(
                traffic_id=traffic.id,
                page=page_name,
                variant=variant
            ).first()

            if not existing_variant:
                view = PageVariant(
                    traffic_id=traffic.id,
                    page=page_name,
                    variant=variant,
                    converted=False
                )
                db.session.add(view)
                db.session.commit()

    return render_template('warming_up.html', variant=session[page_key])


@main.route("/aerobic_exercise")
def aerobic_exercise():
    page_name = 'aerobics'
    page_key = f'variant_{page_name}'

    if page_key not in session:
        session[page_key] = random.choice(['A', 'B'])

    variant = session[page_key]
    user_id = session.get('user_id')

    if user_id:
        traffic = Traffic.query.filter_by(user_id=user_id).first()
        if traffic:
            existing_variant = PageVariant.query.filter_by(
                traffic_id=traffic.id,
                page=page_name,
                variant=variant
            ).first()

            if not existing_variant:
                view = PageVariant(
                    traffic_id=traffic.id,
                    page=page_name,
                    variant=variant,
                    converted=False
                )
                db.session.add(view)
                db.session.commit()

    return render_template('aerobic_exercise.html', variant=session[page_key])


@main.route("/resistance_training")
def resistance_training():
    page_name = 'resistance'
    page_key = f'variant_{page_name}'

    if page_key not in session:
        session[page_key] = random.choice(['A', 'B'])

    variant = session[page_key]
    user_id = session.get('user_id')

    if user_id:
        traffic = Traffic.query.filter_by(user_id=user_id).first()
        if traffic:
            existing_variant = PageVariant.query.filter_by(
                traffic_id=traffic.id,
                page=page_name,
                variant=variant
            ).first()

            if not existing_variant:
                view = PageVariant(
                    traffic_id=traffic.id,
                    page=page_name,
                    variant=variant,
                    converted=False
                )
                db.session.add(view)
                db.session.commit()

    return render_template('resistance_training.html', variant=session[page_key])


@main.route("/injury_recovery")
def injury_recovery():
    page_name = 'injury'
    page_key = f'variant_{page_name}'

    if page_key not in session:
        session[page_key] = random.choice(['A', 'B'])

    variant = session[page_key]
    user_id = session.get('user_id')

    if user_id:
        traffic = Traffic.query.filter_by(user_id=user_id).first()
        if traffic:
            existing_variant = PageVariant.query.filter_by(
                traffic_id=traffic.id,
                page=page_name,
                variant=variant
            ).first()

            if not existing_variant:
                view = PageVariant(
                    traffic_id=traffic.id,
                    page=page_name,
                    variant=variant,
                    converted=False
                )
                db.session.add(view)
                db.session.commit()

    return render_template('injury_recovery.html', variant=session[page_key])


@main.route("/wellness_directory")
def wellness_directory():
    with open("macroblaster/data/directory.json", "r") as json_data:
        records = json.load(json_data)
    return render_template("wellness_directory.html", records=records)


@main.route("/wellness_directory_country/<country_name>")
def wellness_directory_country(country_name):
    with open("macroblaster/data/directory.json", "r") as json_data:
        records = json.load(json_data)
    filtered = [r for r in records if r['country'] == country_name]
    return render_template("wellness_directory_country.html", country=country_name, records=filtered)


@main.route("/faqs")
def faqs():
    return render_template("faqs.html")


@main.route("/jobs_board")
def jobs_board():
    return render_template("jobs_board.html")


@main.route("/press_releases")
def press_releases():
    return render_template("press_releases.html")


@main.route("/user_agreement")
def user_agreement():
    return render_template("user_agreement.html")


@main.route("/privacy_policy")
def privacy_policy():
    return render_template("privacy_policy.html")


@main.route('/sitemap.xml')
def serve_sitemap():
    return send_from_directory('static', 'sitemap.xml')