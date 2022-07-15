<template>
<h1>Cadastro de Livro</h1>
    <div class="cad">
        <div class="cad_livro">
            <div>
                <label>Titulo<input type="text" v-model="titulo"></label><br>
                <label>Autor<input type="text" v-model="autor"></label><br>
                <label>ISBN<input type="number" v-model="isbn"></label><br>
                <Editora :editora="edit" :mostrarSelect="true"></Editora>
                <br>
                <Categoria :categorias="categorias" :mostrarSelect="true" v-model="categoria"/>
                <br>
                <label>Quantidade<input type="number" v-model="quantidade"></label><br>
                <label>Preço<input type="number" v-model="preco"></label><br>

                <button @click="addLivros()">Cadastrar</button>
            </div>
        </div>
        <div class="livros">
            <ExibirLivros />
        </div>
    </div>
</template>

<script>

import { ref } from '@vue/reactivity'
import { livroStore } from '../store/livro.js'
import Editora from '@/components/EditoraComp.vue'
import Categoria from '@/components/CategoriaComp.vue'
import ExibirLivros from '@/components/ExibirLivro.vue'

export default {
    props: {
        livros: {
        type: Object,
        required: true,
        },
         editoraSelecionada: {
        type: String,
        required: true
    },
    },
    components: {
        Editora,
        Categoria,
        ExibirLivros
    },
    setup(){
        const lstore = livroStore()
        var titulo = ref(''), autor = ref(''), isbn = ref(''), editora = ref(''), categoria = ref(''), quantidade = ref(''), preco = ref('')
        function addLivros(){
            return lstore.addLivro(titulo.value, autor.value, isbn.value, editora.value, categoria.value, quantidade.value, preco.value)
        }
        return {
            lstore,
            addLivros,
            titulo,
            autor,
            isbn,
            editora,
            categoria,
            quantidade,
            preco,
        }
    },

    data(){
        return{
            
        }
    }
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