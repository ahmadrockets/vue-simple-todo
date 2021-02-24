<template>
  <div>
    <div class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <FormTodo />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import FormTodo from "./components/FormTodo";
export default {
  name: 'App',
  components: {
    Header, FormTodo
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
