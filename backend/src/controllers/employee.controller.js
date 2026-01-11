import Employee from "../models/Employee.model.js";
import { processImage } from "../middleware/upload.middleware.js";

export const createEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      department,
      designation,
      joiningDate,
      status,
      address,
      password,
      confirmPassword,
    } = req.body;

    /* 1️⃣ Basic validation */
    if (!password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password is required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and confirm password do not match",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    /* 2️⃣ Check duplicate email */
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res.status(409).json({
        success: false,
        message: "Employee already exists with this email",
      });
    }

    /* 3️⃣ Image processing */
    const avatar = await processImage(req.file);

    /* 4️⃣ Create employee account */
    const employee = await Employee.create({
      name,
      email,
      phone,
      department,
      designation,
      joiningDate,
      status,
      address,
      password,
      avatar,
    });

    /* 5️⃣ Success response */
    res.status(201).json({
      success: true,
      message: "Employee account created successfully",
      data: {
        id: employee._id,
        name: employee.name,
        email: employee.email,
        department: employee.department,
        designation: employee.designation,
        status: employee.status,
      },
    });
  } catch (error) {
    console.error("Employee Create Error:", error);

    /* 6️⃣ Handle mongoose validation errors cleanly */
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors)[0].message,
      });
    }

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
