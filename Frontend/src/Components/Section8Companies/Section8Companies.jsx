import React from "react";
import "./Section8Companies.css";

const benefits12A = [
  "Tax-Free Income: With 12A/12AB registration, the company's income used for charitable purposes is exempt from tax.",
  "Eligibility for Grants: Mandatory for receiving government grants, foreign contributions, and CSR funding.",
  "Required for 80G: You must hold a 12A/12AB certificate before applying for 80G registration.",
];

const benefits80G = [
  "Tax Deduction for Donors: 80G allows donors to claim tax deductions on donations.",
  "Attracts More Donors: Enhances credibility and encourages larger donations.",
  "Wider Funding Pool: Helps attract both individual and corporate donors.",
];

const combinedProcess = [
  {
    title: "1. Application Form",
    text: "Provisional registration is filed online via Form 10A/10AB for both Section 12AB and 80G.",
  },
  {
    title: "2. Timing",
    text: "File at least one month before the financial year begins or within six months of starting activities, whichever is earlier.",
  },
  {
    title: "3. Provisional Registration",
    text: "A provisional certificate is granted upon submission, usually valid for three years.",
  },
  {
    title: "4. Permanent Registration",
    text: "Before the provisional period ends, apply for permanent registration using Form 10AB with proof of charitable activities.",
  },
];

const keyDocs = [
  "Self-certified copy of the Certificate of Incorporation.",
  "Self-certified copies of the Memorandum of Association (MoA) & Articles of Association (AoA).",
  "PAN card of the Section 8 Company.",
  "KYC of the directors (PAN, Aadhaar).",
  "A note on the company’s activities.",
  "Financial statements for the last three years (if applicable).",
];

export default function Section12Registration() {
  return (
    <section className="s12-section" aria-labelledby="s12-heading">
      <div className="s12-container">
        <header className="s12-header">
          <h2 id="s12-heading" className="s12-title">
            Registration under Sections 12A/12AB and 80G for Section 8 Companies
          </h2>
          <p className="s12-intro">
            For a Section 8 Company incorporation alone doesn't provide tax benefits.
            The next step is getting registrations under Section 12AB (tax exemption)
            and 80G (donor deduction) of the Income Tax Act — vital for financial
            sustainability and credibility.
          </p>
        </header>

        <div className="s12-grid">
          {/* 12A/12AB block */}
          <article className="s12-card" style={{ animationDelay: "0ms" }}>
            <div className="s12-accent" />
            <h3 className="s12-card-title">1. Section 12A/12AB Registration: For Tax Exemption on Income</h3>
            <p className="s12-card-desc">
              Section 12A registration (now governed by 12AB) is a one-time process
              that grants a Section 8 Company tax-exempt status (for charitable income).
            </p>

            <h4 className="s12-subtitle">Benefits:</h4>
            <ul className="s12-list">
              {benefits12A.map((b, i) => (
                <li key={i}><strong>{b.split(":")[0]}:</strong> {b.split(":").slice(1).join(":").trim()}</li>
              ))}
            </ul>
          </article>

          {/* 80G block */}
          <article className="s12-card" style={{ animationDelay: "120ms" }}>
            <div className="s12-accent" />
            <h3 className="s12-card-title">2. Section 80G Registration: To Encourage Donations</h3>
            <p className="s12-card-desc">
              80G registration benefits donors of a Section 8 company by allowing them tax
              deductions on donations, incentivizing giving and improving funding.
            </p>

            <h4 className="s12-subtitle">Benefits:</h4>
            <ul className="s12-list">
              {benefits80G.map((b, i) => (
                <li key={i}><strong>{b.split(":")[0]}:</strong> {b.split(":").slice(1).join(":").trim()}</li>
              ))}
            </ul>
          </article>

          {/* Combined application process */}
          <article className="s12-card s12-card--wide" style={{ animationDelay: "240ms" }}>
            <div className="s12-accent" />
            <h3 className="s12-card-title">The Combined Application Process (Form 10A/10AB)</h3>
            <p className="s12-card-desc">
              New Section 8 Companies must apply for provisional registration for both sections
              at the same time via Form 10A/10AB.
            </p>

            <div className="s12-steps">
              {combinedProcess.map((step, idx) => (
                <div className="s12-step" key={idx}>
                  <h5 className="s12-step-title">{step.title}</h5>
                  <p className="s12-step-text">{step.text}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Key documents */}
          <article className="s12-card" style={{ animationDelay: "360ms" }}>
            <div className="s12-accent" />
            <h3 className="s12-card-title">Key Documents Required</h3>
            <p className="s12-card-desc">For filing Form 10A/10AB you need to upload:</p>

            <ul className="s12-docs">
              {keyDocs.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <p className="s12-conclude">These certificates are the key to financial sustainability, allowing tax-free operations and encouraging donations.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
