<template>
    <div class="livros_view">
        <navbar />
        <hr>
        <h3>Livros: </h3>
        <ul v-for="livro in store.livros" :key="livro">
            <li>
                {{ livro.titulo }} <br>
                Autor: {{ livro.autor }} <br>
                Editora: {{ livro.editora }} <br>
                Preço: R${{ livro.preco }} <br>
            </li>
</ul>
    </div>
</template>

<script>

import { ref } from '@vue/reactivity'
import { livroStore } from '../store/livro.js'

export default {
    props: {
        livros: {
        type: String,
        required: true,
        }
    },
    setup(){
        const store = livroStore()
        var titulo = ref(''), autor = ref(''), isbn = ref(''), editora = ref(''), categoria = ref(''), quantidade = ref(''), preco = ref('')
        function addLivros(){
            return store.getLivros(titulo.value, autor.value, isbn.value, editora.value, categoria.value, quantidade.value, preco.value)
        }
        return {
            store,
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

<style>

</style>