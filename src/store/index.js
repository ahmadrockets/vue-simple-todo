import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todo: []
  },
  actions:{
    createTodo: ({state}, payload) =>{
      state.todo.push(payload);
    },
    deleteTodo:({state}, payload) =>{
      state.todo.splice(payload,1);
    }
  },
  getters: {
    getAllTodo : (state) => {
      return state.todo
    }
  }
});

export default store