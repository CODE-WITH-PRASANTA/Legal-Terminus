import React from "react";
import { FiUserPlus } from "react-icons/fi";

const AddCustomer: React.FC = () => {
  return (
    <div>
      {/* HEADER */}
      <div className="flex items-center gap-2 mb-6">
        <FiUserPlus size={22} className="text-indigo-600" />
        <h2 className="text-xl font-semibold">Add Customer</h2>
      </div>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Customer Name"
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <input
          type="text"
          placeholder="Company Name"
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      <textarea
        placeholder="Address"
        rows={3}
        className="w-full border rounded-lg px-4 py-2 mt-4 focus:ring-2 focus:ring-indigo-500 outline-none"
      />

      {/* ACTION */}
      <div className="mt-6">
        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Save Customer
        </button>
      </div>
    </div>
  );
};

export default AddCustomer;
