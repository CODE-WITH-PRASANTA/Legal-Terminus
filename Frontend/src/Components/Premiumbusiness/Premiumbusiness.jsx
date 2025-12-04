import React, { useState } from "react";
import "./Premiumbusiness.css";

const PREMIUM_ICONS = [
  "M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9S3 16.97 3 12zm8-5h2v6h3l-4 4-4-4h3V7z",
  "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z",
  "M12 2a9 9 0 100 18 9 9 0 000-18zm1 13H11v-2h2v2zm0-4H11V6h2v5z",
  "M4 4h16v3H4zM4 11h10v2H4zM4 15h16v5H4z",
  "M12 3C8.13 3 5 6.13 5 10c0 3.87 2.64 7.07 6 7.83V21l1-1 1 1v-3.17c3.36-.76 6-3.96 6-7.83 0-3.87-3.13-7-7-7z",
  "M12 1L3 5v6c0 5 3.58 9.74 9 11 5.42-1.26 9-6 9-11V5l-9-4z"
];

const SERVICES = [
  {
    title: "Startup Registration",
    short: `Corpbiz will assist in incorporating your company from basics till the end while providing startup recognition...`,
    full: `We handle name reservation, incorporation paperwork (SPICe/eForm), DIN/DSC assistance, MoA/AoA drafting & filing, bank account guidance, GST/TAN registration help and post-incorporation compliance so your company starts right.`
  },
  {
    title: "Environmental Consultancy",
    short: `Elevate the environmental initiatives of your business and meet regulatory standards towards a sustainable future with Corpbiz...`,
    full: `Our services include EIA assistance, consent to establish/operate support, waste management plans, environment audits, ISO 14001 advisory, ESG reporting guidance and liaison with pollution control boards.`
  },
  {
    title: "Regulatory (BIS, CDSCO, ISO)",
    short: `We have a team of professionals who will guide you through the process of regulatory compliance, such as BIS, CDSCO, ISO, etc...`,
    full: `We support product testing & BIS certification, CDSCO regulatory filings for medical products, and ISO management systems (9001/13485/27001) — including pre-audit readiness and auditor coordination.`
  },
  {
    title: "Tax and Auditing",
    short: `Get your tax and auditing work done in a hassle-free manner with us...`,
    full: `We offer corporate & indirect tax advisory, quarterly/annual filings, statutory audits, tax structuring, transfer pricing guidance and assistance with notices. Our CAs manage bookkeeping, GST returns, TDS and audit reports.`
  },
  {
    title: "Advisory and Consultancy",
    short: `Our team of experts are dedicated to providing you with advisory and consultancy for any of your business-related requirements...`,
    full: `We advise on corporate law, contracts, funding strategy, ESOP structuring, HR & payroll setup, business strategy and provide bespoke advisory tailored to your company stage.`
  },
  {
    title: "Licensing",
    short: `There are various laws in India that a company is required to comply with; Corpbiz helps you complete all the licensing requirements...`,
    full: `We assist with FSSAI, PSARA, trade licenses, labour registrations and sectoral permits — handling documentation, application filing, inspection coordination and follow-up until issuance.`
  }
];

function PremiumIcon({ path, id }) {
  return (
    <svg
      className="pb-icon-svg"
      viewBox="0 0 24 24"
      role="img"
      aria-labelledby={`pb-icon-${id}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#45a049" />
        </linearGradient>
        <linearGradient id={`bg-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0f9f0" />
          <stop offset="100%" stopColor="#e6f4e6" />
        </linearGradient>
        <filter id={`b-${id}`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#4CAF50" floodOpacity="0.08" />
        </filter>
      </defs>

      <g filter={`url(#b-${id})`}>
        <circle cx="12" cy="12" r="11" fill={`url(#bg-${id})`} />
      </g>

      <g transform="translate(2,2) scale(0.75)">
        <path d={path} fill={`url(#g-${id})`} />
      </g>

      <title id={`pb-icon-${id}`}>Service icon</title>
    </svg>
  );
}

export default function Premiumbusiness() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggleIndex(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className="pb-section" aria-labelledby="pb-heading">
      <div className="pb-wrapper">
        <div className="pb-left">
          <div className="pb-left-content">
            <h3 id="pb-heading" className="pb-head">
              Business Management Made <span className="highlight">Simpler</span>
            </h3>

            <p className="pb-intro">
              At Corpbiz, we are not just a platform; we are your partner who guides you in the business world. As India's leading legal service provider and tech-enabled platform, we connect startups and enterprises with more than 10,000+ professionals including lawyers, chartered accountants, company secretaries, and 1,500 engineers.
            </p>

            <div className="pb-stats">
              <div className="pb-stat">
                <span className="pb-stat-number">10K+</span>
                <span className="pb-stat-label">Experts</span>
              </div>
              <div className="pb-stat">
                <span className="pb-stat-number">1.5K+</span>
                <span className="pb-stat-label">Engineers</span>
              </div>
              <div className="pb-stat">
                <span className="pb-stat-number">24/7</span>
                <span className="pb-stat-label">Support</span>
              </div>
            </div>

            <p className="pb-cta">
              Our commitment to integrity is steadfast, providing unbiased advice through our vast network of experts. Join Corpbiz for top-notch legal solutions where your dreams can be fulfilled.
            </p>

            <div className="pb-actions">
              <button className="pb-primary">
                <span>Explore Services</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="pb-ghost">
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pb-right">
          <div className="pb-card-grid" role="list">
            {SERVICES.map((s, i) => {
              const isOpen = openIndex === i;
              return (
                <article
                  key={s.title}
                  className={`pb-card ${isOpen ? "open" : ""}`}
                  role="listitem"
                  aria-labelledby={`title-${i}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleIndex(i);
                    }
                  }}
                >
                  <div className="pb-card-icon" aria-hidden="true">
                    <PremiumIcon path={PREMIUM_ICONS[i % PREMIUM_ICONS.length]} id={i} />
                  </div>

                  <div className="pb-card-body">
                    <div className="pb-card-top">
                      <div className="pb-card-title-wrapper">
                        <h3 id={`title-${i}`} className="pb-card-title">{s.title}</h3>
                        <span className="pb-card-index">0{i + 1}</span>
                      </div>
                      <p className="pb-card-desc">
                        {s.short}
                        <button
                          className="read-btn"
                          onClick={() => toggleIndex(i)}
                          aria-expanded={isOpen}
                          aria-controls={`panel-${i}`}
                          aria-label={isOpen ? `Show less about ${s.title}` : `Read more about ${s.title}`}
                        >
                          {isOpen ? " Show less" : " Read more"}
                          <svg className="read-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d={isOpen ? "M18 15L12 9L6 15" : "M6 9L12 15L18 9"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </p>
                    </div>

                    <div
                      id={`panel-${i}`}
                      className="pb-card-extras"
                      data-open={isOpen ? "true" : "false"}
                      aria-hidden={!isOpen}
                    >
                      <div className="pb-card-full-wrapper">
                        <p className="pb-card-full">{s.full}</p>
                        <button className="pb-card-action">
                          Learn more
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}