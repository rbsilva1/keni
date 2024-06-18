const URL = 'http://127.0.0.1:5000/products/';

async function list() {
    const response = await fetch(URL);
    return await response.json();
}

async function add(product) {
    const tamanhoMaiusculo = product.tamanho.toUpperCase();
    const categoriaCapitalizada = product.categoria.charAt(0).toUpperCase() + product.categoria.slice(1);

    const bodyData = {
        ...product,
        tamanho: tamanhoMaiusculo,
        categoria: categoriaCapitalizada,
        imagem: "https://i.ibb.co/khmgBf1/1.jpg"
    };

    const response = await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
    });

    return response.status === 201;
}

async function remove(id) {
    const response = await fetch(`${URL}${id}`, {
        method: 'DELETE',
    });
    return response.status === 200;
}

async function update(product) {
    const response = await fetch(`${URL}${product.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });

    return response.status === 200;
}

export { list, add, remove, update }