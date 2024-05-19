async function list() {
    let produtos = await (await fetch('/list')).json()
    const tbody = document.querySelector('#lista-produtos')
    tbody.innerHTML = ''
    
    console.log(produtos)
    
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
        const editar = document.createElement('i')
        editar.classList.add('ph')
        editar.classList.add('ph-pencil')
        editar.style.setProperty('color', '#00c3ff')
        const remover = document.createElement('i')
        remover.classList.add('ph')
        remover.classList.add('ph-trash')
        remover.style.setProperty('color', '#ff0000')
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

function remove(params) {

}

function add(params) {
    
}
