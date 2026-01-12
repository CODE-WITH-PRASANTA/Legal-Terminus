import express from "express";
import {
  createEmployee,
  getAllEmployees,
} from "../controllers/employee.controller.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

/* ➕ Create Employee */
router.post("/create", upload.single("avatar"), createEmployee);

/* 📥 Fetch All Employees */
router.get("/", getAllEmployees);

export default router;
