from typing import List
from models.Product import Product

class ProductsRepository:
  products: List[Product]

  def __init__(self, products: List[Product]) -> None:
    self.products = products
  
  