import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

export const getAllContents = async (tableName) => {
  try {
    return await knex(tableName);
  } catch (error) {
    throw new Error("Error fetching Table information:" + error);
  }
};

export const getItemWithId = async (tableName, productId) => {
  try {
    const item = await knex(tableName).where({ id: productId }).first();
    return item;
  } catch (error) {
    throw new Error("Error fetching product information:" + error);
  }
};

export const addNewRow = async (tableName, body) => {
  try {
    const newOrderIds = await knex(tableName).insert(body);
    const newOrder = await knex(tableName)
      .where({ id: newOrderIds[0] })
      .first();
    return newOrder;
  } catch (error) {
    throw new Error("Error creating new order row, error : " + error);
  }
};

export const getOrdersAndProducts = async (tableName) => {
  try {
    const ordersAndProducts = await knex("order")
      .join("order_product", "ORDER.id", "=", "order_product.order_id")
      .join("product", "order_product.product_id", "=", "product.id")
      .select(
        "order.table_number",
        "order.status",
        "order_product.order_id",
        "order_product.product_id",
        "product.product_name"
      );

    return ordersAndProducts;
  } catch (error) {
    throw new Error("Error getting orders and products:" + error);
  }
};
