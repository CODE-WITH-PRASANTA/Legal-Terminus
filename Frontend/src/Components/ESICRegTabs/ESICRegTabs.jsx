import React, { useState } from "react";
import "./ESICRegTabs.css";

const TABS = [
  "Overview",
  "Benefits",
  "Lisicles",
  "Process",
  "Penalties",
  "Other Information",
  "LegalTerminus Support",
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
