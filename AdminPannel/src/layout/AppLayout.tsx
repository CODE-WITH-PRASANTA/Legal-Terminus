import React, { useState, useEffect } from "react";
import IconSidebar from "./IconSidebar";
import DashboardSidebarContent from "./DashboardSidebarContent";
import StackSidebarContent from "./StackSidebarContent";
import AppHeader from "./AppHeader";
import MessagesSidebarContent from "./MessagesSidebarContent";
import MainContent from "./MainContent";
import TasksSidebarContent from "./TasksSidebarContent";

const AppLayout: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);
  const [lastActiveIcon, setLastActiveIcon] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Default Dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleIconClick = (key: string) => {
    /* 🔥 UPDATES → DIRECT MAIN CONTENT (NO SIDEBAR) */
    if (key === "updates") {
      setActiveIcon(null);          // close any sidebar
      setActiveTab("Updates");      // open Updates component
      setMobileMenuOpen(false);     // close mobile menu
      return;
    }
      // 🔥 ADD → Direct Main Content
  if (key === "add") {
    setActiveIcon(null);
    setActiveTab("Add");
    setMobileMenuOpen(false);
    return;
  }

    setActiveIcon((prev) => {
      if (prev === key) return null;
      setLastActiveIcon(key);
      return key;
    });

    if (isMobile) {
      setMobileMenuOpen(true);
    }
  };

  const handleHeaderToggle = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setActiveIcon((prev) => {
        if (prev) return null;
        return lastActiveIcon ?? "dashboard";
      });
    }
  };

  const handleCloseSidebar = () => {
    setActiveIcon(null);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <AppHeader
        onToggle={handleHeaderToggle}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
      />

      {isMobile && mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => {
            setMobileMenuOpen(false);
            setActiveIcon(null);
          }}
        />
      )}

      <IconSidebar
        sidebarOpen={!!activeIcon}
        onIconClick={handleIconClick}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
      />

      <DashboardSidebarContent
        open={activeIcon === "dashboard"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onClose={handleCloseSidebar}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
      />

      <StackSidebarContent
        open={activeIcon === "stack"}
        setActiveTab={setActiveTab}
        onClose={handleCloseSidebar}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
      />

      <MessagesSidebarContent
        open={activeIcon === "messages"}
        setActiveTab={setActiveTab}
        onClose={handleCloseSidebar}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
      />

      <TasksSidebarContent
        open={activeIcon === "tasks"}
        setActiveTab={setActiveTab}
        onClose={handleCloseSidebar}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
      />

      <main
        className={`
          pt-16 transition-all
          ${isMobile ? "pl-0 pr-0" : "pl-24 pr-6"}
        `}
      >
        <div className="p-4 md:p-6">
          <MainContent activeTab={activeTab} />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
