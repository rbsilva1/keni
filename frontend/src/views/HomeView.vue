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
                                    @click="filtrarCategoria('Blusa', $event)"></button>Blusa</li>
                            <li class="li-type"><button class="botao-tamanho button-type"
                                    @click="filtrarCategoria('Calça', $event)"></button>Calça</li>
                            <li class="li-type"><button class="botao-tamanho button-type"
                                    @click="filtrarCategoria('Camisa', $event)"></button>Camisa</li>
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
            <Roupas 
                v-for="(roupa, index) of roupasFiltradas"
                :key="roupa-`${index}`"
                :imagem1="roupa.imagem1"
                :imagem2="roupa.imagem2"
                :titulo="roupa.titulo"
                :categoria="roupa.categoria"
                :preco="roupa.preco"
                :tamanho="roupa.tamanho"
                :isHovered="roupa.isHovered"
            />
            <!-- <div  :key="roupa.id" class="roupa-div">
                <div class="image-container" @mouseover="toggleImage(roupa.id, true)"
                    @mouseout="toggleImage(roupa.id, false)">
                    <img :src="roupa.imagem1" :alt="roupa.titulo" class="my-image">
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
            </div> -->
        </div>
    </main>
</template>

<script>
import { list } from '@/services/backend';
import Roupas from '@/components/Roupas.vue';

export default {
    components: {
        Roupas
    },
    data() {
        return {
            roupas: [],
            filtrosAtivos: [],
            isTamanhoVisible: false,
            isTipoVisible: false,
            isPrecoVisible: false,
            precoMin: 0,
            precoMax: 10000,
            isCategoriaVisible: false,
            categoriasSelecionadas: []
        };
    },
    computed: {
        roupasFiltradas() {
            const precoMin = this.precoMin === '' ? 0 : Number(this.precoMin);
            const precoMax = this.precoMax === '' ? 10000 : Number(this.precoMax);

            if (this.filtrosAtivos.length === 0 && this.categoriasSelecionadas.length === 0) {
                return this.roupas.filter(roupa => roupa.preco >= precoMin && roupa.preco <= precoMax);
            } else {
                return this.roupas.filter(roupa => {
                    const matchesTamanho = this.filtrosAtivos.length === 0 || this.filtrosAtivos.some(filtro => roupa.tamanho.includes(filtro));
                    const matchesCategoria = this.categoriasSelecionadas.length === 0 || this.categoriasSelecionadas.includes(roupa.categoria);
                    const matchesPreco = roupa.preco >= precoMin && roupa.preco <= precoMax;
                    return matchesTamanho && matchesCategoria && matchesPreco;
                });
            }
        }
    },
    mounted() {
        this.listarRoupas();
    },
    methods: {
        async listarRoupas() {
            this.roupas = await list();
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
        filtrarCategoria(categoria, event) {
            const button = event.target;
            const isChecked = button.classList.contains('checked');

            if (isChecked) {
                button.classList.remove('checked');
                this.categoriasSelecionadas = this.categoriasSelecionadas.filter(cat => cat !== categoria);
            } else {
                button.classList.add('checked');
                this.categoriasSelecionadas.push(categoria);
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

<style scoped>
.roupa-div {
    position: relative;
}

.image-container {
    position: relative;
    width: 100%;
    height: auto;
}

.hidden-img {
    left: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.visible-img {
    opacity: 1;
}
</style>
