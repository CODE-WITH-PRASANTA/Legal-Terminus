import React from "react";
import "./LLPRequirementsTab.css";

const RequirementsLlp = () => {
  return (
    <section className="llp-req-section">
      <div className="llp-req-container">
        {/* Heading + intro */}
        <header className="llp-req-header">
          <h2 className="llp-req-title">
            Benefits of Limited Liability Partnership Registration in India
          </h2>
          {/* <p className="llp-req-subtitle">
           The Ministry of Corporate Affairs (MCA) regulates LLP registration in India. It involves reserving the LLP name, obtaining DPIN/DSC for partners, and filing incorporation documents with the Registrar to get the LLP registered.

          </p> */}
        </header>

        {/* Cards */}
        <div className="llp-req-grid">
          {/* 1 */}
          <article className="llp-req-card">
            <h3 className="llp-req-card-title">Partners’ Liability is Limited</h3>
            <div className="llp-req-card-underline" />
            <p className="llp-req-card-text">
           In an LLP, partners get limited liability protection. If the business faces loss or insolvency, partners are liable only up to their capital contribution. Also, one partner is not responsible for another partner’s negligence or misconduct.
            </p>
          </article>

          {/* 2 */}
          <article className="llp-req-card">
            <h3 className="llp-req-card-title">Operational Flexibility</h3>
            <div className="llp-req-card-underline" />
            <p className="llp-req-card-text">
              An LLP is managed through an LLP Agreement, which defines partners’ roles, rights, and responsibilities. Day-to-day operations are usually handled by Designated Partners, making management smooth and well-structured.
            </p>
          </article>

          {/* 3 */}
          <article className="llp-req-card">
            <h3 className="llp-req-card-title">
              Separate Legal Identity
            </h3>
            <div className="llp-req-card-underline" />
            <p className="llp-req-card-text">
              An LLP has its own legal identity separate from its partners. It can own property, sign contracts, borrow funds, and take legal action in the LLP’s name, even if partners change over time.
            </p>
          </article>

          {/* 4 */}
          <article className="llp-req-card">
            <h3 className="llp-req-card-title">
              Lower Compliance Requirements
            </h3>
            <div className="llp-req-card-underline" />
            <p className="llp-req-card-text">
              LLPs have fewer compliances than Private Limited Companies. Audit is not mandatory unless turnover or contribution crosses a certain limit, making LLP a cost-effective and easy-to-maintain business structure.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RequirementsLlp;
