from flask import Flask
from routes.home import home
from routes.products import products
from routes.admin import admin

app = Flask(__name__)

app.register_blueprint(home)

app.register_blueprint(admin, url_prefix= "/admin")

app.register_blueprint(products)