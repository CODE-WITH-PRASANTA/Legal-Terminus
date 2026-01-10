import React, { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onClose: () => void;
  isMobile: boolean;
  mobileMenuOpen: boolean;
};

const tabs = [
  "Default Dashboard",
  "Sales Dashboard",
  "Finance Dashboard",
  "Team Management",
  "Employees",
  "Customers",
  "Tasks & Projects",
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
        ${isMobile 
          ? `left-0 ${open && mobileMenuOpen ? 'translate-x-24' : '-translate-x-full'}`
          : `left-24 ${open ? 'translate-x-0' : '-translate-x-full'}`
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
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                onClose();
              }}
              className={`px-3 py-2 rounded-lg cursor-pointer text-sm font-medium
                ${
                  activeTab === tab
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebarContent;