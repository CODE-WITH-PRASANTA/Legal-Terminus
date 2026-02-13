import React, { useState, useEffect } from "react";
import IconSidebar from "./IconSidebar";
import MainContent from "./MainContent";
import AppHeader from "./AppHeader";

const AppLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/20">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/30 via-transparent to-transparent"></div>
      
      {/* ===== HEADER ===== */}
      <AppHeader
        onToggle={handleToggle}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
        sidebarCollapsed={sidebarCollapsed}
      />

      {/* ===== SIDEBAR ===== */}
      <IconSidebar 
        activeTab={activeTab} 
        setActiveTab={handleTabClick}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
      />

      {/* ===== MAIN CONTENT ===== */}
      <main className={`
        transition-all duration-300 ease-in-out
        ${isMobile 
          ? 'pt-16 pb-8 px-4' 
          : sidebarCollapsed 
            ? 'ml-20 pt-16 pb-8 px-6' 
            : 'ml-64 pt-16 pb-8 px-6'
        }
        min-h-screen
      `}>
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8 pt-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                  <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {activeTab}
                  </h1>
                </div>
                <p className="text-gray-500 mt-2 max-w-2xl">
                  {activeTab === "Dashboard" && "Comprehensive overview of your account, services, and performance metrics"}
                  {activeTab === "All Other Services" && "Browse, manage, and subscribe to all available premium services"}
                  {activeTab === "My Plan" && "View, modify, and upgrade your current subscription plan"}
                  {activeTab === "Profile Settings" && "Update your personal information, security settings, and preferences"}
                  {activeTab === "Messages" && "Check your inbox, notifications, and communication history"}
                  {activeTab === "Ticket Raise" && "Submit, track, and manage support tickets efficiently"}
                </p>
              </div>
              
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-gray-400">Home</span>
                <span className="text-gray-300">/</span>
                <span className="font-medium text-gray-700">{activeTab}</span>
              </div>
            </div>
            
            {/* Stats bar */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm">
                <p className="text-sm text-gray-500">Last Active</p>
                <p className="text-lg font-semibold text-gray-900">2 hours ago</p>
              </div>
              <div className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm">
                <p className="text-sm text-gray-500">Current Plan</p>
                <p className="text-lg font-semibold text-gray-900">Premium</p>
              </div>
              <div className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm">
                <p className="text-sm text-gray-500">Support Tickets</p>
                <p className="text-lg font-semibold text-gray-900">3 Active</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <MainContent activeTab={activeTab} />
        </div>
      </main>

      {/* Mobile menu overlay */}
      {isMobile && mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default AppLayout;