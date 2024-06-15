<template>
    <main id="main" style="display: flex; flex-direction: row; gap: 2.5em;">
        <div id="filter-box">
            <section id="section-box">
                <h1>Filtros</h1>
                <section class="filters">
                    <div class="cursor" @click="toggleMenu('tamanho')">
                        <h2 class="h2-tamanho">Tamanho</h2>
                        <span>-</span>
                    </div>
                    <div id="tamanho" class="tamanhos" :class="{ 'filter-show': isTamanhoVisible }">
                        <div><button class="botao-tamanho button-type" @click="filtrarRoupa('P', $event)">P</button>
                        </div>
                        <div><button class="botao-tamanho button-type" @click="filtrarRoupa('M', $event)">M</button>
                        </div>
                        <div><button class="botao-tamanho button-type" @click="filtrarRoupa('G', $event)">G</button>
                        </div>
                    </div>
                </section>

                <section class="filters" style="gap: 0;">
                    <div class="cursor" @click="toggleMenu('tipo')">
                        <h2 class="h2-tamanho">Tipo do Produto</h2>
                        <span>-</span>
                    </div>
                    <div id="tipo" :class="{ 'filter-show': isTipoVisible }">
                        <ul class="list-type list-type-id">
                            <li class="li-type"><button class="botao-tamanho button-type"
                                    @click="toggleChecked($event)"></button>Blusa</li>
                            <li class="li-type"><button class="botao-tamanho button-type"
                                    @click="toggleChecked($event)"></button>Calça</li>
                            <li class="li-type"><button class="botao-tamanho button-type"
                                    @click="toggleChecked($event)"></button>Camisa</li>
                        </ul>
                    </div>
                </section>

                <section class="filters" style="gap: 0;">
                    <div class="cursor" @click="toggleMenu('id_preco')">
                        <h2 class="h2-tamanho">Preço</h2>
                        <span>-</span>
                    </div>
                    <div id="id_preco" :class="{ 'filter-show': isPrecoVisible }">
                        <div class="range-box">
                            <div class="range-box-info">
                                <p>Mínimo:</p>
                                <input v-model.number="precoMin" placeholder="0" type="number">
                            </div>
                            <div class="range-box-info">
                                <p>Máximo:</p>
                                <input v-model.number="precoMax" placeholder="10000" type="number">
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>

        <div class="roupas">
            <div v-for="roupa in roupasFiltradas" :key="roupa.id" class="roupa-div">
                <div class="image-container">
                    <img :src="roupa.imagem1" :alt="roupa.titulo" class="my-image"
                        @mouseover="toggleImage(roupa.id, true)" @mouseout="toggleImage(roupa.id, false)">
                    <img :src="roupa.imagem2" :alt="roupa.titulo" class="my-image hidden-img"
                        :class="{ 'visible-img': roupa.isHovered, 'hidden-img': !roupa.isHovered }">
                </div>
                <h2 class="texto-roupas">{{ roupa.titulo.toUpperCase() }}</h2>
                <span class="hidden-roupa">{{ roupa.categoria }}</span>
                <h2 class="texto-roupas">{{ roupa.preco }}</h2>
                <form class="form-hover">
                    <div class="menu-hover-tamanhos">{{ roupa.tamanho }}</div>
                    <button class="bt-menu-hover" @click.prevent="adicionarAoCarrinho(roupa)">Adicionar ao
                        Carrinho</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            roupas: [],
            filtrosAtivos: [],
            isTamanhoVisible: false,
            isTipoVisible: false,
            isPrecoVisible: false,
            precoMin: 0,
            precoMax: 10000
        };
    },
    computed: {
        roupasFiltradas() {
            return this.roupas.filter(roupa => {
                const matchesTamanho = this.filtrosAtivos.length === 0 || this.filtrosAtivos.some(filtro => roupa.tamanho.includes(filtro));
                const matchesPreco = roupa.preco >= this.precoMin && roupa.preco <= this.precoMax;
                return matchesTamanho && matchesPreco;
            });
        }
    },
    mounted() {
        this.listarRoupas();
    },
    methods: {
        async listarRoupas() {
            this.roupas = await (await fetch('http://127.0.0.1:5000/products/')).json();
            this.roupas = this.roupas.map(roupa => ({ ...roupa, isHovered: false }));
        },
        toggleMenu(menu) {
            if (menu === 'tamanho') {
                this.isTamanhoVisible = !this.isTamanhoVisible;
            } else if (menu === 'tipo') {
                this.isTipoVisible = !this.isTipoVisible;
            } else if (menu === 'id_preco') {
                this.isPrecoVisible = !this.isPrecoVisible;
            }
        },
        filtrarRoupa(tamanho, event) {
            const button = event.target;
            const isChecked = button.classList.contains('checked');
            if (isChecked) {
                button.classList.remove('checked');
                this.filtrosAtivos = this.filtrosAtivos.filter(filtro => filtro !== tamanho);
            } else {
                button.classList.add('checked');
                this.filtrosAtivos.push(tamanho);
            }
        },
        toggleImage(id, isHovered) {
            const roupa = this.roupas.find(roupa => roupa.id === id);
            roupa.isHovered = isHovered;
        },
        adicionarAoCarrinho(roupa) {
            console.log('Adicionar ao carrinho:', roupa);
        },
        toggleChecked(event) {
            const button = event.target;
            button.classList.toggle('checked');
        }
    }
};
</script>
