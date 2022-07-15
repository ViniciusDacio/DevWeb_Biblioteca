<template>
    <div class="cad_book">
        <navBar />
      <CadLivro />
    </div>
</template>

<script>
  import NavBar from '../components/NavBar.vue'
  import CadLivro from '../components/CadLivro.vue'

  export default{
    components: {NavBar, CadLivro},

    data() {
      return {
        
      }
    }
  
  }
</script>