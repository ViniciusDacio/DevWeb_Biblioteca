<template>
    <div class="editora">
        <navBar />
        <hr>
        <Editora :editora="editora" :mostrarSelect="false" :adicionarEditora="addEditora"/><br>
        
    </div>
</template>

<script>
import { mapActions, mapStores } from 'pinia'
import Editora from '../components/EditoraComp.vue'
 import NavBar from '../components/NavBar.vue'
 import { editoraStore } from '../store/editora.js'

export default{
    components: {Editora, NavBar},
    data(){
        return{
            
        }
    }
    
}
</script>
<style scoped>
.editora input{
    display: flex;
    flex-direction: column;
}
</style>