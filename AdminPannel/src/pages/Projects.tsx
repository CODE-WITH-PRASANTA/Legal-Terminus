import React, { useState } from "react";
import {
  FiPlus,
  FiMoreVertical,
  FiEdit2,
  FiX,
  FiClock,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

/* ================= TYPES ================= */
type TaskStatus = "New" | "In Progress" | "Pending" | "Completed";

type Task = {
  id: number;
  title: string;
  description: string;
  duration: number;
  progress: number;
  status: TaskStatus;
};

/* ================= STYLES ================= */
const statusStyle: Record<TaskStatus, string> = {
  New: "bg-indigo-50 text-indigo-600",
  "In Progress": "bg-amber-50 text-amber-600",
  Pending: "bg-orange-50 text-orange-600",
  Completed: "bg-emerald-50 text-emerald-600",
};

/* ================= COMPONENT ================= */
const Projects: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Hero Section Design",
      description:
        "It is a long established fact that a reader will be distracted by the readable content.",
      duration: 20,
      progress: 45,
      status: "New",
    },
    {
      id: 2,
      title: "Website Design",
      description:
        "It is a long established fact that a reader will be distracted.",
      duration: 30,
      progress: 65,
      status: "In Progress",
    },
    {
      id: 3,
      title: "Logo Design",
      description:
        "It is a long established fact that a reader will be distracted.",
      duration: 15,
      progress: 0,
      status: "Pending",
    },
    {
      id: 4,
      title: "UI Review",
      description:
        "Final UI review and confirmation before delivery.",
      duration: 10,
      progress: 100,
      status: "Completed",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState<number | null>(null);

  const [form, setForm] = useState({
    title: "",
    assignTo: "",
    priority: "Low",
    duration: 0,
    description: "",
    status: "New" as TaskStatus,
  });

  const columns: TaskStatus[] = [
    "New",
    "In Progress",
    "Pending",
    "Completed",
  ];

  const handleCreateTask = () => {
    if (!form.title) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: form.title,
        description: form.description,
        duration: form.duration,
        progress:
          form.status === "Completed"
            ? 100
            : form.status === "New"
            ? 0
            : 50,
        status: form.status,
      },
    ]);

    setOpen(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <FiLayers className="text-indigo-600" size={22} />
          <h1 className="text-2xl font-semibold text-gray-800">
            Task Management
          </h1>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl shadow-md hover:bg-indigo-700 transition"
        >
          <FiPlus />
          Add Task
        </button>
      </div>

      {/* ================= 2×2 GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {columns.map((column) => (
          <div
            key={column}
            className="rounded-3xl bg-gradient-to-b from-gray-50 to-white border border-gray-200 p-5"
          >
            {/* COLUMN HEADER */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                {/* <FiTrendingUp className="text-gray-400" size={14} /> */}
                <h3 className="font-semibold text-gray-800">
                  {column} Task
                </h3>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setOpen(true)}
                  className="w-8 h-8 rounded-lg bg-white border hover:bg-gray-100 flex items-center justify-center"
                >
                  <FiPlus size={14} />
                </button>
                <button className="w-8 h-8 rounded-lg bg-white border hover:bg-gray-100 flex items-center justify-center">
                  <FiMoreVertical size={14} />
                </button>
              </div>
            </div>

            {/* TASK CARDS */}
            <div className="space-y-5">
              {tasks
                .filter((t) => t.status === column)
                .map((task) => (
                  <div
                    key={task.id}
                    className="relative bg-white rounded-3xl p-5 border border-gray-200 shadow-sm hover:shadow-2xl transition-all"
                  >
                    {/* CARD HEADER */}
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-gray-800 leading-snug">
                        {task.title}
                      </h4>

                      <div className="relative flex gap-2">
                        <FiEdit2 className="text-indigo-600 cursor-pointer hover:scale-110 transition" />

                        <FiMoreVertical
                          className="text-gray-400 cursor-pointer hover:text-gray-600"
                          onClick={() =>
                            setMenuOpen(
                              menuOpen === task.id ? null : task.id
                            )
                          }
                        />

                        {menuOpen === task.id && (
                          <div className="absolute right-0 top-7 w-28 bg-white border rounded-xl shadow-lg z-20">
                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                              Add
                            </button>
                            <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                              Edit
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-500 mb-4">
                      {task.description}
                    </p>

                    {/* META */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <FiClock />
                        {task.duration} days
                      </div>

                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${statusStyle[task.status]}`}
                      >
                        {task.status}
                      </span>
                    </div>

                    {/* PROGRESS */}
                    <div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        {task.progress}% completed
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-semibold">Add Employee</h2>
              <FiX
                className="cursor-pointer text-gray-400 hover:text-gray-600"
                onClick={() => setOpen(false)}
              />
            </div>

            <div className="p-6 space-y-4">
              <input
                className="w-full border rounded-xl px-4 py-2.5"
                placeholder="Enter task title"
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
              />

              <div className="grid grid-cols-2 gap-4">
                <select className="border rounded-xl px-4 py-2.5">
                  <option>Select Employee</option>
                </select>

                <select className="border rounded-xl px-4 py-2.5">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              <input
                type="number"
                className="w-full border rounded-xl px-4 py-2.5"
                placeholder="Assign Duration (days)"
                
                onChange={(e) =>
                  setForm({
                    ...form,
                    duration: Number(e.target.value),
                  })
                }
              />

              <textarea
                className="w-full border rounded-xl px-4 py-2.5"
                rows={3}
                placeholder="Describe the task..."
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
              />

              <select
                className="w-full border rounded-xl px-4 py-2.5"
                value={form.status}
                onChange={(e) =>
                  setForm({
                    ...form,
                    status: e.target.value as TaskStatus,
                  })
                }
              >
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="px-6 py-4 border-t flex justify-end">
              <button
                onClick={handleCreateTask}
                className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl hover:bg-indigo-700 transition"
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
