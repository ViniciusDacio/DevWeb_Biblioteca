
<template>
    <div class="screen-user">
        <navbar />
        <Livro :livros="Livro" />
    </div>
</template>

<style scoped>

</style>

<script>

import Livro from '../components/LivrosComp.vue'
import navbar from '../components/NavBar.vue'

export default{
    components: {Livro, navbar},
    data(){
        return{
            
        }
    }
    
}
</script>