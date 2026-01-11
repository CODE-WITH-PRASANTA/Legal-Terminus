import React, { useEffect, useRef } from "react";
import {
  FiDollarSign,
  FiUsers,
  FiMail,
  FiBarChart2,
  FiEdit3,
  FiEye,
  FiMessageSquare,
  FiVideo,
  FiBriefcase,
} from "react-icons/fi";

type Props = {
  open: boolean;
  setActiveTab: (tab: string) => void;
  onClose: () => void;
  isMobile: boolean;
  mobileMenuOpen: boolean;
};

const StackSidebarContent: React.FC<Props> = ({
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
    if (open && !isMobile) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose, isMobile]);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    onClose();
  };

  const menuItem =
    "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer";

  return (
    <aside
      ref={ref}
      className={`
        fixed top-0 h-screen w-80 bg-white border-r z-40 transition-transform duration-300
        ${
          isMobile
            ? `left-0 ${
                open && mobileMenuOpen ? "translate-x-24" : "-translate-x-full"
              }`
            : `left-24 ${open ? "translate-x-0" : "-translate-x-full"}`
        }
      `}
    >
      <div className="p-6 h-full overflow-y-auto">
        <h2 className="text-lg font-semibold mb-6">
          Legal Terminus Admin
        </h2>

        

        {/* ================= LEADS ================= */}
        <p className="text-xs text-indigo-500 font-semibold mt-6 mb-3">LEADS</p>
        <ul className="space-y-2">
          <li onClick={() => handleClick("Lead")} className={menuItem}>
            <FiUsers /> Lead
          </li>
          <li
            onClick={() => handleClick("Contact Form Lead")}
            className={menuItem}
          >
            <FiMail /> Contact Form Lead
          </li>
          <li
            onClick={() => handleClick("Page Wise Lead")}
            className={menuItem}
          >
            <FiBarChart2 /> Page Wise Lead
          </li>
        </ul>

        {/* ================= CONTENT ================= */}
        <p className="text-xs text-indigo-500 font-semibold mt-6 mb-3">
          CONTENT
        </p>
        <ul className="space-y-2">
          <li onClick={() => handleClick("Blog Post")} className={menuItem}>
            <FiEdit3 /> Blog Post
          </li>
          <li onClick={() => handleClick("Blog View")} className={menuItem}>
            <FiEye /> Blog View
          </li>
          <li
            onClick={() => handleClick("Testimonial Post")}
            className={menuItem}
          >
            <FiMessageSquare /> Testimonial Post
          </li>
          <li
            onClick={() => handleClick("Video Testimonial Post")}
            className={menuItem}
          >
            <FiVideo /> Video Testimonial Post
          </li>
          <li onClick={() => handleClick("Client Post")} className={menuItem}>
            <FiBriefcase /> Client Post
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default StackSidebarContent;
