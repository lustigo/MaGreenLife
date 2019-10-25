<template>
  <v-app id="app">
    <MainComponent msg="Welcome to Your Vue.js App" />
    <v-footer color="primary" padless>
      <v-row align="center" justify="center" no-gutters>
        <v-col><v-btn>Main</v-btn></v-col>
        <v-col><v-btn>Action</v-btn></v-col>
        <v-col ><v-btn>Quiz</v-btn></v-col>
      </v-row>
    </v-footer>
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
