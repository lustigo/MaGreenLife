
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';
import maindb from './helper/maindb';
import rnvdb from './helper/rnvdb';
import router from './routes/router';

const app = new Koa();

app.use(bodyParser());
app.use(cors());
app.use(maindb);
app.use(rnvdb);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => console.log('app run at 4000'));
