<template>
  <div>
    <h1>투두리스트</h1>
    <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"

    />
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  computed: {
    ...mapState(['todos'])

  },
}
</script>

<style>

</style>