<template>
    <h2>Carrinho de Compras</h2>
   
    <button>
        <router-link to="/screen_user">Voltar</router-link>
    </button>
    <hr>
    <span> Total: {{ valor }}</span>
    <ul>
            <li v-for="i in cstore.itens" :key="i.titulo">
                Livro: {{ i.livro }} <br>
                Autor: {{ i.autor }} <br>
                Preço Unitário: R$ {{ i.preco }} <br>
                Valor Total: R$ {{ i.total }} <br>
                Quantidade: {{ i.quantidade }} <br>
                <button @click="comprar()">Comprar</button>
            </li>
        </ul>
    
    <button @click="remtudo()">Remover Tudo</button>
   
</template>

<script>
import { carrinhoStore } from '../store/carrinho.js'
import {ref} from '@vue/reactivity'

export default {
    setup() {
        const cstore = carrinhoStore();
        var valor = cstore.getValor();
        var livro = ref('')

    function remtudo(){
        cstore.removeTudo();
    }
    function comprar(){
        return cstore.comprar();
    }

        return {
            cstore,
            valor,
            remtudo,
            comprar,
        }
    },
    
}
</script>