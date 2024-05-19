from flask import Flask, render_template
from routes.home import home
from routes.products import products
from routes.admin import admin

app = Flask(__name__)

@app.errorhandler(404)
def not_found(e):
  return render_template('404.html')

app.register_blueprint(home)
app.register_blueprint(admin, url_prefix="/admin")
app.register_blueprint(products, url_prefix="/products")