<template> 
    <div class="">
            <div class="login-box">
                <p class="login-box-msg">Faça login para usar o site</p>
                <form action="" method="post" >
                    <div class="form-group has-feedback">
                        <span class="glyphicon">Usuario:</span>
                        <input type="user" v-model="user" placeholder="Usuario" class="field">
                    </div>
                    <div class="">
                        <span class="glyphicon">Senha:</span>
                        <input class="field" type="password" v-model="pass" v-on:keyup.enter="login()" placeholder="Senha">
                    </div>
                </form><br>
                <div class="buttons">
                    <div>
                    <button @click="login()" class="button-64"><span>Login</span></button>
                    </div>
                    <router-link to="/cad_user">
                        <button class="button-64" role="button"><span>Cadastro</span></button>
                    </router-link>
                </div>
            </div>
    </div>
</template>

<script>

export default{
    data(){
        return {
            user: '',
            pass: '',
        }
    },
    methods:{
        login(){
            if(this.user == 'admin' && this.pass == 'admin'){
                this.$router.push("/admin");
            }else{
                this.$router.push("/screen_user");	
            }
    }
    }
}

</script>

<style>

.login-box{
    width: 300px;
    height: 300px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
     font-family: Phantomsans, sans-serif;
}
.buttons{
    display: flex;
    justify-content: space-between;
}
.field{
    width: 97%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 5px;
    margin-bottom: 10px;
}
.button-64 {
    float: right;
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
}

.button-64:active,
.button-64:hover {
  outline: 0;
}

.button-64 span {
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;
}

.button-64:hover span {
  background: none;
}

@media (min-width: 768px) {
  .button-64 {
    font-size: 18px;
    min-width: 135px;
  }
}

</style>