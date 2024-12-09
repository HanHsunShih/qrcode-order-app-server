import express from "express";
import {
  getAllOrders,
  getOrderById,
  addOrder,
  getProcessingOrders,
  getCompletedOrders,
  changeStatus,
} from "../controllers/orderController.js";
import authorise from "../middleware/auth.js";

const router = express.Router();

// router.get("/", getAllOrders);
// router.get("/:order_id", getOrderById);
router.get("/", authorise, getProcessingOrders);
router.get("/history", getCompletedOrders);
router.post("/", addOrder);
router.put("/", changeStatus);

export default router;
