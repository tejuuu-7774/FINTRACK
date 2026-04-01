import express from "express";
import { getDashboardSummary } from "../controllers/dashboardController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// only analyst or admin can access dashboard insights
router.get("/", protect, authorizeRoles("admin", "analyst"), getDashboardSummary);

export default router;