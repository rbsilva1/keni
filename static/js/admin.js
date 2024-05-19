async function list() {
    let produtos = await (await fetch('/products/list')).json()
    const tbody = document.querySelector('#lista-produtos')
    tbody.innerHTML = ''

    for (let i = 0; i < produtos.length; i++) {
        const tr = document.createElement('tr')

        const id = document.createElement('th')
        id.innerText = produtos[i].id

        const titulo = document.createElement('td')
        titulo.innerText = produtos[i].titulo

        const categoria = document.createElement('td')
        categoria.innerText = produtos[i].categoria

        const imagem = document.createElement('td')
        imagem.innerText = produtos[i].imagem[0]

        const tamanho = document.createElement('td')
        tamanho.innerText = produtos[i].tamanho

        const preco = document.createElement('td')
        preco.innerText = produtos[i].preco

        const acoes = document.createElement('td')
        let botao = document.createElement('button')
        const editar = document.createElement('i')
        editar.classList.add('ph')
        editar.classList.add('ph-pencil')
        editar.setAttribute('id', produtos[i].id)
        editar.style.setProperty('color', '#00c3ff')
        botao.appendChild(editar)
        const remover = document.createElement('i')
        botao = document.createElement('button')
        remover.classList.add('ph')
        remover.classList.add('ph-trash')
        remover.setAttribute('id', produtos[i].id)
        remover.style.setProperty('color', '#ff0000')
        botao.appendChild(remover)
        acoes.appendChild(editar)
        acoes.appendChild(remover)

        tr.appendChild(id)
        tr.appendChild(titulo)
        tr.appendChild(imagem)
        tr.appendChild(categoria)
        tr.appendChild(tamanho)
        tr.appendChild(preco)
        tr.appendChild(acoes)

        tbody.appendChild(tr)
    }
}

list()

async function remove(id) {
    const removed = await fetch(`/products/remove/${id}`, {
        method: 'DELETE',
    })

    if (removed.statusCode === 200) {
        list()
    }
}

async function add(e) {
    e.preventDefault()

    const titulo = document.querySelector('#titulo').value
    const categoria = document.querySelector('#categoria').value
    const imagem = "document.querySelector('#imagem').value"
    const tamanho = document.querySelector('#tamanho').value
    const preco = document.querySelector('#preco').value

    const response = await fetch('/products/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titulo,
            categoria,
            imagem,
            tamanho,
            preco,
        }),
    })

    if (response.status === 201) {
        list()
    }
}

async function update(e, id) {
    e.preventDefault()

    const titulo = document.querySelector('#titulo').value
    const categoria = document.querySelector('#categoria').value
    const imagem = document.querySelector('#imagem').value
    const tamanho = document.querySelector('#tamanho').value
    const preco = document.querySelector('#preco').value

    const response = await fetch(`/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titulo,
            categoria,
            imagem,
            tamanho,
            preco,
        }),
    })

    if (response.statusCode === 200) {
        list()
    }
}