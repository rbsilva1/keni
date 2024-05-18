from flask import Blueprint
from src.controller.ProductsController import ProductsController
from src.repositories.ProductsRepository import ProductsRepository

"""
    FUNÇÕES:
        - LISTAR PRODUTOS (GET)
        - CRIAR PRODUTOS (POST)
        - DELETAR PRODUTOS (DELETE)
        - ATUALIZAR PRODUTOS (PUT)

        * /home/ (GET) - LISTAR
        * /admin/product/ (GET) - LISTAR
        * /admin/product/ (POST) - CRIAR
        * /admin/product/<id> (PUT) - ATUALIZAR
        * /admin/product/<id> (DELETE) - DELETAR
"""

product_repository = ProductsRepository()

product_controller = ProductsController(product_repository)

products = Blueprint('products', __name__)

@products.route('/list')
def list_products():
    return product_controller.list() # colocar argumentos

@products.route('/create')
def create():
    return product_controller.create() # colocar argumentos

@products.route('/delete')
def delete():
    return product_controller.delete() # colocar argumentos

@products.route('/update')
def update():
    return product_controller.update() # colocar argumentos

@products.route('/get')
def list_product():
    return product_controller.get_products()