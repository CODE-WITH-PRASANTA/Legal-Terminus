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
    <section className="s12reg-section" aria-labelledby="s12reg-heading">
      <div className="s12reg-container">
        <header className="s12reg-header">
          <h2 id="s12reg-heading" className="s12reg-title">
            Registration under Sections 12A/12AB and 80G for Section 8 Companies
          </h2>
          <p className="s12reg-intro">
            Incorporation alone does not provide tax benefits to a Section 8 Company.
            Registration under Section 12AB (income tax exemption) and 80G (donor tax
            deduction) is essential for long-term financial sustainability and trust.
          </p>
        </header>

        <div className="s12reg-grid">
          {/* 12AB */}
          <article className="s12reg-card">
            <span className="s12reg-accent" />
            <h3 className="s12reg-card-title">
              Section 12A / 12AB Registration
            </h3>
            <p className="s12reg-card-desc">
              Section 12AB registration grants tax exemption on income generated
              from charitable activities of a Section 8 Company.
            </p>

            <h4 className="s12reg-subtitle">Key Benefits</h4>
            <ul className="s12reg-list">
              {benefits12A.map((b, i) => (
                <li key={i}>
                  <strong>{b.split(":")[0]}:</strong>{" "}
                  {b.split(":").slice(1).join(":").trim()}
                </li>
              ))}
            </ul>
          </article>

          {/* 80G */}
          <article className="s12reg-card">
            <span className="s12reg-accent" />
            <h3 className="s12reg-card-title">
              Section 80G Registration
            </h3>
            <p className="s12reg-card-desc">
              80G registration enables donors to claim tax deductions,
              encouraging higher and repeat donations.
            </p>

            <h4 className="s12reg-subtitle">Key Benefits</h4>
            <ul className="s12reg-list">
              {benefits80G.map((b, i) => (
                <li key={i}>
                  <strong>{b.split(":")[0]}:</strong>{" "}
                  {b.split(":").slice(1).join(":").trim()}
                </li>
              ))}
            </ul>
          </article>

          {/* Combined process */}
          <article className="s12reg-card s12reg-card-wide">
            <span className="s12reg-accent" />
            <h3 className="s12reg-card-title">
              Combined Application Process (Form 10A / 10AB)
            </h3>
            <p className="s12reg-card-desc">
              Newly incorporated Section 8 Companies must apply for provisional
              registration for both sections together.
            </p>

            <div className="s12reg-steps">
              {combinedProcess.map((step, i) => (
                <div key={i} className="s12reg-step">
                  <h5 className="s12reg-step-title">{step.title}</h5>
                  <p className="s12reg-step-text">{step.text}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Documents */}
          <article className="s12reg-card">
            <span className="s12reg-accent" />
            <h3 className="s12reg-card-title">
              Key Documents Required
            </h3>
            <p className="s12reg-card-desc">
              The following documents are required while filing Form 10A / 10AB:
            </p>

            <ul className="s12reg-docs">
              {keyDocs.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            <p className="s12reg-note">
              These registrations enable tax-free operations and make the
              organization attractive to donors.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
