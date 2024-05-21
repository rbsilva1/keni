from typing import List, Optional
from src.models.Product import Product

class ProductsRepository:
    products: List[Product] = []

    def get_products(self, id: int) -> Optional[Product]:
        for i in range(len(self.products)):
            if self.products[i]['id'] == id:
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
        self.products.append(Product(titulo, categoria, imagem, tamanho, preco, len(self.products) + 1).to_dict())

    def update(self, id: int, titulo: str, preco: bool, categoria: str, tamanho: str) -> bool:
        for i in range(len(self.products)):
            if self.products[i]['id'] == id:
                self.products[i]['titulo'] = titulo
                self.products[i]['preco'] = preco
                self.products[i]['categoria'] = categoria
                self.products[i]['tamanho'] = tamanho

                return True
        return False

    def list_products(self) -> List[Product]:
        return self.products

    def delete(self, id: int) -> bool:
        for i in range(len(self.products)):
            if self.products[i]['id'] == id:
                self.products.pop(i)
                return True
        return False