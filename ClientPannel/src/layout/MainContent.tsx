import React from "react";
import Dashboard from "../pages/Dashboard";
import AllOtherServices from "../pages/AllServices";
import MyPlan from "../pages/MyPlan";
import ProfileSettings from "../pages/ProfileSettings";
import Messages from "../pages/Messages";
import TicketRaise from "../pages/TicketRaise";

const COMPONENT_MAP: Record<string, React.ReactNode> = {
  Dashboard: <Dashboard />,
  "All Other Services": <AllOtherServices />,
  "My Plan": <MyPlan />,
  "Profile Settings": <ProfileSettings />,
  Messages: <Messages />,
  "Ticket Raise": <TicketRaise />,
};

type Props = {
  activeTab: string;
};

const MainContent: React.FC<Props> = ({ activeTab }) => {
  return (
    <div className="
      bg-gradient-to-br from-white via-white to-gray-50/30 
      rounded-2xl p-6 lg:p-8 
      shadow-xl 
      min-h-[calc(80vh-6rem)]
      border border-gray-100
      relative
      overflow-hidden
      before:absolute before:inset-0 
      before:bg-gradient-to-br before:from-white/50 before:to-transparent
      before:pointer-events-none
    ">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {COMPONENT_MAP[activeTab]}
      </div>
    </div>
  );
};

export default MainContent;