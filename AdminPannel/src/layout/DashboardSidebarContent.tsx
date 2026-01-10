import React, { useEffect, useRef } from "react";
import {
  FiHome,
  FiBarChart2,
  FiDollarSign,
  FiUsers,
  FiUser,
  FiUserCheck,
  FiLayers,
  FiStar,
  FiBriefcase,
} from "react-icons/fi";

type Props = {
  open: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onClose: () => void;
  isMobile: boolean;
  mobileMenuOpen: boolean;
};

const tabs = [
  { label: "Default Dashboard", icon: <FiHome size={16} /> },
  { label: "Sales Dashboard", icon: <FiBarChart2 size={16} /> },
  { label: "Finance Dashboard", icon: <FiDollarSign size={16} /> },
  { label: "Team Management", icon: <FiUsers size={16} /> },
  { label: "Employees", icon: <FiUser size={16} /> },
  { label: "Clients", icon: <FiUserCheck size={16} /> },
  { label: "Projects", icon: <FiLayers size={16} /> },
  { label: "Review", icon: <FiStar size={16} /> },
  { label: "Deals", icon: <FiBriefcase size={16} /> },
];

const DashboardSidebarContent: React.FC<Props> = ({
  open,
  activeTab,
  setActiveTab,
  onClose,
  isMobile,
  mobileMenuOpen,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (open && !isMobile) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose, isMobile]);

  return (
    <aside
      ref={ref}
      className={`
        fixed top-0 h-screen w-80 bg-white border-r z-40 transition-transform duration-300
        ${
          isMobile
            ? `left-0 ${
                open && mobileMenuOpen
                  ? "translate-x-24"
                  : "-translate-x-full"
              }`
            : `left-24 ${
                open ? "translate-x-0" : "-translate-x-full"
              }`
        }
      `}
    >
      <div className="p-6 h-full overflow-y-auto">
        <h2 className="text-lg font-semibold mb-6">NexLink</h2>

        <p className="text-xs text-indigo-500 font-semibold mb-3">
          DASHBOARD
        </p>

        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li
              key={tab.label}
              onClick={() => {
                setActiveTab(tab.label);
                onClose();
              }}
              className={`
                flex items-center gap-3
                px-3 py-2 rounded-lg cursor-pointer text-sm font-medium
                ${
                  activeTab === tab.label
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              <span className="text-base">{tab.icon}</span>
              <span>{tab.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebarContent;
