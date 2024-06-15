import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importa o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa o JS do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { PhMagnifyingGlass, PhShoppingCart, PhUser } from '@phosphor-icons/vue';

const app = createApp(App)

// Registrando ícones globalmente
app.component('PhMagnifyingGlass', PhMagnifyingGlass);
app.component('PhShoppingCart', PhShoppingCart);
app.component('PhUser', PhUser);

app.use(router)

app.mount('#app')
