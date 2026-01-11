import React from "react";
import { FiX } from "react-icons/fi";

type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (employee: any) => void;
};

const AddEmployeeModal: React.FC<Props> = ({ open, onClose, onAdd }) => {
  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAdd({
      id: Date.now(),
      name: "New Employee",
      role: "Designation",
      department: "Marketing",
      hireDate: "2026-01-10",
      email: "example@email.com",
      phone: "+919876543210",
      status: "Active",
      avatar: "",
    });

    onClose();
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
              type="text"
              placeholder="Enter full name"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
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
                type="email"
                placeholder="example@email.com"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
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
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
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
                type="text"
                placeholder="e.g. Software Engineer"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
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
                type="date"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Employment Status
              </label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
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
                type="password"
                placeholder="Enter password"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
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
              rows={2}
              placeholder="Enter address"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
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
            />
          </div>

          {/* Footer */}
          <div className="flex justify-end pt-3">
            <button
              type="submit"
              className="
                bg-green-600 hover:bg-green-700
                text-white px-5 py-2
                rounded-md text-sm font-medium
                transition
              "
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
