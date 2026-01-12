import React, { useState } from "react";
import {
  FiPlus,
  FiMoreHorizontal,
  FiEdit,
  FiHome,
  FiChevronRight,
} from "react-icons/fi";
import AddTaskModal from "../Components/AddTaskModal";

/* ================= TYPES ================= */
type Task = {
  title: string;
  description: string;
  leadTo: string;
  priority: "Low" | "Medium" | "High";
  startDate: string;
  endDate: string;
  clientDetails: string;
  projectType: string;
  clientAccount: string;
  status: "Not Started" | "In Progress" | "Completed";
  progress: number;
};

/* ================= STATUS COLORS ================= */
const statusColor: Record<string, string> = {
  "Not Started": "text-blue-600 bg-blue-50",
  "In Progress": "text-purple-600 bg-purple-50",
  Completed: "text-green-600 bg-green-50",
};

/* ================= STATUS → COLUMN ================= */
const statusToColumn: Record<string, string> = {
  "Not Started": "New Task",
  "In Progress": "In Progress",
  Completed: "Complete",
};

const CreateTask: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const [tasks, setTasks] = useState<Record<string, Task[]>>({
    "New Task": [],
    "In Progress": [],
    Pending: [],
    Complete: [],
  });

  const handleCreateTask = (task: Task) => {
    const column = statusToColumn[task.status];
    setTasks((prev) => ({
      ...prev,
      [column]: [...prev[column], { ...task, progress: 0 }],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 px-3 sm:px-6 lg:px-10 py-5 max-w-[1600px] mx-auto">

      {/* ================= Breadcrumb ================= */}
      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 mb-4 overflow-x-auto whitespace-nowrap">
        <FiHome />
        <span>Home</span>
        <FiChevronRight />
        <span>Task Management</span>
        <FiChevronRight />
        <span className="text-gray-800 font-medium">Create Task</span>
      </div>

      {/* ================= Header ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Task Board
        </h2>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition w-full sm:w-auto"
        >
          <FiPlus />
          Add Task
        </button>
      </div>

      {/* ================= TASK BOARD ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {Object.entries(tasks).map(([column, items]) => (
          <div
            key={column}
            className="bg-gray-100 rounded-2xl p-3 sm:p-4"
          >
            {/* Column Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-sm sm:text-base">
                {column}
              </h3>
              <FiMoreHorizontal className="text-gray-500" />
            </div>

            {/* Task Cards */}
            <div className="space-y-4">
              {items.map((task, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg transition-all border border-gray-100"
                >
                  {/* Header */}
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        {task.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
                        {task.projectType} • {task.clientAccount}
                      </p>
                    </div>
                    <FiEdit className="text-gray-400 hover:text-indigo-600 cursor-pointer" />
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap justify-between items-center mt-3 gap-2 text-xs sm:text-sm">
                    <span className="text-gray-600">
                      <span className="font-medium">Lead:</span>{" "}
                      {task.leadTo}
                    </span>

                    <span
                      className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold ${
                        task.priority === "High"
                          ? "bg-red-100 text-red-600"
                          : task.priority === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-700 mt-3 leading-relaxed line-clamp-3">
                    {task.description}
                  </p>

                  {/* Client Details */}
                  <div className="mt-3 bg-gray-50 border border-gray-200 rounded-xl p-3">
                    <p className="text-xs font-semibold text-gray-700">
                      Client Details
                    </p>
                    <p className="text-[11px] sm:text-xs text-gray-600 mt-1">
                      {task.clientDetails}
                    </p>
                  </div>

                  {/* Dates */}
                  <div className="flex justify-between text-[11px] sm:text-xs text-gray-500 mt-4">
                    <span>
                      <span className="font-medium">Start:</span>{" "}
                      {task.startDate}
                    </span>
                    <span>
                      <span className="font-medium">End:</span>{" "}
                      {task.endDate}
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center mt-4 pt-3 border-t">
                    <span
                      className={`px-3 py-1 text-[11px] sm:text-xs rounded-full font-medium ${statusColor[task.status]}`}
                    >
                      {task.status}
                    </span>
                    <span className="text-[11px] text-gray-400">
                      Task #{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      <AddTaskModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onCreate={handleCreateTask}
      />
    </div>
  );
};

export default CreateTask;
