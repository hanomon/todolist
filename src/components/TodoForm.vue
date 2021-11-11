<template>
  <div>
    <form @submit="inputContent">
      <input type="text">
      <button>작성</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  methods: {
    inputContent(event) {
      event.preventDefault()
      this.$store.dispatch('createTodo', event.target[0].value)
      event.target[0].value = ''
    }
  }
}
</script>

<style>

</style>