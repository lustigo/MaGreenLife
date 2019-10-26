import Router from "vue-router";
import Quiz from "./components/Quiz.vue";
import Main from "./components/Main.vue";
import DetailPointsView from "./components/DetailPoint.vue";
import Action from "./components/Action.vue";
import OeffiAction from "./components/OeffiAction.vue";
import ScanCup from "./components/ScanCup.vue";
import SelStation from "./components/OeffiSelStation.vue";
import FriendsRanking from "./components/FriendsRanking.vue";

const router = new Router({
  routes: [
    { path: "/quiz", component: Quiz },
    { path: "/action", component: Action },
    { path: "/action/oeffi", component: OeffiAction },
    { path: "/", component: Main },
    { path: "/detailPoints", component: DetailPointsView },
    { path: "/ranking", component: FriendsRanking },
    { path: "/action/cup", component: ScanCup },
    {
      path: "/action/oeffi/selStation/:hafasId",
      name: "selStation",
      component: SelStation
    },
    { path: "/", component: Main }
  ]
});

export default router;
