import React, { useState } from "react";
import "./TrademarktoHearingTabs.css";

const tabs = [
  { label: "Why Choose Trade License", id: "company" },
  { label: "Types", id: "types" },
  { label: "Requirements", id: "requirements" },
  { label: "Process & Steps", id: "process" },
  { label: "Documents", id: "documents" },
  { label: "FAQ's", id: "faq" },
];

const TradeLicenseTabs = () => {
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
    <section className="thtabs-section">
      <div className="thtabs-container">
        <div className="thtabs-card">
          <div className="thtabs-list">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                className={`thtabs-tab ${index === activeIndex ? "active" : ""}`}
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

export default TradeLicenseTabs;
