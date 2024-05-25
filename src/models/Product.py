from src.db import db

class Product(db.Model): 
  __tablename__ = 'products'
  id = db.Column(db.Integer, autoincrement=True, primary_key=True)
  titulo = db.Column(db.Text)
  categoria = db.Column(db.Text)
  imagem1 = db.Column(db.Text)
  imagem2 = db.Column(db.Text)
  tamanho = db.Column(db.Text)
  preco = db.Column(db.Integer)

  def to_dict(self):
        return {
            'id': self.id,
            'titulo': self.titulo,
            'categoria' : self.categoria,
            'imagem1': self.imagem1,
            'imagem2': self.imagem2,
            'tamanho': self.tamanho,
            'preco': self.preco,
        }

  def __init__(self, titulo: str, categoria: str, imagem1: str, imagem2: str, tamanho: str, preco: bool) -> None:
    self.titulo = titulo
    self.categoria = categoria
    self.imagem1 = imagem1
    self.imagem2 = imagem2
    self.tamanho = tamanho
    self.preco = preco
  
  def __repr__(self) -> str:
     return super().__repr__()