import Router from 'koa-router';
import QuestionMW from './question';

const router = new Router();

router.get('/', (ctx,_) => {
	ctx.body = "Hallo Welt";
});


router.get("/getQuestionOfDay", QuestionMW);

export default router;