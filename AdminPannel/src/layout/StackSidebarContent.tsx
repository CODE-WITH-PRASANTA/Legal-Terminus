import React, { useEffect, useRef } from "react";
import { FiFileText } from "react-icons/fi";

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

  return (
    <aside
      ref={ref}
      className={`
        fixed top-0 h-screen w-80 bg-white border-r z-40 transition-transform duration-300
        ${isMobile 
          ? `left-0 ${open && mobileMenuOpen ? 'translate-x-24' : '-translate-x-full'}`
          : `left-24 ${open ? 'translate-x-0' : '-translate-x-full'}`
        }
      `}
    >
      <div className="p-6 h-full overflow-y-auto">
        <h2 className="text-lg font-semibold mb-6">NexLink</h2>

        <p className="text-xs text-indigo-500 font-semibold mb-3">PAGES</p>
        <ul className="space-y-2">
          <li
            onClick={() => handleClick("Pricing")}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <FiFileText /> Pricing
          </li>
        </ul>

        <p className="text-xs text-indigo-500 font-semibold mt-6 mb-3">BLOG</p>
        <ul className="space-y-2">
          <li
            onClick={() => handleClick("Blog Grid")}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <FiFileText /> Blog Grid
          </li>
          <li
            onClick={() => handleClick("Blog List")}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <FiFileText /> Blog List
          </li>
          <li
            onClick={() => handleClick("Blog Details")}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <FiFileText /> Blog Details
          </li>
        </ul>

        <p className="text-xs text-indigo-500 font-semibold mt-6 mb-3">ERROR</p>
        <ul>
          <li
            onClick={() => handleClick("Basic")}
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <FiFileText /> Basic
          </li>
        </ul>

        
      </div>
    </aside>
  );
};

export default StackSidebarContent;