<template>
    <div class="livros_view">
        <h3>Livros: </h3>
        <ul >
            <li v-for="j in lstore.livros" :key="j.isbn" >
                Titulo: {{ j.titulo }} <br>
                ID: {{ j.id }} <br>
                Autor: {{ j.autor }} <br>
                Editora: {{ j.editora }} <br>
                Categoria: {{ j.categoria }} <br>
                Quantidade: {{ j.quantidade }} <br>
                Preço: R${{ j.preco }} <br>
                <div v-if="opcoesCarrinho">
                    <button @click="addlivro(j)">Adicionar no Carrinho</button>
                    <button @click="remlivro(j)">Remover do Carrinho</button>
                </div>
             <hr>
            </li>
        </ul>

        <ul v-if="opcoesCarrinho">
            <li v-for="i in cstore.itens" :key="i.titulo">
                Livro: {{ i.titulo }} <br>
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
        opcoesCarrinho: {
            type: Boolean,
            required: true,
            defult: false,
        },
    },
    setup(){
        const lstore = livroStore()
        const cstore = carrinhoStore()
        var livro = ref('')
        var produto = ref('')

        function addlivro(livro){
            produto = {
                titulo: livro.titulo,
                autor: livro.autor,
                preco: livro.preco,
                total: livro.preco,
                id: livro.id,
                estoque: livro.quantidade,
                quantidade: 1
            }
            
            return cstore.addItem(produto)
        }
        function remlivro(livro){
            return cstore.removeItem(livro)
        }
        return {
            lstore,
            cstore,
            addlivro,
            remlivro,
            carrinhoStore,
        }
    },
    async mounted(){
        await this.lstore.getLivros()
        await this.cstore.getItens()
    },

        
    }
</script>