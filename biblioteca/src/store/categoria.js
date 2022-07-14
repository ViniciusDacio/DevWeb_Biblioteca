import {defineStore} from 'pinia'

export const categoriaStore = defineStore('catStore', {
    state: () => ({

        categorias: [
        {id: 1, nome:'Lançamentos'}, 
        {id: 2, nome:'Mais Vendidos'}, 
        {id: 3, nome: 'Computação'}
        ],
        nextId: 4
        
    }),
    getters: {
        getcategoria(state) { 
            return state.categorias
            }
        },
    actions: {
        addCategoria(novaCategoria) {
            this.categorias.push({
              id: this.nextId++,
              nome: novaCategoria,
            })
        }
    },
    
})  