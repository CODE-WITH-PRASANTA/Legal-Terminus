import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import api from "../api/axios";

type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (employee: any) => void;
};

const AddEmployeeModal: React.FC<Props> = ({ open, onClose, onAdd }) => {
  if (!open) return null;

  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    department: "Marketing",
    designation: "",
    joiningDate: "",
    status: "Active",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [avatar, setAvatar] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password & Confirm Password must match");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value as string);
      });

      if (avatar) data.append("avatar", avatar);

      const res = await api.post("/employees/create", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      onAdd(res.data.data);
      onClose();
    } catch (error: any) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div
        className="
          absolute inset-0 sm:inset-auto
          sm:top-1/2 sm:left-1/2
          sm:-translate-x-1/2 sm:-translate-y-1/2
          bg-white
          w-full sm:max-w-xl
          h-full sm:h-auto
          sm:rounded-xl
          shadow-xl
          animate-scaleIn
          flex flex-col
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b">
          <h2 className="text-sm sm:text-base font-semibold text-gray-900">
            Add Employee
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          >
            <FiX size={16} />
          </button>
        </div>

        {/* Scrollable Form */}
        <form
          onSubmit={handleSubmit}
          className="
            flex-1 overflow-y-auto
            px-4 sm:px-5 py-4
            space-y-4
          "
        >
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter full name"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                placeholder="example@email.com"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="+91 9876543210"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Department + Designation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Department
              </label>
              <select
                name="department"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={handleChange}
              >
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Design</option>
                <option>HR</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Designation
              </label>
              <input
                name="designation"
                type="text"
                placeholder="e.g. Software Engineer"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Joining Date + Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Joining Date
              </label>
              <input
                name="joiningDate"
                type="date"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Employment Status
              </label>
              <select
                name="status"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={handleChange}
              >
                <option>Active</option>
                <option>On Leave</option>
                <option>Probation</option>
                <option>Remote</option>
              </select>
            </div>
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Address
            </label>
            <textarea
              name="address"
              rows={2}
              placeholder="Enter address"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Profile Photo */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Profile Photo
            </label>
            <input
              type="file"
              className="w-full text-sm border rounded-md px-3 py-1.5 bg-white"
              onChange={(e) => setAvatar(e.target.files?.[0] || null)}
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end pt-3">
            <button
              type="submit"
              disabled={loading}
              className="
                bg-green-600 hover:bg-green-700
                text-white px-5 py-2
                rounded-md text-sm font-medium
                transition
              "
            >
              {loading ? "Creating..." : "Add Employee"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
