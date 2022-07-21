<script>
import { RouterLink } from "vue-router";

export default {
  // data() {
  //   return {
  //     auth: false,
  //   }
  // },
  // mounted() {
  //   //verify if the user is authenticated, if not redirect to login
  //   if (!this.auth) {
  //     this.$router.push("/login");
  //   }
  // },
}
</script>

<template>
  <router-view/>
  <footer class="footer">
			<h5> Biblioteca | IFC Araquari </h5>
		</footer>
</template>


<style>
.footer{
	margin-top: 5%;
	background-color: #171a21;
	width: 96%;
	padding: 2.5%;
	color: #c4c2c0;
	text-align: center;
  margin-left: -8px;
  margin-bottom: -10px;
  
  
}

.clearFix{
	clear: both;
}


</style>
