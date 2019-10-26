async function PointsGet(ctx: any) {
  const score = await ctx.db.get(`select count(score) count from eventtype, events where eventtype.id = events.type and events.user = ${ctx.request.query.uid}`);
  ctx.body = { score: score.count };
}

async function PointsPost(ctx: any) {
  const sql = 'INSERT INTO events (type, date, user) VALUES (' + ctx.request.body.eventtype + ', strftime("%s", "now"), ' + ctx.request.body.uid + ');';
  await ctx.db.exec(sql).catch(console.log);
  ctx.status = 200;
}

export {PointsGet, PointsPost};
