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
                Quantidade: {{ i.quantidade }}
            </li>
        </ul>

    <button @click="remtudo()">Remover Tudo</button>
   
</template>

<script>
import { carrinhoStore } from '../store/carrinho.js'

export default {
    setup() {
        const cstore = carrinhoStore();
        var valor = cstore.getValor();

    function remtudo(){
        cstore.removeTudo();
    }

        return {
            cstore,
            valor,
            remtudo,
        }
    },
    
}
</script>