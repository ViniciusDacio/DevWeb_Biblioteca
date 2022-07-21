<template>
  <div class="category-form">
    <label>Categoria: </label> <br>
              <div>
                <label>Nova Categoria <input type="text" placeholder="Digite Aqui" v-model="novaCat.nome"></label>
                  <button v-if="status" @click="salvar()">Salvar</button>
                  <button v-else @click="categoria()" >Adicionar</button> <br><br>
                <span>Categorias Cadastradas</span>
                  <ul>
                      <li v-for="i in store.categorias" :key="i.id" >
                          Id: {{ i.id }} <br>
                          Nome: {{ i.nome }}
                          <button @click="deletar(i.id)">Deletar</button>
                          <button @click="update(i)">Editar</button>
                      </li>
                  </ul> 
              </div>
  </div>
</template>

<script>
import { categoriaStore } from '../store/categoria.js'

export default{
  data(){
    return{
      novaCat: {
        nome: '',
        id: '',
      },
      status: false
    }
  },
  methods: {
    categoria(){
      this.store.addCategoria(this.novaCat)
      this.novaCat.nome = ''
    },
    deletar(id){
      this.store.deleteCategoria(id)
    },
    update(categoria){
      this.novaCat.id = categoria.id
      this.novaCat.nome = categoria.nome
      this.status = true
    },
    salvar(){
      this.store.updateCategoria(this.novaCat)
      this.status = false
    }
  },
  setup(){
    const store = categoriaStore(
    )
    return {
      store,
    }
  },
  async mounted(){
    await this.store.getCategorias()
  },
}
</script>

<style>

</style>