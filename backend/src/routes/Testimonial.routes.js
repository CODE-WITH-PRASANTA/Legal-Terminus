const express = require("express");
const router = express.Router();
const controller = require("../controllers/testimonial.controller");

router.post("/", controller.createTestimonial);
router.get("/", controller.getAllTestimonials);
router.put("/:id", controller.updateTestimonial);
router.delete("/:id", controller.deleteTestimonial);
router.patch("/:id/status", controller.toggleStatus);

module.exports = router;
