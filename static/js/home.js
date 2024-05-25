let roupas;

async function list() {
    roupas = await (await fetch('/products/')).json()

    for (let i = 0; i < roupas.length; i++) {
        const div = document.querySelector('.roupas');

        console.log(div)
        const { roupa, image, title, categoria, preco, menuHover, tamanhos, button } = criarRoupa(roupas[i]);

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
    console.log(roupa)
}

list()

let filtrosAtivos = [];

function toggleMenu(nomeDaDiv) {
    if (document.getElementById(nomeDaDiv).classList.contains('filter-show')) {
        document.getElementById(nomeDaDiv).classList.remove('filter-show');
    } else {
        document.getElementById(nomeDaDiv).classList.add('filter-show');
    }
}

function toggleSearchBar() {
    if (document.getElementById('barra-pesquisa').classList.contains('hidden')) {
        document.getElementById('barra-pesquisa').classList.remove('hidden')
    } else {
        document.getElementById('barra-pesquisa').classList.add('hidden')
    }
}

function criarRoupa(objRoupa) {
    const { titulo, categoria, imagem1, imagem2, tamanho, preco } = objRoupa;

    const roupa = document.createElement('div');
    roupa.className = 'roupa-div';

    const image1 = document.createElement('img');
    image1.src = imagem1;
    image1.alt = titulo;
    image1.className = 'my-image';

    const image2 = document.createElement('img');
    image2.src = imagem2;
    image2.alt = titulo;
    image2.className = 'my-image hidden-img';

    const container = document.createElement('container');
    container.className = 'image-container' 
    container.appendChild(image1);
    container.appendChild(image2);

    image1.addEventListener('mouseover', () => {
        image1.classList.add('hidden-img');
        image2.classList.remove('hidden-img');
        image2.classList.add('visible-img');
    });

    image1.addEventListener('mouseout', () => {
        image1.classList.remove('hidden-img');
        image2.classList.remove('visible-img');
        image2.classList.add('hidden-img');
    });

    image2.addEventListener('mouseover', () => {
        image1.classList.add('hidden-img');
        image2.classList.remove('hidden-img');
        image2.classList.add('visible-img');
    });

    image2.addEventListener('mouseout', () => {
        image1.classList.remove('hidden-img');
        image2.classList.remove('visible-img');
        image2.classList.add('hidden-img');
    });

    roupa.appendChild(container);

    const title = document.createElement('h2');
    title.className = 'texto-roupas';
    title.innerHTML = titulo.toUpperCase();

    const categoriaNova = document.createElement('span');
    categoriaNova.className = 'hidden-roupa';
    categoriaNova.innerHTML = categoria;

    const precoNovo = document.createElement('h2');
    precoNovo.className = 'texto-roupas';
    precoNovo.innerHTML = preco;

    const menuHover = document.createElement('form');
    menuHover.className = 'form-hover';

    const tamanhos = document.createElement('div');
    tamanhos.className = 'menu-hover-tamanhos';
    tamanhos.innerHTML = tamanho;

    const button = document.createElement('button');
    button.className = 'bt-menu-hover';
    button.innerHTML = 'Adicionar ao Carrinho';

    button.onclick = (e) => {
        e.preventDefault();
    }


    // image.onmouseout = () => {
    //     image.src = imagem1;
    // }

    // image.onmouseover = () => {
    //     image.src = imagem2;
    // }

    return {
        roupa,
        image: container,
        title,
        categoria: categoriaNova,
        preco: precoNovo,
        menuHover,
        tamanhos,
        button,
    }
}

function atualizarRoupas(tamanho, button) {
    // Se a função for chamada com um tamanho e botão, filtrar por tamanho
    if (tamanho && button) {
        const isChecked = button.classList.contains('checked');

        // Adicionar ou remover o tamanho dos filtros ativos
        if (isChecked) {
            button.classList.remove('checked');
            filtrosAtivos = filtrosAtivos.filter(filtro => filtro !== tamanho);
        } else {
            button.classList.add('checked');
            filtrosAtivos.push(tamanho);
        }
    }

    const filtroPesquisa = document.getElementById('barra-pesquisa').value.trim().toLowerCase();
    const div = document.querySelector('.roupas');
    div.innerHTML = '';

    roupas.forEach(roupa => {
        const { tamanho: tamanhos, titulo } = roupa;
        const nomeRoupa = titulo.toLowerCase();

        // Verificar se a roupa deve ser exibida com base nos filtros ativos e no filtro de pesquisa
        const shouldDisplayByTamanho = filtrosAtivos.length === 0 || filtrosAtivos.some(filtro => tamanhos.includes(filtro));
        const shouldDisplayByPesquisa = filtroPesquisa === '' || nomeRoupa.includes(filtroPesquisa);

        if (shouldDisplayByTamanho && shouldDisplayByPesquisa) {
            const { roupa: roupaNova, image, title, categoria, preco, menuHover, tamanhos: tamanhosElement, button: buttonElement } = criarRoupa(roupa);

            roupaNova.appendChild(image);
            roupaNova.appendChild(title);
            roupaNova.appendChild(categoria);
            roupaNova.appendChild(preco);
            menuHover.appendChild(tamanhosElement);
            menuHover.appendChild(buttonElement);
            roupaNova.appendChild(menuHover);
            div.appendChild(roupaNova);
        }
    });
}

// Função para ser chamada ao pesquisar
function pesquisarRoupas() {
    atualizarRoupas();
}

// Função para ser chamada ao filtrar por tamanho
function filtrarRoupa(tamanho, button) {
    atualizarRoupas(tamanho, button);
}


// Função para lidar com a alteração na barra de pesquisa
function handleSearchInputChange() {
    pesquisarRoupas(); // Chama a função de pesquisa ao alterar o conteúdo da barra de pesquisa
}

// Adicionar um listener para o evento 'input' na barra de pesquisa
const barraPesquisa = document.getElementById('barra-pesquisa');
barraPesquisa.addEventListener('input', handleSearchInputChange);


function imgRoupaHover() {
    if (document.querySelector('.roupa-div').classList.contains('roupa-div-hover')) {
        document.querySelector('.roupa-div').classList.remove('roupa-div-hover');
    } else {
        document.querySelector('.roupa-div').classList.add('roupa-div-hover');
    }
}