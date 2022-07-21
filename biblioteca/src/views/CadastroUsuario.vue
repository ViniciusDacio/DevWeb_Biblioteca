<template>
    <div class="form_user">
        <navBar />
        <h1>Cadastro de Usuário</h1>
        <div class="cad_user">
            <!-- <label>Nome<input type="text"></label><br>
            <label>Email<input type="email"></label><br>
            <label>Usuario<input type="text"></label><br>
            <label>Senha<input type="password"></label><br> -->
        <form action="" id="formulario" name="formulario">
        <p>Nome</p>
        <input type="text" name="" />

        <p>Email</p>
        <input type="text" name="" />

        <p>Usuario</p>
        <input type="text" name="" />

        <p>Senha</p>
        <input type="text" name="" />

        <input type="button" name="botaoCadastro" id="botaoCadastro" value="Cadastrar" />

      </form>
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
/* .form_user{ comentando para testar o cadastro de usuario
    display: flex;
    flex-direction: column;
}

.form_user input{
    display: flex;
} */

.cad_user {
  width: 350px;
  max-width: 400px;
  height: 480px;
  color: black;
  background-color: #171a21;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 70px 30px;
  margin-top: 300px;
  margin-left: 200px;
}
.cad_user p {
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #fff;
}

.cad_user input {
  width: 100%;
  margin-bottom: 25px;
}

.cad_user input[type="text"] {
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 15px;
}

.cad_user input[type="button"]{
 border: none;
  outline: none;
  height: 40px;
  background: #814549;
  color: #fff;
  font-size: 18px;
} 
</style>