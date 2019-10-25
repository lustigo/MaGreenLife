
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './routes/router';

const app = new Koa();

app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => console.log('app run at 4000'));