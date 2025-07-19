// routes/orderRoutes.js
import express from "express";
import {
  placeOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
} from "../controllers/orderController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, placeOrder);                // Place a new order
router.get("/my-orders", protect, getMyOrders);       // Get logged-in user's orders
router.get("/:id", protect, getOrderById);            // Get specific order by ID
router.get("/", protect, adminOnly, getAllOrders);    // Admin: Get all orders

export default router;
