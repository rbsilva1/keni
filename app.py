from flask import Flask, render_template
from routes.home import home
from routes.products import products
from routes.admin import admin
from src.db.db import db

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///projeto.db"

db.init_app(app)

with app.app_context():
  db.create_all()

@app.errorhandler(404)
def not_found(e):
  return render_template('404.html'), 404

app.register_blueprint(home)
app.register_blueprint(admin, url_prefix="/admin")
app.register_blueprint(products, url_prefix="/products")