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
            <label>Nome Editora: <input type="text"></label><br>
            <label>Site: <input type="text"></label><br>
            <button @click="adicionarEditora" >Adicionar</button> <br><br>
            <span>Editoras Cadastradas</span>
                <ul>
                    <li v-for="edit in editora" :key="edit.id" >
                        ID: {{ edit.id }} <br>
                        Editora: {{ edit.nome }} <br>
                        Site: {{ edit.site }} <br>  <br>
                    </li>
                </ul> 
       </div>
        
    
    </div>
</template>

<script>

import style from '@/assets/style.css';
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
    adicionarEditora: {
        type: Function,
        required: true
    }
 }
}
</script>

<style scoped>

.edit input{
    display: flex;
    flex-direction: column;
}
   

</style>