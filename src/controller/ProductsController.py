from typing import List
from src.repositories.ProductsRepository import ProductsRepository
from src.models.Product import Product

class ProductsController:
    repository: ProductsRepository

    def __init__(self, repository: ProductsRepository) -> None:
        self.repository = repository

    def get_product(self, id: int) -> Product:
        return self.repository.get_products(id)

    def create(
        self,
        titulo: str,
        categoria: str,
        imagem1: str,
        imagem2: str,
        tamanho:str,
        preco: bool,
    ) -> Product:
        return self.repository.create(titulo, categoria, imagem1, imagem2, tamanho, preco)

    def delete(self, id: int) -> bool:
        return self.repository.delete(id)

    def update(self, id: int, titulo: str, preco: bool, categoria: str, tamanho: str) -> bool:
        return self.repository.update(id, titulo, preco, categoria, tamanho)

    def list(self) -> List[Product]:
        return self.repository.list_products()
