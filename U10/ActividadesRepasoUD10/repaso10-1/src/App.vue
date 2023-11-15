<template>
  <div class="app">
    <TodoList message="Cosas  que hacer este año:"></TodoList>
    <AddList></AddList>
    <DelAll></DelAll>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import AddList from './components/AddList.vue'
import DelAll from './components/DelAll.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    AddList,
    DelAll
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: auto; */
  padding-left: 35%;
  color: #2c3e50;
  margin-top: 60px;
}

#app>h1{
  text-align: center;
  padding-left: 0%;
}
</style>
