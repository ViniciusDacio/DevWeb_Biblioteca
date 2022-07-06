<template>
<div id="adm">
    <navbar />
        <hr>
    <h1>Pagina Administrador</h1>
    <hr>
    <button>
        <router-link to="/cad_book">Cadastro Livro</router-link>   
    </button>
    <br>
    <button>
        <router-link to="/publi">Cadastro Editora</router-link>
    </button> <br>
    <button>
        <router-link to="/category">Cadastro Categoria</router-link>
    </button>

</div>
</template>

<script>
import Navbar from "../components/NavBar.vue"

export default{
    components: {Navbar}
}
</script>

