import React, { useEffect, useRef } from "react";
import {
  FiMessageSquare,
  FiMessageCircle,
  FiCalendar,
} from "react-icons/fi";

type Props = {
  open: boolean;
  setActiveTab: (tab: string) => void;
  onClose: () => void;
  isMobile: boolean;
  mobileMenuOpen: boolean;
};

const MessagesSidebarContent: React.FC<Props> = ({
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

        {/* SECTION TITLE */}
        <p className="text-xs text-indigo-500 font-semibold mb-3">
          Messages
        </p>

        {/* MENU */}
        <ul className="space-y-2">
          {/* CHAT */}
          <li
            onClick={() => handleClick("Chat")}
            className="flex items-center gap-3 px-3 py-2 rounded-lg
                       hover:bg-gray-100 cursor-pointer transition"
          >
            <FiMessageCircle className="text-gray-600" />
            <span>Chat</span>
          </li>

          {/* CALENDAR */}
          <li
            onClick={() => handleClick("Calendar")}
            className="flex items-center gap-3 px-3 py-2 rounded-lg
                       hover:bg-gray-100 cursor-pointer transition"
          >
            <FiCalendar className="text-gray-600" />
            <span>Calendar</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default MessagesSidebarContent;
