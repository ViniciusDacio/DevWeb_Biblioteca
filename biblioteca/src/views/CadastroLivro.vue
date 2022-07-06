<template>
    <div class="cad_book">
        <h1>Cadastro de Livro</h1>
        <div class="cad_book">
            <label>Titulo<input type="text" v-model="titulo"></label><br><br>
            <label>ISBN<input type="text"></label><br><br>
            <Editora></Editora>
            <label>Autor<input type="text"></label><br><br>
            <Categoria />
            <br><br>
            <label>Quantidade<input type="number"></label><br><br>
            <label>Preço<input type="number"></label><br><br>

            <button>Cadastrar</button>
        </div>
    </div>
</template>

<style>
.cad_book{
    padding: 10px;
}
</style>

<script>

  import Editora from '@/components/EditoraComp.vue'
  import Categoria from '@/components/CategoriaComp.vue'

  export default{
    components: {Editora, Categoria},
  }
</script>