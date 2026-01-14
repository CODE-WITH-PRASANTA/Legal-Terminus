import express from "express";
import {
  getCategories,
  createCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

/* ROUTES */
router.get("/all", getCategories);
router.post("/create", createCategory);
router.delete("/delete/:id", deleteCategory);

export default router;
