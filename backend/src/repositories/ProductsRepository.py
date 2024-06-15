from typing import List, Optional
from backend.src.models.Product import Product
from backend.src.db import db

class ProductsRepository:
    def get_products(self, id: int) -> Optional[Product]:
        product = Product.query.filter(Product.id == id)
        if product:
            return self.product
        return None

    def create(
        self,
        titulo: str,
        categoria: str,
        imagem1: str,
        imagem2: str,
        tamanho: str,
        preco: bool,
    ) -> None:
        db.session.add(Product(titulo, categoria, imagem1, imagem2, tamanho, preco))
        db.session.commit()

    def update(self, id: int, titulo: str, preco: bool, categoria: str, tamanho: str) -> bool:
        product = Product.query.filter(Product.id == id).update(
            {
                "titulo":titulo,
                "preco": preco,
                "categoria": categoria,
                "tamanho": tamanho
            }
        )
        if product:
            db.session.commit()
            return True
        return False

    def list_products(self) -> List[Product]:
        products = Product.query.all()
        return [row.to_dict() for row in products]


    def delete(self, id: int) -> bool:
        product = Product.query.filter(Product.id == id).delete()
        if product:
            db.session.commit()
            return True
        return False
