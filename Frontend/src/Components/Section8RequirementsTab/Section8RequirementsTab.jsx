import React from "react";
import "./Section8RequirementsTab.css";

const Section8RequirementsTab = () => {
  return (
    <section className="s8-req-section">
      <div className="s8-req-container">

        {/* ================= HEADER ================= */}
        <header className="s8-req-header">
          <h2 className="s8-req-title">
            Incorporation Of Wholly Owned Subsidiary in India
          </h2>
          <p className="s8-req-subtitle">
            The Ministry of Corporate Affairs (MCA) manages the company
            registration process in India. It includes registering the business
            with the Registrar of Companies (RoC) and obtaining a Digital
            Signature Certificate (DSC) and Director Identification Number (DIN).
          </p>
        </header>

        {/* ================= CARDS ================= */}
        <div className="s8-req-grid">

          {/* Card 1 */}
          <article className="s8-req-card">
            <h3 className="s8-req-card-title">
              Separate Legal Identity
            </h3>
            <div className="s8-req-card-underline" />
            <p className="s8-req-card-text">
              Once registered, a company becomes its own legal entity. It can own
              property, sign contracts, and operate separately from its owners.
            </p>
          </article>

          {/* Card 2 */}
          <article className="s8-req-card">
            <h3 className="s8-req-card-title">
              Limited Liability Protection
            </h3>
            <div className="s8-req-card-underline" />
            <p className="s8-req-card-text">
              The personal assets of shareholders are protected from company
              debts and business risks, ensuring financial safety.
            </p>
          </article>

          {/* Card 3 */}
          <article className="s8-req-card">
            <h3 className="s8-req-card-title">
              Access to Government Schemes
            </h3>
            <div className="s8-req-card-underline" />
            <p className="s8-req-card-text">
              Registered companies can benefit from schemes such as Startup
              India for tax benefits and easier compliance, and Make in India
              incentives for business growth.
            </p>
          </article>

          {/* Card 4 */}
          <article className="s8-req-card">
            <h3 className="s8-req-card-title">
              Increased Credibility
            </h3>
            <div className="s8-req-card-underline" />
            <p className="s8-req-card-text">
              A registered company gains higher trust among investors, clients,
              and vendors, making funding and partnerships easier.
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Section8RequirementsTab;
