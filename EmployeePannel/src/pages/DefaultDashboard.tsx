import React from "react";
import { FiMoreHorizontal, FiArrowUpRight, FiDownload } from "react-icons/fi";

const DefaultDashboard = () => {
  return (
    <div className="space-y-6">

      {/* ================= TOP GRID ================= */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-4
        sm:gap-6
      ">

        {/* Total Contacts */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-sm">Total Contacts</h3>
            <FiMoreHorizontal />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-semibold">5,758</h2>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
              +2.57%
            </span>
          </div>

          <div className="mt-4 flex items-end gap-2 h-16 sm:h-20">
            {[20, 40, 60, 45, 25, 35].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="w-3 sm:w-4 bg-indigo-500/70 rounded"
              />
            ))}
          </div>

          <div className="mt-3 text-xs text-gray-500 flex justify-between">
            <span>Vs last month: 1,195</span>
            <FiArrowUpRight />
          </div>
        </div>

        {/* Lead Analytics */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border">
          <div className="flex justify-between">
            <h3 className="font-medium text-sm">Lead Analytics</h3>
            <FiMoreHorizontal />
          </div>

          <div className="mt-3 flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-semibold">70</h2>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
              -2.57%
            </span>
          </div>

          <div className="mt-6 h-16 sm:h-20 bg-indigo-50 rounded-lg" />

          <p className="text-xs text-center mt-3 text-gray-500">
            Compared to Last Month
          </p>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border">
          <div className="flex justify-between">
            <h3 className="font-medium text-sm">Traffic Sources</h3>
            <FiMoreHorizontal />
          </div>

          <div className="mt-4 space-y-3">
            {[
              ["Organic Search", "41.50%"],
              ["Direct Traffic", "27%"],
              ["Referral Traffic", "18%"],
              ["Social Media", "10.30%"],
              ["Email Traffic", "3.20%"],
            ].map(([label, value], i) => (
              <div
                key={i}
                className="flex justify-between text-sm gap-4"
              >
                <span className="text-gray-600 truncate">{label}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>

          <div className="
            mt-4
            flex flex-col sm:flex-row
            gap-3
            justify-between
            items-start sm:items-center
            bg-indigo-50
            p-3
            rounded-lg
          ">
            <span className="text-sm">Annual report</span>
            <button className="flex items-center gap-2 text-sm text-indigo-600">
              <FiDownload /> Download
            </button>
          </div>
        </div>
      </div>

      {/* ================= SECOND GRID ================= */}
      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-4
        sm:gap-6
      ">

        {/* Tasks Overview */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border">
          <div className="flex justify-between mb-4">
            <h3 className="font-medium text-sm">Tasks Overview</h3>
            <span className="text-xs text-indigo-600">Tasks Done 25</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
            <div className="h-full w-2/3 bg-indigo-500 rounded-full" />
          </div>

          <ul className="text-sm space-y-2">
            <li className="flex justify-between text-gray-600">
              <span>Follow-ups</span> <span>8</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>In Progress</span> <span>12</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Pending</span> <span>5</span>
            </li>
          </ul>
        </div>

        {/* Active Deals */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border">
          <div className="flex justify-between">
            <h3 className="font-medium text-sm">Active Deals</h3>
            <FiMoreHorizontal />
          </div>

          <div className="mt-4 flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-semibold">1,249</h2>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
              +2.57%
            </span>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Vs last month: 1,195
          </p>
        </div>

        {/* Retention Rate */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border">
          <div className="flex justify-between">
            <h3 className="font-medium text-sm">Retention Rate</h3>
            <FiMoreHorizontal />
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold">
            92%
          </h2>
          <p className="text-sm text-green-600 mt-1">
            +15% vs last month
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefaultDashboard;
