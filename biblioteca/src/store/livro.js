import {defineStore} from 'pinia'
import axios from 'axios'

export const livroStore = defineStore('lstore', {
    state: () => ({
        livros: [],
        
    }),
    actions: {
        async getLivros() {
            const { data } = await axios.get('http://localhost:3000/livros');
            this.livros = data
            return Promise.resolve()
        },
        async addLivro(novoLivro) {
            const { data } = await axios.post('http://localhost:3000/livros', novoLivro);
            this.livros.push(data);
            return Promise.resolve()
        },
        async deletarLivro(id) {
            await axios.delete(`http://localhost:3000/livros/${id}`);
            const index = this.livros.findIndex(livro => livro.id === id);
            this.livros.splice(index, 1);
            return Promise.resolve()
        }
    },
    
})  