<template>
    <div class="categoria">
        <navBar />
        <hr>
        <Categoria :categorias="categoria" :mostrarSelect="false"/>
    </div>
</template>

<script>
import Categoria from '../components/CategoriaComp.vue'
import NavBar from '../components/NavBar.vue'

export default{
    components: {Categoria, NavBar},
    data(){
      return{
        
      }
    },
}
</script>