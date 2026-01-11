import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blog.routes.js";
import categoryRoutes from "./routes/category.routes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/admin/blog", blogRoutes);


app.use("/api/admin/category", categoryRoutes);

export default app;
