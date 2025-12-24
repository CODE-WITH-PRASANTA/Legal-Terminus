import React from "react";
import "./PublicltdBenifits.css";

const benefits = [
  {
    title: "Limited Liability",
    text: "LLP registration provides partners with limited liability of the partners, protecting personal assets from business debts and liabilities."
  },
  {
    title: "Separate Legal Entity",
    text: "LLP has a separate legal entity, which enables it to enter contracts, own assets, and sue or be sued in its own name independently of its partners."
  },
  {
    title: "Flexible Management Structure",
    text: "LLPs allow the terms of management and operations to be structured according to the LLP agreement, giving partners freedom to determine roles and decision-making."
  },
  {
    title: "Minimum Compliance Burden",
    text: "LLPs have less compliance compared to companies, minimising administrative costs and burdens. They are exempt from AGMs and have fewer audit requirements."
  },
  {
    title: "Tax Efficiency",
    text: "LLPs are taxed as partnerships, and profits are shared with partners at their respective tax slabs, preventing double taxation."
  },
  {
    title: "Perpetual Succession",
    text: "LLPs remain in existence even if partners change due to retirement, resignation, or death."
  },
  {
    title: "Easy Transferability of Ownership",
    text: "Ownership changes are easy as per the LLP agreement, allowing investment transfer without affecting operations."
  },
  {
    title: "Credibility and Trust",
    text: "LLP registration increases trust with clients, suppliers, and investors due to its legal status and liability protection."
  },
  {
    title: "Access to Funding",
    text: "LLPs enjoy enhanced access to bank loans, venture capital, and government schemes for business growth."
  },
  {
    title: "Global Recognition",
    text: "LLPs are globally recognised, helping businesses expand internationally under bilateral and multilateral agreements."
  }
];

const BenefitsGrid = () => {
  return (
    <section className="benefits-wrapper">
      <div className="benefits-inner">
        <h1 className="benefits-title">
          What are the Benefits of Registering my LLP
        </h1>

        <p className="benefits-intro">
          Advantages of LLP registration are limited liability protection,
          flexibility in management, tax benefits, and the ease of meeting
          regulatory requirements. Some of the advantages are:
        </p>

        <div className="benefits-grid">
          {benefits.map((item, i) => (
            <div key={i} className="benefit-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
