import React from "react";
import {
  FiHome,
  FiGrid,
  FiLayers,
  FiUser,
  FiMessageSquare,
  FiHelpCircle,
} from "react-icons/fi";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const IconSidebar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r shadow-sm flex flex-col items-start py-6 px-4 gap-2">
      <SidebarIcon
        icon={<FiHome size={20} />}
        label="Dashboard"
        active={activeTab === "Dashboard"}
        onClick={() => setActiveTab("Dashboard")}
      />

      <SidebarIcon
        icon={<FiGrid size={20} />}
        label="All Other Services"
        active={activeTab === "All Other Services"}
        onClick={() => setActiveTab("All Other Services")}
      />

      <SidebarIcon
        icon={<FiLayers size={20} />}
        label="My Plan"
        active={activeTab === "My Plan"}
        onClick={() => setActiveTab("My Plan")}
      />

      <SidebarIcon
        icon={<FiUser size={20} />}
        label="Profile Settings"
        active={activeTab === "Profile Settings"}
        onClick={() => setActiveTab("Profile Settings")}
      />

      <SidebarIcon
        icon={<FiMessageSquare size={20} />}
        label="Messages"
        active={activeTab === "Messages"}
        onClick={() => setActiveTab("Messages")}
      />

      <SidebarIcon
        icon={<FiHelpCircle size={20} />}
        label="Ticket Raise"
        active={activeTab === "Ticket Raise"}
        onClick={() => setActiveTab("Ticket Raise")}
      />
    </aside>
  );
};

export default IconSidebar;

/* ===== SUB COMPONENT ===== */

const SidebarIcon = ({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`w-full h-12 rounded-xl flex items-center gap-3 px-4 transition-all
      ${
        active
          ? "bg-indigo-50 text-indigo-600 border border-indigo-100"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
  >
    <div className={`${active ? "text-indigo-600" : "text-gray-500"}`}>
      {icon}
    </div>
    <span className={`text-sm font-medium ${active ? "font-semibold" : "font-normal"}`}>
      {label}
    </span>
  </button>
);