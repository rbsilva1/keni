<template>
  <div class="roupa-div">
    <div class="image-container" @mouseover="toggleImage(id, true)"
                      @mouseout="toggleImage(id, false)">
      <img :src="imagem1" :alt="titulo" class="my-image">
      <img :src="imagem2" :alt="titulo" class="my-image hidden-img"
          :class="{ 'visible-img': isHovered, 'hidden-img': !isHovered }">
    </div>
    <h2 class="texto-roupas">{{ titulo.toUpperCase() }}</h2>
    <span class="hidden-roupa">{{ categoria }}</span>
    <h2 class="texto-roupas">{{ preco }}</h2>
    <form class="form-hover">
        <div class="menu-hover-tamanhos">{{ tamanho }}</div>
        <button class="bt-menu-hover" @click.prevent="adicionarAoCarrinho(roupa)">Adicionar ao
            Carrinho</button>
    </form>
  </div>
</template>

<script setup>
  const props = defineProps(['id', 'imagem1', 'imagem2', 'titulo', 'categoria', 'preco', 'tamanho', 'isHovered'])
</script>

<style scoped>
.roupa-div {
    position: relative;
}
</style>