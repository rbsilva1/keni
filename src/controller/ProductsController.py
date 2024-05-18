from typing import List
from repositories.ProductsRepository import ProductsRepository
from models.Product import Product

"""
    PRODUCT:
        id: int
        titulo: str
        categoria: str
        imagem: List[str]
        tamanho: List[str]
        preco: bool
"""

class ProductsController:
  repository: ProductsRepository

  def __init__(self, repository:ProductsRepository) -> None:
      self.repository = repository

  def get_product(self, id:int) -> Product:
      # return self.repository.getTask(id)
      pass

  def create(self, titulo: str, categoria: str, imagem: List[str], tamanho: List[str], preco: bool) -> Product:
      # return self.repository.create(name_, typ_)
      pass

  def delete(self, id:int) -> bool:
      # return self.repository.delete(id)
      pass

  def update(self, id: int, titulo: str, preco: bool) -> None:
      # return self.repository.updateTask(task_, typ_)
      pass

  def list(self) -> List[Product]:
      return self.repository.listTask()