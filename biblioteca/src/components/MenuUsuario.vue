<script>
import { RouterLink } from "vue-router";
import style from '@/assets/style.css';
import { carrinhoStore } from '../store/carrinho.js'

export default {

  setup() {
    const cstore = carrinhoStore();
    var valor = cstore.getValor();

    return {
      cstore,
      valor
    }
  },
}
</script>

<template>
  <nav id="menu-top">
    <router-link to="/screen_user"><span>Home</span></router-link>
    <router-link to="/carrinho"><span>Carrinho {{ valor }}</span>
    </router-link>

  </nav>
</template>