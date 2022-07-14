import {defineStore} from 'pinia'

export const editoraStore = defineStore('store', {
    state: () => ({
            newName: '',
            newSite: '',
            editora: [
                {id: 1, nome: "Dácio edições", site: "dacio.com"},
                {id: 2, nome: "Pearson", site: "pearson.com"},
                {id: 3, nome: "Átila", site: "atila.com"}
                ],
                nextId: 4
        
    }),
    getters: {
        getEditora(state) { 
            return state.editora
            }
        },
    actions: {
        addEditora(newName, newSite) {
            this.editora.push({
              id: this.nextId++,
              nome: newName,
              site: newSite,
            })
            this.newName = ''
            this.newSite = ''
        }
    },
    
})  