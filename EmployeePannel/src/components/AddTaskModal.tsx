import React, { useState } from "react";
import { FiX } from "react-icons/fi";

/* ================= TYPES ================= */
type Props = {
  open: boolean;
  onClose: () => void;
  onCreate: (task: any) => void;
};

const AddTaskModal: React.FC<Props> = ({ open, onClose, onCreate }) => {
  if (!open) return null;

  const [form, setForm] = useState({
    title: "",
    leadTo: "",
    priority: "Low",
    startDate: "",
    endDate: "",
    description: "",
    clientDetails: "",
    status: "Not Started",
    projectType: "",
    clientAccount: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg">

        {/* ================= HEADER ================= */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">Create Task</h2>
          <button onClick={onClose}>
            <FiX className="text-gray-500 hover:text-gray-800" />
          </button>
        </div>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">

          {/* Task Title */}
          <div>
            <label className="text-sm text-gray-600">Task Title</label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter task title"
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Lead To + Priority */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Lead To</label>
              <select
                name="leadTo"
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              >
                <option value="">Select Employee</option>
                <option>Manager</option>
                <option>Developer</option>
                <option>Designer</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Priority</label>
              <select
                name="priority"
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          {/* Start Date + End Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Start Date</label>
              <input
                type="date"
                name="startDate"
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">End Date</label>
              <input
                type="date"
                name="endDate"
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Task Description */}
          <div>
            <label className="text-sm text-gray-600">Task Description</label>
            <textarea
              name="description"
              rows={3}
              placeholder="Describe the task..."
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg resize-none"
            />
          </div>

          {/* Client Details */}
          <div>
            <label className="text-sm text-gray-600">Client Details</label>
            <textarea
              name="clientDetails"
              rows={2}
              placeholder="Client name, phone, email..."
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg resize-none"
            />
          </div>

          {/* Project Type + Client Account */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Project Type</label>
              <select
                name="projectType"
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              >
                <option value="">Select Project</option>
                <option>GST</option>
                <option>Private Limited</option>
                <option>Public Limited</option>
                <option>LLP</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Client Account</label>
              <select
                name="clientAccount"
                onChange={handleChange}
                className="w-full mt-1 px-3 py-2 border rounded-lg"
              >
                <option value="">Select Client</option>
                <option>ABC Pvt Ltd</option>
                <option>XYZ Enterprises</option>
                <option>Demo Client</option>
              </select>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="text-sm text-gray-600">Status</label>
            <select
              name="status"
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg"
            >
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          {/* Footer */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Create Task
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
