from typing import List
from src.models.Product import Product


class ProductsRepository:
    products: List[Product] = []

    def get_products(self, id: int) -> Product:
        for i in range(len(self.products)):
            if self.products[i].getId() == id:
                return self.products[i]
        return None

    def create(
        self,
        titulo: str,
        categoria: str,
        imagem: List[str],
        tamanho: List[str],
        preco: bool,
    ) -> None:
        self.products.append(Product(titulo, categoria, imagem, tamanho, preco))

    def update(self, id: int, titulo: str, preco: bool) -> None:
        for i in range(len(self.products)):
            if self.products[i].getId() == id:
                self.products[i].titulo = titulo
                self.products[i].preco = preco

    def list_products(self) -> List[Product]:
        return self.products

    def delete(self, id: int) -> None:
        # to do
        pass
