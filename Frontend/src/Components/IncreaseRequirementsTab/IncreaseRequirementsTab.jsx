import React from "react";
import "./IncreaseRequirementsTab.css";

const IncreaseRequirementsTab= () => {
  return (
    <section className="Increase-section">
      <div className="Increase-container">
        {/* Heading + intro */}
        <header className="Increase-header">
          <h2 className="Increase-title">
            Benefits of Private Limited Company Registration in India
          </h2>
          <p className="Increase-subtitle">
            The Ministry of Corporate Affairs (MCA) manages the company registration process in India. It includes registering the business with the Registrar of Companies (RoC) and obtaining a Digital Signature Certificate (DSC) and Director Identification Number (DIN).


          </p>
        </header>

        {/* Cards */}
        <div className="Increase-grid">
          {/* 1 */}
          <article className="Increase-card">
            <h3 className="Increase-card-title">Separate Legal Identity</h3>
            <div className="Increase-card-underline" />
            <p className="Increase-card-text">
Once registered, a company becomes its own legal entity. It can own property, sign contracts, and operate separately from its owners.

            </p>
          </article>

          {/* 2 */}
          <article className="Increase-card">
            <h3 className="Increase-card-title">Limited Liability Protection</h3>
            <div className="Increase-card-underline" />
            <p className="Increase-card-text">
              The personal assets of shareholders are safe from company debts and risks, ensuring financial protection.
            </p>
          </article>

          {/* 3 */}
          <article className="Increase-card">
            <h3 className="Increase-card-title">
              Access to Government Schemes
            </h3>
            <div className="Increase-card-underline" />
            <p className="Increase-card-text">
              Registered companies can benefit from government schemes like Startup India for tax benefits and easier compliance, and Make in India for incentives and support for manufacturing businesses.
            </p>
          </article>

          {/* 4 */}
          <article className="Increase-card">
            <h3 className="Increase-card-title">
              Increased Credibility
            </h3>
            <div className="Increase-card-underline" />
            <p className="Increase-card-text">
              A registered company is more trusted by investors, clients, and vendors, making it easier to get funding and partnerships.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default IncreaseRequirementsTab;
