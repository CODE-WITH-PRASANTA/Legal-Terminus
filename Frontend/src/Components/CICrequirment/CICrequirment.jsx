import React from "react";
import "./CICrequirment.css";

const RequirementsPvt = () => {
  return (
    <section className="nic-section">
      <div className="nic-container">
        {/* Heading + intro */}
        <header className="nic-header">
          <h2 className="nic-title">
            Benefits of Private Limited Company Registration in India
          </h2>
          <p className="nic-subtitle">
            The Ministry of Corporate Affairs (MCA) manages the company registration process in India. It includes registering the business with the Registrar of Companies (RoC) and obtaining a Digital Signature Certificate (DSC) and Director Identification Number (DIN).


          </p>
        </header>

        {/* Cards */}
        <div className="nic-grid">
          {/* 1 */}
          <article className="nic-card">
            <h3 className="nic-card-title">Separate Legal Identity</h3>
            <div className="nic-card-underline" />
            <p className="nic-card-text">
Once registered, a company becomes its own legal entity. It can own property, sign contracts, and operate separately from its owners.

            </p>
          </article>

          {/* 2 */}
          <article className="nic-card">
            <h3 className="nic-card-title">Limited Liability Protection</h3>
            <div className="nic-card-underline" />
            <p className="nic-card-text">
              The personal assets of shareholders are safe from company debts and risks, ensuring financial protection.
            </p>
          </article>

          {/* 3 */}
          <article className="nic-card">
            <h3 className="nic-card-title">
              Access to Government Schemes
            </h3>
            <div className="nic-card-underline" />
            <p className="nic-card-text">
              Registered companies can benefit from government schemes like Startup India for tax benefits and easier compliance, and Make in India for incentives and support for manufacturing businesses.
            </p>
          </article>

          {/* 4 */}
          <article className="nic-card">
            <h3 className="nic-card-title">
              Increased Credibility
            </h3>
            <div className="nic-card-underline" />
            <p className="nic-card-text">
              A registered company is more trusted by investors, clients, and vendors, making it easier to get funding and partnerships.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RequirementsPvt;
