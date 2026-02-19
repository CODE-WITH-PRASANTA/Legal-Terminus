import React from "react";
import "./ChangeaddComRequirementsTab.css";

const ChangeaddComRequirementsTab = () => {
  return (
    <section className="Change-add-com-Rt-section">
      <div className="Change-add-com-Rt-container">
        {/* Heading + intro */}
        <header className="Change-add-com-Rt-header">
          <h2 className="Change-add-com-Rt-title">
            Benefits of Private Limited Company Registration in India
          </h2>
          <p className="Change-add-com-Rt-subtitle">
            The Ministry of Corporate Affairs (MCA) manages the company registration process in India. It includes registering the business with the Registrar of Companies (RoC) and obtaining a Digital Signature Certificate (DSC) and Director Identification Number (DIN).


          </p>
        </header>

        {/* Cards */}
        <div className="Change-add-com-Rt-grid">
          {/* 1 */}
          <article className="Change-add-com-Rt-card">
            <h3 className="Change-add-com-Rt-card-title">Separate Legal Identity</h3>
            <div className="Change-add-com-Rt-card-underline" />
            <p className="Change-add-com-Rt-card-text">
Once registered, a company becomes its own legal entity. It can own property, sign contracts, and operate separately from its owners.

            </p>
          </article>

          {/* 2 */}
          <article className="Change-add-com-Rt-card">
            <h3 className="Change-add-com-Rt-card-title">Limited Liability Protection</h3>
            <div className="Change-add-com-Rt-card-underline" />
            <p className="Change-add-com-Rt-card-text">
              The personal assets of shareholders are safe from company debts and risks, ensuring financial protection.
            </p>
          </article>

          {/* 3 */}
          <article className="Change-add-com-Rt-card">
            <h3 className="Change-add-com-Rt-card-title">
              Access to Government Schemes
            </h3>
            <div className="Change-add-com-Rt-card-underline" />
            <p className="Change-add-com-Rt-card-text">
              Registered companies can benefit from government schemes like Startup India for tax benefits and easier compliance, and Make in India for incentives and support for manufacturing businesses.
            </p>
          </article>

          {/* 4 */}
          <article className="Change-add-com-Rt-card">
            <h3 className="Change-add-com-Rt-card-title">
              Increased Credibility
            </h3>
            <div className="Change-add-com-Rt-card-underline" />
            <p className="Change-add-com-Rt-card-text">
              A registered company is more trusted by investors, clients, and vendors, making it easier to get funding and partnerships.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ChangeaddComRequirementsTab;
