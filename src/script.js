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
        titulo: 'Camisa Masculino P',
        categoria: 'Masculino',
        imagem: 'Saab.png',
        tamanho: 'P',
        preco: 'R$99,99',
    },
    {
        titulo: 'Camisa Masculino M',
        categoria: 'Masculino',
        imagem: 'Saab.png',
        tamanho: 'M',
        preco: 'R$99,99',
    },
    {
        titulo: 'Camisa Masculino G',
        categoria: 'Masculino',
        imagem: 'Saab.png',
        tamanho: 'G',
        preco: 'R$99,99',
    },
    {
        titulo: 'Blusa Feminina M',
        categoria: 'Feminino',
        imagem: 'Saab.png',
        tamanho: 'M',
        preco: 'R$99,99',
    },
    {
        titulo: 'Blusa Feminina G',
        categoria: 'Feminino',
        imagem: 'Saab.png',
        tamanho: 'G',
        preco: 'R$99,99',
    },
    {
        titulo: 'Camisa Infantil M',
        categoria: 'Infantil',
        imagem: 'Saab.png',
        tamanho: 'M',
        preco: 'R$99,99',
    },
    {
        titulo: 'Camisa Infantil G',
        categoria: 'Infantil',
        imagem: 'Saab.png',
        tamanho: 'G',
        preco: 'R$99,99',
    },
    {
        titulo: 'Camisa Esportiva (M)',
        categoria: 'Esporte',
        imagem: 'Saab.png',
        tamanho: 'M',
        preco: 'R$99,99',
    },
    {
        titulo: 'Camisa Esportiva G',
        categoria: 'Esporte',
        imagem: 'Saab.png',
        tamanho: 'G',
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

// arrays
// const cars = ["Saab", "Volvo", "BMW"];
// const imagens = ["Saab.png", "Volvo.png", "BMW.png"];
// const descricao = ["Saab.txt", "Volvo.txt", "BMW.txt"];

// cars.filter((car, index) => {
//     if (car === "Saab") {
//         document.querySelector('.roupas').innerHTML = `car: ${car} <br> image: ${imagens[index]} <br> descricao: ${descricao[index]}`;
//     }
// })

// roupas.filter((roupa, index) => {
//     if (roupa.categoria === "Masculino") {
//         document.querySelector('.roupas').innerHTML += `titulo: ${roupa.titulo} <br> categoria: ${roupa.categoria}<br>`;
//     }
// })


// // Loop para criar as divs For
for (let i = 0; i < roupas.length; i++) {
    const div = document.querySelector('.roupas');

    const roupa = document.createElement('div');
    roupa.className = 'roupa-div'

    // Conteúdo da div
    const image = document.createElement('img');
    image.src = 'img/1-svg.svg';
    image.alt = 'Polo';
    image.className = 'my-image';

    const title = document.createElement('h2');
    title.className = 'texto-roupas';
    title.innerHTML = roupas[i].titulo.toUpperCase();
    

    const categoria = document.createElement('span');
    categoria.className = 'hidden-roupa'
    categoria.innerHTML = roupas[i].categoria;

    const tamanho = document.createElement('span');
    tamanho.className = 'hidden-roupa';
    tamanho.innerHTML = roupas[i].tamanho;
    
    const preco = document.createElement('h2');
    preco.className = 'texto-roupas';
    preco.innerHTML = roupas[i].preco;

    // Adiciona os elementos à div
    roupa.appendChild(image);
    roupa.appendChild(title);
    roupa.appendChild(categoria);
    roupa.appendChild(tamanho);
    roupa.appendChild(preco);

    div.appendChild(roupa)
}

// titulo: 'Camisa Masculino',
// categoria: 'Masculino',
// imagem: 'Saab.png',
// tamanho: 'P',