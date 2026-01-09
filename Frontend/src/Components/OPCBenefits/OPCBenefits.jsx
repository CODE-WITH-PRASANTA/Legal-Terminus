import React from "react";
import "./OPCBenefits.css";

const OPCBenefits = () => {
  return (
    <section className="opcben-section">
      <div className="opcben-container">
        {/* Heading + intro */}
        <header className="opcben-header">
          <h2 className="opcben-title">
            Benefits of One Person Company Registration in India
          </h2>
          <p className="opcben-subtitle">
            The Ministry of Corporate Affairs (MCA) manages the company registration process
            in India. It includes registering the business with the Registrar of Companies
            (RoC) and obtaining a Digital Signature Certificate (DSC) and Director
            Identification Number (DIN).
          </p>
        </header>

        {/* Cards */}
        <div className="opcben-grid">
          {/* 1 */}
          <article className="opcben-card">
            <h3 className="opcben-card-title">Separate Legal Identity</h3>
            <div className="opcben-card-underline" />
            <p className="opcben-card-text">
              Once registered, a company becomes its own legal entity. It can own property,
              sign contracts, and operate separately from its owner.
            </p>
          </article>

          {/* 2 */}
          <article className="opcben-card">
            <h3 className="opcben-card-title">Limited Liability Protection</h3>
            <div className="opcben-card-underline" />
            <p className="opcben-card-text">
              The personal assets of the owner are safe from company debts and risks,
              ensuring financial protection.
            </p>
          </article>

          {/* 3 */}
          <article className="opcben-card">
            <h3 className="opcben-card-title">Access to Government Schemes</h3>
            <div className="opcben-card-underline" />
            <p className="opcben-card-text">
              Registered companies can benefit from government schemes like Startup India
              for tax benefits and easier compliance, and Make in India for incentives and
              manufacturing support.
            </p>
          </article>

          {/* 4 */}
          <article className="opcben-card">
            <h3 className="opcben-card-title">Increased Credibility</h3>
            <div className="opcben-card-underline" />
            <p className="opcben-card-text">
              A registered company is more trusted by investors, clients, and vendors,
              making it easier to secure funding and partnerships.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default OPCBenefits;
