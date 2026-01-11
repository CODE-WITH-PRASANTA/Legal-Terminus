import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";
import employeeRoutes from "./routes/employee.routes.js";


const PORT = process.env.PORT || 5000;


app.use("/api/employees", employeeRoutes);
app.use(
  cors({
    origin: "http://localhost:5175", // Vite frontend
    credentials: true,               // allow cookies / auth
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
