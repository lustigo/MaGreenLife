async function PointsGet(ctx: any) {

}

async function PointsPost(ctx: any) {
  const sql = 'INSERT INTO events (type, date, user) VALUES (' + ctx.request.body.eventtype + ', strftime("%s", "now"), ' + ctx.request.body.uid + ');';
  await ctx.db.exec(sql).catch(console.log);
  ctx.status = 200;
}

export {PointsGet, PointsPost};
