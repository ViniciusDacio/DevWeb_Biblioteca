<template>
    <div class="livros_view">
        <navbar />
        <hr>
        <h3>Livros: </h3>
        <ul v-for="livro in livros" :key="livro">
            <li>
                {{ livro.titulo }} <br>
                Autor: {{ livro.autor }} <br>
                Editora: {{ livro.editora }} <br>
                Preço: R${{ livro.preco }} <br>
            </li>
</ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            livros: [
                {titulo: 'Sherlock Holmes: Um estudo em vermelho', autor: 'Arthur Conan Doyle', editora: 'Person', preco: '29.99'},
                {titulo: 'Sherlock Holmes: O sinal dos quatro', autor: 'Arthur Conan Doyle', editora: 'Etica', preco: '19.99'},
            ]
        }
    }
}
</script>

<style>

</style>