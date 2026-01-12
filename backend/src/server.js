import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import blogRoutes from "./routes/blog.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import testimonialRoutes from "./routes/testimonial.routes.js";
import employeeRoutes from "./routes/employee.routes.js";
import videoTestimonialRoutes from "./routes/videotestimonial.routes.js";
import clientRoutes from "./routes/client.routes.js";

import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

/* ✅ CORS FIX */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/admin/blog", blogRoutes);
app.use("/api/admin/category", categoryRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/video-testimonials", videoTestimonialRoutes);


app.use("/api/clients", clientRoutes);


/* START SERVER */
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
  );
};

startServer();
