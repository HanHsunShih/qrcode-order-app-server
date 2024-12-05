import express from "express";
import {
  getAllOrders,
  getOrderById,
  addOrder,
  getProcessingOrdersWithProducts,
  getCompletedOrderWithProducts,
  changeStatus,
} from "../controllers/orderController.js";

const router = express.Router();

// router.get("/", getAllOrders);
// router.get("/:order_id", getOrderById);
router.post("/", addOrder);
router.get("/", getProcessingOrdersWithProducts);
router.put("/", changeStatus);
router.get("/history", getCompletedOrderWithProducts);

export default router;
