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
                <button @click="addlivro">Adicionar no Carrinho</button>
             <hr>
            </li>
        </ul>

        <ul>
            <li v-for="i in cstore.itens" :key="i.Quantidade">
                Livro: {{ i.Nomeitem }} <br>
                Quantidade: {{ i.Quantidade }}
            </li>
        </ul>
    </div>
</template>

<script>

import { ref } from '@vue/reactivity'
import { livroStore } from '../store/livro.js'
import { carrinhoStore 
} from '../store/carrinho.js'

export default {
    props: {
        livros: {
        type: Object,
        required: true,
        },
    },
    setup(){
        const lstore = livroStore()
        const cstore = carrinhoStore()
        var livro = ref('')

        function addlivro(){
            return cstore.addItem(livro.value, 1)
        }
        return {
            lstore,
            cstore,
            addlivro,
            carrinhoStore,
        }
    }

        
    }
</script>