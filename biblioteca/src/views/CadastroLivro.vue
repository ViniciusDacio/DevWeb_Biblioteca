<template>
    <div class="cad_book">
        <navBar />
      <div class="cad_book">
        <h1>Cadastro de Livro</h1>
        <div>
            <label>Titulo<input type="text" v-model="titulo"></label><br>
            <label>ISBN<input type="text"></label><br>
            <Editora :editora="editora" :mostrarSelect="true" ></Editora><br>
            <!-- <label>Autor<input type="text"></label><br> -->
            <Categoria :categorias="categorias" :mostrarSelect="true"/>
            <br>
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

    data() {
      return {
        editora: [
          {id: 1, nome: "Dácio edições", site: "dacio.com"},
          {id: 2, nome: "Pearson", site: "pearson.com"},
          {id: 3, nome: "Átila", site: "atila.com"}
          ],

          categorias: [
        {id: 1, text:'Lançamentos'}, 
        {id: 2, text:'Mais Vendidos'}, 
        {id: 3, text: 'Computação'}
        ],
        
      }
    }
  
  }
</script>