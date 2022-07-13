<template>
    <div class="categoria">
        <navBar />
        <hr>
        <Categoria :categorias="categoria" :mostrarSelect="false" @addcat="adicionarCat"/>
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

        categoria: [
        {id: 1, text:'Lançamentos'}, 
        {id: 2, text:'Mais Vendidos'}, 
        {id: 3, text: 'Computação'}
        ],
        nextId: 4
      }
    },
    emits:
    ['addcat'],
    methods:{
        adicionarCat() {
            this.categoria.push({
              id: this.nextId++,
              text: this.newText,
            })
            this.newText = ''
        }
    }
}
</script>