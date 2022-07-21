import {defineStore} from 'pinia'
import axios from 'axios'

export const categoriaStore = defineStore('catStore', {
    state: () => ({

        categorias: [],
        
    }),
    actions: {
        async addCategoria(novaCategoria) {
            const { data } = await axios.post('http://localhost:3000/categorias', novaCategoria);
            this.categorias.push(data);
            return Promise.resolve("Categoria adicionada com sucesso!")
        },
        async getCategorias() {
            const { data } = await axios.get('http://localhost:3000/categorias');
            this.categorias = data
            return Promise.resolve()
        },
        async deleteCategoria(id) {
            await axios.delete(`http://localhost:3000/categorias/${id}`);
            const index = this.categorias.findIndex(categoria => categoria.id === id);
            this.categorias.splice(index, 1);
            return Promise.resolve("Categoria deletada com sucesso!")
        },
        async updateCategoria(categoria) {
            await axios.put(`http://localhost:3000/categorias/${categoria.id}`, categoria);
            const index = this.categorias.findIndex(edit => edit.id === categoria.id);
            this.categorias.splice(index, 1, categoria);
            return Promise.resolve("Categoria atualizada com sucesso!")
        }
    },
    
})  