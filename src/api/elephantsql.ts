import pg from 'pg';
import type { APIContext, APIRoute } from 'astro'
export const GET_PRODUCTS: APIRoute = async(context: APIContext) => {
  const { limit } = context.params;
  const client = new pg.Client(import.meta.env.CONNECTION_STRING);
  await client.connect();
  try {
  const res = await client.query(`SELECT * FROM "public"."products" LIMIT ${limit}`);
  return new Response(
    JSON.stringify({
      products: res.rows,
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

export const GET_PRODUCT: APIRoute = async(context: APIContext) => {
  const { id } = context.params;
  console.log('id', id)
  const client = new pg.Client(import.meta.env.CONNECTION_STRING);
  await client.connect();
  try {
  const res = await client.query(`SELECT * FROM "public"."products" WHERE id = '${id}'`);
  console.log('res', res)
  return new Response(
    JSON.stringify({
      product: res.rows[0],
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

export const GET_CATEGORY: APIRoute = async(context: APIContext) => {
  const { category_id } = context.params;
  console.log('category id', category_id)
  const client = new pg.Client(import.meta.env.CONNECTION_STRING);
  await client.connect();
  try {
  const res = await client.query(`SELECT * FROM "public"."categories" WHERE id = '${category_id}'`);
  console.log('res', res)
  return new Response(
    JSON.stringify({
      category: res.rows[0],
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