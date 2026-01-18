import React, { useState } from "react";
import "./PublictoPriTab.css";

const tabs = [
  { label: "Why Choose Public ltd", id: "company" },
  { label: "Features", id: "features" },
  { label: "Benefits", id: "benefits" },
  { label: "Documents", id: "documents" },
  { label: "Process", id: "process" },
  { label: "FAQ's", id: "faq" },
];

const PvtTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index, id) => {
    setActiveIndex(index);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="pvt-pub-tabs-section">
      <div className="pvt-pub-tabs-container">
        <div className="pvt-pub-tabs-card">
          <div className="pvt-pub-tabs-list">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                className={`pvt-pub-tab ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => handleClick(index, tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PvtTabs;
