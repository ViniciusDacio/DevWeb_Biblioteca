
<template>
    <div class="screen-user">
        <navbar />
        <Livro :livros="livro" />
    </div>
</template>

<style scoped>

</style>

<script>

import Livro from '../components/LivrosComp.vue'
import Navbar from '../components/NavBar.vue'

export default{
    components: {Livro, Navbar},
    
}
</script>