from flask import Blueprint, render_template, session, request, redirect, url_for, Response, current_app
from macroblaster.models import db, Traffic, PageVariant
from sqlalchemy import func
import csv
from io import StringIO


admin = Blueprint("admin", __name__)


@admin.route('/convert_landing_page', methods=['POST'])
def convert_landing_page():
    user_id = session.get('user_id')
    landing_page = session.get('landing_page')

    if not user_id:
        return "No user session found", 400

    user = Traffic.query.filter_by(user_id=user_id).first()
    if user:
        user.converted = True
        db.session.commit()
        return "Landing conversion tracked!", 200

    return "User not found", 404


@admin.route('/convert/<page>', methods=['POST'])
def convert_page(page):
    user_id = session.get('user_id')
    variant = session.get(f'variant_{page}')

    if not user_id:
        return "No user session found", 400

    traffic = Traffic.query.filter_by(user_id=user_id).first()
    if not traffic:
        return "User not found", 404

    view = PageVariant.query.filter_by(
        traffic_id=traffic.id,
        page=page,
        variant=variant
    ).first()

    if view:
        view.converted = True
        db.session.commit()
        return f"Conversion recorded for {page} variant {variant}", 200

    return "No view found to mark as converted", 404


@admin.route('/dashboard', methods=['GET', 'POST'])
def dashboard():
    if request.method == 'POST':
        if request.form.get('password') == current_app.config['DASHBOARD_PASSWORD']:
            session['authenticated'] = True
        else:
            return render_template('dashboard_login.html', error="Incorrect password")

    if not session.get('authenticated'):
        return render_template('dashboard_login.html')
    
    results = (
        db.session.query(Traffic.landing_page,
                         db.func.count(Traffic.id).label('views'),
                         db.func.count(db.case((Traffic.converted == True, 1))).label('conversions'))
        .group_by(Traffic.landing_page)
        .all()
    )

    landing_data = {
        'labels': [row.landing_page for row in results],
        'views': [row.views for row in results],
        'conversions': [row.conversions for row in results],
        'conversion_rates': [
            round((row.conversions / row.views) * 100, 2) if row.views else 0
            for row in results
        ]
    }

    variant_results = (
        db.session.query(
            PageVariant.page,
            PageVariant.variant,
            db.func.count(PageVariant.id).label('views'),
            db.func.count(db.case((PageVariant.converted == True, 1))).label('conversions')
        )
        .group_by(PageVariant.page, PageVariant.variant)
        .all()
    )

    variant_data = {}
    for row in variant_results:
        page = row.page
        if page not in variant_data:
            variant_data[page] = {'variants': [], 'views': [], 'conversions': [], 'rates': []}

        variant_data[page]['variants'].append(row.variant)
        variant_data[page]['views'].append(row.views)
        variant_data[page]['conversions'].append(row.conversions)

        rate = round((row.conversions / row.views) * 100, 2) if row.views else 0
        variant_data[page]['rates'].append(rate)


    return render_template('dashboard.html', data=landing_data, variants=variant_data)


@admin.route('/export.csv')
def export_csv():
    output = StringIO()
    writer = csv.writer(output)

    landing_results = (
        db.session.query(
            func.date(Traffic.timestamp).label('date'),
            Traffic.landing_page,
            func.count(Traffic.id).label('views'),
            func.count(func.nullif(Traffic.converted == False, True)).label('conversions')
        )
        .group_by(func.date(Traffic.timestamp), Traffic.landing_page)
        .all()
    )

    writer.writerow(['Landing Page Conversion Test'])
    writer.writerow(['Date', 'Landing Page', '','Views', 'Conversions', 'Conversion Rate (%)'])

    landing_totals = {}

    for row in landing_results:
        rate = round((row.conversions / row.views) * 100, 2) if row.views else 0
        writer.writerow([row.date, row.landing_page, '', row.views, row.conversions, rate])

        if row.landing_page not in landing_totals:
            landing_totals[row.landing_page] = {'views': 0, 'conversions': 0}

        landing_totals[row.landing_page]['views'] += row.views
        landing_totals[row.landing_page]['conversions'] += row.conversions

    # Add totals per landing page
    for landing_page, totals in landing_totals.items():
        views = totals['views']
        conversions = totals['conversions']
        rate = round((conversions / views) * 100, 2) if views else 0
        writer.writerow(['TOTAL', landing_page, '', views, conversions, rate])


    writer.writerow([])  # blank line between sections

    variant_results = (
        db.session.query(
            func.date(Traffic.timestamp).label('date'),
            PageVariant.page,
            PageVariant.variant,
            func.count(PageVariant.id).label('views'),
            func.count(db.case((PageVariant.converted == True, 1))).label('conversions')
        )
        .join(Traffic, Traffic.id == PageVariant.traffic_id)
        .group_by(func.date(Traffic.timestamp), PageVariant.page, PageVariant.variant)
        .all()
    )

    writer.writerow(['Page Share A/B Test'])
    writer.writerow(['Date', 'Blog Page', 'Heading', 'Views', 'Conversions', 'Conversion Rate (%)'])

    variant_totals = {}

    for row in variant_results:
        rate = round((row.conversions / row.views) * 100, 2) if row.views else 0
        writer.writerow([row.date, row.page, row.variant, row.views, row.conversions, rate])

        key = (row.page, row.variant)
        if key not in variant_totals:
            variant_totals[key] = {'views': 0, 'conversions': 0}

        variant_totals[key]['views'] += row.views
        variant_totals[key]['conversions'] += row.conversions

    # Add totals per blog page variant
    for (page, variant), totals in variant_totals.items():
        views = totals['views']
        conversions = totals['conversions']
        rate = round((conversions / views) * 100, 2) if views else 0
        writer.writerow(['TOTAL', page, variant, views, conversions, rate])


    response = Response(output.getvalue(), mimetype='text/csv')
    response.headers['Content-Disposition'] = 'attachment; filename=macroblaster_ab_report.csv'
    return response


@admin.route('/logout', methods=['POST'])
def logout():
    session.pop('authenticated', None)
    return redirect(url_for('main.dashboard'))


@admin.route('/reset')
def reset():
    session.pop('landing_page', None)
    session.pop('user_id', None)
    session.pop('variant_macros', None)
    session.pop('variant_warm', None)
    session.pop('variant_aerobics', None)
    session.pop('variant_resistance', None)
    session.pop('variant_injury', None)
    return "Page assignment reset. Refresh to get a new one."