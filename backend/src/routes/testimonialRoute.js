import express from "express";
import testimonialController from "../controllers/testimonialController.js";

const router = express.Router();

router.post("/", testimonialController.createTestimonial);
router.get("/", testimonialController.getAllTestimonials);
router.put("/:id", testimonialController.updateTestimonial);
router.delete("/:id", testimonialController.deleteTestimonial);
router.patch("/:id/status", testimonialController.toggleStatus);

export default router;
