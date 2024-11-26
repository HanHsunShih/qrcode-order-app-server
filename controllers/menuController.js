import { getAllContents, getItemWithId } from "../helpers/db_helpers.js";

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

export const getProductById = async (req, res) => {
  const productId = req.params.product_id;
  try {
    const product = await getItemWithId("product", productId);

    if (!product) {
      return res
        .status(404)
        .json({ message: `Could not found product with Id: ${productId}` });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: `Error fetching from database` + error });
  }
};
