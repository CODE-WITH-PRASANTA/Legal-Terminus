import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMoreHorizontal,
  FiPlus,
} from "react-icons/fi";

import Avatar1 from "../assets/avatar1.webp";
import Avatar2 from "../assets/avatar2.webp";
import Avatar3 from "../assets/avatar3.webp";
import Avatar4 from "../assets/avatar4.webp";
import Avatar5 from "../assets/avatar5.webp";
import Avatar6 from "../assets/avatar6.webp";

import AddEmployeeModal from "../Components/AddEmployeeModal";

type StatusType =
  | "Active"
  | "On Leave"
  | "Probation"
  | "Remote"
  | "Inactive"
  | "Resigned";

type EmployeeType = {
  id: number;
  name: string;
  role: string;
  department: string;
  hireDate: string;
  email: string;
  phone: string;
  status: StatusType;
  avatar: string;
};

const initialEmployees: EmployeeType[] = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "GST Registration Executive",
    department: "GST Compliance",
    hireDate: "12 Feb 2022",
    email: "amit.sharma@legalterminus.com",
    phone: "+91 98765 43210",
    status: "Active",
    avatar: Avatar1,
  },
  {
    id: 2,
    name: "Neha Verma",
    role: "Chartered Accountant",
    department: "Accounting & Taxation",
    hireDate: "08 Aug 2020",
    email: "neha.verma@legalterminus.com",
    phone: "+91 91234 56789",
    status: "Active",
    avatar: Avatar2,
  },
  {
    id: 3,
    name: "Rohit Gupta",
    role: "GST Filing Specialist",
    department: "GST Returns",
    hireDate: "21 Mar 2021",
    email: "rohit.gupta@legalterminus.com",
    phone: "+91 99887 66554",
    status: "On Leave",
    avatar: Avatar3,
  },
  {
    id: 4,
    name: "Pooja Mehta",
    role: "Legal Compliance Manager",
    department: "Corporate Compliance",
    hireDate: "15 Jan 2019",
    email: "pooja.mehta@legalterminus.com",
    phone: "+91 98111 22334",
    status: "Active",
    avatar: Avatar4,
  },
  {
    id: 5,
    name: "Sandeep Kumar",
    role: "Junior Tax Consultant",
    department: "Income Tax",
    hireDate: "05 Jun 2023",
    email: "sandeep.kumar@legalterminus.com",
    phone: "+91 90909 11223",
    status: "Probation",
    avatar: Avatar5,
  },
  {
    id: 6,
    name: "Anjali Singh",
    role: "Client Relationship Executive",
    department: "Client Support",
    hireDate: "18 Nov 2020",
    email: "anjali.singh@legalterminus.com",
    phone: "+91 93456 78901",
    status: "Remote",
    avatar: Avatar6,
  },
];


const statusStyle: Record<StatusType, string> = {
  Active: "bg-green-100 text-green-600",
  "On Leave": "bg-red-100 text-red-600",
  Probation: "bg-yellow-100 text-yellow-600",
  Remote: "bg-purple-100 text-purple-600",
  Inactive: "bg-gray-100 text-gray-600",
  Resigned: "bg-rose-100 text-rose-600",
};

const Employee: React.FC = () => {
  const [employeeList, setEmployeeList] =
    useState<EmployeeType[]>(initialEmployees);

  const [isModalOpen, setIsModalOpen] = useState(false);

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

      {/* Cards */}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {employeeList.map((emp) => (
          <div
            key={emp.id}
            className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 transition md:hover:shadow-xl md:hover:-translate-y-0.5"
          >
            {/* Status + Menu */}
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyle[emp.status]}`}>
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
                  <p className="font-semibold text-gray-800">{emp.department}</p>
                </div>
                <div>
                  <p className="text-gray-500">Hired Date</p>
                  <p className="font-semibold text-gray-800">{emp.hireDate}</p>
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

      {/* ✅ Add Employee Modal */}
      <AddEmployeeModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={(newEmp) =>
          setEmployeeList((prev) => [...prev, newEmp])
        }
      />
    </div>
  );
};

export default Employee;
