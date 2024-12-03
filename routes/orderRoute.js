import express from "express";
import {
  getAllOrders,
  getOrderById,
  addOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getAllOrders);
router.get("/:order_id", getOrderById);
router.post("/", addOrder);

// add new router for post - addOrder

export default router;
