import React, { useState } from "react";
import "./GSTRetTabs.css";

const TABS = [
  "Overview",
  "Advantages",
  "Types",
  "Eligibility Criteria",
  "Documents Required",
  "Process",
  "FAQs",
];

const TabsBar = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="ret-wrapper">
      <div className="ret-container">
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
