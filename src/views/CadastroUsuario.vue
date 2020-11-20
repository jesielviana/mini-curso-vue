
<template>
  <div class="container">
    <h2 class="text-center">Cadastro de Usuário</h2>
    <div
      v-if="msgSucesso"
      class="alert alert-success"
      role="alert"
    >
      {{msgSucesso}}
    </div>
    <b-form @submit.prevent="cadastrar()">
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
import axios from "axios";

export default {
  data() {
    return {
      usuario: {
        nome: "",
        idade: null,
      },
      msgSucesso: "",
    };
  },

  methods: {
    cadastrar() {
      console.log("Cadastrado com sucesso!", this.usuario);
      axios
        .post("https://ifpi-web-nodejs.herokuapp.com/usuarios", this.usuario)
        .then((retorno) => {
          this.msgSucesso = retorno.data;
          this.usuario.nome = "";
          this.usuario.idade = null;
        })
        .catch((erro) => {
          console.error(erro);
        });
    },
  },
};
</script>