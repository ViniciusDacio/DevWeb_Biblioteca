<script>
import { RouterLink } from "vue-router";
import style from '@/assets/style.css';
import carrinhoStore from '@/store/carrinho.js';

export default {
  // setup() {
  //   const cstore = carrinhoStore();
  //   return {
  //     cstore,
  //   }
  // },
  props:{
    unidades: {
      type: Number,

    },
  }
}
</script>

<template>
  <nav id="menu-top">
    <router-link to="/screen_user"><span>Home</span></router-link>
    <router-link to="/carrinho"><span>Carrinho 2</span>
    </router-link>

  </nav>
</template>