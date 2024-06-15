<template>
    <div class="parent container d-flex flex-column justify-content-center" style="margin-top: 100px;">
        <div class="d-flex flex-row align-items-center justify-content-between" style="padding-bottom: 2em;">
            <div class="flex-grow-1 text-center">
                <h2>Produtos</h2>
            </div>
            <div>
                <button type="button" data-bs-toggle="modal" data-bs-target="#modal-cadastro"
                    class="btn btn-primary btn-sm">Adicionar</button>
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
                        <button @click="openModal('edicao', produto.id)" class="btn btn-link p-0">
                            <i class="ph ph-pencil" style="color: #00c3ff;"></i>
                        </button>
                        <button @click="remove(produto.id)" class="btn btn-link p-0">
                            <i class="ph ph-trash" style="color: #ff0000;"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal Cadastro -->
        <div class="modal fade" id="modal-cadastro" tabindex="-1" aria-labelledby="exampleModalLabel1"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-cadastro">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">Adicionar Produto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="add">
                            <div class="mb-3">
                                <label for="titulo" class="form-label">Titulo</label>
                                <input type="text" class="form-control" v-model="formCadastro.titulo">
                            </div>
                            <div class="mb-3">
                                <label for="tamanho" class="form-label">Tamanhos</label>
                                <input type="text" class="form-control" v-model="formCadastro.tamanho">
                            </div>
                            <div class="mb-3">
                                <label for="preco" class="form-label">Preco</label>
                                <input type="text" class="form-control" v-model="formCadastro.preco">
                            </div>
                            <div class="mb-3">
                                <label for="categoria" class="form-label">Categoria</label>
                                <input type="text" class="form-control" v-model="formCadastro.categoria">
                            </div>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" class="btn btn-primary">Criar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Edição -->
        <div class="modal fade" id="modal-edicao" tabindex="-1" aria-labelledby="modalEdicao" aria-hidden="true">
            <div class="modal-dialog modal-dialog-edicao">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalEdicao">Editar Produto</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="update">
                            <div class="mb-3">
                                <label for="titulo-edicao" class="form-label">Título</label>
                                <input type="text" class="form-control" v-model="formEdicao.titulo">
                            </div>
                            <div class="mb-3">
                                <label for="tamanho-edicao" class="form-label">Tamanhos</label>
                                <input type="text" class="form-control" v-model="formEdicao.tamanho">
                            </div>
                            <div class="mb-3">
                                <label for="preco-edicao" class="form-label">Preço</label>
                                <input type="text" class="form-control" v-model="formEdicao.preco">
                            </div>
                            <div class="mb-3">
                                <label for="categoria-edicao" class="form-label">Categoria</label>
                                <input type="text" class="form-control" v-model="formEdicao.categoria">
                            </div>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" class="btn btn-primary">Salvar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
            const response = await fetch('/products');
            this.produtos = await response.json();
        },
        async remove(id) {
            const removed = await fetch(`/products/${id}`, {
                method: 'DELETE',
            });
            if (removed.status === 200) {
                this.list();
            }
        },
        openModal(type, id = null) {
            if (type === 'cadastro') {
                this.resetFormCadastro();
                const modalCadastro = new bootstrap.Modal(document.getElementById('modal-cadastro'));
                modalCadastro.show();
            } else if (type === 'edicao' && id) {
                const produto = this.produtos.find(prod => prod.id === id);
                this.formEdicao = { ...produto };
                const modalEdicao = new bootstrap.Modal(document.getElementById('modal-edicao'));
                modalEdicao.show();
            }
        },
        async add() {
            const imagem = "https://i.ibb.co/khmgBf1/1.jpg";
            const response = await fetch('/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...this.formCadastro, imagem }),
            });
            if (response.status === 201) {
                this.list();
            }
        },
        async update() {
            const response = await fetch(`/products/${this.formEdicao.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.formEdicao),
            });
            if (response.status === 200) {
                this.resetFormEdicao();
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
        resetFormEdicao() {
            this.formEdicao = {
                id: null,
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