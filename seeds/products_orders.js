// import seed data files, arrays of objects
//import productData from "../seed-data/product.js";
import orderData from "../seed-data/order.js";
import order_productData from "../seed-data/order_product.js";

export async function seed(knex) {
  // await knex("product").del();
  await knex("order").del();
  await knex("order_product").del();
  // await knex("product").insert(productData);
  await knex("order").insert(orderData);
  await knex("order_product").insert(order_productData);
}
