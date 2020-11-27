<template>
  <div class="login">
    <b-button @click="login()" variant="secondary">
      <img
        class="img-fluid logo-google"
        src="/img/google.png"
        alt="Logo do Google"
      />
      Entrar com o Google
    </b-button>
  </div>
</template>
<script>
import googleProvider from '../firebase/providers'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    login () {
      this.$firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(async result => {
          const usuario = {}
          usuario.photoURL = result.user.photoURL
          usuario.email = result.user.email
          usuario.displayName = result.user.displayName
          await this.salvarUsuario(usuario, result.user.uid)
        })
        .catch(function (error) {
          console.error(error)
        })
    },

    async salvarUsuario (usuario, uid) {
      console.log('usuario: ', usuario, uid)
      this.$firebase
        .firestore()
        .collection('usuarios')
        .doc(uid)
        .set(usuario)
        .then(docRef => {
          console.log('usuario salvo com sucesso: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    }
  }
}
</script>
<style scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-google {
  width: 30px;
  height: 30px;
}
</style>
