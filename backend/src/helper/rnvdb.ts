import sqlite from 'sqlite';

let dbcon: sqlite.Database;

export default async (ctx: any, next: any) => {
  if (!dbcon) {
    dbcon = await sqlite.open('./rnv.sqlite');
  }
  ctx.dbrnv = dbcon;
  await next();
};
