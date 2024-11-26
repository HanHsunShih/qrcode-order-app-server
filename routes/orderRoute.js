import express from "express";
import { getAllOrders, getOrderById } from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getAllOrders);
router.get("/:order_id", getOrderById);

export default router;
