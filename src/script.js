function toggleChecked(button) {
    button.classList.toggle('checked');
}

function toggleMenu(nomeDaDiv) {
    if (document.getElementById(nomeDaDiv).classList.contains('filter-show')) {
        document.getElementById(nomeDaDiv).classList.remove('filter-show');
    } else {
        document.getElementById(nomeDaDiv).classList.add('filter-show');
    }
}

const roupas = [
    {
        titulo: 'Camisa Masculino',
        categoria: 'Masculino',
        imagem: ['https://i.ibb.co/khmgBf1/1.jpg', 'https://i.ibb.co/Dk4sGT7/2.jpg'],
        tamanho: ['P', 'G'],
        preco: 'R$99,99',
    },
    {
        titulo: 'Blusa Feminina',
        categoria: 'Feminino',
        imagem: ['https://i.ibb.co/S53M2kt/3.jpg', 'https://i.ibb.co/g9ZzPbW/4.jpg'],
        tamanho: ['G'],
        preco: 'R$99,99',
    },
    {
        titulo: 'Camisa Infantil',
        categoria: 'Infantil',
        imagem: ['https://i.ibb.co/sjWbgPb/5.jpg', 'https://i.ibb.co/g4cVRQm/6.jpg'],
        tamanho: ['P', 'M', 'G'],
        preco: 'R$99,99',
    },
    {
        titulo: 'Camisa Esportiva',
        categoria: 'Esporte',
        imagem: ['https://i.ibb.co/hKbWD8g/7.jpg', 'https://i.ibb.co/SvLcJNW/8.jpg'],
        tamanho: ['M', 'G'],
        preco: 'R$99,99',
    },
]

function filtrarRoupa(tamanho) {
    document.querySelector('.roupas').innerHTML = '';
    roupas.filter((roupa, index) => {
        if (roupa.tamanho === tamanho) {
            const div = document.createElement('div').classList.add('roupa');
            document.createElement('img').src = 'caminho-da-sua-imagem.jpg';
            document.querySelector('.roupas').innerHTML += `titulo: ${roupa.titulo} <br> categoria: ${roupa.categoria}<br>`;
        }
    })
}

function imgRoupaHover() {
    if (document.querySelector('.roupa-div').classList.contains('roupa-div-hover')) {
        document.querySelector('.roupa-div').classList.remove('roupa-div-hover');
    } else {
        document.querySelector('.roupa-div').classList.add('roupa-div-hover');
    }
}

// // Loop para criar as divs For
for (let i = 0; i < roupas.length; i++) {
    const div = document.querySelector('.roupas');

    const roupa = document.createElement('div');
    roupa.className = 'roupa-div';

    // Conteúdo da div
    const image = document.createElement('img');
    image.src = roupas[i].imagem[0];
    image.alt = 'Polo';
    image.className = 'my-image';

    image.onmouseout = () => {
        image.src = roupas[i].imagem[0];
    }

    image.onmouseover = () => {
        image.src = roupas[i].imagem[1];
    }

    const title = document.createElement('h2');
    title.className = 'texto-roupas';
    title.innerHTML = roupas[i].titulo.toUpperCase();

    const categoria = document.createElement('span');
    categoria.className = 'hidden-roupa';
    categoria.innerHTML = roupas[i].categoria;  

    const preco = document.createElement('h2');
    preco.className = 'texto-roupas';
    preco.innerHTML = roupas[i].preco;

    const menuHover = document.createElement('form');
    menuHover.className = 'form-hover';

    const tamanhos = document.createElement('div');
    tamanhos.className = 'menu-hover-tamanhos';
    tamanhos.innerHTML = roupas[i].tamanho;

    const button = document.createElement('button');
    button.className = 'bt-menu-hover';
    button.innerHTML = 'Adicionar ao Carrinho';

    button.onclick = (e) => {
        e.preventDefault();
    }

    // Adiciona os elementos à div
    roupa.appendChild(image);
    roupa.appendChild(title);
    roupa.appendChild(categoria);
    roupa.appendChild(preco);

    menuHover.appendChild(tamanhos);
    menuHover.appendChild(button);
    
    roupa.appendChild(menuHover);

    div.appendChild(roupa);
}