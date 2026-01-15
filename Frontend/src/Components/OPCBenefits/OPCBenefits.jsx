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
            <h3 className="opcben-card-title">Sole Ownership</h3>
            <div className="opcben-card-underline" />
            <p className="opcben-card-text">
              An OPC is owned by only one person. The owner has full control and keeps all profits, with no need to take approvals from others.
            </p>
          </article>

          {/* 2 */}
          <article className="opcben-card">
            <h3 className="opcben-card-title">Limited Liability</h3>
            <div className="opcben-card-underline" />
            <p className="opcben-card-text">
              In OPC, the owner’s personal assets stay safe. Liability is limited only to the unpaid share capital, not personal property.
            </p>
          </article>

          {/* 3 */}
          <article className="opcben-card">
            <h3 className="opcben-card-title">Easy Loan & Credit</h3>
            <div className="opcben-card-underline" />
            <p className="opcben-card-text">
              Since OPC is registered with MCA, it has better trust and can easily apply for business loans and credit facilities.
            </p>
          </article>

          {/* 4 */}
          <article className="opcben-card">
            <h3 className="opcben-card-title">Easy Registration</h3>
            <div className="opcben-card-underline" />
            <p className="opcben-card-text">
              OPC registration is fast and online through SPICe+ form. It reduces paperwork and saves time.
            </p>
          </article>

          {/* 5 */}
          <article className="opcben-card">
            <h3 className="opcben-card-title">MSME Benefits</h3>
            <div className="opcben-card-underline" />
            <p className="opcben-card-text">
              OPCs can register under MSME and get benefits like low-interest loans, subsidies, and easier credit support.
            </p>
          </article>

          {/* 6 */}
          <article className="opcben-card">
            <h3 className="opcben-card-title">Tax Benefits</h3>
            <div className="opcben-card-underline" />
            <p className="opcben-card-text">
              OPC gets company-level tax benefits and can claim deductions on business expenses, which helps reduce tax burden.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default OPCBenefits;
