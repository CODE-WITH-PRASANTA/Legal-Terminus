import React, { useState } from "react";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiClock,
  FiX,
} from "react-icons/fi";

/* ================= TYPES ================= */
type TaskStatus = "In Progress" | "Completed" | "On Hold";

type Task = {
  id: number;
  title: string;
  description: string;
  assignTo: string;
  priority: "Low" | "Medium" | "High";
  startDay: number;
  endDay: number;
  status: TaskStatus;
};

type Section = {
  id: number;
  name: string;
  description: string;
  tasks: Task[];
};

/* ================= STATUS STYLE ================= */
const statusStyle: Record<TaskStatus, string> = {
  "In Progress": "bg-blue-100 text-blue-700",
  Completed: "bg-green-100 text-green-700",
  "On Hold": "bg-yellow-100 text-yellow-700",
};

/* ================= COMPONENT ================= */
const Projects: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [sectionModal, setSectionModal] = useState(false);
  const [taskModal, setTaskModal] = useState(false);

  const [activeSectionId, setActiveSectionId] = useState<number | null>(null);
  const [editTask, setEditTask] = useState<Task | null>(null);

  /* ================= SECTION FORM ================= */
  const [sectionForm, setSectionForm] = useState({
    name: "",
    description: "",
  });

  /* ================= TASK FORM ================= */
  const [taskForm, setTaskForm] = useState<Task>({
    id: 0,
    title: "",
    description: "",
    assignTo: "",
    priority: "Low",
    startDay: 0,
    endDay: 0,
    status: "In Progress",
  });

  /* ================= ADD SECTION ================= */
  const handleAddSection = () => {
    if (!sectionForm.name) return;

    setSections((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: sectionForm.name,
        description: sectionForm.description,
        tasks: [],
      },
    ]);

    setSectionForm({ name: "", description: "" });
    setSectionModal(false);
  };

  /* ================= ADD / UPDATE TASK ================= */
  const handleSaveTask = () => {
    if (!taskForm.title || activeSectionId === null) return;

    setSections((prev) =>
      prev.map((section) => {
        if (section.id !== activeSectionId) return section;

        if (editTask) {
          return {
            ...section,
            tasks: section.tasks.map((t) =>
              t.id === editTask.id ? { ...taskForm } : t
            ),
          };
        }

        return {
          ...section,
          tasks: [
            ...section.tasks,
            { ...taskForm, id: Date.now() },
          ],
        };
      })
    );

    resetTaskModal();
  };

  /* ================= DELETE TASK ================= */
  const handleDeleteTask = (sectionId: number, taskId: number) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              tasks: section.tasks.filter((t) => t.id !== taskId),
            }
          : section
      )
    );
  };

  const resetTaskModal = () => {
    setTaskForm({
      id: 0,
      title: "",
      description: "",
      assignTo: "",
      priority: "Low",
      startDay: 0,
      endDay: 0,
      status: "In Progress",
    });
    setEditTask(null);
    setTaskModal(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Task Management</h1>
        <button
          onClick={() => setSectionModal(true)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-xl flex items-center gap-2"
        >
          <FiPlus /> Add Section
        </button>
      </div>

      {/* ================= SECTIONS (2 PER ROW) ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white border rounded-3xl p-5"
          >
            {/* SECTION HEADER */}
            <div className="flex justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg">
                  {section.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {section.description}
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveSectionId(section.id);
                  setTaskModal(true);
                }}
                className="w-8 h-8 border rounded-lg flex items-center justify-center"
              >
                <FiPlus />
              </button>
            </div>

            {/* TASK LIST */}
            <div className="space-y-4 mt-4">
              {section.tasks.map((task) => (
                <div
                  key={task.id}
                  className="border rounded-2xl p-4 hover:shadow transition"
                >
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">
                      {task.title}
                    </h4>
                    <div className="flex gap-3">
                      <FiEdit2
                        className="cursor-pointer text-indigo-600"
                        onClick={() => {
                          setActiveSectionId(section.id);
                          setEditTask(task);
                          setTaskForm(task);
                          setTaskModal(true);
                        }}
                      />
                      <FiTrash2
                        className="cursor-pointer text-red-500"
                        onClick={() =>
                          handleDeleteTask(section.id, task.id)
                        }
                      />
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-2">
                    {task.description}
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-2">
                    <span>👤 {task.assignTo || "Unassigned"}</span>
                    <span>⚡ {task.priority}</span>
                    <span className="flex items-center gap-1">
                      <FiClock />
                      Day {task.startDay} → Day {task.endDay}
                    </span>
                  </div>

                  <span
                    className={`inline-block text-xs px-3 py-1 rounded-full ${statusStyle[task.status]}`}
                  >
                    {task.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ================= ADD SECTION MODAL ================= */}
      {sectionModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl w-full max-w-md p-6">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold">Add Section</h2>
              <FiX onClick={() => setSectionModal(false)} />
            </div>

            <input
              className="w-full border rounded-xl px-4 py-2 mb-3"
              placeholder="Section Name"
              value={sectionForm.name}
              onChange={(e) =>
                setSectionForm({
                  ...sectionForm,
                  name: e.target.value,
                })
              }
            />

            <textarea
              className="w-full border rounded-xl px-4 py-2 mb-4"
              placeholder="Section Description"
              rows={3}
              value={sectionForm.description}
              onChange={(e) =>
                setSectionForm({
                  ...sectionForm,
                  description: e.target.value,
                })
              }
            />

            <button
              onClick={handleAddSection}
              className="bg-indigo-600 text-white w-full py-2 rounded-xl"
            >
              Create Section
            </button>
          </div>
        </div>
      )}

      {/* ================= TASK MODAL ================= */}
      {taskModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl w-full max-w-lg p-6">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold">
                {editTask ? "Edit Task" : "Add Task"}
              </h2>
              <FiX onClick={resetTaskModal} />
            </div>

            <div className="space-y-4">
              <input
                className="w-full border rounded-xl px-4 py-2"
                placeholder="Task Name"
                value={taskForm.title}
                onChange={(e) =>
                  setTaskForm({ ...taskForm, title: e.target.value })
                }
              />

              <textarea
                className="w-full border rounded-xl px-4 py-2"
                placeholder="Task Description"
                rows={3}
                value={taskForm.description}
                onChange={(e) =>
                  setTaskForm({
                    ...taskForm,
                    description: e.target.value,
                  })
                }
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  className="border rounded-xl px-4 py-2"
                  placeholder="Assign Employee"
                  value={taskForm.assignTo}
                  onChange={(e) =>
                    setTaskForm({
                      ...taskForm,
                      assignTo: e.target.value,
                    })
                  }
                />

                <select
                  className="border rounded-xl px-4 py-2"
                  value={taskForm.priority}
                  onChange={(e) =>
                    setTaskForm({
                      ...taskForm,
                      priority: e.target.value as any,
                    })
                  }
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              <select
                className="w-full border rounded-xl px-4 py-2"
                value={taskForm.status}
                onChange={(e) =>
                  setTaskForm({
                    ...taskForm,
                    status: e.target.value as TaskStatus,
                  })
                }
              >
                <option>In Progress</option>
                <option>Completed</option>
                <option>On Hold</option>
              </select>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  className="border rounded-xl px-4 py-2"
                  placeholder="Start Day"
                  value={taskForm.startDay}
                  onChange={(e) =>
                    setTaskForm({
                      ...taskForm,
                      startDay: Number(e.target.value),
                    })
                  }
                />
                <input
                  type="number"
                  className="border rounded-xl px-4 py-2"
                  placeholder="End Day"
                  value={taskForm.endDay}
                  onChange={(e) =>
                    setTaskForm({
                      ...taskForm,
                      endDay: Number(e.target.value),
                    })
                  }
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSaveTask}
                className="bg-indigo-600 text-white px-6 py-2 rounded-xl"
              >
                {editTask ? "Update Task" : "Create Task"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
