import postgres from 'postgres';
import type { APIContext, APIRoute } from 'astro';
const sql = postgres(import.meta.env.CONNECTION_STRING);
export const GET_PRODUCTS: APIRoute = async(context: APIContext) => {
  const { limit } = context.params;
  try {
  const res = await sql`SELECT * FROM "public"."products" LIMIT ${limit}`;
  console.log('products res', res)
  return new Response(
    JSON.stringify({
      products: res,
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
    //client.end();
  }
  //client.end();
}

export const GET_PRODUCT: APIRoute = async(context: APIContext) => {
  const { id } = context.params;
  console.log('id', id)
  try {
  const res = await sql`SELECT * FROM "public"."products" WHERE id = ${id}`;
  console.log('res product', res)
  return new Response(
    JSON.stringify({
      product: res[0],
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
    //client.end();
  }
  //client.end();
}

export const GET_CATEGORY: APIRoute = async(context: APIContext) => {
  const { category_id } = context.params;
  console.log('category id', category_id);
  try {
  const res = await sql`SELECT * FROM "public"."categories" WHERE id = ${category_id}`;
  console.log('res', res)
  return new Response(
    JSON.stringify({
      category: res[0],
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
   // client.end();
  }
 // client.end();
}