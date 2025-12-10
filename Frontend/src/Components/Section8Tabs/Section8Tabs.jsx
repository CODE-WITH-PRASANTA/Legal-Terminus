import React, { useState } from "react";
import "./Section8Tabs.css";

const tabs = [
  "Overview",
  "Benefits",
  "Eligibility",
  "Forms Required",
  "Documents Required",
  "Process",
  "Fees",
  "Timeline",
  "Penalty",
  "Sections",
  "Certificate",
  "Comparison",
];

const VISIBLE_COUNT = 6; // how many tabs visible at once

const SocietyTabs = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + VISIBLE_COUNT < tabs.length;

  const handleNext = () => {
    if (canGoNext) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const visibleTabs = tabs.slice(startIndex, startIndex + VISIBLE_COUNT);

  return (
    <div className="tab-strip-wrapper">
      {/* Left Arrow */}
      <button
        className={`tab-arrow tab-arrow-left ${!canGoPrev ? "disabled" : ""}`}
        onClick={handlePrev}
      >
        <span className="chevron chevron-left" />
      </button>

      <div className="tab-strip-container">
        <div className="tab-strip">
          {visibleTabs.map((label, idx) => {
            const realIndex = startIndex + idx;
            const isActive = realIndex === activeIndex;
            return (
              <button
                key={label}
                className={`tab-item ${isActive ? "active" : ""}`}
                onClick={() => setActiveIndex(realIndex)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className={`tab-arrow tab-arrow-right ${!canGoNext ? "disabled" : ""}`}
        onClick={handleNext}
      >
        <span className="chevron chevron-right" />
      </button>
    </div>
  );
};

export default SocietyTabs;
