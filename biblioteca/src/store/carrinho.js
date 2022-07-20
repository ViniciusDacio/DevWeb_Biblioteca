import {defineStore} from 'pinia'
import axios from 'axios'

export const carrinhoStore = defineStore('carrinho', {
    state: () => ({
        total: 0,

        qtdCarrinho: 0,

        itens: [],
        
    }),
    actions: {
        getValor() {
            return this.total
        },

        getQtdCarrinho() {
            return this.qtdCarrinho

        },
        
        noCarrinho(produto) {
            const produtoExiste = this.itens.find(item => item.id === produto.id)
            if(produtoExiste) {
               return true
            }
        },
        async getItens() {
            const { data } = await axios.get('http://localhost:3000/carrinho');
            this.itens = data
            return Promise.resolve()
        },
        async addItem(produto) {
            const produtoExiste = this.itens.find(item => item.id === produto.id)
            
            if(produtoExiste && produtoExiste.quantidade < produto.estoque) {
                    produtoExiste.quantidade++
                    const{data} = await axios.put(`http://localhost:3000/carrinho/${produto.id}`, produtoExiste)
                    this.qtdCarrinho++
                return Promise.resolve()
            }
            else if(produto.estoque > 0) {
                produto.quantidade = 1
                const{data} = await axios.post(`http://localhost:3000/carrinho/`, produto)
                this.itens.push(data)
                this.total += data.preco
            }
            return Promise.resolve()
            
        },
        async comprar() {
            this.getItens()

            this.itens.map(async item => {
                const {data} = await axios.get(`http://localhost:3000/livros/${item.id}`)
                if(item.quantidade > data.quantidade) {
                    alert('Não temos essa quantidade em estoque')
                    return Promise.resolve()
                }
                data.quantidade -= item.quantidade
                await axios.put(`http://localhost:3000/livros/${item.id}`, data)
                //this.removeTudo()
                }
            )
            return Promise.resolve()
        
        },
        async removeItem(produto) {
            const produtoExiste = this.itens.find(item => item.id === produto.id)

            if(produtoExiste.quantidade > 1) {
                produtoExiste.quantidade--
                const{dados} = await axios.put(`http://localhost:3000/carrinho/${produto.id}`, produtoExiste)
            } else {
                const{data} = await axios.delete(`http://localhost:3000/carrinho/${produto.id}`)
                this.itens.splice(produto.id, 1)
            }
            this.total -= produto.preco
            return Promise.resolve()

        },
        async removeTudo() {
           this.itens.map(async item => {
                const{data} = await axios.delete(`http://localhost:3000/carrinho/${item.id}`)
                this.itens.splice(item.id, 1)
            }
            )
        },
        
    },
    
})  