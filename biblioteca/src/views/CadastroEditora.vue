<template>
    <div class="editora">
        <navBar />
        <hr>
        <Editora :editora="editora" :mostrarSelect="false"/><br>
        
    </div>
</template>

<script>
import Editora from '../components/EditoraComp.vue'
import NavBar from '../components/NavBar.vue'

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