<template>
    <Menu />
    <div class="screen-user">
        <h1>Tela Usuario</h1>
        <Livros :opcoesCarrinho="true"/>
    </div>
</template>

<script>
import Livros from '../components/ExibirLivro.vue'
import Menu from '../components/MenuUsuario.vue'

export default{
    components: {Livros, Menu},

    data(){
        return {
            // unidade: 0,
        }
    },
}
</script>