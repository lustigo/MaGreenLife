import Router from "vue-router";
import Quiz from "./components/Quiz.vue";
import Main from "./components/Main.vue";
import DetailPointsView from "./components/DetailPoint.vue";
import Action from "./components/Action.vue";
import OeffiAction from "./components/OeffiAction.vue";
import Checkin from "./components/OeffiCheckin.vue";
import ScanCup from "./components/ScanCup.vue";
import SelStation from "./components/OeffiSelStation.vue";

const router = new Router({
  routes: [
    { path: "/quiz", component: Quiz },
    { path: "/action", component: Action },
    { path: "/action/oeffi", component: OeffiAction },
    { path: "/", component: Main },
    { path: "/detailPoints", component: DetailPointsView },
    { path: "/action/cup", component: ScanCup },
    {
      path: "/action/oeffi/selStation/:hafasId",
      name: "selStation",
      component: SelStation
    },
    {
      path: "/action/oeffi/checkin/:departure",
      name: "checkin",
      component: Checkin
    },
    { path: "/", component: Main }
  ]
});

export default router;
