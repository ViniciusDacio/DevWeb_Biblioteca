<template>
  <div class="category-form">
     <label>Categoria</label> <br>
              <!-- <select name="select">
                  <option value=""></option>
                  <option v-for="option in categorias" :key="option.text"
                  :value="option.id" >
                  {{ option.text }}
                  </option>
              </select> -->
              <label>Nova Categoria <input type="text" v-model="newText" placeholder="Digite Aqui"></label>
              <button @click="add()" >Adicionar</button>
              <ul>
                  <li v-for="categoria in categorias" :key="categoria.id" >
                      {{ categoria.id }} - 
                      {{ categoria.text }}
                  </li>
              </ul> 
  </div>
</template>

<script>
export default{
    data(){
      return{
        newText: '',

        categorias: [
        {id: 1, text:'Lançamentos'}, 
        {id: 2, text:'Mais Vendidos'}, 
        {id: 3, text: 'Computação'}
        ],
        nextId: 4
      }
    },
    methods:{
        add() {
            this.categorias.push({
              id: this.nextId++,
              text: this.newText,
            })
            this.newText = ''
        }
    }
  }
</script>

<style>

</style>