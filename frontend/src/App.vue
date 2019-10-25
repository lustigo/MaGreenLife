<template>
  <div id="app">
    <MainComponent msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import MainComponent from "./components/Main.vue";

export default {
  name: "app",
  components: {
    MainComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
