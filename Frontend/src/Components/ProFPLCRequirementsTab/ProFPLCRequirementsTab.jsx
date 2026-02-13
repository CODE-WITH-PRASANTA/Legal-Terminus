import React from "react";
import "./ProFPLCRequirementsTab.css";

const RequirementsPvt = () => {
  return (
    <section className="profplc-req-section">
      <div className="profplc-req-container">
        {/* Heading + intro */}
        <header className="profplc-req-header">
          <h2 className="profplc-req-title">
            Benefits of Conversion of Proprietorship to Private limited company
          </h2>
          <p className="profplc-req-subtitle">
            Converting a proprietorship into a private limited company offers several strategic advantages that support business growth, stability, and credibility. Key benefits include:
          </p>
        </header>

        {/* Cards */}
        <div className="profplc-req-grid">
          {/* 1 */}
          <article className="profplc-req-card">
            <h3 className="profplc-req-card-title">Limited Liability Protection</h3>
            <div className="profplc-req-card-underline" />
            <p className="profplc-req-card-text">
              Shareholders’ personal assets remain protected, as liability is limited only to the amount invested in the company—providing stronger financial security and risk control.
            </p>
          </article>

          {/* 2 */}
          <article className="profplc-req-card">
            <h3 className="profplc-req-card-title">
              Separate Legal Identity
            </h3>
            <div className="profplc-req-card-underline" />
            <p className="profplc-req-card-text">
              A private limited company is a distinct legal entity with perpetual existence, ensuring continuity even in case of ownership or management changes.
            </p>
          </article>

          {/* 3 */}
          <article className="profplc-req-card">
            <h3 className="profplc-req-card-title">
              Improved Access to Funding
            </h3>
            <div className="profplc-req-card-underline" />
            <p className="profplc-req-card-text">
              Private limited companies can raise capital by issuing shares, making it easier to attract investors and secure funds for expansion.
            </p>
          </article>

          {/* 4 */}
          <article className="profplc-req-card">
            <h3 className="profplc-req-card-title">Stronger Governance and Compliance</h3>
            <div className="profplc-req-card-underline" />
            <p className="profplc-req-card-text">
              Structured regulatory requirements encourage transparency, accountability, and good corporate governance—minimizing legal and compliance risks.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RequirementsPvt;
