<script setup>
import { RouterLink } from "vue-router";
import style from '@/assets/style.css';

</script>

<template>
  <nav id="menu-top">
    <router-link to="/"><span>HOME</span></router-link>
    <router-link to="/admin"><span>ADMINISTRAÇÃO</span></router-link>
    <router-link to="/cad_user" class="cad_user"><span>CADASTRO DE USUÁRIO</span></router-link>
    <input type="text" class="pesquisa" v-model="input" placeholder="Procurar livros..." />
  </nav>
</template>


<style>
.pesquisa{
  margin-left: 650px;
}
</style>