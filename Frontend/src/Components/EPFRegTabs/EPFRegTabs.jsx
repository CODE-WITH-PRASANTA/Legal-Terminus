import React, { useState } from "react";
import "./EPFRegTabs.css";

const TABS = [
  "Overview",
  "Benefits",
  "Applicability",
  "Documents Required",
  "Process",
  "Penalties",
  "Why LegalTerminus",
  "FAQs",
];

const TabsBar = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="gis-wrapper">
      <div className="gis-container">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab-item ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabsBar;
