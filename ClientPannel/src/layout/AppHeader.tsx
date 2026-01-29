import React from "react";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import {
  FiMail,
  FiBell,
  FiCalendar,
  FiChevronDown,
  FiMenu,
  FiSearch,
} from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import Logo from "../assets/Legal-Terminus.gif";

type Props = {
  onToggle: () => void;
  isMobile: boolean;
  mobileMenuOpen: boolean;
  sidebarCollapsed?: boolean;
};

const AppHeader: React.FC<Props> = ({ 
  onToggle, 
  isMobile, 
  sidebarCollapsed = false 
}) => {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 h-16
        bg-white/90 backdrop-blur-xl
        border-b border-gray-200/60
        flex items-center justify-between
        px-4 md:px-6 lg:px-8
        z-30
        shadow-lg shadow-gray-200/10
        transition-all duration-300
      "
    >
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        {/* Toggle Button */}
        <button
          onClick={onToggle}
          className="
            flex items-center justify-center
            w-10 h-10
            rounded-xl
            
            border border-gray-200
            shadow-sm
            hover:shadow-md
            hover:scale-105
            active:scale-95
            transition-all duration-200
            group
            relative
            overflow-hidden
          "
          aria-label="Toggle navigation"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:via-indigo-500/10 group-hover:to-indigo-500/5 transition-all duration-500"></div>
          
          {isMobile ? (
            <FiMenu size={20} className="text-gray-700 relative z-10" />
          ) : sidebarCollapsed ? (
            <MdOutlineKeyboardDoubleArrowRight size={20} className="text-gray-700 relative z-10" />
          ) : (
            <MdOutlineKeyboardDoubleArrowLeft size={20} className="text-gray-700 relative z-10" />
          )}
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <img
              src={Logo}
              alt="Legal Terminus"
              className="
                h-10 w-auto object-contain
                relative
                
              "
            />
          </div>
          
          
        </div>
      </div>

      

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Action Icons */}
        <div className="flex items-center gap-1 md:gap-3">
          <HeaderIcon 
            badge={3}
            tooltip="Messages"
          >
            <FiMail size={18} />
          </HeaderIcon>

          <HeaderIcon 
            badge={7}
            tooltip="Notifications"
          >
            <FiBell size={18} />
          </HeaderIcon>

          <HeaderIcon 
            className="hidden md:flex"
            tooltip="Calendar"
          >
            <FiCalendar size={18} />
          </HeaderIcon>

          
        </div>

        {/* Profile Divider */}
        <div className="h-8 w-px bg-gradient-to-b from-gray-300/50 to-transparent mx-1 md:mx-2"></div>

        {/* Profile */}
        <div
          className="
            flex items-center gap-2 md:gap-3
            pl-2 pr-3 py-1.5 md:pl-3 md:pr-4 md:py-2
            rounded-xl
            cursor-pointer
            bg-gradient-to-r from-gray-50/50 to-white/50
            border border-gray-200/50
            hover:border-gray-300/50
            hover:shadow-md
            active:scale-[0.98]
            transition-all duration-200
            group
            relative
            overflow-hidden
          "
        >
          {/* Profile glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
          
          <div className="hidden md:block text-right leading-tight relative z-10">
            <p className="text-sm font-semibold text-gray-900">
              Robert Johnson
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Manager • Active
            </p>
          </div>

          <FiChevronDown
            size={14}
            className="hidden md:block text-gray-500 relative z-10"
          />

          {/* Profile Image */}
          <div className="relative">
            <div className="
              absolute -inset-0.5
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
              rounded-full
              opacity-0
              group-hover:opacity-100
              transition-opacity duration-300
              blur-sm
            "></div>
            <img
              src="https://i.pravatar.cc/150?img=32"
              alt="Profile"
              className="
                w-9 h-9 md:w-10 md:h-10
                rounded-full
                border-2 border-white
                object-cover
                relative
                shadow-sm
              "
            />
            {/* Online indicator */}
            <div className="
              absolute bottom-0 right-0
              w-3 h-3
              bg-green-500
              border-2 border-white
              rounded-full
            "></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

/* -------------------------
   HEADER ICON COMPONENT
-------------------------- */

const HeaderIcon = ({
  children,
  className = "",
  badge = 0,
  tooltip = "",
}: {
  children: React.ReactNode;
  className?: string;
  badge?: number;
  tooltip?: string;
}) => (
  <button
    className={`
      relative
      w-10 h-10 md:w-11 md:h-11
      rounded-xl
      flex items-center justify-center
      bg-gradient-to-br from-gray-50/80 to-white/80
      border border-gray-200/60
      text-gray-600
      hover:text-gray-900
      hover:border-gray-300/60
      hover:shadow-md
      hover:scale-105
      active:scale-95
      transition-all duration-200
      group
      ${className}
    `}
    aria-label={tooltip}
    title={tooltip}
  >
    {/* Tooltip */}
    {tooltip && (
      <div className="
        absolute -top-8 left-1/2 -translate-x-1/2
        px-2 py-1
        bg-gray-900
        text-white text-xs
        rounded-md
        whitespace-nowrap
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200
        pointer-events-none
        after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
        after:border-4 after:border-transparent after:border-t-gray-900
      ">
        {tooltip}
      </div>
    )}
    
    {/* Badge */}
    {badge > 0 && (
      <div className="
        absolute -top-1 -right-1
        min-w-5 h-5
        bg-gradient-to-r from-red-500 to-pink-500
        text-white text-xs
        rounded-full
        flex items-center justify-center
        px-1
        border-2 border-white
        shadow-sm
        animate-pulse
      ">
        {badge > 9 ? '9+' : badge}
      </div>
    )}
    
    {children}
  </button>
);