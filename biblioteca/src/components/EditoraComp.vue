<template>
    <div class="edit">
        <label>Editora: <br></label>
       
       <div v-if="mostrarSelect">
            <label>Nome Editora: <input type="text" v-model="novaEditora.nome"></label><br>
            <label>Site: <input type="text" v-model="novaEditora.site"/></label><br>
            <button @click="adicionarEditora" >Adicionar</button> <br><br>
            <span>Editoras Cadastradas</span>
                <ul>
                    <li v-for="edit in store.editoras" :key="edit.id">
                        ID: {{ edit.id }} <br>
                        Editora: {{ edit.nome }} <br>
                        Site: {{ edit.site }}
                        <button @click="deletarEditora(edit.id)">Deletar</button>
                    </li>
                </ul> 
       </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { editoraStore } from '../store/editora.js'

export default {
 props: {
    editora: {
        type: String,
        required: true
    },
    mostrarSelect: {
        type: Boolean,
        required: true
    },
   

 },
 setup(){
    const store = editoraStore()
    var editoraId = ref('')
    var novaEditora = ref({
      id: "",
      nome: "",
      site: "",
    });
    function adicionarEditora(){
        return store.addEditora(novaEditora.value)
    }
    function deletarEditora(editoraId){
        return store.deletarEditora(editoraId)
    }
    return {
        store,
        adicionarEditora,
        novaEditora,
        deletarEditora,
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