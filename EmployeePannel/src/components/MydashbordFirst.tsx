import { FiCalendar, FiX, FiEdit2 } from "react-icons/fi";

export default function EmployeeDashboard() {
  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      {/* ================= HEADER ================= */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Employee Dashboard
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Dashboard / Employee Dashboard
        </p>
      </div>

      {/* ================= ALERT ================= */}
      <div className="flex items-center justify-between bg-sky-50 border border-sky-100 text-sky-800 px-4 py-3 rounded-md mb-6">
        <p className="text-sm">
          Your Leave Request on “24th April 2024” has been Approved!!!
        </p>
        <FiX className="cursor-pointer text-gray-400" />
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* ================= PROFILE CARD ================= */}
        <div className="bg-white rounded-lg border overflow-hidden">
          {/* Dark Header */}
          <div className="bg-slate-800 p-4 flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/100"
              className="w-14 h-14 rounded-full border-2 border-white"
            />
            <div className="flex-1">
              <h3 className="text-white font-semibold">
                Stephan Peralt
              </h3>
              <p className="text-sm text-gray-300">
                Senior Product Designer • UI/UX Design
              </p>
            </div>
            <button className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white">
              <FiEdit2 size={14} />
            </button>
          </div>

          {/* Info */}
          <div className="p-4 space-y-4 text-sm">
            <Info label="Phone Number" value="+1 324 3453 545" />
            <Info label="Email Address" value="Steperde124@example.com" />
            <Info label="Report Office" value="Doglas Martini" />
            <Info label="Joined on" value="15 Jan 2024" />
          </div>
        </div>

        {/* ================= LEAVE DONUT ================= */}
        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800">
              Leave Details
            </h3>
            <button className="border px-3 py-1.5 rounded-md text-sm flex items-center gap-2">
              <FiCalendar /> 2024
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Legend */}
            <ul className="space-y-3 text-sm">
              <Legend color="bg-slate-700" label="1254 on time" />
              <Legend color="bg-green-500" label="32 Late Attendance" />
              <Legend color="bg-orange-500" label="658 Work From Home" />
              <Legend color="bg-red-500" label="14 Absent" />
              <Legend color="bg-yellow-400" label="68 Sick Leave" />
            </ul>

            {/* Donut (Static SVG for exact look) */}
            <div className="flex justify-center">
  <svg
    width="220"
    height="220"
    viewBox="0 0 42 42"
    className="-rotate-90"
  >
    {/* Background Circle */}
    <circle
      cx="21"
      cy="21"
      r="15.9"
      fill="none"
      stroke="#e5e7eb"
      strokeWidth="6"
    />

    {/* On Time – 60% */}
    <circle
      cx="21"
      cy="21"
      r="15.9"
      fill="none"
      stroke="#0f4c5c"
      strokeWidth="6"
      strokeDasharray="60 40"
      strokeDashoffset="0"
    />

    {/* Late – 10% */}
    <circle
      cx="21"
      cy="21"
      r="15.9"
      fill="none"
      stroke="#22c55e"
      strokeWidth="6"
      strokeDasharray="10 90"
      strokeDashoffset="-60"
    />

    {/* WFH – 15% */}
    <circle
      cx="21"
      cy="21"
      r="15.9"
      fill="none"
      stroke="#f97316"
      strokeWidth="6"
      strokeDasharray="15 85"
      strokeDashoffset="-70"
    />

    {/* Absent – 5% */}
    <circle
      cx="21"
      cy="21"
      r="15.9"
      fill="none"
      stroke="#ef4444"
      strokeWidth="6"
      strokeDasharray="5 95"
      strokeDashoffset="-85"
    />

    {/* Sick – 10% */}
    <circle
      cx="21"
      cy="21"
      r="15.9"
      fill="none"
      stroke="#facc15"
      strokeWidth="6"
      strokeDasharray="10 90"
      strokeDashoffset="-90"
    />
  </svg>
</div>

          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <input type="checkbox" />
            Better than 85% of Employees
          </div>
        </div>

        {/* ================= SUMMARY ================= */}
        <div className="bg-white rounded-lg border p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-gray-800">
              Leave Details
            </h3>
            <button className="border px-3 py-1.5 rounded-md text-sm flex items-center gap-2">
              <FiCalendar /> 2024
            </button>
          </div>

          <div className="grid grid-cols-2 gap-y-6 text-sm">
            <Stat label="Total Leaves" value="16" />
            <Stat label="Taken" value="10" />
            <Stat label="Absent" value="2" />
            <Stat label="Request" value="0" />
            <Stat label="Worked Days" value="240" />
            <Stat label="Loss of Pay" value="2" />
          </div>

          <button className="mt-6 w-full bg-slate-900 text-white py-3 rounded-md font-medium">
            Apply New Leave
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

const Info = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-gray-400">{label}</p>
    <p className="text-gray-900 font-medium">{value}</p>
  </div>
);

const Legend = ({ color, label }: { color: string; label: string }) => (
  <li className="flex items-center gap-2">
    <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
    {label}
  </li>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-gray-400">{label}</p>
    <p className="text-lg font-semibold text-gray-900">{value}</p>
  </div>
);
