<template> 
    <div class="login center">
        <div class="login-box">
            <div class="login-box">
                <p class="login-box-msg">Faça login para usar o site</p>
                <form action="../../index2.html" method="post">
                    <div class="form-group has-feedback">
                        <input type="user" v-model="user" placeholder="Usuario">
                        <span class="glyphicon"></span>
                    </div>
                    <div class="form-group">
                        <input type="password" v-model="pass" placeholder="Senha">
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
import { RouterLink } from "vue-router";

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