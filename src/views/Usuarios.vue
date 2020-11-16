<template>
  <div>
    <h2 class="text-center">Usuários</h2>
    <b-table
      striped
      hover
      :items="usuarios"
    ></b-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      usuarios: [
        { nome: 'Bill', idade: 89 },
        { nome: 'Jobs', idade: 77 },
        { nome: 'Ada', idade: 99 }
      ]
    }
  },
}
</script>