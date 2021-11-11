<template>
  <div id="app">
    <p>completed Todo: {{ completedTodosCount }}</p>
    <p>uncompleted Todo: {{ uncompletedTodosCount }}</p>
    <p>all Todo: {{allTodosCount}}</p>
    
    <TodoForm/>
    <TodoList/>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  computed: {
    ...mapGetters(['allTodosCount', 'completedTodosCount', 'uncompletedTodosCount'])
    // completedTodosCount() {
    //   return this.$store.getters.completedTodosCount
    // },
    // uncompletedTodosCount() {
    //   return this.$store.getters.uncompletedTodosCount
    // },
    // allTodosCount() {
    //   return this.$store.getters.allTodosCount
    // }
  },
  created: function() {
    this.$store.dispatch('readTodo')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
