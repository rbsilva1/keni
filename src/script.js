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
        imagem: 'Saab.png',
        tamanho: 'P',
    },
    {
        titulo: 'Camisa Masculino',
        categoria: 'Masculino',
        imagem: 'Saab.png',
        tamanho: 'M',
    },
    {
        titulo: 'Camisa Masculino',
        categoria: 'Masculino',
        imagem: 'Saab.png',
        tamanho: 'G',
    },
    {
        titulo: 'Blusa Feminina',
        categoria: 'Feminino',
        imagem: 'Saab.png',
        tamanho: 'M',
    },
    {
        titulo: 'Blusa Feminina',
        categoria: 'Feminino',
        imagem: 'Saab.png',
        tamanho: 'G',
    },
    {
        titulo: 'Camisa Infantil',
        categoria: 'Infantil',
        imagem: 'Saab.png',
        tamanho: 'M',
    },
    {
        titulo: 'Camisa Infantil',
        categoria: 'Infantil',
        imagem: 'Saab.png',
        tamanho: 'G',
    },
    {
        titulo: 'Camisa Esportiva',
        categoria: 'Esporte',
        imagem: 'Saab.png',
        tamanho: 'M',
    },
    {
        titulo: 'Camisa Esportiva',
        categoria: 'Esporte',
        imagem: 'Saab.png',
        tamanho: 'G',
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

    // Conteúdo da div
    const image = document.createElement('img');
    image.src = 'img/1-svg.svg';
    image.alt = 'Polo';
    image.className = 'my-image';

    const title = document.createElement('h2');
    title.className = title[i];

    // const link = document.createElement('a');
    // link.href = 'https://seulink.com';
    // link.className = 'my-button';
    // link.textContent = 'Clique Aqui';

    // Adiciona os elementos à div
    div.appendChild(image);
    div.appendChild(title);
    // div.appendChild(link);
}