import React, { useEffect, useState, useCallback } from "react";
import {
  FiMail,
  FiPhone,
  FiMoreHorizontal,
  FiPlus,
} from "react-icons/fi";
import api from "../api/axios";
import AddEmployeeModal from "../Components/AddEmployeeModal";

/* ================= TYPES ================= */

type EmployeeStatus = "Active" | "On Leave" | "Probation" | "Remote";

interface EmployeeCard {
  id: string;
  name: string;
  role: string;
  department: string;
  hireDate: string;
  email: string;
  phone: string;
  status: EmployeeStatus;
  avatar: string;
}

/* ================= STATUS STYLES ================= */

const statusStyle: Record<EmployeeStatus, string> = {
  Active: "bg-green-100 text-green-600",
  "On Leave": "bg-red-100 text-red-600",
  Probation: "bg-yellow-100 text-yellow-600",
  Remote: "bg-purple-100 text-purple-600",
};

/* ================= COMPONENT ================= */

const Employee: React.FC = () => {
  const [employeeList, setEmployeeList] = useState<EmployeeCard[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  /* ================= FETCH EMPLOYEES ================= */

  const fetchEmployees = useCallback(async () => {
    try {
      setLoading(true);

      const res = await api.get("/employees");

      const formattedEmployees: EmployeeCard[] = res.data.data.map(
        (emp: any) => ({
          id: emp._id,
          name: emp.name,
          role: emp.designation,
          department: emp.department,
          hireDate: new Date(emp.joiningDate).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
          email: emp.email,
          phone: emp.phone,
          status: emp.status as EmployeeStatus,

          // ✅ Proper photo handling
          avatar: emp.avatar
            ? `${import.meta.env.VITE_API_BASE_URL}/${emp.avatar}`
            : "/default-avatar.png",
        })
      );

      setEmployeeList(formattedEmployees);
    } catch (error) {
      console.error("Failed to fetch employees:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  /* ================= UI ================= */

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <span className="text-gray-400">Home</span>
          <span>›</span>
          <span className="text-gray-800 font-medium">Employee</span>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          <FiPlus size={16} />
          Add Employee
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-10 text-gray-500">
          Loading employees...
        </div>
      )}

      {/* Employee Cards */}
      {!loading && (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {employeeList.map((emp) => (
            <div
              key={emp.id}
              className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 transition md:hover:shadow-xl md:hover:-translate-y-0.5"
            >
              {/* Status + Menu */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyle[emp.status]}`}
                >
                  {emp.status}
                </span>

                <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50">
                  <FiMoreHorizontal />
                </button>
              </div>

              {/* Avatar */}
              <div className="flex justify-center">
                <img
                  src={emp.avatar}
                  alt={emp.name}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "/default-avatar.png";
                  }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-gray-200"
                />
              </div>

              {/* Name & Role */}
              <div className="text-center mt-3">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                  {emp.name}
                </h3>
                <p className="text-xs sm:text-sm text-indigo-600">
                  {emp.role}
                </p>
              </div>

              {/* Department / Hire */}
              <div className="mt-4 bg-gray-50 rounded-xl px-4 py-3">
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div>
                    <p className="text-gray-500">Department</p>
                    <p className="font-semibold text-gray-800">
                      {emp.department}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Hired Date</p>
                    <p className="font-semibold text-gray-800">
                      {emp.hireDate}
                    </p>
                  </div>
                </div>

                <div className="border-t mt-3 pt-3 space-y-2 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-start gap-2 break-all">
                    <FiMail className="text-indigo-500 mt-0.5" />
                    {emp.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <FiPhone className="text-indigo-500" />
                    {emp.phone}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Employee Modal */}
      <AddEmployeeModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={() => {
          setIsModalOpen(false);
          fetchEmployees();
        }}
      />
    </div>
  );
};

export default Employee;
