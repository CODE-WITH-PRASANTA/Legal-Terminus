import React from "react";
import DefaultDashboard from "../pages/DefaultDashboard";
import SalesDashboard from "../pages/SalesDashboard";
import FinanceDashboard from "../pages/FinanceDashboard";
import Pricing from "../pages/Pricing";
import BlogGrid from "../pages/BlogGrid";
import Basic from "../pages/Basic";

/* 🔑 TAB → COMPONENT MAP */
const COMPONENT_MAP: Record<string, React.ReactNode> = {
  "Default Dashboard": <DefaultDashboard />,
  "Sales Dashboard": <SalesDashboard />,
  "Finance Dashboard": <FinanceDashboard />,
  Pricing: <Pricing />,
  "Blog Grid": <BlogGrid />,
  "Basic":<Basic/>,
};

type Props = {
  activeTab: string;
};

const MainContent: React.FC<Props> = ({ activeTab }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {COMPONENT_MAP[activeTab] ?? (
        <div>No page found for "{activeTab}"</div>
      )}
    </div>
  );
};

export default MainContent;
