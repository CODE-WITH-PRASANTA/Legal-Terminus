import React, { useState } from "react";
import IconSidebar from "./IconSidebar";
import MainContent from "./MainContent";
import AppHeader from "./AppHeader";

const AppLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    }
    // For desktop, you can add toggle functionality here if needed
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== HEADER ===== */}
      <AppHeader
        onToggle={handleToggle}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
      />

      {/* ===== SIDEBAR ===== */}
      <IconSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* ===== MAIN CONTENT ===== */}
      <main className="ml-64 pt-16 pb-8 min-h-screen">
        <div className="max-w-7xl mx-5">
          <div className="mb-6 pt-6">
            <h1 className="text-2xl font-bold text-gray-900">{activeTab}</h1>
            <p className="text-gray-500 mt-1">
              {activeTab === "Dashboard" && "Overview of your account and services"}
              {activeTab === "All Other Services" && "Browse and manage all available services"}
              {activeTab === "My Plan" && "View and modify your current plan"}
              {activeTab === "Profile Settings" && "Update your personal information and preferences"}
              {activeTab === "Messages" && "Check your inbox and notifications"}
              {activeTab === "Ticket Raise" && "Submit and track support tickets"}
            </p>
          </div>
          <MainContent activeTab={activeTab} />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;