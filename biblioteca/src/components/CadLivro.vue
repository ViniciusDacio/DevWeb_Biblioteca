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
                <button @click="addLivros">Cadastrar</button>
            </div>
        </div>
        <div class="livros">
            <ExibirLivros :opcoesCarrinho="false"/>
        </div>
    </div>
</template>

<script>

import { ref } from '@vue/reactivity'
import { livroStore } from '../store/livro.js'
import { editoraStore } from '../store/editora.js'
import ExibirLivros from '@/components/ExibirLivro.vue'
import { categoriaStore } from '@/store/categoria.js'

export default {
    props: {
        livros: {
        type: Object,
        required: true,
        },
    },
    components: {
        ExibirLivros
    },
    setup(){
        const store = editoraStore()
        const catstore = categoriaStore()
        const lstore = livroStore()

        var livro = ref({
            id: "",
            titulo: "",
            autor: "",
            isbn: "",
            editora: "",
            categoria: "",
            quantidade: "",
            preco: "",
        });
        function addLivros(){
            lstore.addLivro(livro.value)
            livro.value = {
                id: "",
                titulo: "",
                autor: "",
                isbn: "",
                editora: "",
                categoria: "",
                quantidade: "",
                preco: "",
            }
        }
        
        return {
            store,
            lstore,
            addLivros, 
            livro,
            catstore,
        }
    },
    async mounted(){
    await this.store.getEditoras();
    await this.catstore.getCategorias();
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
</style>