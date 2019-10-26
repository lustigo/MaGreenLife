import Router from "vue-router";
import Quiz from "./components/Quiz.vue";
import Main from "./components/Main.vue";
import Action from "./components/Action.vue";
import OeffiAction from "./components/OeffiAction.vue";
import ScanCup from "./components/ScanCup.vue";

const router = new Router({
  routes: [
    { path: "/quiz", component: Quiz },
    { path: "/action", component: Action },
    { path: "/action/oeffi", component: OeffiAction },
    { path: "/action/cup", component: ScanCup },
    { path: "/", component: Main }
  ]
});

export default router;
