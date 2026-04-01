import express from "express";
import {
  createTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transactionController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create transaction (admin only)
router.post("/", protect, authorizeRoles("admin"), createTransaction);

// Get transactions (all roles)
router.get("/", protect, getTransactions);

// Update transaction (admin only)
router.put("/:id", protect, authorizeRoles("admin"), updateTransaction);

// Delete transaction (admin only)
router.delete("/:id", protect, authorizeRoles("admin"), deleteTransaction);

export default router;