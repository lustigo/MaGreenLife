<template>
  <v-app id="app">
    <v-content>
      <MainComponent msg="Welcome to Your Vue.js App" />
    </v-content>
    <v-bottom-navigation>
      <v-btn v-on:click="navMain">
        <span>Main</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn v-on:click="navAction">
        <span>Action</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn v-on:click="navQuiz">
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
  },
  methods: {
    navMain: function() {
      this.$router.push({ path: "/" });
    },
    navAction: function() {
      this.$router.push({ path: "/action" });
    },
    navQuiz: function() {
      this.$router.push({ path: "/quiz" });
    }
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
