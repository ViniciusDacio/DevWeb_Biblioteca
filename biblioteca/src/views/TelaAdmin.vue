<template>
<div id="adm">
    <navbar />
    <h1>Pagina Administrador</h1>
    <hr>
    <div class="conteudo">
    <div class="side-bar">
        <button>
            <router-link to="/cad_book" class="router"><span>Cadastro Livro</span></router-link>   
        </button>
        <br>
        <button>
            <router-link to="/publi" class="router"><span>Cadastro Editora</span></router-link>
        </button> <br>
        <button>
            <router-link to="/category" class="router"><span>Cadastro Categoria</span></router-link>
        </button>
    </div>
    <Livro class="livro"/>
    </div>
</div>
</template>

<script>
import Navbar from "../components/NavBar.vue"
import Livro from '../components/LivrosComp.vue'

export default{
    components: {Navbar, Livro},
}
</script>

<style scoped>
.side-bar{
    display: flex;
    flex-direction: column;
    width: 200px;
}
.conteudo{
    display: flex;
}
.livro{
    display: flex;
    padding-left: 100px;
}


</style>

