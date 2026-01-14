import React from "react";
import "./IncorporationDocuments.css";

/* ================= ICONS ================= */

const BulbIcon = () => (
  <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
    <path
      d="M32 6C21 6 12 15 12 26c0 8 5 14 9 18 2 2 3 4 3 6h16c0-2 1-4 3-6 4-4 9-10 9-18C52 15 43 6 32 6z"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 56h16M26 50h12"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const RocketIcon = () => (
  <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
    <path
      d="M32 6C42 14 46 26 46 38L32 48 18 38C18 26 22 14 32 6z"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M32 22v10" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <circle cx="32" cy="26" r="3" fill="white" />
  </svg>
);

const TargetIcon = () => (
  <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="18" stroke="white" strokeWidth="3" />
    <circle cx="32" cy="32" r="8" stroke="white" strokeWidth="3" />
    <circle cx="32" cy="32" r="2.5" fill="white" />
  </svg>
);

/* ================= CARD ================= */

const Item = ({ color, icon, title, desc, rotate }) => (
  <div className="inc-docs-item">
    <svg width="180" height="180" viewBox="0 0 180 180">
      <circle cx="90" cy="90" r="70" stroke="#e0e0e0" strokeWidth="10" fill="none" />
      <circle
        cx="90"
        cy="90"
        r="70"
        stroke={color}
        strokeWidth="10"
        fill="none"
        strokeDasharray="220 440"
        transform={`rotate(${rotate} 90 90)`}
      />
      <circle cx="90" cy="90" r="42" fill={color} />
      <g transform="translate(72 72)">{icon}</g>
    </svg>

    <h3 style={{ color }}>{title}</h3>
    <p>{desc}</p>
  </div>
);

/* ================= MAIN ================= */

export default function IncorporationDocuments() {
  return (
    <section className="inc-docs-section">
      <div className="inc-docs-container">

        {/* SEO HEADING */}
        <h2 className="inc-docs-main-heading">
          Documents Required for Incorporation Company Registration
        </h2>

        {/* DECORATIVE HEADER */}
        <div className="inc-docs-header">
          Documents Required
          <span>Incorporation Company</span>
        </div>

        {/* CONNECTOR */}
        <svg className="inc-docs-connector" viewBox="0 0 800 200">
          <path
            d="
              M400 20 V80
              M200 80 H600
              M200 80 V150
              M400 80 V150
              M600 80 V150
            "
            stroke="#9e9e9e"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="200" cy="80" r="3" fill="#9e9e9e" />
          <circle cx="400" cy="80" r="3" fill="#9e9e9e" />
          <circle cx="600" cy="80" r="3" fill="#9e9e9e" />
        </svg>

        {/* ITEMS */}
        <div className="inc-docs-items">
          <Item
            color="#18c5b9"
            rotate="-120"
            title="Identity Proof"
            desc="PAN card, Aadhaar card, or Passport of directors."
            icon={<BulbIcon />}
          />

          <Item
            color="#f5b300"
            rotate="-60"
            title="Address Proof"
            desc="Utility bill, bank statement, or rental agreement."
            icon={<RocketIcon />}
          />

          <Item
            color="#8e44ad"
            rotate="0"
            title="Registered Office Proof"
            desc="Electricity bill and NOC from property owner."
            icon={<TargetIcon />}
          />
        </div>

      </div>
    </section>
  );
}
