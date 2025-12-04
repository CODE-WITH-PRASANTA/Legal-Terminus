import React, { useState } from "react";
import "./Legalhelp.css";

const TABS = [
  { id: "all", label: "All Services" },
  { id: "business", label: "Business Registration" },
  { id: "government", label: "Government Registration" },
  { id: "licenses", label: "Government Licenses" },
  { id: "compliance", label: "RBI Regulatory" },
  { id: "environment", label: "Environment Laws" },
  { id: "tax", label: "Tax Filing" },
  { id: "ipr", label: "IPR" },
];

const CARDS = [
  {
    id: 1,
    category: "business",
    title: "Company Registration",
    excerpt:
      "Company Registration in India — save on professional services and get guided support from consultants.",
  },
  {
    id: 2,
    category: "business",
    title: "One Person Company Registration",
    excerpt:
      "One Person Company Registration — expert help to make the right choice for solopreneurs.",
  },
  {
    id: 3,
    category: "government",
    title: "GST Registration",
    excerpt:
      "GST Registration Online Step-by-Step (REG-01) & Expert Help. Get your GSTIN quickly.",
  },
  {
    id: 4,
    category: "tax",
    title: "GST Return Filing",
    excerpt:
      "GST Return Filing starting from just ₹999/month — maximise your input tax credit while filing GST.",
  },
  {
    id: 5,
    category: "licenses",
    title: "EPR Fulfillment in E-Waste Management",
    excerpt:
      "EPR compliance for e-waste management. Achieve effortless EPR compliance with our experts.",
  },
  {
    id: 6,
    category: "compliance",
    title: "RBI Regulatory",
    excerpt:
      "Streamline compliance with RBI rules with our expert guidance and documentation.",
  },
  {
    id: 7,
    category: "environment",
    title: "Refurbisher Authorization and License",
    excerpt:
      "Obtain refurbisher authorization and license to ensure regulatory compliance.",
  },
  {
    id: 8,
    category: "ipr",
    title: "Trademark Registration",
    excerpt:
      "Trademark registration with expert assistance — fast and reliable.",
  },
  {
    id: 9,
    category: "tax",
    title: "Professional Tax Registration",
    excerpt:
      "Apply for Professional Tax Registration with guaranteed application filing within 48 hours.",
  },
];

const Icon = ({ type = "bar" }) => {
  if (type === "bar") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="4" height="14" rx="1" fill="currentColor" />
        <rect x="10" y="9" width="4" height="10" rx="1" fill="currentColor" />
        <rect x="17" y="2" width="4" height="17" rx="1" fill="currentColor" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 2h7l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" fill="currentColor" />
    </svg>
  );
};

const Legalhelp = () => {
  // default to "all" so content is always visible on load
  const [active, setActive] = useState("all");

  const filteredCards = active === "all" ? CARDS : CARDS.filter((c) => c.category === active);

  return (
    <section className="lh-root" aria-labelledby="lh-heading">
      <div className="lh-inner">
        <h2 id="lh-heading" className="lh-title">
          Legal Help Across Wide Range of Services
        </h2>

        {/* green underline like screenshot */}
        <div className="lh-underline" aria-hidden="true" />

        <p className="lh-sub">
          Corpbiz focuses predominantly on assisting entrepreneurs or SMEs by providing services such as Business Registration, Government Registration,
          Regulatory Measures, Tax Filing, IPR, and much more.
        </p>

        <div className="lh-grid">
          {/* LEFT: Tabs */}
          <nav className="lh-left" aria-label="Service categories">
            <ul className="lh-tabs" role="list">
              {TABS.map((t) => (
                <li key={t.id} className="lh-tabs__item">
                  <button
                    className={`lh-tab ${active === t.id ? "is-active" : ""}`}
                    onClick={() => setActive(t.id)}
                    aria-pressed={active === t.id}
                    aria-selected={active === t.id}
                  >
                    <span className="lh-tab__icon" aria-hidden="true">
                      <Icon type="bar" />
                    </span>
                    <span className="lh-tab__label">{t.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* accent stays inside the gap to avoid overlapping right content */}
            <div className="lh-left__accent" aria-hidden="true" />
          </nav>

          {/* RIGHT: Cards */}
          <div className="lh-right" role="region" aria-live="polite">
            <div className="lh-cards">
              {filteredCards.length ? (
                filteredCards.map((card) => (
                  <article key={card.id} className="lh-card" tabIndex={0}>
                    <div className="lh-card__media" aria-hidden="true">
                      <div className="lh-media__badge">
                        <Icon type="doc" />
                      </div>
                    </div>

                    <div className="lh-card__body">
                      <h3 className="lh-card__title">{card.title}</h3>
                      <div className="lh-hr" />
                      <p className="lh-card__excerpt">{card.excerpt}</p>

                      <div className="lh-card__cta">
                        <button className="lh-cta" aria-label={`Read more about ${card.title}`}>
                          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="lh-empty">No services available for this category.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legalhelp;
