import { FaCalendarAlt } from "react-icons/fa";

export default function MydashbordFour() {
  return (
    <section className="p-6 bg-gray-50">
      {/* ======== 3 COLUMN GRID ======== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ================= PERFORMANCE ================= */}
        <div className="bg-white rounded-xl border p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Performance</h2>
            <button className="flex items-center gap-2 border px-3 py-1 rounded-md text-sm">
              <FaCalendarAlt /> 2024
            </button>
          </div>

          <div className="bg-gray-50 rounded-lg px-4 py-3 mb-4">
            <span className="text-2xl font-bold">98%</span>
            <span className="ml-2 text-green-600 bg-green-100 text-xs px-2 py-1 rounded-full">
              12%
            </span>
            <span className="ml-2 text-gray-500 text-sm">vs last years</span>
          </div>

          {/* Chart (static bars for exact UI) */}
          <div className="h-56 flex items-end gap-6 px-4">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m, i) => (
              <div key={m} className="flex flex-col items-center gap-2">
                <div
                  className="w-7 bg-green-300 rounded-t"
                  style={{ height: `${[20, 20, 35, 35, 40, 60, 60][i]}%` }}
                />
                <span className="text-xs text-gray-500">{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MY SKILLS ================= */}
        <div className="bg-white rounded-xl border p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">My Skills</h2>
            <button className="flex items-center gap-2 border px-3 py-1 rounded-md text-sm">
              <FaCalendarAlt /> 2024
            </button>
          </div>

          <div className="space-y-4">
            {[
              { name: "Figma", percent: 95, color: "bg-orange-500" },
              { name: "HTML", percent: 85, color: "bg-green-500" },
              { name: "CSS", percent: 70, color: "bg-purple-500" },
              { name: "Wordpress", percent: 61, color: "bg-blue-500" },
              { name: "Javascript", percent: 58, color: "bg-black" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="border rounded-lg px-4 py-3 flex justify-between items-center"
              >
                <div className="flex gap-3">
                  <span className={`w-1 h-6 rounded ${skill.color}`} />
                  <div>
                    <p className="font-medium">{skill.name}</p>
                    <p className="text-sm text-gray-500">
                      Updated : 15 May 2025
                    </p>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-full border-4 border-gray-200 flex items-center justify-center text-sm font-semibold">
                  {skill.percent}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT STACK ================= */}
        <div className="space-y-6">
          {/* Team Birthday */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 text-center text-white">
            <h3 className="font-semibold mb-4">Team Birthday</h3>
            <img
              src="https://i.pravatar.cc/80?img=47"
              className="mx-auto w-16 h-16 rounded-full mb-3"
            />
            <p className="font-medium">Andrew Jermia</p>
            <p className="text-sm text-gray-300 mb-4">IOS Developer</p>
            <button className="bg-orange-500 px-4 py-2 rounded-md text-sm font-medium">
              Send Wishes
            </button>
          </div>

          {/* Leave Policy */}
          <div className="bg-teal-700 text-white rounded-xl p-5 flex justify-between items-center">
            <div>
              <p className="font-semibold">Leave Policy</p>
              <p className="text-sm text-teal-100">Last Updated : Today</p>
            </div>
            <button className="bg-white text-teal-700 px-4 py-2 rounded-md text-sm font-medium">
              View All
            </button>
          </div>

          {/* Next Holiday */}
          <div className="bg-yellow-400 rounded-xl p-5 flex justify-between items-center">
            <div>
              <p className="font-semibold">Next Holiday</p>
              <p className="text-sm">Diwali, 15 Sep 2025</p>
            </div>
            <button className="bg-white px-4 py-2 rounded-md text-sm font-medium">
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
