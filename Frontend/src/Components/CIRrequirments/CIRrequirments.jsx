import React from "react";
import "./CIRrequirments.css";

const RequirementsPvt = () => {
  return (
    <section className="rew-section">
      <div className="rew-container">
        {/* Heading + intro */}
        <header className="rew-header">
          <h2 className="rew-title">
            Benefits of Private Limited Company Registration in India
          </h2>
          <p className="rew-subtitle">
            The Ministry of Corporate Affairs (MCA) manages the company registration process in India. It includes registering the business with the Registrar of Companies (RoC) and obtaining a Digital Signature Certificate (DSC) and Director Identification Number (DIN).


          </p>
        </header>

        {/* Cards */}
        <div className="rew-grid">
          {/* 1 */}
          <article className="rew-card">
            <h3 className="rew-card-title">Separate Legal Identity</h3>
            <div className="rew-card-underline" />
            <p className="rew-card-text">
Once registered, a company becomes its own legal entity. It can own property, sign contracts, and operate separately from its owners.

            </p>
          </article>

          {/* 2 */}
          <article className="rew-card">
            <h3 className="rew-card-title">Limited Liability Protection</h3>
            <div className="rew-card-underline" />
            <p className="rew-card-text">
              The personal assets of shareholders are safe from company debts and risks, ensuring financial protection.
            </p>
          </article>

          {/* 3 */}
          <article className="rew-card">
            <h3 className="rew-card-title">
              Access to Government Schemes
            </h3>
            <div className="rew-card-underline" />
            <p className="rew-card-text">
              Registered companies can benefit from government schemes like Startup India for tax benefits and easier compliance, and Make in India for incentives and support for manufacturing businesses.
            </p>
          </article>

          {/* 4 */}
          <article className="rew-card">
            <h3 className="rew-card-title">
              Increased Credibility
            </h3>
            <div className="rew-card-underline" />
            <p className="rew-card-text">
              A registered company is more trusted by investors, clients, and vendors, making it easier to get funding and partnerships.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RequirementsPvt;
