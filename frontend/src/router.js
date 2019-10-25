import Router from "vue-router";
import Quiz from "./components/Quiz.vue";
import Main from "./components/Main.vue";
import Action from "./components/Action.vue";

const router = new Router({
  routes: [
    { path: "/quiz", component: Quiz },
    { path: "/action", component: Action },
    { path: "/", component: Main }
  ]
});

export default router;
