import { getAllContents } from "../helpers/db_helpers.js";

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await getAllContents("product");
    allProducts.length
      ? res.status(200).json(allProducts)
      : res.status(404).json({ messages: "Products not found" });
  } catch (error) {
    res.status(500).send(`Error retrieving Products: ${error}`);
  }
};
