import React, { useState, useRef, useEffect } from "react";
import "./Tabs.css";

import Incorporation from "../Incorporation/Incorporation";
import Steps from "../Steps/Steps";
import Documents from "../Documents/Documents";
import Faq from "../Faq/Faq";
import WhyUs from "../WhyUs/WhyUs";
import OurClients from "../OurClients/OurClients";
import BlogDetailsTestimonial from "../BlogDetailsTestimonial/BlogDetailsTestimonial";

const TAB_ITEMS = [
  { id: "inc", label: "Incorporation of wholly owned" },
  { id: "steps", label: "Steps of incorporation" },
  { id: "docs", label: "Document Required" },
  { id: "faq", label: "Faq" },
  { id: "why", label: "Why we stand out" },
  { id: "test", label: "Testimonial" },
  { id: "clients", label: "Our client" }
];

const PanelsMap = {
  inc: <Incorporation />,
  steps: <Steps />,
  docs: <Documents />,
  faq: <Faq />,
  why: <WhyUs />,
  test: <BlogDetailsTestimonial />,
  clients: <OurClients />
};

const Tabs = () => {
  const [active, setActive] = useState(TAB_ITEMS[0].id);
  const tabsRef = useRef([]);
  const containerRef = useRef(null);
  const indicatorRef = useRef(null);

  // Measure & expose the tabs-row height to CSS so scrollIntoView won't hide headings under sticky row.
  useEffect(() => {
    const updateStickyHeight = () => {
      const rowEl = containerRef.current;
      if (rowEl) {
        const extra = 12; // breathing room in px
        const h = Math.ceil(rowEl.getBoundingClientRect().height + extra);
        const wrap = rowEl.closest(".tabs-wrap");
        if (wrap) wrap.style.setProperty("--tabs-sticky-height", `${h}px`);
      }
    };

    updateStickyHeight();
    window.addEventListener("resize", updateStickyHeight);
    window.addEventListener("load", updateStickyHeight);

    return () => {
      window.removeEventListener("resize", updateStickyHeight);
      window.removeEventListener("load", updateStickyHeight);
    };
  }, []);

  // focus handling for keyboard navigation and indicator positioning
  useEffect(() => {
    const activeIndex = TAB_ITEMS.findIndex((t) => t.id === active);
    const el = tabsRef.current[activeIndex];
    if (el && indicatorRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      const left = rect.left - containerRect.left + containerRef.current.scrollLeft;
      indicatorRef.current.style.width = `${rect.width}px`;
      indicatorRef.current.style.transform = `translateX(${left}px)`;
      // ensure active tab visible in scrollable row
      const buffer = 12;
      const elLeft = el.offsetLeft;
      const elRight = elLeft + el.offsetWidth;
      const viewLeft = containerRef.current.scrollLeft;
      const viewRight = viewLeft + containerRef.current.offsetWidth;
      if (elLeft - buffer < viewLeft) {
        containerRef.current.scrollTo({ left: elLeft - buffer, behavior: "smooth" });
      } else if (elRight + buffer > viewRight) {
        containerRef.current.scrollTo({ left: elRight - containerRef.current.offsetWidth + buffer, behavior: "smooth" });
      }
    }
  }, [active]);

  // keyboard interactions (ArrowLeft, ArrowRight, Home, End, Enter/Space)
  const onKeyDown = (e, index) => {
    const max = TAB_ITEMS.length;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = (index + 1) % max;
      tabsRef.current[next].focus();
      setActive(TAB_ITEMS[next].id);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = (index - 1 + max) % max;
      tabsRef.current[prev].focus();
      setActive(TAB_ITEMS[prev].id);
    } else if (e.key === "Home") {
      e.preventDefault();
      tabsRef.current[0].focus();
      setActive(TAB_ITEMS[0].id);
    } else if (e.key === "End") {
      e.preventDefault();
      tabsRef.current[max - 1].focus();
      setActive(TAB_ITEMS[max - 1].id);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const targetId = TAB_ITEMS[index].id;
      const el = document.getElementById(`panel-${targetId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setActive(TAB_ITEMS[index].id);
    }
  };

  // click: set active and scroll to stacked panel
  const handleTabClick = (id, index) => {
    setActive(id);
    const el = document.getElementById(`panel-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      const btn = tabsRef.current[index];
      if (btn) btn.focus({ preventScroll: true });
    }
  };

  return (
    <div className="tabs-outer">
      <div className="tabs-wrap full-width" aria-live="polite">
        <div
          className="tabs-row"
          role="tablist"
          aria-label="Company information tabs"
          ref={containerRef}
        >
          {TAB_ITEMS.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => (tabsRef.current[i] = el)}
              id={`tab-${t.id}`}
              role="tab"
              aria-controls={`panel-${t.id}`}
              aria-selected={active === t.id}
              tabIndex={active === t.id ? 0 : -1}
              className={`tab modern ${active === t.id ? "active" : ""}`}
              onClick={() => handleTabClick(t.id, i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              title={t.label}
            >
              <span className="tab-icon" aria-hidden="true" />
              <span className="tab-label">{t.label}</span>
            </button>
          ))}

          <div className="tab-indicator" ref={indicatorRef} aria-hidden="true" />
        </div>

        <div className="tab-panel">
          {TAB_ITEMS.map((t) => (
            <section
              key={t.id}
              id={`panel-${t.id}`}
              role="region"
              aria-labelledby={`tab-${t.id}`}
              className={`panel-content ${active === t.id ? "is-active" : ""}`}
            >
              {PanelsMap[t.id]}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
