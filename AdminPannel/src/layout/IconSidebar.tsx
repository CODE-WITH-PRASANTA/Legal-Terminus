import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHome,
  FiFile,
  FiMessageSquare,
  FiCheckSquare,
  FiRefreshCcw,
  FiPlus,
} from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";

/* ================= ROUTE MAP ================= */

const routes: Record<string, string> = {
  dashboard: "/dashboard",
  stack: "/stack",
  messages: "/messages",
  tasks: "/create/task",
  updates: "/updates",
  add: "/create/task",
};

/* ================= PROPS ================= */

type Props = {
  onIconClick: (iconKey: string) => void;
  sidebarOpen?: boolean;
  isMobile: boolean;
  mobileMenuOpen: boolean;
};

/* ================= MAIN COMPONENT ================= */

const IconSidebar: React.FC<Props> = ({
  onIconClick,
  isMobile,
  mobileMenuOpen,
}) => {
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();

  const handleClick = (key: string) => {
    setActive(key);
    onIconClick(key);

    if (routes[key]) {
      navigate(routes[key]);
    }
  };

  return (
    <aside
      className={`
        fixed top-0 h-screen
        bg-white/80 backdrop-blur-xl
        border-r border-gray-200
        flex flex-col items-center
        py-6
        z-50 shadow-sm
        transition-transform duration-300
        ${
          isMobile
            ? `w-24 transform ${
                mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`
            : "left-0 w-24"
        }
      `}
    >
      {/* ================= LOGO ================= */}
      <div
        className="
          w-12 h-12 rounded-2xl
          bg-gradient-to-br from-indigo-500 to-purple-600
          text-white flex items-center justify-center
          mb-10 shadow-lg
        "
      >
        <FiHome size={20} />
      </div>

      {/* ================= TOP MENU ================= */}
      <nav className="flex flex-col gap-3 items-center">
        <SidebarIcon
          icon={<FiHome size={18} />}
          active={active === "dashboard"}
          onClick={() => handleClick("dashboard")}
        />

        <SidebarIcon
          icon={<FiFile size={18} />}
          active={active === "stack"}
          onClick={() => handleClick("stack")}
        />

        <SidebarIcon
          icon={<FiMessageSquare size={18} />}
          active={active === "messages"}
          onClick={() => handleClick("messages")}
        />
      </nav>

      <Divider />

      {/* ================= MIDDLE MENU ================= */}
      <nav className="flex flex-col gap-3 items-center">
        <SidebarIcon
          icon={<FiCheckSquare size={18} />}
          active={active === "tasks"}
          onClick={() => handleClick("tasks")}
        />

        <SidebarIcon
          icon={<FiRefreshCcw size={18} />}
          active={active === "updates"}
          onClick={() => handleClick("updates")}
        />
      </nav>

      {/* ================= BOTTOM ACTIONS ================= */}
      <div className="mt-auto flex flex-col gap-4 items-center">
        <SidebarIcon
          icon={<FiPlus size={20} />}
          active={active === "add"}
          onClick={() => handleClick("add")}
        />

        <button
          onClick={() => navigate("/login")}
          className="
            w-12 h-12 rounded-2xl
            flex items-center justify-center
            text-gray-400
            hover:bg-red-50
            hover:text-red-600
            hover:scale-105
            transition-all
          "
        >
          <LuLogOut size={20} />
        </button>
      </div>
    </aside>
  );
};

export default IconSidebar;

/* ================= SUB COMPONENTS ================= */

const SidebarIcon = ({
  icon,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`
      relative w-12 h-12 rounded-2xl
      flex items-center justify-center
      transition-all duration-300
      ${
        active
          ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg scale-105"
          : "text-gray-500 hover:bg-gray-100 hover:text-indigo-600 hover:scale-105"
      }
    `}
  >
    {icon}
    {active && (
      <span className="absolute inset-0 rounded-2xl blur-md bg-indigo-500 opacity-30 -z-10"></span>
    )}
  </button>
);

const Divider = () => (
  <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-4"></div>
);
