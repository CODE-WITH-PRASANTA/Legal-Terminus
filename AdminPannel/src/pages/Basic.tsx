import React from "react";

const Basic = () => {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          CRM Overview
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage leads, customers, and sales activities from one place.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border">
          <p className="text-sm text-gray-500">Total Leads</p>
          <h2 className="text-2xl font-semibold mt-2">1,245</h2>
        </div>

        <div className="bg-white rounded-xl p-5 border">
          <p className="text-sm text-gray-500">Active Customers</p>
          <h2 className="text-2xl font-semibold mt-2">386</h2>
        </div>

        <div className="bg-white rounded-xl p-5 border">
          <p className="text-sm text-gray-500">Deals in Pipeline</p>
          <h2 className="text-2xl font-semibold mt-2">74</h2>
        </div>

        <div className="bg-white rounded-xl p-5 border">
          <p className="text-sm text-gray-500">Conversion Rate</p>
          <h2 className="text-2xl font-semibold mt-2">18.6%</h2>
        </div>
      </div>

      {/* LEADS TABLE */}
      <div className="bg-white rounded-xl border">
        <div className="p-5 border-b">
          <h3 className="font-medium text-gray-900">
            Recent Leads
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="text-left px-5 py-3">Name</th>
                <th className="text-left px-5 py-3">Email</th>
                <th className="text-left px-5 py-3">Status</th>
                <th className="text-left px-5 py-3">Assigned To</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              <tr>
                <td className="px-5 py-3">Ravi Kumar</td>
                <td className="px-5 py-3">ravi@gmail.com</td>
                <td className="px-5 py-3 text-green-600">Qualified</td>
                <td className="px-5 py-3">Sales Team</td>
              </tr>

              <tr>
                <td className="px-5 py-3">Anita Sharma</td>
                <td className="px-5 py-3">anita@gmail.com</td>
                <td className="px-5 py-3 text-yellow-600">In Progress</td>
                <td className="px-5 py-3">CRM Manager</td>
              </tr>

              <tr>
                <td className="px-5 py-3">John Doe</td>
                <td className="px-5 py-3">john@mail.com</td>
                <td className="px-5 py-3 text-red-600">New</td>
                <td className="px-5 py-3">Unassigned</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex flex-wrap gap-4">
        <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
          Add New Lead
        </button>

        <button className="px-5 py-2 rounded-lg border text-sm hover:bg-gray-50 transition">
          View All Customers
        </button>

        <button className="px-5 py-2 rounded-lg border text-sm hover:bg-gray-50 transition">
          Sales Reports
        </button>
      </div>

    </div>
  );
};

export default Basic;
