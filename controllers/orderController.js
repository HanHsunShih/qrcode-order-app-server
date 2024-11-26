import { getAllContents, getItemWithId } from "../helpers/db_helpers.js";

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
