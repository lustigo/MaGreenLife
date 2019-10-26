async function PointsGet(ctx: any) {
  const score = await ctx.db.get(
    `select sum(score) count from eventtype, events where eventtype.id = events.type and events.user = ${ctx.request.query.uid}`
  );
  ctx.body = { score: score.count };
}

async function PointsPost(ctx: any) {
  const sql =
    "INSERT INTO events (type, date, user) VALUES (" +
    ctx.request.body.eventtype +
    ', strftime("%s", "now"), ' +
    ctx.request.body.uid +
    ");";
  await ctx.db.exec(sql).catch(console.log);
  ctx.status = 200;
}

async function getPointHistory(uid: Number, ctx: any) {}

async function PointsHistory(ctx: any) {
  const sql = `select * from events 
    INNER JOIN eventtype ON eventtype.id = events.type 
    INNER JOIN users ON events.user = users.id
    WHERE  events.user = ${ctx.request.query.uid}`;
  ctx.body = await ctx.db.all(sql);
}

async function PointsOfFriendsHistory(ctx: any) {
  const result = await ctx.db.all(
    `select * from events 
    INNER JOIN eventtype ON eventtype.id = events.type 
    INNER JOIN users ON events.user = users.id
    WHERE (events.user IN (select follows from friendlist where friendlist.user = ${ctx.request.query.uid})) OR events.user = ${ctx.request.query.uid}
    `
  );
  ctx.body = result;
}

export { PointsGet, PointsPost, PointsHistory, PointsOfFriendsHistory };
