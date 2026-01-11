import express from "express";
import { createEmployee } from "../controllers/employee.controller.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

router.post("/create", upload.single("avatar"), createEmployee);

export default router;
