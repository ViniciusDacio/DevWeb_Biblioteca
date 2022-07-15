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
                <button @click="addlivro(j.titulo, j.autor, j.preco)">Adicionar no Carrinho</button>
                <button @click="remlivro(j.titulo)">Remover do Carrinho</button>
             <hr>
            </li>
        </ul>

        <ul>
            <li v-for="i in cstore.itens" :key="i.titulo">
                Livro: {{ i.livro }} <br>
                Autor: {{ i.autor }} <br>
                Quantidade: {{ i.quantidade }} <br>
                Preço Unitário: R$ {{ i.preco }} <br>
                Total: R$ {{ i.total }} <br>
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
        const cstore = carrinhoStore()
        var livro = ref('')
        var produto = ref('')

        function addlivro(titulo, autor, preco){
            produto = {
                livro: titulo,
                autor: autor,
                preco: preco,
                total: preco,
                quantidade: 1
            }
            return cstore.addItem(produto)
        }
        function remlivro(titulo){
            return cstore.removeItem(titulo)
        }
        return {
            lstore,
            cstore,
            addlivro,
            remlivro,
            carrinhoStore,
        }
    }

        
    }
</script>