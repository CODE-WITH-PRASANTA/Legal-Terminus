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
  isMobile?: boolean;
  mobileMenuOpen?: boolean;
};

const IconSidebar: React.FC<Props> = ({ 
  activeTab, 
  setActiveTab, 
  isMobile = false,
  mobileMenuOpen = false 
}) => {
  if (isMobile && !mobileMenuOpen) return null;

  return (
    <aside className={`
      fixed 
      ${isMobile ? 'inset-x-0 top-16 h-[calc(100vh-4rem)]' : 'left-0 top-16 h-[calc(100vh-4rem)] w-64'}
      bg-gradient-to-b from-white to-gray-50/50
      border-r border-gray-200/50
      shadow-lg
      flex flex-col
      py-6 px-4 gap-2
      backdrop-blur-xl
      z-20
      transition-all duration-300
      ${isMobile ? 'mobile-menu' : ''}
    `}>
      {/* Decorative element */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      
      
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
    className={`
      group
      w-full h-12 
      rounded-xl 
      flex items-center gap-3 px-4 
      transition-all duration-200
      relative
      overflow-hidden
      ${active 
        ? "bg-gradient-to-r from-indigo-50 to-indigo-50/50 text-indigo-700 shadow-sm shadow-indigo-100 border border-indigo-100" 
        : "text-gray-600 hover:bg-gray-50/80 hover:text-gray-900 hover:shadow-sm"
      }
      active:scale-[0.98]
    `}
  >
    {/* Active indicator */}
    {active && (
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-r-full"></div>
    )}
    
    <div className={`
      flex items-center justify-center
      w-8 h-8 rounded-lg
      transition-all duration-200
      ${active 
        ? "bg-indigo-100 text-indigo-600 shadow-sm" 
        : "text-gray-500 group-hover:bg-gray-100 group-hover:text-gray-700"
      }
    `}>
      {icon}
    </div>
    
    <span className={`
      text-sm font-medium 
      transition-all duration-200
      ${active ? "font-semibold" : "font-normal"}
    `}>
      {label}
    </span>
    
    {/* Hover arrow */}
    {!active && (
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="w-1.5 h-1.5 rotate-45 border-r border-t border-gray-400"></div>
      </div>
    )}
  </button>
);