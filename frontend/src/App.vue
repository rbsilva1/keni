<script setup>
import { RouterView } from 'vue-router'
</script>

<template>

  <header id="header">
    <div>
      <img class="img-logo" style="margin-left: 1em;" src="/frontend/src/assets/logo.svg" alt="Polo">
    </div>
    <nav id="header-text">
      <h2 class="text">FEMININO</h2>
      <h2 class="text">MASCULINO</h2>
      <h2 class="text">INFANTIL</h2>
      <h2 class="text">ESPORTE</h2>
    </nav>
    <div style="display: flex; flex-direction: row; gap: 0.6em; margin-right: 1em; position: relative;">
      <div class="search-bar" style="position: absolute; right: 0;">
        <PhMagnifyingGlass class="ph ph-magnifying-glass" @click="toggleSearchBar"
          style="color: #fff; font-size: 2.2em;" />
        <div>
          <input id="barra-pesquisa" class="hidden" type="text" placeholder="Busque por roupas...">
        </div>
      </div>
      <PhShoppingCart style="color: #fff; font-size: 2.2em;"></PhShoppingCart>
      <PhUser style="color: #fff; font-size: 2.2em; margin-right: 0.5em;"></PhUser>
    </div>
  </header>

  <RouterView />

</template>

<style scoped></style>