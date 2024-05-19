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
        imagem: List[str],
        tamanho: List[str],
        preco: bool,
    ) -> Product:
        return self.repository.create(titulo, categoria, imagem, tamanho, preco)

    def delete(self, id: int) -> bool:
        return self.repository.delete(id)

    def update(self, id: int, titulo: str, preco: bool) -> bool:
        return self.repository.update(id, titulo, preco)

    def list(self) -> List[Product]:
        return self.repository.list_products()
