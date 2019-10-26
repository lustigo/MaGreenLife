async function rnvGetStationMW(ctx: any) {
    ctx.body = await ctx.dbrnv.get(`SELECT hafasid, longname FROM "rnv" WHERE "longName" LIKE "%${ctx.request.body.query}%"`);
}

export default rnvGetStationMW;
