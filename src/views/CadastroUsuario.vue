
<template>
  <div class="container">
    <h2 class="text-center">Cadastro de Usuário</h2>
    <b-form @submit.prevent="cadastrar">
      <b-form-group
        label="Nome:"
        label-for="nome"
      >
        <b-form-input
          id="nome"
          type="text"
          v-model="usuario.nome"
          required
          placeholder="Informe seu nome"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Idade:"
        label-for="idade"
      >
        <b-form-input
          id="idade"
          type="number"
          required
          v-model="usuario.idade"
          placeholder="Informe sua idade"
        ></b-form-input>
      </b-form-group>
      <b-button
        type="submit"
        class="float-right"
        variant="primary"
      >Salvar</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usuario: {
        nome: '',
        idade: null,
      }
    }
  }
}
</script>