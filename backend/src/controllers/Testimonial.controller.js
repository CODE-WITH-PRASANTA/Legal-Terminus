const testimonial = require("../models/Testimonial.model");

/* ================= CREATE ================= */
exports.createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= GET ALL ================= */
exports.getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= UPDATE ================= */
exports.updateTestimonial = async (req, res) => {
  try {
    const updated = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= DELETE ================= */
exports.deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= TOGGLE STATUS ================= */
exports.toggleStatus = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    testimonial.status =
      testimonial.status === "draft" ? "published" : "draft";
    await testimonial.save();
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
