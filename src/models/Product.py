from typing import List

class Product: 
  id: int
  titulo: str
  categoria: str
  imagem: List[str]
  tamanho: List[str]
  preco: bool

  def to_dict(self):
        return {
            'id': self.id,
            'titulo': self.titulo,
            'categoria' : self.categoria,
            'imagem': self.imagem,
            'tamanho': self.tamanho,
            'preco': self.preco,
        }

  def __init__(self, titulo: str, categoria: str, imagem: List[str], tamanho: List[str], preco: bool, id: int) -> None:
    self.titulo = titulo
    self.categoria = categoria
    self.imagem = imagem
    self.tamanho = tamanho
    self.preco = preco
    self.id = id