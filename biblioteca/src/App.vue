<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      auth: false,
    }
  },
  mounted() {
    //verify if the user is authenticated, if not redirect to login
    if (!this.auth) {
      this.$router.push("/login");
    }
  },
}
</script>

<template>
  <router-view/>
</template>


<style>
#menu_top{
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}

</style>
