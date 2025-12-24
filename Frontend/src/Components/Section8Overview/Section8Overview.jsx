import React from "react";
import "./Section8Overview.css";

const features = [
  {
    title: "Focus on a Cause",
    text:
      "These companies are created solely to promote non-profit goals like education, arts, social welfare, or environmental work.",
  },
  {
    title: "Profits are Reinvested",
    text:
      "Any money earned must be put back into the organization’s mission and cannot be paid out as dividends to members.",
  },
  {
    title: "Distinct Legal Identity",
    text:
      "The company is legally separate from its members, allowing it to own property, sign contracts, and manage legal matters in its name.",
  },
  {
    title: "Limited Liability for Members",
    text:
      "Members’ personal assets are protected. Liability is limited to the amount they agreed to contribute.",
  },
  {
    title: "Official Government License",
    text:
      "They operate under a license from the Ministry of Corporate Affairs (MCA), ensuring compliance and credibility.",
  },
  {
    title: 'No "Ltd." or "Pvt. Ltd." in Name',
    text:
      'They are exempt from adding “Limited” or “Private Limited” to their name, emphasizing their non-profit nature.',
  },
  {
    title: "Eligible for Tax Exemptions",
    text:
      "After registration, they can apply for tax benefits under sections 12AB and 80G of the Income Tax Act.",
  },
];

const purposes = [
  {
    title: "Build a Formal Organization",
    text:
      "Creates a legally recognized structure to convert a social idea into a formal entity.",
  },
  {
    title: "Gain Public Trust",
    text:
      "Government regulation increases transparency and credibility with donors and partners.",
  },
  {
    title: "Improve Access to Funding",
    text:
      "Mandatory for receiving CSR funds, government grants, and institutional donations.",
  },
  {
    title: "Ensure Long-Term Existence",
    text:
      "The company has perpetual succession even if founders or members change.",
  },
  {
    title: "Legally Manage Funds & Assets",
    text:
      "Allows separate bank accounts, property ownership, and clean financial records.",
  },
];

const legalFramework = [
  {
    title: "The Companies Act, 2013",
    text:
      "Section 8 of the Act provides the legal framework for non-profit companies in India.",
  },
  {
    title: "Ministry of Corporate Affairs (MCA)",
    text:
      "The central authority administering company law and approving Section 8 licenses.",
  },
  {
    title: "Registrar of Companies (ROC)",
    text:
      "State-level authority issuing licenses and certificates of incorporation.",
  },
  {
    title: "Income Tax Department",
    text:
      "Grants tax exemptions under 12AB and 80G after incorporation.",
  },
];

const Section8Overview = () => {
  return (
    <section className="sec8o-wrapper">
      {/* What is Section 8 */}
      <div className="sec8o-block">
        <h2 className="sec8o-title">What is a Section 8 Company?</h2>
        <p className="sec8o-text">
          A Section 8 Company is a Non-Profit Organization (NPO) registered under
          the Companies Act, 2013, established to promote charitable objectives
          such as education, arts, science, social welfare, religion, and
          environmental protection.
        </p>
        <p className="sec8o-text">
          Unlike traditional companies, profits cannot be distributed to
          members. All income must be reinvested into achieving the company’s
          objectives.
        </p>
        <p className="sec8o-text">
          A minimum of two individuals can form a Section 8 Company, creating a
          trusted legal entity capable of owning assets, signing contracts, and
          managing funds independently.
        </p>
      </div>

      {/* Features */}
      <div className="sec8o-block">
        <h3 className="sec8o-subtitle">Key Features of a Section 8 Company</h3>
        <p className="sec8o-text">
          These characteristics distinguish Section 8 Companies from
          profit-driven businesses.
        </p>

        <div className="sec8o-grid">
          {features.map((item) => (
            <article key={item.title} className="sec8o-card">
              <span className="sec8o-bullet" />
              <div>
                <h4 className="sec8o-card-title">{item.title}</h4>
                <p className="sec8o-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Purpose */}
      <div className="sec8o-block sec8o-purpose">
        <h3 className="sec8o-subtitle">
          Purpose of Incorporating a Section 8 Company
        </h3>
        <p className="sec8o-text">
          Entrepreneurs and social organizations register under Section 8 to
          achieve the following:
        </p>

        <div className="sec8o-grid sec8o-grid-soft">
          {purposes.map((item) => (
            <article
              key={item.title}
              className="sec8o-card sec8o-card-soft"
            >
              <span className="sec8o-bullet" />
              <div>
                <h4 className="sec8o-card-title">{item.title}</h4>
                <p className="sec8o-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Legal Framework */}
      <div className="sec8o-block">
        <h3 className="sec8o-subtitle">
          Legal Framework & Governing Authorities
        </h3>
        <p className="sec8o-text">
          Section 8 Company registration and operations are governed by the
          following authorities:
        </p>

        <div className="sec8o-grid sec8o-grid-legal">
          {legalFramework.map((item) => (
            <article key={item.title} className="sec8o-legal-card">
              <span className="sec8o-legal-dot" />
              <div>
                <h4 className="sec8o-card-title">{item.title}</h4>
                <p className="sec8o-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8Overview;
