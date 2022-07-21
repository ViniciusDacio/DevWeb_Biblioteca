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
                    await axios.put(`http://localhost:3000/carrinho/${produto.id}`, produtoExiste)
                    this.qtdCarrinho++
                    this.total += produto.preco
                return Promise.resolve()
            }
            else if(produto.estoque > 0) {
                produto.quantidade = 1
                const{data} = await axios.post(`http://localhost:3000/carrinho/`, produto)
                this.itens.push(data)
                this.qtdCarrinho++
                this.total += data.preco
            }
            return Promise.resolve()
            
        },
        async comprar() {
            this.getItens()
            if(this.itens.length === 0) {
                alert('Carrinho vazio')
                return
            }

            this.itens.map(async item => {
                const {data} = await axios.get(`http://localhost:3000/livros/${item.id}`)
                if(item.quantidade > data.quantidade) {
                    alert('Não temos essa quantidade em estoque')
                    return Promise.resolve()
                }
                data.quantidade -= item.quantidade
                await axios.put(`http://localhost:3000/livros/${item.id}`, data)
                this.removeTudo()
                }
            )
            alert('Compra realizada com sucesso')
            return Promise.resolve()
        
        },
        async removeItem(produto) {
            const produtoExiste = this.itens.find(item => item.id === produto.id)

            if(produtoExiste.quantidade > 1) {
                produtoExiste.quantidade--
                await axios.put(`http://localhost:3000/carrinho/${produto.id}`, produtoExiste)
            } else {
                await axios.delete(`http://localhost:3000/carrinho/${produto.id}`)
                this.itens.splice(produto.id, 1)
            }
            this.total -= produto.preco
            this.qtdCarrinho--
            return Promise.resolve()

        },
        async removeTudo() {
           this.itens.map(async item => {
                await axios.delete(`http://localhost:3000/carrinho/${item.id}`)
                this.itens.splice(item.id, 1)
                this.total = 0
                this.qtdCarrinho = 0
            }
            )
        },
        
    },
    
})  