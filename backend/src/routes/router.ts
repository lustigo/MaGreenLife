import Router from "koa-router";
import rnvGetStationMW from "./getStation";
import rnvGetStationMonitorMW from "./getStationMonitor";
import {
  PointsGet,
  PointsHistory,
  PointsOfFriendsHistory,
  PointsPost,
  FriendsRannking
} from "./points";
import QuestionMW from "./question";

const router = new Router();

router.get("/", ctx => {
  ctx.body = "Hallo Welt";
});

/**
 * Parameter: Uid
 */
router.get("/points", PointsGet);

/**
 * Parameter: Uid
 */
router.get("/history", PointsHistory);

/**
 * Parameter: Uid
 */
router.get("/friendHistory", PointsOfFriendsHistory);

/**
 * Parameter: Uid
 */
router.get("/ranking", FriendsRannking);

/**
 * Body: uid & eventtype (both numbers)
 */
router.post("/points", PointsPost);

/**
 * No Parameter
 */
router.get("/getQuestionOfDay", QuestionMW);

/**
 * Body: hafasId (Number)
 */
router.post("/getStationMonitor", rnvGetStationMonitorMW);

/**
 * Body: query (String that is likely to be the Stationname)
 */
router.post("/getStation", rnvGetStationMW);

export default router;
