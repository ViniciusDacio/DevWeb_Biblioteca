<template>
    <div class="cad_book">
        <navBar />
      <div class="cad_book flex">
        <h1>Cadastro de Livro</h1>
        <div>
            <label>Titulo<input type="text" v-model="titulo"></label><br>
            <label>ISBN<input type="text"></label><br>
            <Editora></Editora>
            <label>Autor<input type="text"></label><br>
            <Categoria />
            <br><br>
            <label>Quantidade<input type="number"></label><br>
            <label>Preço<input type="number"></label><br>

            <button>Cadastrar</button>
        </div>
      </div>
    </div>
</template>

<style scoped>
.cad_book input{
    display: flex;
    flex-direction: column;
}
    

</style>

<script>
  import style from '@/assets/style.css';
  import Editora from '@/components/EditoraComp.vue'
  import Categoria from '@/components/CategoriaComp.vue'
  import NavBar from '../components/NavBar.vue'

  export default{
    components: {Editora, Categoria, NavBar},
  }
</script>