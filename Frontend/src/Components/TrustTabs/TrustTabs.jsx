
import React, { useState } from "react";
import "./TrustTabs.css";

const tabs = [
  "Overview",
  "Characteristics",
  "Benefits",
  "Eligibility",
  "Documents Required",
  "Registration Process",
  "Registration Fees",
  "Compliance",
  "Cancellation",
  "Certificate",
  "FAQs",
];

const VISIBLE_COUNT = 5; // how many tabs are visible at a time

const ScrollableTabs = () => {
  const [startIndex, setStartIndex] = useState(0);   // first visible tab index
  const [activeIndex, setActiveIndex] = useState(0); // currently selected tab

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + VISIBLE_COUNT < tabs.length;

  const handleNext = () => {
    if (!canGoNext) return;
    setStartIndex((prev) => prev + 1);
    setActiveIndex((prev) => Math.min(prev + 1, tabs.length - 1));
  };

  const handlePrev = () => {
    if (!canGoPrev) return;
    setStartIndex((prev) => prev - 1);
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleTabs = tabs.slice(startIndex, startIndex + VISIBLE_COUNT);

  return (
    <div className="tab-strip-wrapper">
      <button
        className={`tab-arrow tab-arrow-left ${!canGoPrev ? "disabled" : ""}`}
        onClick={handlePrev}
        aria-label="Previous"
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

      <button
        className={`tab-arrow tab-arrow-right ${!canGoNext ? "disabled" : ""}`}
        onClick={handleNext}
        aria-label="Next"
      >
        <span className="chevron chevron-right" />
      </button>
    </div>
  );
};

export default ScrollableTabs;
