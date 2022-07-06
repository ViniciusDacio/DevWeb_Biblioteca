<script setup>
import { RouterLink } from "vue-router";

</script>

<template>
  <nav id="menu_top">
    <router-link to="/">Home</router-link> |
    <router-link to="/admin">Administração</router-link> |
    <router-link to="/new_user" class="cad_user">Novo Usuario</router-link>
  </nav>
</template>