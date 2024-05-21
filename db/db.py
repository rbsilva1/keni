import sqlalchemy as db

url_object = db.engine.url.make_url('sqlite:///db.sqlite')
engine = db.create_engine(url_object)
connection = engine.connect()
metadata = db.MetaData()

db_products = db.Table(
    'products',
    metadata,
    db.Column('id', db.Integer, primary_key=True),
    db.Column('titulo', db.String(255)),
    db.Column('categoria', db.String(255)),
    db.Column('imagem', db.String(255)),
    db.Column('tamanho', db.String(255)),
    db.Column('preco', db.Float),
)

db_products.create(engine, checkfirst=True)