<template>
  <div class="category-form">
    <label>Categoria: </label> <br>
              <select name="select" v-if="mostrarSelect">
                  <option value=""  disabled selected>Selecionar Categoria</option>
                  <option v-for="option in store.categorias" :key="option.text"
                  :value="option.id" >
                  {{ option.nome }}
                  </option>
              </select>
              <div v-else>
                <label>Nova Categoria <input type="text" placeholder="Digite Aqui" v-model="novaCat.nome"></label>
                <button @click="categoria" >Adicionar</button> <br> <br>
                <span>Categorias Cadastradas</span>
                  <ul>
                      <li v-for="i in store.categorias" :key="i.id" >
                          Id: {{ i.id }} <br>
                          Nome: {{ i.nome }}
                          <button @click="deletar(i.id)">Deletar</button>
                      </li>
                  </ul> 
              </div>
  </div>
</template>

<script>

import { ref } from '@vue/reactivity'
import { categoriaStore } from '../store/categoria.js'
import { mapActions } from 'pinia'

export default{
  props: {
    categorias: {
      type: String,
      required: true,
      //default: 'Categoria'
    },
    mostrarSelect: {
      type: Boolean,
      required: true
    },

  },
  setup(){
    const store = categoriaStore()
    var categoriaId = ref('')
    var novaCat = ref({
      id: "",
      nome: "",
    });

    function categoria(){
      return store.addCategoria(novaCat.value)
    }
    function deletar(categoriaId){
      return store.deleteCategoria(categoriaId)
    }
    return {
      store,
      categoria,
      novaCat,
      deletar,
    }
  },
  async mounted(){
    await this.store.getCategorias()
  },
}
</script>

<style>

</style>