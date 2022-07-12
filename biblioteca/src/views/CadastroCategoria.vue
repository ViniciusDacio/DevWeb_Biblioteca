<template>
    <div class="categoria">
        <navBar />
        <hr>
        <Categoria :categorias="categorias" :mostrarSelect="false" :adicionarCat="add"/>
    </div>
</template>

<script>
import Categoria from '../components/CategoriaComp.vue'
import NavBar from '../components/NavBar.vue'

export default{
    components: {Categoria, NavBar},
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