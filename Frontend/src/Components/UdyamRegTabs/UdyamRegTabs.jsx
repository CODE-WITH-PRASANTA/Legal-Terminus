import React, { useState } from "react";
import "./UdyamRegTabs.css";

const TABS = [
  "About",
  "Who Needs",
  "Benefits",
  "Eligibility",
  "Documents",
  "Fee",
  "Process",
  "Why Us",
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
