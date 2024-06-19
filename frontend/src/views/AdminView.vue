<template>
    <div class="parent container d-flex flex-column justify-content-center" style="margin-top: 100px;">
        <div class="d-flex flex-row align-items-center justify-content-between" style="padding-bottom: 2em;">
            <div class="flex-grow-1 text-center">
                <h2>Produtos</h2>
            </div>
            <div>
                <button type="button" @click="openModalCadastro" class="btn btn-primary btn-sm">Adicionar</button>
            </div>
        </div>
        <table class="table table-bordered table-striped table-dark table-responsive fs-5 text-center w-100">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Imagem</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Tamanho</th>
                    <th scope="col">Preço</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="produto in produtos" :key="produto.id">
                    <th>{{ produto.id }}</th>
                    <td>{{ produto.titulo }}</td>
                    <td>{{ produto.imagem1 }}</td>
                    <td>{{ produto.categoria }}</td>
                    <td>{{ produto.tamanho }}</td>
                    <td>{{ produto.preco }}</td>
                    <td class="d-flex justify-content-around">
                        <button @click="openModal(produto.id)" class="btn btn-link p-0" style="font-size: 19px;">
                            <PhPencil class="ph ph-pencil" style="color: #00c3ff;"></PhPencil>
                        </button>
                        <button @click="remove(produto.id)" class="btn btn-link p-0" style="font-size: 19px;">
                            <PhTrash class="ph ph-trash" style="color: #ff0000;"></PhTrash>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal Cadastro -->
        <ModalCadastro :formCadastro="formCadastro" @add="add" />
        <!-- Modal Edição -->
        <ModalEdicao :formEdicao="formEdicao" @update="update" />
    </div>
</template>

<script>
import { Modal } from 'bootstrap';
import { list, add, remove, update } from '@/services/backend';
import ModalEdicao from '@/components/ModalEdicao.vue'; 
import ModalCadastro from '@/components/ModalCadastro.vue';

export default {
    components: {
        ModalEdicao,
        ModalCadastro
    },
    data() {
        return {
            produtos: [],
            formCadastro: {
                titulo: '',
                tamanho: '',
                preco: '',
                categoria: '',
            },
            formEdicao: {
                id: null,
                titulo: '',
                tamanho: '',
                preco: '',
                categoria: '',
            },
        };
    },
    methods: {
        async list() {
            this.produtos = await list();
        },
        async remove(id) {
            const removed = await remove(id);
            if (removed) {
                this.list();
            }
        },
        openModal(id) {
            const produto = this.produtos.find(prod => prod.id === id);
            this.formEdicao = { ...produto };
        },
        openModalCadastro() {
            this.formCadastro = {
                titulo: '',
                tamanho: '',
                preco: '',
                categoria: '',
            };
            const modalCadastro = new Modal(document.getElementById('modal-cadastro'));
            modalCadastro.show();
        },
        async add() {
            const added = await add(this.formCadastro);
            if (added) {
                this.list();
                this.resetFormCadastro();
            }
        },
        async update() {
            const updated = await update(this.formEdicao);
            if (updated) {
                this.list();
            }
        },
        resetFormCadastro() {
            this.formCadastro = {
                titulo: '',
                tamanho: '',
                preco: '',
                categoria: '',
            };
        },
    },
    mounted() {
        this.list();
    },
};
</script>
