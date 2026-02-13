import { FiMoreVertical } from "react-icons/fi";
import { FaCalendarAlt, FaTasks } from "react-icons/fa";
import { BsStar, BsStarFill } from "react-icons/bs";

export default function MydashbordThr() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 p-6 bg-gray-50">
      {/* ================= LEFT : PROJECTS ================= */}
      <div className="bg-white rounded-xl border">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="font-semibold text-lg">Projects</h2>
          <button className="text-sm text-gray-600 flex items-center gap-1">
            Ongoing Projects ▾
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="border rounded-xl p-4 space-y-4 hover:shadow-sm transition"
            >
              {/* Title */}
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">Office Management</h3>
                <FiMoreVertical className="text-gray-400 cursor-pointer" />
              </div>

              {/* Leader */}
              <div className="flex items-center gap-3">
                <img
                  src={`https://i.pravatar.cc/40?img=${i}`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">Anthony Lewis</p>
                  <p className="text-sm text-gray-500">Project Leader</p>
                </div>
              </div>

              {/* Deadline */}
              <div className="flex items-center gap-3 text-sm">
                <span className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                  <FaCalendarAlt />
                </span>
                <div>
                  <p className="font-medium">14 Jan 2024</p>
                  <p className="text-gray-500">Deadline</p>
                </div>
              </div>

              {/* Tasks */}
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <FaTasks />
                  </span>
                  Tasks : <b>6 / 10</b>
                </div>

                <div className="flex items-center">
                  {[1, 2].map((a) => (
                    <img
                      key={a}
                      src={`https://i.pravatar.cc/30?img=${a + 10}`}
                      className="w-7 h-7 rounded-full border-2 border-white -ml-2"
                    />
                  ))}
                  <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    +2
                  </span>
                </div>
              </div>

              {/* Time */}
              <div className="bg-gray-200/60 p-3 rounded-lg flex justify-between text-sm font-medium">
                <span>Time Spent</span>
                <span>65/120 Hrs</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT : TASKS ================= */}
      <div className="bg-white rounded-xl border">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b">
          <h2 className="font-semibold text-lg">Tasks</h2>
          <button className="text-sm text-gray-600 flex items-center gap-1">
            All Projects ▾
          </button>
        </div>

        {/* Task List */}
        <div className="p-5 space-y-3">
          {[
            { title: "Patient appointment booking", status: "Onhold", color: "pink" },
            { title: "Appointment booking with payment", status: "Inprogress", color: "purple" },
            { title: "Patient and Doctor video conferencing", status: "Completed", color: "green" },
            { title: "Private chat module", status: "Pending", color: "gray", checked: true },
            { title: "Go-Live and Post-Implementation Support", status: "Inprogress", color: "purple" },
          ].map((task, i) => (
            <div
              key={i}
              className="flex justify-between items-center border rounded-lg px-4 py-3"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={task.checked} />
                {task.checked ? (
                  <BsStarFill className="text-orange-400" />
                ) : (
                  <BsStar className="text-gray-400" />
                )}
                <p className={`${task.checked && "line-through"} font-medium`}>
                  {task.title}
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full bg-${task.color}-100 text-${task.color}-700`}
                >
                  {task.status}
                </span>
                {[1, 2, 3].slice(0, i % 3 + 1).map((a) => (
                  <img
                    key={a}
                    src={`https://i.pravatar.cc/28?img=${a + 20}`}
                    className="w-7 h-7 rounded-full"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
