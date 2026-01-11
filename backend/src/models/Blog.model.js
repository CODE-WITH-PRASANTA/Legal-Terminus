import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, minlength: 5 },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    tags: { type: String },
    author: { type: String, required: true },
    shortDesc: { type: String, required: true, minlength: 10 },
    content: { type: String, required: true, minlength: 50 },
    image: { type: String },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    metaTitle: { type: String, required: true },
    metaDesc: { type: String, required: true },
    metaKeywords: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
