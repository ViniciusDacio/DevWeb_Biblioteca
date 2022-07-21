<script>
import { RouterLink } from "vue-router";
import style from '@/assets/style.css';
import { carrinhoStore } from '../store/carrinho.js'

export default {

  setup() {
    const cstore = carrinhoStore();
    var valor = cstore.getValor();
    var qtdCarrinho = cstore.getQtdCarrinho();

    return {
      cstore,
      valor,
      qtdCarrinho
    }
  },
}
</script>

<template>
  <nav id="menu-top">
    <router-link to="/screen_user"><span>Home</span></router-link>
    <router-link to="/carrinho"><span>Carrinho</span>
    </router-link>

  </nav>
</template>

<style>

#menu-top {
  background-color: #171a21;
  width: 96%;
  height: 10%;
  padding: 2.5%;
  color: #c4c2c0;
  text-align: center;
}

.carrinhoMenu {
 margin-left: 1100px;

}
</style>