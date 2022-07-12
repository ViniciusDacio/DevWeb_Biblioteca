<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      auth: true,
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


<style scoped>


</style>
