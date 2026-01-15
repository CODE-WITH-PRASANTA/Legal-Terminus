import React, { useState } from "react";
import "./GSTRegTabs.css";

/* TAB CONTENT */
import GSTRegOverview from "../GSTRegOverview/GSTRegOverview";
import Advantages from "../GSTRegAdvantages/GSTRegAdvantages";
import Benefits from "../GSTRegEligibility/GSTRegEligibility";
import Documents from "../GSTRegDocument/GSTRegDocument";
import Processes from "../GSTRegProcess/GSTRegProcess";
import Types from "../GSTRegTypes/GSTRegTypes";
import FAQs from "../GSTRegFAQ/GSTRegFAQ";

const TABS = [
  { id: "overview", label: "Overview", component: <GSTRegOverview /> },
  { id: "advantages", label: "Advantages", component: <Advantages /> },
  // { id: "benefits", label: "Benefits", component: <Benefits /> },
  { id: "documents", label: "Documents", component: <Documents /> },
  { id: "processes", label: "Processes", component: <Processes /> },
  // { id: "types", label: "Types", component: <Types /> },
  { id: "faqs", label: "FAQs", component: <FAQs /> },
];

const TabsBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => {
    if (index >= 0 && index < TABS.length) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="gst-tabs">
      {/* Header */}
      {/* <header className="gst-tabs-header">
        <h1>GST Registration Guide</h1>
        <p>Complete step-by-step guide for GST registration in India</p>
      </header> */}

      {/* Progress */}
      <div className="gst-progress">
        {TABS.map((_, i) => (
          <span
            key={i}
            className={`gst-progress-step ${
              i <= activeIndex ? "active" : ""
            }`}
          />
        ))}
      </div>

      {/* Tabs */}
      <nav className="gst-tabs-nav">
        <div
          className="gst-tabs-indicator"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            className={`gst-tab ${i === activeIndex ? "active" : ""}`}
            onClick={() => goTo(i)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="gst-tab-content">
        <div className="gst-tab-header">
          <h2>{TABS[activeIndex].label}</h2>
          <span>
            {activeIndex + 1} / {TABS.length}
          </span>
        </div>

        <div className="gst-tab-body">
          {TABS[activeIndex].component}
        </div>
      </main>
    </section>
  );
};

export default TabsBar;
