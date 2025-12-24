import React from "react";
import "./LLPBenefits.css";

const benefits = [
  {
    title: "Limited Liability",
    text:
      "LLP registration provides partners with limited liability, ensuring their personal assets remain protected.",
  },
  {
    title: "Separate Legal Entity",
    text:
      "An LLP can own assets, enter contracts, and sue or be sued independently.",
  },
  {
    title: "Flexible Management",
    text:
      "Partners can manage the LLP or appoint managers—customizable through the LLP agreement.",
  },
  {
    title: "Minimum Compliance",
    text:
      "LLPs require fewer annual filings and have simpler compliance procedures.",
  },
  {
    title: "Tax Efficiency",
    text:
      "LLPs avoid double taxation; profits are taxed directly in partners’ hands.",
  },
  {
    title: "Perpetual Succession",
    text:
      "The LLP continues to exist even if partners change or resign.",
  },
  {
    title: "Easy Ownership Transfer",
    text:
      "Partners can transfer their ownership as per the LLP agreement without disrupting operations.",
  },
  {
    title: "Credibility",
    text:
      "LLP registration boosts trust with clients and institutions.",
  },
  {
    title: "Access to Funding",
    text:
      "Registered LLPs can obtain loans, venture capital, and government grants more easily.",
  },
  {
    title: "Global Recognition",
    text:
      "LLPs are globally accepted, making international expansion easier.",
  },
];

export default function LLPBenefits() {
  return (
    <section className="ub-benefits">
      <div className="ub-container">
        <h1 className="ub-title">What Are the Benefits of Registering My LLP?</h1>

        <p className="ub-lead">
          LLP registration provides limited liability, flexible management, tax advantages, and simplified compliance.
          Below is the complete list of major advantages:
        </p>

        <ul className="ub-list">
          {benefits.map((item, index) => (
            <li key={index} className="ub-card">
              <strong className="ub-card-title">{item.title}</strong>
              <p className="ub-card-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
