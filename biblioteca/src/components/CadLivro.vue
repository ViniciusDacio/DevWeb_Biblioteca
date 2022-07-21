<template>
<h1>Cadastro de Livro</h1>
    <div class="cad">
        <div class="cad_livro">
            <div>
                <label>Titulo<input type="text" v-model="livro.titulo"></label><br>
                <label>Autor<input type="text" v-model="livro.autor"></label><br>
                <label>ISBN<input type="number" v-model="livro.isbn"></label><br>
                <label>Editora: </label> <br>
                    <select name="select" v-model="livro.editora">
                        <option value="" disabled selected>Selecionar Editora</option>
                        <option v-for="option in store.editoras" :key="option.id"
                            :value="option.nome">
                            {{ option.nome }}
                        </option>
                    </select> <br>
                <br>
                <label>Categoria</label> <br>
                    <select name="select" v-model="livro.categoria">
                        <option value=""  disabled selected>Selecionar Categoria</option>
                        <option v-for="option in catstore.categorias" :key="option.text"
                            :value="option.nome" >
                            {{ option.nome }}
                    </option>
                </select> <br>
                <br>
                <label>Quantidade<input type="number" v-model="livro.quantidade"></label><br>
                <label>Preço<input type="number" v-model="livro.preco"></label><br>
                <button v-if="status" @click="salvar()">Salvar</button>
                  <button v-else @click="addLivros()" >Adicionar</button> <br><br>
            </div>
        </div>
        <div class="livros">
           <table class="tabela">
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Autor</th>
                    <th>Editora</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="livro in lstore.livros" :key="livro.id">
                    <td>{{ livro.titulo }}</td>
                    <td>{{ livro.autor }}</td>
                    <td>{{ livro.editora }}</td>
                    <td>{{ livro.categoria }}</td>
                    <td>R$ {{ livro.preco }}</td>
                    <td>{{ livro.quantidade }}</td>
                    <td>
                        <button @click="update(livro)">Editar</button>
                        <button @click="delLivro(livro.id)">Deletar</button> 
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>

import { livroStore } from '../store/livro.js'
import { editoraStore } from '../store/editora.js'
import { categoriaStore } from '@/store/categoria.js'


export default {
    data(){
        return{
            livro: {
                id: "",
                titulo: "",
                autor: "",
                isbn: "",
                editora: "",
                categoria: "",
                quantidade: "",
                preco: "",
            },
            status: false,
        }
    },
    methods: {
        addLivros(){
            this.lstore.addLivro(this.livro)
            this.livro.titulo = ""
            this.livro.autor = ""
            this.livro.isbn = ""
            this.livro.editora = ""
            this.livro.categoria = ""
            this.livro.quantidade = ""
            this.livro.preco = ""
        },
        delLivro(id){
            this.lstore.deletarLivro(id)
        },
        update(l){
            this.livro = l
            // this.livro.id = l.id
            // this.livro.titulo = l.titulo
            // this.livro.autor = l.autor
            // this.livro.isbn = l.isbn
            // this.livro.editora = l.editora
            // this.livro.categoria = l.categoria
            // this.livro.quantidade = l.quantidade
            // this.livro.preco = l.preco
            this.status = true

        },
        salvar(){
            this.lstore.updateLivro(this.livro)
            this.status = false

        },
    },
    setup(){
        const store = editoraStore()
        const catstore = categoriaStore()
        const lstore = livroStore()

        return {
            store,
            lstore,
            catstore,
        }
    },
    async mounted(){
    await this.store.getEditoras();
    await this.catstore.getCategorias();
    await this.lstore.getLivros();
    },
  }
</script>

<style scoped>
.cad_livro input{
    display: flex;
    flex-direction: column;
}
.cad{
    display: flex;
    justify-content: space-around;
}
.tabela{
    width: 800px;
    height: auto;
    border-collapse: collapse;
}
.tabela tbody{
    text-align: center;
}
.tabela thead{
    color: white;
    background-color: rgb(44, 9, 126);
}
td, th{
    padding: 4px;
}

tbody tr:nth-child(even){
    background: rgba(13, 236, 217, 0.1)
}
tbody tr:nth-child(odd){
    background: rgba(82, 82, 85, 0.1);
}
</style>