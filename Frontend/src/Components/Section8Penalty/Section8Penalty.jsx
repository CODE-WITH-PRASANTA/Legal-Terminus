import React from "react";
import "./Section8Penalty.css";

const penaltyItems = [
  {
    title: "1. Financial Penalties for Late Filing",
    bullets: [
      "₹100 per day per form for delayed annual filings (Financial Statements – AOC-4, Annual Return – MGT-7).",
      "Maximum caps apply: Up to ₹10 Lakh for the company on AOC-4 (plus ₹1 Lakh on officers), and up to ₹5 Lakh on MGT-7 (plus ₹50,000 on officers, and a daily penalty capped at ₹5 Lakh).",
      'Persistent non-filing can lead to director disqualification and the company being marked "Defaulting."',
    ],
  },
  {
    title: "2. Revocation of Section 8 Company License (Section 8(6))",
    bullets: [
      "The Central Government can revoke the license if the company acts fraudulently, violates its objectives, or goes against public interest.",
      "The company must be given a reasonable opportunity to be heard.",
      'The company may be wound up or amalgamated with another Section 8 company, or directed to change its name to "Limited" or "Private Limited."',
    ],
  },
  {
    title: "3. General Penalties for Section 8 Contraventions (Section 8(11))",
    bullets: [
      "If a Section 8 Company defaults on any Section 8 requirement, it faces a fine of ₹10 Lakh to ₹1 Crore.",
      "Defaulting directors/officers can face imprisonment up to 3 years or a fine of ₹25,000 to ₹25 Lakh, or both.",
      "Fraudulent conduct under this section also triggers penalties under Section 447.",
    ],
  },
  {
    title: "4. Penalty for Fraud (Section 447)",
    bullets: [
      "Serious fraud (₹10 Lakh or 1% of turnover, whichever is lower): Imprisonment from 6 months to 10 years and a fine of 1 to 3 times the fraud amount. If public interest is involved, minimum imprisonment is 3 years.",
      "Smaller fraud (less than ₹10 Lakh or 1% of turnover, not involving public interest): Imprisonment up to 5 years or a fine up to ₹50 Lakh, or both.",
    ],
  },
];

export default function PenaltySection() {
  return (
    <section className="pen-section" aria-labelledby="pen-heading">
      <div className="pen-container">
        <header className="pen-header">
          <h2 id="pen-heading" className="pen-title">
            Penalty for Non-Compliance under the Companies Act
          </h2>
          <p className="pen-intro">
            Failure to comply with the Companies Act requirements can lead to severe
            consequences, including significant fines and potential company dissolution.
          </p>
        </header>

        <div className="pen-grid">
          {penaltyItems.map((item, i) => (
            <article
              className="pen-card"
              key={item.title}
              style={{ animationDelay: `${i * 140}ms` }}
            >
              <span className="pen-accent" aria-hidden="true" />
              <h3 className="pen-card-title">{item.title}</h3>

              <ul className="pen-bullets">
                {item.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
