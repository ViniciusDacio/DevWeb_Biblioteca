
<template>
    <div class="screen-user">
        <navbar />
        <Livro :opcoesCarrinho="false" />
    </div>
</template>

<style scoped>

</style>

<script>

import Livro from '../components/ExibirLivro.vue'
import navbar from '../components/NavBar.vue'

export default{
    components: {Livro, navbar},
    data(){
        return{
            
        }
    },
    
}
</script>