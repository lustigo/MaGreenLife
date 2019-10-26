import Koa from 'koa';
import Router from 'koa-router';
import StartInfoApi, {IStationMonitor} from '../rnv/startInfoApi';

interface IGetVehicleInfoBody {
    hafasId: number;
}

const rnvClient = new StartInfoApi(process.env.RNVAPITOKEN as string);

async function rnvGetStationMonitorMW(ctx: Koa.ParameterizedContext<any, Router.IRouterParamContext<any, {}>>) {
   ctx.body = await rnvClient.getStationMonitor((ctx.request.body).hafasId) as IStationMonitor;
}

export default rnvGetStationMonitorMW;
