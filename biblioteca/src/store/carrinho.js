import {defineStore} from 'pinia'
import axios from 'axios'

export const carrinhoStore = defineStore('carrinho', {
    state: () => ({
        total: 0,

        itens: [],
        
    }),
    actions: {
        getValor() {
            return this.total
        },
        async getItens() {
            const { data } = await axios.get('http://localhost:3000/carrinho');
            this.itens = data
            return Promise.resolve()
        },
        async addItem(produto) {
            
            if(this.itens.find(item => item.id === produto.id)) {
                this.itens.find(item => item.id === produto.id).quantidade++
                const{data} = await axios.post(`http://localhost:3000/carrinho/${produto.id}`,produto)
                return Promise.resolve()
            }
            const{data} = await axios.post(`http://localhost:3000/carrinho/`,produto)
            data.quantidade = 1
            this.itens.push(data)
            this.total += data.preco
            return Promise.resolve()
            
            // for(let i = 0; i < this.itens.length; i++) {
            //     if(this.itens[i].quantidade === produto.estoque) {
            //         return
            //     }
            //     if(this.itens[i].livro === produto.livro ) {
            //         this.itens[i].quantidade++
            //         this.itens[i].total = this.itens[i].quantidade * this.itens[i].preco
            //         this.total += this.itens[i].preco
            //         return
            //     }
            // }
            // this.itens.push(produto)
            // this.total += produto.preco
        },
        async comprar(livros) {
            await axios.put(`http://localhost:3000/livros/${livros.id}`,livros)
            const index = this.itens.findIndex(item => item.id === livros.id)

            this.itens.splice(index, 1, { ...livros })
        },
        async removeItem(produto) {
            const{data} = await axios.delete(`http://localhost:3000/carrinho/${produto.id}`)
            this.itens.splice(produto.id, 1)
            this.total -= produto.preco
            return Promise.resolve()

            // for(let i = 0; i < this.itens.length; i++) {
            //     if(this.itens[i].livro === produto) {
            //         this.itens[i].quantidade--
            //         this.itens[i].total = this.itens[i].quantidade * this.itens[i].preco
            //         this.total -= this.itens[i].preco
            //         if(this.itens[i].quantidade === 0) {
            //             this.itens.splice(i, 1)
            //         }
            //         return
            //     }
            // }
        },
        removeTudo() {
            this.itens = []
            this.total = 0
        },
        
    },
    
})  