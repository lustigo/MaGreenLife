<template>
  <v-app id="app">
    <v-content id="content">
      <router-view></router-view>
    </v-content>
    <v-bottom-navigation
      id="bottom-navigation"
      color="accent"
      background-color="primary"
      fixed
      grow
    >
      <v-btn v-on:click="navMain">
        <span>Main</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn v-on:click="navAction">
        <span>Action</span>
        <v-icon>mdi-firework</v-icon>
      </v-btn>
      <v-btn v-on:click="navQuiz">
        <span>Quiz</span>
        <v-icon>mdi-help</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "app",
  created() {
    if (!localStorage.uid) {
      localStorage.uid = 1;
    }
  },
  methods: {
    navMain: function() {
      this.$router.push({ path: "/" }).catch(() => {});
    },
    navAction: function() {
      this.$router.push({ path: "/action" }).catch(() => {});
    },
    navQuiz: function() {
      this.$router.push({ path: "/quiz" }).catch(() => {});
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#bottom-navigation > button {
  height: 100%;
}
</style>
