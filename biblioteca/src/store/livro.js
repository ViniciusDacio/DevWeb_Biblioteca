import {defineStore} from 'pinia'

export const livroStore = defineStore('lstore', {
    state: () => ({
        livros: [{
                titulo: 'Sherlock Holmes: Um estudo em vermelho', 
                autor: 'Arthur Conan Doyle', 
                isbn: '9788571201091',
                editora: 'Person', 
                categoria: 'Ficção',
                estoque: '1',
                preco: 29.99
                },
                {
                titulo: 'Engenharia de Software', 
                autor: 'Paulo Silveira', 
                isbn: '9788571201091',
                editora: 'Person', 
                categoria: 'Computação',
                estoque: '1',
                preco: 99.99
                },
            ],
        
    }),
    getters: {
        getlivro(state) { 
            return state.livros
            }
        },
    actions: {
        addLivro(titulo, autor, isbn, editora, categoria, quantidade, preco) {
            this.livros.push({
                isbn: isbn,
                titulo: titulo,
                autor: autor,
                editora: editora,
                categoria: categoria,
                quantidade: quantidade,
                preco: preco,
            })
        }
    },
    
})  