<template>
    <div class="livros_view">
        <h3>Livros: </h3>
        <ul >
            <li v-for="j in lstore.livros" :key="j.isbn" >
                Titulo: {{ j.titulo }} <br>
                Autor: {{ j.autor }} <br>
                Editora: {{ j.editora }} <br>
                Categoria: {{ j.categoria }} <br>
                Quantidade: {{ j.quantidade }} <br>
                Preço: R${{ j.preco }} <br>
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
    props: {
        livros: {
        type: Object,
        required: true,
        },
    },
    setup(){
        const lstore = livroStore()
    
        return {
            lstore,
        }
    }

        
    }
</script>