import Router from 'koa-router';
import rnvGetStationMW from './getStation';
import rnvGetStationMonitorMW from './getStationMonitor';
import QuestionMW from './question';

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Hallo Welt';
});

router.get('/getQuestionOfDay', QuestionMW);

router.post('/getStationMonitor', rnvGetStationMonitorMW);

router.post('/getStation', rnvGetStationMW);

export default router;
