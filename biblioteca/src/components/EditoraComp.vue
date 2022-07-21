<template>
    <div class="edit">
        <label>Editora: <br></label>
       
       <div v-if="mostrarSelect">
            <label>Nome Editora: <input type="text" v-model="editora.nome"></label><br>
            <label>Site: <input type="text" v-model="editora.site"/></label><br>
            <button v-if="status" @click="salvar()">Salvar</button>
            <button v-else @click="adicionarEditora()" >Adicionar</button> <br><br>
           
            <span>Editoras Cadastradas</span>
                <ul>
                    <li v-for="edit in store.editoras" :key="edit.id">
                        ID: {{ edit.id }} <br>
                        Editora: {{ edit.nome }} <br>
                        Site: {{ edit.site }}
                        <button @click="deletarEditora(edit.id)">Deletar</button>
                        <button @click="update(edit)">Editar</button>
                    </li>
                </ul> 
       </div>
    </div>
</template>

<script>
import { editoraStore } from '../store/editora.js'

export default {
 props: {
    mostrarSelect: {
        type: Boolean,
        required: true
    },
 },
 data(){
    return {
        editora: {
            id: "",
            nome: "",
            site: ""
        },
        status: false
    }
 },
 methods: {
    adicionarEditora(){
        this.store.addEditora(this.editora)
        this.editora = {
            id: "",
            nome: "",
            site: ""
        }
    },
    deletarEditora(id){
        this.store.deletarEditora(id)
    },
    update(edit){
        this.editora.id = edit.id
        this.editora.nome = edit.nome
        this.editora.site = edit.site
        this.status = true      
    },
    salvar(){
        this.store.updateEditora(this.editora)
        this.status = false
    }
 },
 setup(){
    const store = editoraStore()
    return {
        store,
    }
 },
 async mounted(){
    await this.store.getEditoras()
  },
}
</script>

<style scoped>

.edit input{
    display: flex;
    flex-direction: column;
}
   

</style>