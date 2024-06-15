from flask import Flask, render_template, request
# from backend.routes.home import home
from backend.routes.products import products
# from backend.routes.admin import admin
from backend.src.db import db
from flask_cors import CORS

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///projeto.db"

cors = CORS(app, resources={r"/products/*": {"origins": "*"}},
            methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            allow_headers=["*"],
            max_age=86400)

db.init_app(app)

with app.app_context():
  db.create_all()

@app.errorhandler(404)
def not_found(e):
  return render_template('404.html')

# app.register_blueprint(home)
# app.register_blueprint(admin, url_prefix="/admin")
app.register_blueprint(products, url_prefix="/products")