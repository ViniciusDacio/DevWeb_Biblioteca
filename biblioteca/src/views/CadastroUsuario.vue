<template>
    <div class="form_user">
        <navBar />
        <h1>Cadastro de Usuário</h1>
        <div class="cad_user">
            <label>Nome<input type="text"></label><br>
            <label>Email<input type="email"></label><br>
            <label>Usuario<input type="text"></label><br>
            <label>Senha<input type="password"></label><br>
        </div>
    </div>
</template>
<script>
import style from '@/assets/style.css';
import NavBar from '../components/NavBar.vue'

export default{
    components: {NavBar},
}
</script>
<style scoped>
.form_user{
    display: flex;
    flex-direction: column;
}

.form_user input{
    display: flex;
}
</style>