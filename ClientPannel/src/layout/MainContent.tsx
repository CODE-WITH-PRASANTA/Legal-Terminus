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
    <div className="bg-white rounded-xl p-6 shadow-sm min-h-[calc(80vh-6rem)]">
      {COMPONENT_MAP[activeTab]}
    </div>
  );
};

export default MainContent;