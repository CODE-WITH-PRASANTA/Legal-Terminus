import React from "react";
import "./ChangeObjectComRequirementsTab.css";

const ChangeObjectComRequirementsTab = () => {
  return (
    <section className="Change-ob-com-Req-section">
      <div className="Change-ob-com-Req-container">
        {/* Heading + intro */}
        <header className="Change-ob-com-Req-header">
          <h2 className="Change-ob-com-Req-title">
            Benefits of Private Limited Company Registration in India
          </h2>
          <p className="Change-ob-com-Req-subtitle">
            The Ministry of Corporate Affairs (MCA) manages the company registration process in India. It includes registering the business with the Registrar of Companies (RoC) and obtaining a Digital Signature Certificate (DSC) and Director Identification Number (DIN).


          </p>
        </header>

        {/* Cards */}
        <div className="Change-ob-com-Req-grid">
          {/* 1 */}
          <article className="Change-ob-com-Req-card">
            <h3 className="Change-ob-com-Req-card-title">Separate Legal Identity</h3>
            <div className="Change-ob-com-Req-card-underline" />
            <p className="Change-ob-com-Req-card-text">
Once registered, a company becomes its own legal entity. It can own property, sign contracts, and operate separately from its owners.

            </p>
          </article>

          {/* 2 */}
          <article className="Change-ob-com-Req-card">
            <h3 className="Change-ob-com-Req-card-title">Limited Liability Protection</h3>
            <div className="Change-ob-com-Req-card-underline" />
            <p className="Change-ob-com-Req-card-text">
              The personal assets of shareholders are safe from company debts and risks, ensuring financial protection.
            </p>
          </article>

          {/* 3 */}
          <article className="Change-ob-com-Req-card">
            <h3 className="Change-ob-com-Req-card-title">
              Access to Government Schemes
            </h3>
            <div className="Change-ob-com-Req-card-underline" />
            <p className="Change-ob-com-Req-card-text">
              Registered companies can benefit from government schemes like Startup India for tax benefits and easier compliance, and Make in India for incentives and support for manufacturing businesses.
            </p>
          </article>

          {/* 4 */}
          <article className="Change-ob-com-Req-card">
            <h3 className="Change-ob-com-Req-card-title">
              Increased Credibility
            </h3>
            <div className="Change-ob-com-Req-card-underline" />
            <p className="Change-ob-com-Req-card-text">
              A registered company is more trusted by investors, clients, and vendors, making it easier to get funding and partnerships.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ChangeObjectComRequirementsTab;
