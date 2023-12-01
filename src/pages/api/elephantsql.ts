import * as pg from 'pg';
import type { APIContext, APIRoute } from 'astro'
export const GET: APIRoute = async(context: APIContext) => {
  const quantity = context.params.quantity;
  const client = new pg.Client(import.meta.env.CONNECTION_STRING);
  await client.connect();
  try {
  const res = await client.query(`SELECT * FROM products WHERE quantity = ${quantity}`);
  console.log('res', res)
  return new Response(
    JSON.stringify({
      greeting: res.rows[0].name,
      status: 200
    })
  );
  }
  catch(err) {
    console.error(err);
    JSON.stringify({
      greeting: err,
      status: 500
    })
  }
  finally {
    client.end();
  }
  client.end();
}