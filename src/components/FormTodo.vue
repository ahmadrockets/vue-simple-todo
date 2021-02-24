<template>
  <div>
    <div class="mt-10 grid grid-cols-12 gap-4">
      <div class="col-span-3"></div>
      <div class="col-span-5">
        <input v-model="todoinput" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="To do">
      </div>
      <div class="col-span-2">
        <button @click="createTodoList(todoinput)" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add To Do
        </button>
      </div>
      <div class="col-span-3"></div>
    </div>
    <div class="mt-5 grid grid-cols-12 gap-4">
      <div class="col-span-3"></div>
      <div class="col-span-6">
        <table class="table-fixed min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-5/6 ...">
                Todo
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6 ...">
                Delete
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(list, idx) in getAllTodo" :key="idx">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-lg font-medium text-gray-900">
                  {{list}}
                </div>
              </td>
              <td>
                <a @click="deleteTodo(idx)" href="#" class="text-indigo-600 hover:text-indigo-900"><b>Delete To Do</b></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-span-3"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'FormTodo',
  data: () => {
    return{
      todoinput:"",
    }
  },
  computed:{
    ...mapGetters(['getAllTodo']),
  },
  methods:{
    ...mapActions(["createTodo", "deleteTodo"]),
    createTodoList(payload){
      this.createTodo(payload);
      this.todoinput = "";
    }
  }
}
</script>
