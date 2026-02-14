import React, { useState } from "react";
import "./FoodLicenseTabs.css";

const tabs = [
  { label: "Why Choose Food License", id: "company" },
  { label: "Types", id: "types" },
  { label: "Requirements", id: "requirements" },
  // { label: "Process & Steps", id: "process" },
  // { label: "Documents", id: "documents" },
  { label: "FAQ's", id: "faq" },
];

const FoodLicenseTabs = () => {
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
    <section className="foodlicense-tabs-section">
      <div className="foodlicense-tabs-container">
        <div className="foodlicense-tabs-card">
          <div className="foodlicense-tabs-list">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                type="button"
                className={`foodlicense-tab ${
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

export default FoodLicenseTabs;
