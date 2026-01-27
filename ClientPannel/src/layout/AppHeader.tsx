import React from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import {
  FiMail,
  FiBell,
  FiCalendar,
  FiChevronDown,
  FiMenu,
} from "react-icons/fi";

type Props = {
  onToggle: () => void;
  isMobile: boolean;
  mobileMenuOpen: boolean;
};

const AppHeader: React.FC<Props> = ({ onToggle, isMobile }) => {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 h-16
        bg-white/80 backdrop-blur-xl
        border-b border-gray-200
        flex items-center justify-between
        px-4 md:px-6
        z-30
        shadow-sm
      "
    >
      {/* LEFT */}
      <button
        onClick={onToggle}
        className="
          w-9 h-9 rounded-xl
          border border-gray-200
          flex items-center justify-center
          text-gray-700
          hover:bg-gray-100
          hover:shadow-sm
          active:scale-95
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-indigo-200
        "
        aria-label="Toggle navigation"
      >
        {isMobile ? (
          <FiMenu size={16} />
        ) : (
          <MdOutlineKeyboardDoubleArrowLeft size={16} />
        )}
      </button>

      {/* RIGHT */}
      <div className="flex items-center gap-4 md:gap-6">
        {/* ACTION ICONS */}
        <div className="flex items-center gap-2 md:gap-4 text-gray-500">
          <HeaderIcon>
            <FiMail size={18} />
          </HeaderIcon>

          <HeaderIcon>
            <FiBell size={18} />
          </HeaderIcon>

          <HeaderIcon className="hidden md:flex">
            <FiCalendar size={18} />
          </HeaderIcon>
        </div>

        {/* PROFILE */}
        <div
          className="
            flex items-center gap-2 md:gap-3
            px-2 py-1
            rounded-xl
            cursor-pointer
            hover:bg-gray-100
            active:bg-gray-200/50
            transition-all duration-200
          "
        >
          <div className="hidden md:block text-right leading-tight">
            <p className="text-sm font-semibold text-gray-900">
              Robert
            </p>
            <p className="text-xs text-gray-500">
              Manager
            </p>
          </div>

          <FiChevronDown
            size={14}
            className="hidden md:block text-gray-500"
          />

          <img
            src="https://i.pravatar.cc/100?img=32"
            alt="Profile"
            className="
              w-8 h-8 md:w-9 md:h-9
              rounded-full
              ring-1 ring-gray-200
              object-cover
            "
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

/* -------------------------
   SMALL PREMIUM HELPERS
-------------------------- */

const HeaderIcon = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    className={`
      w-9 h-9 rounded-full
      flex items-center justify-center
      hover:bg-gray-100
      active:scale-95
      transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-indigo-200
      ${className}
    `}
  >
    {children}
  </button>
);