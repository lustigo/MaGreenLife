<template>
  <v-app id="app">
    <v-content>
      <MainComponent msg="Welcome to Your Vue.js App" />
    </v-content>
    <v-bottom-navigation>
      <v-btn>
        <span>Main</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn>
        <span>Action</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn>
        <span>Quiz</span>
        <v-icon>mdi-help</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
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
