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
          localStorage.setItem('username', result.user.displayName)
          const usuario = {}
          usuario.photoURL = result.user.photoURL
          usuario.email = result.user.email
          usuario.displayName = result.user.displayName
          const usuarioExistente = await this.usuarioExistente(result.user.uid)
          console.log('usuarioExistente', usuarioExistente)
          if (!usuarioExistente) {
            console.log('add new user ')
            await this.salvarUsuario(usuario, result.user.uid)
          }
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
    },

    async usuarioExistente (uid) {
      const docRef = this.$firebase
        .firestore()
        .collection('usuarios')
        .doc(uid)
      const doc = await docRef.get()
      return doc.exists
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
