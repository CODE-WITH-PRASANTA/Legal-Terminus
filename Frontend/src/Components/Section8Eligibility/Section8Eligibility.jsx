import React from "react";
import "./Section8Eligibility.css";

const coreRequirements = [
  {
    title: "Minimum Two Directors",
    text: "A Section 8 company requires a minimum of two directors. If it is incorporated as a public limited company, it will require a minimum of three directors. At least one director must be a resident of India.",
  },
  {
    title: "Minimum Two Members",
    text: "The company must have at least 2 members/subscribers to get started. The members and directors can be the same people.",
  },
  {
    title: "A Unique Company Name",
    text: "The proposed name must be unique and cannot be similar to any existing company or trademark. It should reflect the company’s social objectives.",
  },
  {
    title: "Clear Non-Profit Objectives",
    text: "The company’s founding documents (the Memorandum and Articles of Association) must clearly state its charitable or non-profit goals.",
  },
  {
    title: "An Official Address in India",
    text: "You must provide a valid physical address in India that will serve as the company’s registered office.",
  },
];

const prerequisites = [
  {
    title: "Basic KYC Documents",
    text: "All proposed directors and members must provide their identity and address proofs, such as their PAN Card and Aadhaar Card.",
  },
  {
    title: "Digital Signature Certificate (DSC)",
    text: "All proposed directors must obtain a Digital Signature Certificate (DSC). This is essential for signing e-forms and documents electronically during the online registration process with the Ministry of Corporate Affairs (MCA).",
  },
  {
    title: "Director Identification Number (DIN)",
    text: "Every proposed director needs a Director Identification Number (DIN). This unique 8-digit number is allotted by the Central Government and is required for anyone intending to be a director in an Indian company.",
  },
];

const Section8Eligibility = () => {
  return (
    <section className="s8e-wrapper">
      <header className="s8e-header">
        <h2 className="s8e-title">
          Eligibility Criteria for Registering a Section 8 Company
        </h2>
        <p className="s8e-text">
          To begin the registration process, you must meet a few basic
          requirements regarding the company’s structure and the necessary
          paperwork. Basic requirements are:
        </p>
      </header>

      {/* 1. Core Requirements */}
      <section className="s8e-block">
        <h3 className="s8e-subtitle">
          <span className="s8e-section-number">1.</span> Core Requirements
        </h3>

        <div className="s8e-grid">
          {coreRequirements.map((item) => (
            <article key={item.title} className="s8e-card">
              <div className="s8e-bullet" />
              <div>
                <h4 className="s8e-card-title">{item.title}</h4>
                <p className="s8e-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 2. Mandatory Prerequisites */}
      <section className="s8e-block">
        <h3 className="s8e-subtitle">
          <span className="s8e-section-number">2.</span> Mandatory Prerequisites
        </h3>

        <div className="s8e-grid s8e-grid-prereq">
          {prerequisites.map((item) => (
            <article key={item.title} className="s8e-card s8e-card-soft">
              <div className="s8e-bullet" />
              <div>
                <h4 className="s8e-card-title">{item.title}</h4>
                <p className="s8e-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Section8Eligibility;
