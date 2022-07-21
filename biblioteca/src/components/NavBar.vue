<script setup>
import { RouterLink } from "vue-router";
import style from '@/assets/style.css';

</script>

<template>
  <nav id="menu-top">
    <router-link to="/"><span>Home</span></router-link>
    <router-link to="/admin"><span>Administração</span></router-link>
    <!-- <router-link to="/cad_user" class="cad_user"><span>Adicionar Usuário</span></router-link> -->
  </nav>
</template>