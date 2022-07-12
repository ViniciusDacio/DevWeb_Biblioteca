<template>
  <div class="category-form">
    <label>Categoria: </label> <br>
              <select name="select" v-if="mostrarSelect">
                  <option value="">Selecionar Categoria</option>
                  <option v-for="option in categorias" :key="option.text"
                  :value="option.id" >
                  {{ option.text }}
                  </option>
              </select>
              <div v-else>
                <label>Nova Categoria <input type="text" v-model="newText" placeholder="Digite Aqui"></label>
                <button @click="adicionarCat" >Adicionar</button>
                  <ul>
                      <li v-for="categoria in categorias" :key="categoria.id" >
                          {{ categoria.id }} - 
                          {{ categoria.text }}
                      </li>
                  </ul> 
              </div>
  </div>
</template>

<script>

import style from '@/assets/style.css';
export default{
  props: {
    categorias: {
      type: String,
      required: true
    },
    mostrarSelect: {
      type: Boolean,
      required: true
    },
    adicionarCat: {
      type: Function,
      required: true
    }
  },
  
  }
</script>

<style>

</style>