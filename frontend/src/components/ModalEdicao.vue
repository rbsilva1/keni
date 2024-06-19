<template>
    <div class="modal fade" id="modal-edicao" tabindex="-1" aria-labelledby="modalEdicao" aria-hidden="true">
        <div class="modal-dialog modal-dialog-edicao">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalEdicao">Editar Produto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submit">
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
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
    props: {
        formEdicao: {
            type: Object,
            required: true
        }
    },
    methods: {
        submit() {
            this.$emit('update');
        },
        showModal() {
            const modalEdicao = new Modal(document.getElementById('modal-edicao'));
            modalEdicao.show();
        }
    },
    watch: {
        formEdicao(newVal) {
            if (newVal.id !== null) {
                this.showModal();
            }
        }
    }
};
</script>
