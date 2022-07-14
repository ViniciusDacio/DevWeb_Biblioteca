<template>
    <div class="edit">
        <label>Editora: <br></label>
        <select name="select" v-if="mostrarSelect">
            <option value="">Selecionar Editora</option>
                <option v-for="option in editora" :key="option.nome"
                :value="option.id" >
                {{ option.nome }}
            </option>
        </select>
       <div v-else>
            <label>Nome Editora: <input type="text" v-model="newName"></label><br>
            <label>Site: <input type="text" v-model="newSite"></label><br>
            <button @click.prevent="adicionarEditora" >Adicionar</button> <br><br>
            <span>Editoras Cadastradas</span>
                <ul>
                    <li v-for="edit in store.editora" :key="edit.id" >
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
// import { mapActions, mapStores, mapState } from 'pinia'

export default {
 props: {
    editora: {
        type: Object,
        required: true
    },
    mostrarSelect: {
        type: Boolean,
        required: true
    },
    // adicionarEditora: {
    //     type: Function,
    //     required: true
    // }
 },
 setup(){
    const store = editoraStore()
    var newName = ref('')
    var newSite = ''

    function adicionarEditora(){
        return store.addEditora(newName.value, newSite.value)
    }
    return {
         store,
         adicionarEditora,
    }
 }
//   methods: {
//         ...mapActions(['addEditora']),
//     },
//     computed: {
//         ...mapStores({
//             editoraStore: editoraStore
//         }),
//     },
//     setup(){
//         const store = editoraStore();
//         const listaEditoras = store.listaEditoras;
//         return{
//             listaEditoras
//         }
//     }
}
</script>

<style scoped>

.edit input{
    display: flex;
    flex-direction: column;
}
   

</style>