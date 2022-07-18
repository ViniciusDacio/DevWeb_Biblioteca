import {defineStore} from 'pinia'
import axios from 'axios'

export const categoriaStore = defineStore('catStore', {
    state: () => ({

        categorias: [],
        nextId: 4
        
    }),
    actions: {
        async addCategoria(novaCategoria) {
            const { data } = await axios.post('http://localhost:3000/categorias', novaCategoria);
            this.categorias.push(data);
            return Promise.resolve();
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
            return Promise.resolve();
        }
    },
    
})  