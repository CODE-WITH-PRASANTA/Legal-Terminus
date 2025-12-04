import React, { useState } from "react";
import "./PublicltdTab.css";

const TABS = [
  "Overview",
  "Features",
  "Benefits",
  "Checklist",
  "Documents Required",
  "Process",
  "Why LegalTerminus",
  "FAQs",
];

const TabsBar = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="tabs-wrapper">
      <div className="tabs-container">
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
