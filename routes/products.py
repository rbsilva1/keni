from flask import Blueprint, request, jsonify
from src.controller.ProductsController import ProductsController
from src.repositories.ProductsRepository import ProductsRepository

product_repository = ProductsRepository()
product_controller = ProductsController(product_repository)
products = Blueprint('products', __name__)

@products.route('/list')
def list_products():
    return product_controller.list()

@products.route('/create', methods=["POST"])
def create():
    produto = request.json
    product_controller.create(produto.get('titulo'), produto.get('categoria'), [produto.get('imagem')], [produto.get('tamanho')], produto.get('preco'))
    return jsonify("Produto criado com sucesso!"), 201

@products.route('/delete/<int:id>', methods=["DELETE"])
def delete(id):
    deleted = product_controller.delete(id)
    if deleted:
        return jsonify("Produto atualizado com sucesso!"), 200
    else:
        return jsonify("Bad Request"), 400

@products.route('/update/<int:id>', methods=["PUT"])
def update(id):
    produto = request.json
    updated = product_controller.update(id, produto.get('titulo'), produto.get('preco'))
    if updated:
        return jsonify("Produto atualizado com sucesso!"), 200
    else:
        return jsonify("Bad Request"), 400