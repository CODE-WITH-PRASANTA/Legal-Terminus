import React from "react";
import "./TrustRequirementsTab.css";

const TrustRequirementsTab = () => {
  return (
    <section className="trust-req-section">
      <div className="trust-req-container">

        {/* ================= HEADER ================= */}
        <header className="trust-req-header">
          <h2 className="trust-req-title">
            trustoration Of Wholly Owned Subsidiary in India
          </h2>
          <p className="trust-req-subtitle">
            The Ministry of Corporate Affairs (MCA) manages the company
            registration process in India. It includes registering the business
            with the Registrar of Companies (RoC) and obtaining a Digital
            Signature Certificate (DSC) and Director Identification Number (DIN).
          </p>
        </header>

        {/* ================= CARDS ================= */}
        <div className="trust-req-grid">

          {/* Card 1 */}
          <article className="trust-req-card">
            <h3 className="trust-req-card-title">
              Separate Legal Identity
            </h3>
            <div className="trust-req-card-underline" />
            <p className="trust-req-card-text">
              Once registered, a company becomes its own legal entity. It can own
              property, sign contracts, and operate separately from its owners.
            </p>
          </article>

          {/* Card 2 */}
          <article className="trust-req-card">
            <h3 className="trust-req-card-title">
              Limited Liability Protection
            </h3>
            <div className="trust-req-card-underline" />
            <p className="trust-req-card-text">
              The personal assets of shareholders are protected from company
              debts and business risks, ensuring financial safety.
            </p>
          </article>

          {/* Card 3 */}
          <article className="trust-req-card">
            <h3 className="trust-req-card-title">
              Access to Government Schemes
            </h3>
            <div className="trust-req-card-underline" />
            <p className="trust-req-card-text">
              Registered companies can benefit from schemes such as Startup
              India for tax benefits and easier compliance, and Make in India
              incentives for business growth.
            </p>
          </article>

          {/* Card 4 */}
          <article className="trust-req-card">
            <h3 className="trust-req-card-title">
              Increased Credibility
            </h3>
            <div className="trust-req-card-underline" />
            <p className="trust-req-card-text">
              A registered company gains higher trust among investors, clients,
              and vendors, making funding and partnerships easier.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};

export default TrustRequirementsTab;
