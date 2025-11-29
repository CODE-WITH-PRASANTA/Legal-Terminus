import React, { useState } from "react";
import "./PvtltdTabs.css";

const tabLabels = [
  "Private Limited Company",
  "Pvt Types",
  "Requirements",
  "Process & Steps",
  "Documents",
  "FAQ's",
];

const PvtTabs = ({ onTabChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
    if (onTabChange) onTabChange(tabLabels[index], index);
  };

  return (
    <section className="pvt-tabs-section">
      <div className="pvt-tabs-container">
        <div className="pvt-tabs-card">
          <div className="pvt-tabs-list">
            {tabLabels.map((label, index) => (
              <button
                key={label}
                type="button"
                className={`pvt-tab ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PvtTabs;
