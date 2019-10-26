async function PointsGet(ctx: any) {
  const score = await ctx.db.get(
    `select sum(score) count from eventtype, events where eventtype.id = events.type and events.user = ${ctx.request.query.uid}`,
  );
  ctx.body = { score: score.count };
}

async function PointsPost(ctx: any) {
  const sql =
    'INSERT INTO events (type, date, user) VALUES (' +
    ctx.request.body.eventtype +
    ', strftime("%s", "now"), ' +
    ctx.request.body.uid +
    ');';
  await ctx.db.exec(sql).catch(console.log);
  ctx.status = 200;
}

async function getPointHistory(uid: number, ctx: any) {
  const sql = `select * from eventtype, events where eventtype.id = events.type and events.user = ${uid}`;
  return ctx.db.get(sql);
}

async function PointsHistory(ctx: any) {
  const sql = `select * from events
    INNER JOIN eventtype ON eventtype.id = events.type
    INNER JOIN users ON events.user = users.id
    WHERE  events.user = ${ctx.request.query.uid}`;
  const result = await ctx.db.all(sql);

  for (const user of result) {
    user.description = user.description_personal;
  }

  ctx.body = result;
}

async function PointsOfFriendsHistory(ctx: any) {
  const result = await ctx.db.all(
    `select * from events
    INNER JOIN eventtype ON eventtype.id = events.type
    INNER JOIN users ON events.user = users.id
    WHERE (events.user IN (select follows from friendlist where friendlist.user = ${ctx.request.query.uid})) OR events.user = ${ctx.request.query.uid}
    `,
  );

  for (const user of result) {
    user.description = user.description.replace('%1', user.name);
  }

  ctx.body = result;
}

export { PointsGet, PointsPost, PointsHistory, PointsOfFriendsHistory };
