import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Employee from "../pages/Employee";
import IconSidebar from "./IconSidebar";
import DashboardSidebarContent from "./DashboardSidebarContent";
import StackSidebarContent from "./StackSidebarContent";
import AppHeader from "./AppHeader";
import MessagesSidebarContent from "./MessagesSidebarContent";
import MainContent from "./MainContent";
import TasksSidebarContent from "./TasksSidebarContent";
import CreateTask from "../pages/CreateTask";
import BlogPost from "../pages/BlogPost";
import ClientPost from "../pages/ClientPost";
import TestimonialPost from "../pages/TestimonialPost";
import VideoTestimonialPost from "../pages/VideoTestimonialPost";
import BlogView from "../pages/BlogView";
import AddTask from "../pages/AddTask";

const AppLayout: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);
  const [lastActiveIcon, setLastActiveIcon] = useState<string>("dashboard");
  const [activeTab, setActiveTab] = useState("Default Dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  /* ✅ Sync route → sidebar tab */
  useEffect(() => {
    if (location.pathname === "/employees") {
      setActiveTab("Employees");
      setActiveIcon("dashboard");
    }
  }, [location.pathname]);

  /* ✅ Mobile screen detection */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleIconClick = (key: string) => {
    /* 🔥 Direct Main Content */
    if (key === "updates") {
      setActiveIcon(null);
      setActiveTab("Updates");
      setMobileMenuOpen(false);
      return;
    }

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

    if (isMobile) setMobileMenuOpen(true);
  };

  const handleHeaderToggle = () => {
    if (isMobile) {
      setMobileMenuOpen((prev) => !prev);
    } else {
      setActiveIcon((prev) => (prev ? null : lastActiveIcon));
    }
  };

  const handleCloseSidebar = () => {
    setActiveIcon(null);
    if (isMobile) setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <AppHeader
        onToggle={handleHeaderToggle}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
      />

      {/* Mobile Overlay */}
      {isMobile && mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={handleCloseSidebar}
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
        className={`pt-16 transition-all ${
          isMobile ? "pl-0 pr-0" : "pl-24 pr-6"
        }`}
      >
        <div className="p-4 md:p-6">
          <Routes>
            <Route path="/" element={<MainContent activeTab={activeTab} />} />
            <Route path="/employees" element={<Employee />} />
            <Route path="/create/task" element={<CreateTask />} />
            <Route path="/blog/post" element={<BlogPost />} />
            <Route path="/client/post" element={<ClientPost />} />
            <Route path="/testimonial/video" element={<VideoTestimonialPost />} />
            <Route path="/testimonial/post" element={<TestimonialPost />} />
            <Route path="/blog/view" element={<BlogView />} />
            <Route path="/add-task" element={<AddTask />} />

            
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
