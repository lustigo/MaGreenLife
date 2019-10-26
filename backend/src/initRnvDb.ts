import SQL from 'sql-template-strings';
import sqlite from 'sqlite';
import StartInfoApi from './rnv/startInfoApi';

async function initRnvDb(filename: string) {
    const rnvClient = new StartInfoApi(process.env.RNVAPITOKEN as string);
    const response = await rnvClient.getStations();

    const db = await sqlite.open(filename);
    await db.all(SQL`CREATE TABLE "rnv" (
        "hafasId" INTEGER NOT NULL,
        "longName" TEXT NOT NULL,
        "longitude" NUMERIC NOT NULL,
        "latitude" NUMERIC NOT NULL,
        PRIMARY KEY("hafasId")
        );`);

    await db.all(SQL`CREATE TABLE "occupancy" (
        "tourId" TEXT NOT NULL,
        "positionInTour" INTEGER NOT NULL,
        "lineId" TEXT NOT NULL,
        "time" TEXT NOT NULL,
        "userid" INTEGER NOT NULL,
        "occupancy" INTEGER NOT NULL,
        PRIMARY KEY("tourId", "positionInTour", "lineId", "time", "userid")
    );`);

    for (const value of response.stations) {
        await db.all(SQL`INSERT INTO "rnv" ("hafasId", "longName", "longitude", "latitude") VALUES (${value.hafasID}, ${value.longName}, ${value.latitude}, ${value.longitude})`);
    }
}

(async () => {
    await initRnvDb('rnv.sqlite');
})();
