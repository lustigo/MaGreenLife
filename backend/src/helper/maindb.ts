import sqlite from 'sqlite';

let dbcon: sqlite.Database;

export default async (ctx: any, next: any) => {
  if (!dbcon) {
    dbcon = await sqlite.open('./main.sqlite');
  }
  ctx.db = dbcon;
  await next();
};
