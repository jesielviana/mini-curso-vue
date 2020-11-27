import firebase from 'firebase/app'
import 'firebase/analytics'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDWJ4h956KifEfL4PaLSj3EsKipjfx0jHE',
  authDomain: 'aula-ifpi-curso-vuejs-firebase.firebaseapp.com',
  databaseURL: 'https://aula-ifpi-curso-vuejs-firebase.firebaseio.com',
  projectId: 'aula-ifpi-curso-vuejs-firebase',
  storageBucket: 'aula-ifpi-curso-vuejs-firebase.appspot.com',
  messagingSenderId: '631041674236',
  appId: '1:631041674236:web:86fb8dbaf7b7610cab4079',
  measurementId: 'G-XYJMLBHWL2'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.analytics()

// export default firebaseApp

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get () {
      return firebaseApp
    }
  })
}
