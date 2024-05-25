from flask import Blueprint, request, jsonify
from src.controller.ProductsController import ProductsController
from src.repositories.ProductsRepository import ProductsRepository

product_repository = ProductsRepository()
product_controller = ProductsController(product_repository)
products = Blueprint('products', __name__)

@products.route('/', methods=["GET", "POST"])
def products_():
    if request.method == "POST":
        produto = request.json
        product_controller.create(produto.get('titulo'), produto.get('categoria'), produto.get('imagem'), "https://i.ibb.co/Dk4sGT7/2.jpg", produto.get('tamanho'), produto.get('preco'))
        return jsonify("Produto criado com sucesso!"), 201
    elif request.method == "GET":
        return product_controller.list()

@products.route('/<int:id>', methods=["DELETE", "PUT"])
def products_id(id):
    if (request.method == "DELETE"):
        deleted = product_controller.delete(id)
        if deleted:
            return jsonify("Produto atualizado com sucesso!"), 200
        else:
            return jsonify("Bad Request"), 400
    elif request.method == "PUT":
        produto = request.json
        updated = product_controller.update(id, produto.get('titulo'), produto.get('preco'), produto.get('categoria'), produto.get('tamanho'))
        if updated:
            return jsonify("Produto atualizado com sucesso!"), 200
        else:
            return jsonify("Bad Request"), 400