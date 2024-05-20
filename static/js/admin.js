async function list() {
    let produtos = await (await fetch('/products')).json()
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
        acoes.setAttribute('display', 'flex')
        acoes.setAttribute('justify-content', 'space-between')
        let botao = document.createElement('button')
        const editar = document.createElement('i')
        editar.classList.add('ph')
        editar.classList.add('ph-pencil')
        editar.style.setProperty('color', '#00c3ff')
        botao.style.setProperty('padding', '0')
        botao.style.setProperty('border', 'none')
        botao.style.setProperty('background', 'none')
        botao.setAttribute("data-bs-toggle", "modal")
        botao.setAttribute("data-bs-target", "#modal-edicao")
        botao.type = 'button'
        botao.setAttribute("data-id", produtos[i].id)
        botao.appendChild(editar)
        acoes.appendChild(botao)
        const remover = document.createElement('i')
        botao = document.createElement('button')
        botao.style.setProperty('padding', '0')
        botao.style.setProperty('border', 'none')
        botao.style.setProperty('background', 'none')
        botao.setAttribute('onclick', `remove(${produtos[i].id})`)
        remover.classList.add('ph')
        remover.classList.add('ph-trash')
        remover.style.setProperty('color', '#ff0000')
        botao.appendChild(remover)
        acoes.appendChild(botao)


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
    const removed = await fetch(`/products/${id}`, {
        method: 'DELETE',
    })

    if (removed.status === 200) {
        list()
    }
}

const formCadastro = document.getElementById('modal-cadastro')
formCadastro.addEventListener('submit', (e) => add(e))
const formEdicao = document.getElementById('modal-edicao')
// formEdicao.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e.target);
// })

async function add(e) {
    e.preventDefault()

    const titulo = document.querySelector('#titulo').value
    const categoria = document.querySelector('#categoria').value
    const imagem = "https://i.ibb.co/khmgBf1/1.jpg"
    const tamanho = document.querySelector('#tamanho').value.toUpperCase()
    const preco = document.querySelector('#preco').value

    if (titulo != "" && categoria != "" && tamanho != "" && preco != "") {
        const response = await fetch('/products', {
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
}

async function update(id) {
    const titulo = document.querySelector('#titulo').value
    const categoria = document.querySelector('#categoria').value
    const imagem = document.querySelector('#imagem').value
    const tamanho = document.querySelector('#tamanho').value.toUpperCase()
    const preco = document.querySelector('#preco').value

    const response = await fetch(`/products/${id}`, {
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