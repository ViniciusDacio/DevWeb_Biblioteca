
<template>
    <div class="screen-user">
        <navbar />
        <Livros />
    </div>
</template>

<style scoped>

</style>

<script>

import Livros from '../components/LivrosComp.vue'
import Navbar from '../components/NavBar.vue'

export default{
    components: {Livros, Navbar},
    
}
</script>