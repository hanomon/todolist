import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    completedTodosCount(state) {
      return state.todos.filter(todo=>{
        return todo.completed === true
      }).length
    },
    uncompletedTodosCount(state) {
      return state.todos.filter(todo=>{
        return todo.completed === false
      }).length
    },
    allTodosCount(state) {
      return state.todos.length
    },
  },
  mutations: {
    CREATE_TODO: function(state, newTodo) {
      state.todos.push(newTodo)
    },
    DELETE_TODO: function(state, targetTodo) {
      state.todos.splice(state.todos.indexOf(targetTodo), 1)
    },
    UPDATE_TODO: function(state, targetTodo) {
      state.todos = state.todos.map(todo => {
        if(todo.id === targetTodo.id){
          return {
            ...todo,
            ...targetTodo,
          }
        }
        return todo
      })
    },
    SET_TODOS: function(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    createTodo(context, content) {
      const newTodo = {
        id: new Date().getTime(),
        completed: false,
        content,
      }
      
      localStorage.setItem('todos',JSON.stringify([
        ...context.state.todos,
        newTodo,
      ]))

      context.commit('CREATE_TODO', newTodo)
    },
    deleteTodo({ commit, state }, targetTodo) {
      
      const newTodos = state.todos.filter(todo => {
        return todo.id !==targetTodo.indexOf
      })
      localStorage.setItem('todos',JSON.stringify(newTodos))
      commit('DELETE_TODO', targetTodo)
    },
    updateTodo({ commit, state }, targetTodo) {
      const newTodos = state.todos.filter(todo => {
        if (todo.id !==targetTodo.indexOf) {
          return {
            ...todo,
            ...targetTodo,
          }
        } else {
          return todo
        }
      })

      localStorage.setItem('todos',JSON.stringify(newTodos))

      commit('UPDATE_TODO', targetTodo)
    },
    readTodo: function({ commit }) {
      const todos = JSON.parse(localStorage.getItem('todos')) || []
      commit('SET_TODOS', todos)
    }
  },

})
