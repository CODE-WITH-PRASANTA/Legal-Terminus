import React, { useState } from "react";
import "./OPCTabs.css";

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
    <div className="lhp-wrapper">
      <div className="lhp-container">
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
