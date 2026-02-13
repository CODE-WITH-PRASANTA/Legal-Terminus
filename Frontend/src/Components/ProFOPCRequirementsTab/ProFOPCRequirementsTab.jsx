import React from "react";
import "./ProFOPCRequirementsTab.css";

const RequirementsPvt = () => {
  return (
    <section className="profopc-req-section">
      <div className="profopc-req-container">
        {/* Heading + intro */}
        <header className="profopc-req-header">
          <h2 className="profopc-req-title">
            Benefits of Converting Proprietorship to OPC
          </h2>
          {/* <p className="profopc-req-subtitle">
            The Ministry of Corporate Affairs (MCA) manages the company
            registration process in India. It includes registering the business
            with the Registrar of Companies (RoC) and obtaining a Digital
            Signature Certificate (DSC) and Director Identification Number (DIN).
          </p> */}
        </header>

        {/* Cards */}
        <div className="profopc-req-grid">
          {/* 1 */}
          <article className="profopc-req-card">
            <h3 className="profopc-req-card-title">Limited Liability</h3>
            <div className="profopc-req-card-underline" />
            <p className="profopc-req-card-text">
              Your personal property stays safe. If the business faces losses or legal issues, only company assets are affected.
            </p>
          </article>

          {/* 2 */}
          <article className="profopc-req-card">
            <h3 className="profopc-req-card-title">
              Separate Legal Identity
            </h3>
            <div className="profopc-req-card-underline" />
            <p className="profopc-req-card-text">
              The OPC becomes a company in its own name — it can buy property, sign contracts, and take legal action independently.
            </p>
          </article>

          {/* 3 */}
          <article className="profopc-req-card">
            <h3 className="profopc-req-card-title">
              Better Business Trust
            </h3>
            <div className="profopc-req-card-underline" />
            <p className="profopc-req-card-text">
              Banks, clients, and suppliers take OPCs more seriously than proprietorships, helping you build stronger credibility.
            </p>
          </article>

          {/* 4 */}
          <article className="profopc-req-card">
            <h3 className="profopc-req-card-title">Tax Advantages</h3>
            <div className="profopc-req-card-underline" />
            <p className="profopc-req-card-text">
              OPCs enjoy company tax benefits and deductions that individual proprietors don’t get.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RequirementsPvt;
