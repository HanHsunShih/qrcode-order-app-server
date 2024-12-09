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

export const getProcessingOrdersAndProducts = async () => {
  try {
    const ordersAndProducts = await knex("order")
      .join("order_product", "order.id", "=", "order_product.order_id")
      .join("product", "order_product.product_id", "=", "product.id")
      .where("order.status", "Processing") //🍄
      .select(
        "order.table_number",
        "order.status",
        "order.created_at",
        "order_product.order_id",
        "order_product.product_id",
        "product.product_name",
        "order_product.quantity"
      );

    const groupByOrder = Object.groupBy(ordersAndProducts, (order) => {
      return order.order_id;
    });

    const groupByOrderArray = Object.entries(groupByOrder);

    return groupByOrderArray;
  } catch (error) {
    throw new Error("Error getting processing orders and products:" + error);
  }
};

export const getCompletedOrdersAndProducts = async () => {
  try {
    const completedOrdersAndProducts = await knex("order")
      .join("order_product", "order.id", "=", "order_product.order_id")
      .join("product", "order_product.product_id", "=", "product.id")
      .where("order.status", "Completed")
      .select(
        "order.table_number",
        "order.status",
        "order.created_at",
        "order_product.order_id",
        "order_product.product_id",
        "product.product_name",
        "order_product.quantity"
      );

    const groupByOrder = Object.groupBy(completedOrdersAndProducts, (order) => {
      return order.order_id;
    });

    const groupByOrderArray = Object.entries(groupByOrder);
    console.log(groupByOrderArray);

    return groupByOrderArray;
  } catch (error) {
    throw new Error("Error getting completed orders and products:" + error);
  }
};
