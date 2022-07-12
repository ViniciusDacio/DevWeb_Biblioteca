<template>
<div id="adm">
    <navbar />
    <h1>Pagina Administrador</h1>
    <hr>
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
</div>
</template>

<script>
import Navbar from "../components/NavBar.vue"
import style from '@/assets/style.css';

export default{
    components: {Navbar}
}
</script>

<style scoped>
.side-bar{
    display: flex;
    flex-direction: column;
    width: 200px;
}

</style>

