from flask import Blueprint, session, request, url_for, make_response, redirect, abort
from macroblaster.utils import generate_csrf_token


cooks = Blueprint("cooks", __name__)


@cooks.before_request
def add_csrf_token():
    session['_csrf_token'] = generate_csrf_token()


@cooks.context_processor
def inject_cookie_status():
    cookie_accepted = request.cookies.get('cookie_accepted')
    cookie_rejected = request.cookies.get('cookie_rejected')
    message_viewed_closed = request.cookies.get('message_viewed_closed')
    return dict(cookie_accepted=cookie_accepted, cookie_rejected=cookie_rejected, message_viewed_closed=message_viewed_closed)


@cooks.route('/accept-cookies')
def accept_cookies():
    referrer = request.referrer or url_for('main.index')  # Fallback to index
    resp = make_response(redirect(referrer))
    resp.set_cookie('cookie_accepted', 'true', max_age=365*24*60*60)
    resp.set_cookie('cookie_rejected', '', expires=0)
    return resp


@cooks.route('/reject-cookies')
def reject_cookies():
    resp = make_response(redirect(request.referrer))
    resp.set_cookie('cookie_accepted', '', expires=0)  # Remove the cookie_accepted cookie
    resp.set_cookie('cookie_rejected', 'true', max_age=365*24*60*60)  # 1 year
    return resp


@cooks.route('/hide-cookies')
def hide_cookies():
    resp = make_response(redirect(request.referrer))
    resp.set_cookie('message_viewed_closed', 'true', max_age=365*24*60*60)
    return resp


@cooks.route('/update_cookie_preference', methods=['POST'])
def update_cookie_preference():
    csrf_token = request.form.get('csrf_token')
    if not csrf_token or csrf_token != session.get('_csrf_token'):
        abort(403)  # Forbidden if CSRF token is missing or incorrect

    cookie_preference = request.form.get('cookie_preference')
    resp = make_response(redirect(request.referrer or url_for('main.index')))

    if cookie_preference == 'on':
        resp.set_cookie('cookie_accepted', 'true', max_age=365*24*60*60)
        resp.set_cookie('cookie_rejected', '', expires=0)
    else:
        resp.set_cookie('cookie_accepted', '', expires=0)
        resp.set_cookie('cookie_rejected', 'true', max_age=365*24*60*60)

    return resp