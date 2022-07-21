import {defineStore} from 'pinia'
import axios from 'axios'

export const editoraStore = defineStore('store', {
    state: () => ({
            editoras: [],
        
    }),
    actions: {
        async getEditoras() {
            const { data } = await axios.get('http://localhost:3000/editoras');
            this.editoras = data
            return Promise.resolve()
        },
        async addEditora(novaEditora) {
            const { data } = await axios.post('http://localhost:3000/editoras', novaEditora);
            this.editoras.push(data);
            return Promise.resolve()
        },
        async deletarEditora(id) {
            await axios.delete(`http://localhost:3000/editoras/${id}`);
            const index = this.editoras.findIndex(editora => editora.id === id);
            this.editoras.splice(index, 1);
            return Promise.resolve()
        },
        async updateEditora(editora) {
            await axios.put(`http://localhost:3000/editoras/${editora.id}`, editora);
            const index = this.editoras.findIndex(edit => edit.id === editora.id);
            this.editoras.splice(index, 1, editora);
            return Promise.resolve()
        }
    },
    
}) 