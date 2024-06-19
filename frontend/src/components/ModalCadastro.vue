<template>
  <div class="modal fade" id="modal-cadastro" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-cadastro">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel1">Adicionar Produto</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  <form @submit.prevent="submit">
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
                      <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Criar</button>
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
      formCadastro: {
          type: Object,
          required: true
      }
  },
  methods: {
      submit() {
          this.$emit('add');
          this.resetFormCadastro();
      },
      resetFormCadastro() {
          this.formCadastro.titulo = '';
          this.formCadastro.tamanho = '';
          this.formCadastro.preco = '';
          this.formCadastro.categoria = '';
      },
      showModal() {
          const modalCadastro = new Modal(document.getElementById('modal-cadastro'));
          modalCadastro.show();
      },
  },
  watch: {
      formCadastro(newVal) {
          if (newVal !== null) {
              this.showModal();
          }
      }
  }
};
</script>
