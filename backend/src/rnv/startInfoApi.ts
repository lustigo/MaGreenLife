import got from 'got';

interface IRnvDeparture {
    time: string;
    status: string;
    direction: string;
    plattform: string;
    transportation: string;
    statusNote: string;
    lineId: string;
    lineLabel: string;
    differenceTime: string;
    foreignLine: string;
    newsAvailable: string;
}

interface IStationMonitor {
    ticket: string;
    pastRequestText: string;
    updateTime: string;
    updateIterations: string;
    stationInfos: [];
    time: string;
    icon: string;
    label: string;
    color: string;
    shortLabel: string;
    projectedTime: string;
    otherTimes: [];
    otherProjectedTimes: [];
    listOfDepartures: IRnvDeparture;
}

export default class StartInfoApi {

    private client: any;

    constructor(apiKey: string) {
        this.client = got.extend({
            baseUrl: 'http://rnv.the-agent-factory.de:8080/easygo2/api',
            headers: {
                RNV_API_TOKEN: apiKey,
            },
        });
    }

    public async getStationMonitor(hafasId: number): Promise<IStationMonitor> {
        return this.client.get(`/regions/rnv/modules/stationmonitor/element?hafasID=${hafasId}&time=null`);
    }
}
