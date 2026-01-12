import mongoose from "mongoose";

const videoTestimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  { timestamps: true }
);

/* ✅ Capital model name */
const VideoTestimonial = mongoose.model(
  "VideoTestimonial",
  videoTestimonialSchema
);

export default VideoTestimonial;
