import React from "react";
import "./Section8Overview.css";

const features = [
  {
    title: "Focus on a Cause",
    text: "These companies are created solely to promote non-profit goals like education, arts, social welfare, or environmental work.",
  },
  {
    title: "Profits are reinvested",
    text: "Any money earned must be put back into the organization’s mission and cannot be paid out as dividends to members.",
  },
  {
    title: "Distinct Legal Identity",
    text: "The company is legally separate from its members, allowing it to own property, sign contracts, and manage legal matters in its name.",
  },
  {
    title: "Limited Liability for Members",
    text: "Members’ personal assets are safe. Their financial responsibility is typically limited to the amount they agreed to contribute or the value of their shares (if any).",
  },
  {
    title: "Official Government License",
    text: "They operate under a license from the Ministry of Corporate Affairs (MCA), which adds credibility and requires compliance with specific rules.",
  },
  {
    title: 'No "Ltd." or "Pvt. Ltd." in Name',
    text: 'Unlike other companies, they are exempt from adding “Limited” or “Private Limited” to their name, highlighting their non-profit nature.',
  },
  {
    title: "Eligible for Tax Exemptions",
    text: "After registration, they can apply for tax benefits under sections 12AB and 80G of the Income Tax Act.",
  },
];

const purposes = [
  {
    title: "Build a Formal Organization",
    text: "Provides an official legal structure to carry out a non-profit mission and convert an idea into a recognized entity.",
  },
  {
    title: "Gain Public Trust",
    text: "Being regulated by the government makes the organization more transparent and trustworthy in the eyes of donors and partners.",
  },
  {
    title: "Improve Access to Funding",
    text: "Registration is often required to receive CSR funds, government grants, and large national or international donations.",
  },
  {
    title: "Ensure Long–Term Existence",
    text: "The company is a perpetual entity, continuing to exist even if its founding members change.",
  },
  {
    title: "Legally Manage Funds and Assets",
    text: "Helps open a dedicated bank account, own property, and manage finances under the organization’s name, separate from personal funds.",
  },
];

const legalFramework = [
  {
    title: "The Companies Act, 2013",
    text: "Section 8 of the Act provides the legal framework for establishing and regulating non-profit companies in India.",
  },
  {
    title: "Ministry of Corporate Affairs (MCA)",
    text: "The central government ministry responsible for administering the Companies Act and overseeing Section 8 company registration.",
  },
  {
    title: "Registrar of Companies (ROC)",
    text: "The ROC in each state grants the license and Certificate of Incorporation for Section 8 companies.",
  },
  {
    title: "Income Tax Department",
    text: "Handles registrations for tax exemptions on donations (80G) and income (12AB) after incorporation.",
  },
];

const Section8Overview = () => {
  return (
    <section className="s8-wrapper">
      {/* 1. What is a Section 8 Company? */}
      <div className="s8-block">
        <h2 className="s8-title">What is a Section 8 Company?</h2>
        <p className="s8-text">
          A Section 8 Company is a Non-Profit Organization (NPO) registered
          under the Companies Act, 2013. Its primary objective is to promote
          charitable activities such as commerce, art, science, sports,
          education, research, social welfare, religion, charity, or
          environmental protection.
        </p>
        <p className="s8-text">
          Unlike typical companies, its profits cannot be distributed as
          dividends to members and must be reinvested into its objectives. While
          they can have share capital, it doesn’t function in the traditional
          profit-making sense.
        </p>
        <p className="s8-text">
          A minimum of two individuals with a non-profit goal can obtain a
          Section 8 company registration. This creates a trusted legal
          structure, allowing the organization to manage its funds, sign
          contracts, and handle all legal matters in its name.
        </p>
      </div>

      {/* 2. Features (grid cards with effects) */}
      <div className="s8-block">
        <h3 className="s8-subtitle">Features of a Section 8 Company</h3>
        <p className="s8-text">
          These companies have unique characteristics that separate them from
          standard for-profit businesses, focusing entirely on their social
          mission. Here are the features:
        </p>

        <div className="s8-grid">
          {features.map((item) => (
            <article key={item.title} className="s8-card">
              <div className="s8-card-bullet" />
              <div>
                <h4 className="s8-card-heading">{item.title}</h4>
                <p className="s8-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 3. Purpose (another grid style) */}
      <div className="s8-block s8-purpose-block">
        <h3 className="s8-subtitle">
          Purpose of Incorporating a Section 8 Company
        </h3>
        <p className="s8-text">
          Founders choose to register a Section 8 Company for several key
          reasons, such as:
        </p>

        <div className="s8-grid s8-grid-purpose">
          {purposes.map((item) => (
            <article key={item.title} className="s8-card s8-card-soft">
              <div className="s8-card-bullet" />
              <div>
                <h4 className="s8-card-heading">{item.title}</h4>
                <p className="s8-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 4. Legal framework (wide cards) */}
      <div className="s8-block">
        <h3 className="s8-subtitle">
          Legal Framework and Authorities Governing Section 8 Company
          Registration
        </h3>
        <p className="s8-text">
          To register your non-profit, you need to understand the laws that
          govern its formation and operation. These laws ensure your company
          gains legal standing and can access benefits. Section 8 Company
          registration in India is primarily governed by:
        </p>

        <div className="s8-grid s8-grid-legal">
          {legalFramework.map((item) => (
            <article key={item.title} className="s8-legal-card">
              <div className="s8-legal-dot" />
              <div>
                <h4 className="s8-card-heading">{item.title}</h4>
                <p className="s8-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8Overview;
