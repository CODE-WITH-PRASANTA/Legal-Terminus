import { useState } from "react";
import { FiMoreHorizontal, FiEdit, FiPlus } from "react-icons/fi";

type TaskStatus = "New" | "In Progress" | "Pending" | "Done";

interface Task {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  progress: number;
  status: TaskStatus;
}

const columns: { title: TaskStatus; bg: string; accent: string }[] = [
  { title: "New", bg: "bg-blue-50", accent: "bg-blue-600" },
  { title: "In Progress", bg: "bg-purple-50", accent: "bg-purple-600" },
  { title: "Pending", bg: "bg-gray-50", accent: "bg-gray-700" },
  { title: "Done", bg: "bg-green-50", accent: "bg-green-600" },
];

const tasks: Task[] = [
  {
    id: 1,
    title: "Hero Section Design",
    description: "GST registration and compliance documentation preparation.",
    startDate: "14 Aug 2024",
    endDate: "20 Aug 2024",
    progress: 20,
    status: "New",
  },
  {
    id: 2,
    title: "Website Design",
    description: "GST return filing (GSTR-1 & GSTR-3B) review and submission.",
    startDate: "14 Aug 2024",
    endDate: "20 Aug 2024",
    progress: 60,
    status: "In Progress",
  },
  {
    id: 3,
    title: "Banner Design",
    description: "GST notice reply drafting and compliance verification.",
    startDate: "14 Aug 2024",
    endDate: "20 Aug 2024",
    progress: 40,
    status: "Pending",
  },
  {
    id: 4,
    title: "React Development",
    description: "GST audit support and reconciliation assistance.",
    startDate: "14 Aug 2024",
    endDate: "20 Aug 2024",
    progress: 90,
    status: "Done",
  },
];

export default function AddTaskBord() {
  const [openTopPlus, setOpenTopPlus] = useState<TaskStatus | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  return (
    <section className="p-6 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {columns.map((col) => (
          <div key={col.title} className={`rounded-xl p-4 ${col.bg}`}>
            {/* Column Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">{col.title}</h3>

              <div className="flex items-center gap-2 relative">
                {/* Plus Dropdown */}
                <button
                  onClick={() =>
                    setOpenTopPlus(
                      openTopPlus === col.title ? null : col.title
                    )
                  }
                  className="p-1 rounded hover:bg-white"
                >
                  <FiPlus />
                </button>

                {openTopPlus === col.title && (
                  <div className="absolute right-0 top-9 w-40 bg-white border rounded-lg shadow-lg z-20">
                    {(["New", "In Progress", "Pending", "Done"] as TaskStatus[]).map(
                      (status) => (
                        <button
                          key={status}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          {status}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Tasks */}
            <div className="space-y-4">
              {tasks
                .filter((task) => task.status === col.title)
                .map((task) => (
                  <div
                    key={task.id}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition relative"
                  >
                    {/* Title + 3-dot */}
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{task.title}</h4>

                      <div className="relative">
                        <FiMoreHorizontal
                          className="text-gray-400 cursor-pointer"
                          onClick={() =>
                            setOpenMenu(openMenu === task.id ? null : task.id)
                          }
                        />

                        {openMenu === task.id && (
                          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-20">
                            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                              Complete
                            </button>
                            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600">
                              Reject
                            </button>
                            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                              Not Response
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 mb-3">
                      {task.description}
                    </p>

                    {/* GST Info */}
                    <div className="text-xs bg-slate-50 border rounded-lg p-2 mb-4">
                      <p><span className="font-medium">GST Type:</span> Regular</p>
                      <p><span className="font-medium">GSTIN:</span> 29ABCDE1234F1Z5</p>
                      <p><span className="font-medium">Filing Period:</span> Aug 2024</p>
                    </div>

                    {/* Dates */}
                    <div className="flex justify-between text-sm mb-3">
                      <div>
                        <p className="text-gray-400">Start Date</p>
                        <p className="font-medium">{task.startDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">End Date</p>
                        <p className="font-medium">{task.endDate}</p>
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="h-2 bg-gray-200 rounded-full mb-4">
                      <div
                        className={`h-full rounded-full ${col.accent}`}
                        style={{ width: `${task.progress}%` }}
                      />
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <img
                            key={i}
                            src={`https://i.pravatar.cc/40?img=${i}`}
                            className="w-8 h-8 rounded-full border-2 border-white"
                          />
                        ))}
                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                          +
                        </button>
                      </div>

                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          col.title === "Done"
                            ? "bg-green-100 text-green-700"
                            : col.title === "In Progress"
                            ? "bg-purple-100 text-purple-700"
                            : col.title === "Pending"
                            ? "bg-gray-200 text-gray-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {col.title}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
