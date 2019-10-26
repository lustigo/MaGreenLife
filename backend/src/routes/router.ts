import Router from 'koa-router';
import rnvGetStationMonitorMW from './getStationMonitor';
import {PointsGet, PointsPost} from './points';
import QuestionMW from './question';

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Hallo Welt';
});

/**
 * Parameter: Uid
 */
router.get('/points', PointsGet);

/**
 * Body: uid & eventtype (both numbers)
 */
router.post('/points', PointsPost);

/**
 * No Parameter
 */
router.get('/getQuestionOfDay', QuestionMW);

/**
 * Body: hafasId (Number)
 */
router.post('/getStationMonitor', rnvGetStationMonitorMW);

export default router;
