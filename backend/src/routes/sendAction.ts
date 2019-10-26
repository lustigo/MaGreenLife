async function sendAction(ctx: any) {
  switch (ctx.request.body.type) {
    case 'rnvOccupancy':
      const sql = `insert into occupancy (tourId, positionInTour, lineId, time, userid, occupancy) values ("${ctx.request.body.tourId}", "${ctx.request.body.positionInTour}", "${ctx.request.body.lineId}", "${ctx.request.body.time}", "${ctx.request.body.uid}", "${ctx.request.body.occupancy}")`;
      await ctx.dbrnv.exec(sql);
      ctx.status = 200;
      break;

    // todo: more types

    default:
      ctx.status = 400;
  }
}

export default sendAction;
