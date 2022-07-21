<template>
    <div class="livros_view">
        <h3>Livros: </h3>
        <div class="livrosdesc container">
          <div class="item">   
            <span v-for="j in lstore.livros" :key="j.isbn" >
            <fieldset class="fieldset">
            <legend><h4>Livro</h4></legend>
            
                Titulo: {{ j.titulo }} <br>
                ID: {{ j.id }} <br>
                Autor: {{ j.autor }} <br>
                Editora: {{ j.editora }} <br>
                Categoria: {{ j.categoria }} <br>
                Quantidade: {{ j.quantidade }} <br>
                Preço: R${{ j.preco }} <br>
                <div v-if="opcoesCarrinho">
                    <button @click="addlivro(j)" class="botao">Adicionar no Carrinho</button>
                    <button v-if="carrinho(j)" @click="remlivro(j)" class="botao">Remover do Carrinho</button>
                </div>
                </fieldset>
            </span>
            </div>
        </div>
    </div> 

        <div v-if="opcoesCarrinho" class="container">
            <div v-for="i in cstore.itens" :key="i.titulo">
                Livro: {{ i.titulo }} <br>
                Autor: {{ i.autor }} <br>
                Quantidade: {{ i.quantidade }} <br>
                Preço Unitário: R$ {{ i.preco }} <br>
                Total: R$ {{ i.total }} <br>
            </div>
        
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

    methods: {
        carrinho(livro){
            return this.cstore.noCarrinho(livro)
        },
    },

        
    }
</script>

<style scoped>


/* .livrosdesc{
	max-width: 200px;
	margin: 0 auto;
	display: flex;
	border: 1px solid #ccc;
    width: 95%;/*
    flex-direction: row-reverse;
    align-items: center;
    margin-top: 5%;
    background-color: #171a21;
    
    padding: 2.5%;
    color: #c4c2c0;
    text-align: center; 
} */
.container{
    margin: 0 auto;
    display: flex;
    border: 1px solid #ccc;
    width: 95%;
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    align-content: space-between;
    margin-top: 5%;
    background-color: white;
    flex-wrap:wrap;
    
    padding: 2.5%;
    color: #c4c2c0;
}
.item{
	margin: 5px;
	text-align: left;
	font-size: 1.5em;
    color: #c4c2c0; 
    background-color: #171a21;
    max-width: 1000px;
    flex-grow: 0;
}

/* .fiedlset{
    border: 1px solid red;
    margin: 5px;
    padding: 5px;
    background-color: #171a21;
    width: 400px;
} */
.botao{
border: none;
  outline: none;
  height: 30px;
  background: #461717;
  color: #fff;
  font-size: 18px;
  border-radius: 10px;
}
</style>