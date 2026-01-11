import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import blogRoutes from "./routes/blog.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import testimonialRoutes from "./routes/testimonial.routes.js";
import employeeRoutes from "./routes/employee.routes.js";
import { connectDB } from "./config/db.js";

/* ================= LOAD ENV ================= */
dotenv.config();

/* ================= INIT APP ================= */
const app = express();

/* ================= MIDDLEWARE ================= */
app.use(
  cors({
    origin: "http://localhost:5175", // frontend
    credentials: true,
  })
);

app.use(express.json());
app.use("/uploads", express.static("uploads"));

/* ================= ROUTES ================= */
app.use("/api/admin/blog", blogRoutes);
app.use("/api/admin/category", categoryRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/employees", employeeRoutes);

/* ================= START SERVER ================= */
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server start failed:", error);
  }
};

startServer();
