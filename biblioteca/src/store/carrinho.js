import {defineStore} from 'pinia'

export const carrinhoStore = defineStore('carrinho', {
    state: () => ({
        total: 0,

        itens: [],
        
    }),
    getters: {
        getItens(state) { 
            return state.itens
            }
        },
    actions: {
        getValor() {
            return this.total
        },
        addItem(produto) {
            for(let i = 0; i < this.itens.length; i++) {
                if(this.itens[i].livro === produto.livro) {
                    this.itens[i].quantidade++
                    this.itens[i].total = this.itens[i].quantidade * this.itens[i].preco
                    this.total += this.itens[i].preco
                    return
                }
            }
            this.itens.push(produto)
            this.total += produto.preco
        },
        removeItem(produto) {
            for(let i = 0; i < this.itens.length; i++) {
                if(this.itens[i].livro === produto) {
                    this.itens[i].quantidade--
                    this.itens[i].total = this.itens[i].quantidade * this.itens[i].preco
                    this.total -= this.itens[i].preco
                    if(this.itens[i].quantidade === 0) {
                        this.itens.splice(i, 1)
                    }
                    return
                }
            }
        },
        removeTudo() {
            this.itens = []
            this.total = 0
        },
        
    },
    
})  