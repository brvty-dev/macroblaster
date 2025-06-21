import os


class BaseConfig:
    '''
    Base config
    '''
    IP = os.environ.get("IP", "0.0.0.0")
    PORT = int(os.environ.get("PORT", 5000))
    SECRET_KEY = os.environ.get("SECRET_KEY", "ger_orf_my_app")
    SQLALCHEMY_TRACK_MODIFICATIONS = os.environ.get("SQLALCHEMY_TRACK_MODIFICATIONS", "False").lower() == "true"
    DASHBOARD_PASSWORD = os.environ.get("DASHBOARD_PASSWORD", "Stato123")


class DevConfig(BaseConfig):
    '''
    Development config
    '''
    DEBUG = os.environ.get("DEBUG", "True").lower() == "true"
    DEVELOPMENT = os.environ.get("DEVELOPMENT", "True").lower() == "true"
    SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI", "sqlite:///ab_test.db")


class ProdConfig(BaseConfig):
    '''
    Production config
    '''
    DEBUG = os.environ.get("DEBUG", "False").lower() == "true"
    DEVELOPMENT = os.environ.get("DEVELOPMENT", "False").lower() == "true"
    SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI", "postgresql://user:password@host/dbname")