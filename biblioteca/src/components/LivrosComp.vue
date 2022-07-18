<template>
    <div class="livros_view">
        <h3>Livros: </h3>
        <ul >
            <li v-for="j in lstore.livros" :key="j.isbn" >
                Titulo: {{ j.titulo }} <br>
                Autor: {{ j.autor }} <br>
                Editora: {{ j.editora }} <br>
                Categoria: {{ j.categoria }} <br>
                Quantidade: {{ j.estoque }} <br>
                Preço: R${{ j.preco }} <br> 
                <button @click="delLivro(j.id)">Deletar Livro</button> <br>

             <hr>
            </li>
        </ul>
    </div>
</template>

<script>

import { ref } from '@vue/reactivity'
import { livroStore } from '../store/livro.js'
import { carrinhoStore } from '../store/carrinho.js'

export default {
    setup(){
        const lstore = livroStore()
        const cstore = carrinhoStore()
        var idLivro = ref('')

        function delLivro(idLivro){
            lstore.deletarLivro(idLivro)
        }

        return {
            lstore,
            cstore,
            carrinhoStore,
            delLivro
        }
    },
    async mounted(){
        await this.lstore.getLivros()
    },

        
    }
</script>