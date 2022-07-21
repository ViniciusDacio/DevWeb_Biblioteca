<template>
    <h2>Carrinho de Compras</h2>
   
    <button>
        <router-link to="/screen_user">Voltar</router-link>
    </button>
    <hr>
    <span>Total: {{ valor.toFixed(2) }}</span> <br>
    <span>Itens: {{ qtdItens }}</span>
        <ul>
            <li v-for="i in cstore.itens" :key="i.titulo">
                Livro: {{ i.livro }} <br>
                Autor: {{ i.autor }} <br>
                Preço Unitário: R$ {{ i.preco }} <br>
                Valor Total: R$ {{ i.total }} <br>
                Quantidade: {{ i.quantidade }} <br>
            </li>
        </ul>
        <div class="compra">
            <button @click="comprar()">Comprar</button> <br> <br>
            <button @click="remtudo()">Remover Tudo</button>
        </div>
</template>

<script>
import { carrinhoStore } from '../store/carrinho.js'

export default {
    data() {
        return {
            valor: this.cstore.getValor(),
            qtdItens: this.cstore.getQtdCarrinho(),
        }
    },
    methods: {
        comprar() {
            this.cstore.comprar()
            this.$router.push('/screen_user')
        },
        remtudo() {
            this.cstore.removeTudo()
            alert('Tudo removido do carrinho')
            history.back()
        },
    },
    setup() {
        const cstore = carrinhoStore();
        return {
            cstore,
        }
    },
    async mounted(){
        await this.cstore.getItens()
  },
    
}
</script>