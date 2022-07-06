<template>
    <div class="editora">
        <navBar />
        <hr>
        <Editora />
    </div>
</template>

<script>
import Editora from '../components/EditoraComp.vue'
 import NavBar from '../components/NavBar.vue'

export default{
    components: {Editora, NavBar},
}
</script>