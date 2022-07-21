<template>
<h3>Livros: </h3>
    <div class="livros_view">
        <div class="livros">
            <ul>
                <li v-for="j in lstore.livros" :key="j.isbn">
                    Titulo: {{ j.titulo }} <br>
                    ID: {{ j.id }} <br>
                    Autor: {{ j.autor }} <br>
                    Editora: {{ j.editora }} <br>
                    Categoria: {{ j.categoria }} <br>
                    Quantidade: {{ j.quantidade }} <br>
                    Preço: R${{ j.preco }} <br>
                    <div v-if="opcoesCarrinho">
                        <button @click="addlivro(j)">Adicionar no Carrinho</button>
                        <button v-if="carrinho(j)" @click="remlivro(j)">Remover do Carrinho</button>
                    </div>
                <hr>
                </li>
            </ul>
        </div>
        <div class="carrinho" v-if="opcoesCarrinho">
            <h3>Carrinho: </h3>
            <ul>
                <li v-for="i in cstore.itens" :key="i.titulo">
                    Livro: {{ i.titulo }} <br>
                    Autor: {{ i.autor }} <br>
                    Quantidade: {{ i.quantidade }} <br>
                    Preço Unitário: R$ {{ i.preco }} <br>
                    Total: R$ {{ i.total }} <br>
                    <hr>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

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
    data() {
        return {
           produto: {
                titulo: '',
                autor: '',
                editora: '',
                categoria: '',
                quantidade: '',
                preco: '',
                id: '',
                isbn: '',
            },
        }
    },
    methods: {
        addlivro(livro) {
            this.produto = {
                titulo: livro.titulo,
                autor: livro.autor,
                preco: livro.preco,
                total: livro.preco,
                id: livro.id,
                estoque: livro.quantidade,
                quantidade: 1
            }
            this.cstore.addItem(this.produto)
        },
        remlivro(livro) {
            this.cstore.removeItem(livro)
        },
        carrinho(livro){
            return this.cstore.noCarrinho(livro)
        },
    },
    setup(){
        const lstore = livroStore()
        const cstore = carrinhoStore()

        return {
            lstore,
            cstore,
            carrinhoStore,
        }
    },
    async mounted(){
        await this.lstore.getLivros()
        await this.cstore.getItens()
    }, 
    }
</script>
<style scooped>
.livros_view{
    display: flex;
    justify-content: space-around;
}
.carrinho{
    display: flex;
    float: top;
   
}
</style>