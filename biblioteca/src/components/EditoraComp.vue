<template>
    <div class="edit">
        <label>Editora: <br></label>
       
       <div v-if="mostrarSelect">
            <label>Nome Editora: <input type="text" v-model="newName"></label><br>
            <label>Site: <input type="text" v-model="newSite"/></label><br>
            <button @click="adicionarEditora" >Adicionar</button> <br><br>
            <span>Editoras Cadastradas</span>
                <ul>
                    <li v-for="edit in store.editora" :key="edit.id">
                        ID: {{ edit.id }} <br>
                        Editora: {{ edit.nome }} <br>
                        Site: {{ edit.site }} <br>  <br>
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
    var newName = ref(''), newSite = ref('')

    function adicionarEditora(){
        return store.addEditora(newName.value, newSite.value)
    }
    return {
         store,
         adicionarEditora,
         newName,
         newSite,
    }
 },
}
</script>

<style scoped>

.edit input{
    display: flex;
    flex-direction: column;
}
   

</style>