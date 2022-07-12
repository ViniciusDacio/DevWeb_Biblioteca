<template>
    <div class="editora">
        <navBar />
        <hr>
        <Editora :editora="editora" :mostrarSelect="false" :adicionarEditora="addEditora"/><br>
        
    </div>
</template>

<script>
import Editora from '../components/EditoraComp.vue'
 import NavBar from '../components/NavBar.vue'

export default{
    components: {Editora, NavBar},
    data(){
        return{
        newName: '',
        newSite: '',
        
        editora: [
          {id: 1, nome: "Dácio edições", site: "dacio.com"},
          {id: 2, nome: "Pearson", site: "pearson.com"},
          {id: 3, nome: "Átila", site: "atila.com"}
          ],
          nextId: 4
        }
    },
    methods: {
        addEditora() {
            this.editora.push({
              id: this.nextId++,
              nome: this.newName,
              site: this.newSite,
            })
            this.newName = ''
            this.newSite = ''
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