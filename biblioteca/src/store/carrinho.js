import {defineStore} from 'pinia'

export const carrinhoStore = defineStore('carrinho', {
    state: () => ({
        item: '',
        quantia: 0,

        itens: [
            {Nomeitem: 'Livro', Quantidade: 1}
        ],
        contador: 0
    }),
    getters: {
        getItens(state) { 
            return state.itens
            }
        },
    actions: {
        addItem(item, quantia) {
            this.itens.push({
                Nomeitem: item,
                Quantidade: quantia,
            })
            this.contador++
        }
    },
    
})  