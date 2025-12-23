import React, { useState } from "react";
import "./GSTRegTabs.css";

const TABS = [
  "Overview",
  "Advantages",
  "Eligibility Criteria",
  "Documents Required",
  "Process",
  "Features",
  "Types",
  "FAQs",
];

const TabsBar = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="reg-wrapper">
      <div className="reg-container">
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
