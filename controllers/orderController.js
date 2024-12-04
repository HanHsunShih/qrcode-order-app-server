import {
  getAllContents,
  getItemWithId,
  addNewRow,
  getOrdersAndProducts,
} from "../helpers/db_helpers.js";

import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

export const getAllOrders = async (req, res) => {
  try {
    const allOrders = await getAllContents("order");
    allOrders.length
      ? res.status(200).json(allOrders)
      : res.status(404).json({ message: "Products not found" });
  } catch (error) {
    res.status(500).json(`Error retrieving Products: ${error}`);
  }
};

export const getOrdersWithProducts = async (req, res) => {
  try {
    const ordersAndProducts = await getOrdersAndProducts();

    if (!ordersAndProducts) {
      res
        .status(404)
        .json({ message: "orders and products not found" + error });
    }

    res.status(200).json(ordersAndProducts);
  } catch (error) {
    res.status(500).json(`Error getting orders and products: ${error}`);
  }
};

export const getOrderById = async (req, res) => {
  const orderId = req.params.order_id;
  try {
    const order = await getItemWithId("order", orderId);

    if (!order) {
      res
        .status(404)
        .json({ message: `Could not found order with Id: ${orderId}` });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: `Error fetching from database` + error });
  }
};

export const addOrder = async (req, res) => {
  if (!req.body.table_number || !req.body.products) {
    return res.status(401).json({
      message:
        "Missing properties! You must provide alll of the information⛄️",
    });
  }
  try {
    const newOrderId = await knex("order").insert({
      table_number: req.body.table_number,
      status: "Processing",
    });

    req.body.products.forEach(async (product) => {
      const newOrderedProduct = await knex("product")
        .where({ id: product.id })
        .first();
      const order_product = await knex("order_product").insert({
        order_id: newOrderId[0], //🍄
        product_id: newOrderedProduct.id,
        quantity: product.quantity,
      });
    });

    newOrderId
      ? res.status(201).json(newOrderId)
      : res
          .status(500)
          .json({ message: `Error writing to database: ${error}` });
  } catch (error) {
    res.status(500).json({ message: `Error writing to database: ${error}` });
  }
};
