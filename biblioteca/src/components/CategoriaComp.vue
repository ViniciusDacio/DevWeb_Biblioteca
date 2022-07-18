<template>
  <div class="category-form">
    <label>Categoria: </label> <br>
              <div>
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

export default{
  setup(){
    const store = categoriaStore()
    var categoriaId = ref('')
    var novaCat = ref({
      id: "",
      nome: "",
    });

    function categoria(){
      store.addCategoria(novaCat.value)
      novaCat.value = {
        id: "",
        nome: "",
      }
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