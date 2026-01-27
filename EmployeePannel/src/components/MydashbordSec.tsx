import { FiArrowUp, FiArrowDown, FiClock } from "react-icons/fi";

export default function MydashbordSec() {
  return (
    <div className="bg-[#f7f9fc] min-h-screen px-6 pt-2 pb-6">
      {/* TOP GRID */}
      <div className="grid grid-cols-12 gap-6">

        {/* LEFT ATTENDANCE */}
        <div className="col-span-12 xl:col-span-3 bg-[#fff5ee] border border-[#ff7a2f] rounded-xl p-6 flex flex-col">
          <p className="text-center text-gray-600 font-medium">Attendance</p>
          <p className="text-center font-semibold mt-1">
            08:35 AM, 11 Mar 2025
          </p>

          {/* Circle */}
          <div className="flex justify-center mt-8 mb-6">
            <div className="w-[170px] h-[170px] rounded-full border-[12px] border-[#edf1f5] flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 text-sm">Total Hours</p>
                <p className="font-bold text-xl mt-1">5:45:32</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4">
            <span className="bg-black text-white text-sm px-4 py-1 rounded-md">
              Production : 3.45 hrs
            </span>
          </div>

          <p className="text-center text-sm text-gray-700 mb-6">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Punch In at <b>10.00 AM</b>
          </p>

          <button className="mt-auto bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3 rounded-lg">
            Punch Out
          </button>
        </div>

        {/* KPI CARDS */}
        <Kpi
          color="bg-orange-500"
          value="8.36 / 9"
          label="Total Hours Today"
          percent="5% This Week"
          up
        />
        <Kpi
          color="bg-gray-900"
          value="10 / 40"
          label="Total Hours Week"
          percent="7% Last Week"
          up
        />
        <Kpi
          color="bg-blue-500"
          value="75 / 98"
          label="Total Hours Month"
          percent="8% Last Month"
        />
        <Kpi
          color="bg-pink-500"
          value="16 / 28"
          label="Overtime this Month"
          percent="6% Last Month"
        />
      </div>

      {/* BOTTOM TIMELINE */}
      <div className="bg-white rounded-xl mt-6 p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Legend color="bg-gray-300" title="Total Working hours" value="12h 36m" />
          <Legend color="bg-green-500" title="Productive Hours" value="08h 36m" />
          <Legend color="bg-yellow-400" title="Break hours" value="22m 15s" />
          <Legend color="bg-blue-500" title="Overtime" value="02h 15m" />
        </div>

        {/* Timeline */}
        <div className="h-8 rounded-lg overflow-hidden flex bg-gray-200">
          <div className="bg-green-500 w-[36%]" />
          <div className="bg-yellow-400 w-[8%]" />
          <div className="bg-green-500 w-[26%]" />
          <div className="bg-yellow-400 w-[14%]" />
          <div className="bg-green-500 w-[10%]" />
          <div className="bg-blue-500 w-[6%]" />
        </div>

        <div className="flex justify-between text-xs text-gray-500 mt-3">
          {[
            "06:00","07:00","08:00","09:00","10:00","11:00",
            "12:00","01:00","02:00","03:00","04:00","05:00",
            "06:00","07:00","08:00","09:00","10:00","11:00"
          ].map(t => <span key={t}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}

/* KPI CARD */
function Kpi({
  color,
  value,
  label,
  percent,
  up,
}: {
  color: string;
  value: string;
  label: string;
  percent: string;
  up?: boolean;
}) {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-2 bg-white rounded-xl p-6 shadow-sm">
      <div className={`w-10 h-10 ${color} rounded-lg text-white flex items-center justify-center mb-4`}>
        <FiClock />
      </div>

      <p className="text-2xl font-bold">{value}</p>
      <p className="text-gray-600 text-sm mt-1">{label}</p>

      <div className={`flex items-center gap-2 text-sm mt-3 ${up ? "text-green-600" : "text-red-600"}`}>
        {up ? <FiArrowUp /> : <FiArrowDown />}
        {percent}
      </div>
    </div>
  );
}

/* LEGEND */
function Legend({
  color,
  title,
  value,
}: {
  color: string;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="font-semibold">{value}</p>
      </div>
    </div>
  );
}
