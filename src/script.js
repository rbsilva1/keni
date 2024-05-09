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

// arrays
// const cars = ["Saab", "Volvo", "BMW"];
// const imagens = ["Saab.png", "Volvo.png", "BMW.png"];
// const descricao = ["Saab.txt", "Volvo.txt", "BMW.txt"];


// cars.filter((car, index) => {
//     if (car === "Saab") {
//         document.querySelector('.roupas').innerHTML = `car: ${car} <br> image: ${imagens[index]} <br> descricao: ${descricao[index]}`;
//     }
// })

// const roupas = [
//     {
//         titulo: 'Camisa Polo',
//         categoria: 'Masculino',
//         imagem: 'Saab.png',
//         tamanho: 'M',
//     },
//     {
//         titulo: 'Camisa Polo',
//         categoria: 'Feminino',
//     },
//     {
//         titulo: 'Calça Polo',
//         categoria: 'Masculino',
//     },
// ]

// roupas.filter((roupa, index) => {
//     if (roupa.categoria === "Masculino") {
//         document.querySelector('.roupas').innerHTML += `titulo: ${roupa.titulo} <br> categoria: ${roupa.categoria}<br>`;
//     }
// })


// // Loop para criar as divs For
// for (let i = 0; i < numDivs; i++) {
//     const div = document.querySelector('.roupas');

//     // Conteúdo da div
//     const image = document.createElement('img');
//     image.src = 'caminho-da-sua-imagem.jpg';
//     image.alt = 'Polo';
//     image.className = 'my-image';

//     const title = document.createElement('h2');
//     title.className = 'my-title';
//     title.textContent = 'Título da Div';

//     const link = document.createElement('a');
//     link.href = 'https://seulink.com';
//     link.className = 'my-button';
//     link.textContent = 'Clique Aqui';

//     // Adiciona os elementos à div
//     div.appendChild(image);
//     div.appendChild(title);
//     div.appendChild(link);
// }