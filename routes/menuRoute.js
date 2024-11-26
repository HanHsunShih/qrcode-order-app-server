import express from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/menuController.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:product_id", getProductById);

export default router;
