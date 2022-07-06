<template> 
    <div class="login center">
        <div class="login-box">
            <div class="login-box">
                <p class="login-box-msg">Faça login para usar o site</p>
                <form action="" method="post">
                    <div class="form-group has-feedback">
                        <input type="user" v-model="user" placeholder="Usuario">
                        <span class="glyphicon"></span>
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="pass" v-on:keyup.enter="login()" placeholder="Senha">
                        <span class="glyphicon"></span>
                    </div>
                </form><br>
                <button @click="login()">Entrar</button> | 
                <router-link to="/cad_user">
                    <button>Cadastra-se</button>
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
.center{
    margin: 0 auto;
    width: 300px;
    padding: 20px;
}
</style>