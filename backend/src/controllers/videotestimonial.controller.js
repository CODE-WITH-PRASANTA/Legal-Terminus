import VideoTestimonial from "../models/Videotestimonial.model.js";

/* CREATE */
export const createVideoTestimonial = async (req, res) => {
  try {
    const video = await VideoTestimonial.create(req.body);
    return res.status(201).json(video);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

/* GET ALL */
export const getVideoTestimonials = async (req, res) => {
  try {
    const videos = await VideoTestimonial.find().sort({ createdAt: -1 });
    return res.status(200).json(videos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* UPDATE */
export const updateVideoTestimonial = async (req, res) => {
  try {
    const updated = await VideoTestimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Video testimonial not found" });
    }

    return res.status(200).json(updated);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

/* DELETE */
export const deleteVideoTestimonial = async (req, res) => {
  try {
    const deleted = await VideoTestimonial.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Video testimonial not found" });
    }

    return res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

/* TOGGLE STATUS */
export const toggleVideoTestimonialStatus = async (req, res) => {
  try {
    const video = await VideoTestimonial.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ message: "Video testimonial not found" });
    }

    video.status = video.status === "draft" ? "published" : "draft";
    await video.save();

    return res.status(200).json(video);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
