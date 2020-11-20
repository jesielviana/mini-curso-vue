<template>
  <div>
    <h2 class="text-center">Usuários</h2>
    <table class="table table-striped">
     <thead>
        <tr>
        <td>Nome</td>
        <td>Idade</td>
        <td>Data de Alteração</td>
      </tr>
     </thead>
     <tbody>
      <tr v-for="usuario in usuarios" :key="usuario.id">
        <td>{{usuario.nome}}</td>
        <td>{{usuario.idade}}</td>
        <td>{{usuario.dataAlteracao}}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
import axios from 'axios'
export default {
// Configurar VS Code com https://standardjs.com/
  data() {
    return {
      usuarios: [],
    }
  },

  created() {
    console.log('created')
   
  },

  mounted() {
    console.log('mouted')
    this.consultarUsuarios()
  },

  methods: {
    async consultarUsuarios(){
      const resposta = await axios.get('https://ifpi-web-nodejs.herokuapp.com/usuarios')
      this.usuarios = resposta.data
    }
  }

}
</script>