import React, { useEffect, useRef } from "react";
import {
  FiCheckSquare,
  FiUsers,
  FiCheckCircle,
  FiPlusCircle,
} from "react-icons/fi";

type Props = {
  open: boolean;
  setActiveTab: (tab: string) => void;
  onClose: () => void;
  isMobile: boolean;
  mobileMenuOpen: boolean;
};

const TasksSidebarContent: React.FC<Props> = ({
  open,
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

    if (open && !isMobile) {
      document.addEventListener("mousedown", handler);
    }

    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose, isMobile]);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    onClose();
  };

  return (
    <aside
      ref={ref}
      className={`
        fixed top-0 h-screen w-80 bg-white border-r z-40
        transition-transform duration-300
        ${
          isMobile
            ? `left-0 ${
                open && mobileMenuOpen
                  ? "translate-x-24"
                  : "-translate-x-full"
              }`
            : `left-24 ${open ? "translate-x-0" : "-translate-x-full"}`
        }
      `}
    >
      <div className="p-6 h-full overflow-y-auto">
        {/* HEADER */}
        <h2 className="text-lg font-semibold mb-6">Legal Terminus Admin</h2>

        {/* SECTION */}
        <p className="text-xs text-indigo-500 font-semibold mb-3">
          Task Management
        </p>

        <ul className="space-y-2">
          {/* TEAM TASKS */}
          <li
            onClick={() => handleClick("Team Tasks")}
            className="flex items-center gap-3 px-3 py-2 rounded-lg
                       hover:bg-gray-100 cursor-pointer transition"
          >
            <FiUsers className="text-gray-600" />
            <span>Team Tasks</span>
          </li>

          {/* MY TASKS */}
          <li
            onClick={() => handleClick("My Tasks")}
            className="flex items-center gap-3 px-3 py-2 rounded-lg
                       hover:bg-gray-100 cursor-pointer transition"
          >
            <FiCheckCircle className="text-gray-600" />
            <span>My Tasks</span>
          </li>

          {/* CREATE TASK */}
          <li
            onClick={() => handleClick("Create Task")}
            className="flex items-center gap-3 px-3 py-2 rounded-lg
                       hover:bg-gray-100 cursor-pointer transition"
          >
            <FiPlusCircle className="text-gray-600" />
            <span>Create Task</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default TasksSidebarContent;
