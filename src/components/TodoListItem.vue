<template>
  <div class="todo-list__item">
    <p
      :class="{
        'completed': todo.completed
      }"
      @click="updateTodo"
    >
      {{ todo.content }}
    </p>
    <button @click="deleteTodo">삭제</button>
  </div>
</template>

<script>

export default {
  name: 'TodoListItem',
  props: {
    todo: {
      type: Object,
      required: true,
    }
  },
  methods: {
    updateTodo() {
      const newTodo = {
        ...this.todo,
        completed: !this.todo.completed
      }
      this.$store.dispatch('updateTodo', newTodo)
    },
    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.todo)
    },
  }
}
</script>

<style scoped>
.todo-list__item {
  display: flex;
  justify-content: center;
}

.completed {
  text-decoration: line-through;
}
</style>