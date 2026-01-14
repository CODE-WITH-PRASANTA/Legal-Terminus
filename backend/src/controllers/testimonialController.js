import Testimonial from "../models/Testimonialmodel.js";

/* ================= CREATE ================= */
const createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch (error) {
    console.error("Create error:", error);
    res.status(400).json({ message: error.message });
  }
};

/* ================= GET ALL ================= */
const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: error.message });
  }
};

/* ================= UPDATE ================= */
const updateTestimonial = async (req, res) => {
  try {
    const updated = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= DELETE ================= */
const deleteTestimonial = async (req, res) => {
  try {
    const deleted = await Testimonial.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ================= TOGGLE STATUS ================= */
const toggleStatus = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    testimonial.status =
      testimonial.status === "draft" ? "published" : "draft";

    await testimonial.save();

    res.status(200).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* ✅ EXPORT */
export default {
  createTestimonial,
  getAllTestimonials,
  updateTestimonial,
  deleteTestimonial,
  toggleStatus,
};
