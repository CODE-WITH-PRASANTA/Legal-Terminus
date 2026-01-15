import React from "react";
import "./IECBenefits.css";

const IECBenefits = () => {
  return (
    <section className="iecben-section">
      <div className="iecben-container">
        {/* Heading + intro */}
        <header className="iecben-header">
          <h2 className="iecben-title">
            Benefits of Import Export Code (IEC) Registration in India
          </h2>
          <p className="iecben-subtitle">
            The Import Export Code (IEC) is issued by the Directorate General of Foreign Trade (DGFT)
            under the Ministry of Commerce. Having an IEC not only makes your business
            eligible to engage in import and export activities but also opens doors to
            several government incentives and trade opportunities.
          </p>
        </header>

        {/* Cards */}
        <div className="iecben-grid">
          {/* 1 */}
          <article className="iecben-card">
            <h3 className="iecben-card-title">Global Market Access</h3>
            <div className="iecben-card-underline" />
            <p className="iecben-card-text">
              IEC registration enables businesses to expand into international markets by
              allowing lawful import and export of goods and services worldwide.
            </p>
          </article>

          {/* 2 */}
          <article className="iecben-card">
            <h3 className="iecben-card-title">Government Incentives</h3>
            <div className="iecben-card-underline" />
            <p className="iecben-card-text">
              Registered exporters can benefit from government programs such as RoDTEP,
              SEIS, and MEIS that provide financial support and tax relief for export
              activities.
            </p>
          </article>

          {/* 3 */}
          <article className="iecben-card">
            <h3 className="iecben-card-title">No Compliance Burden</h3>
            <div className="iecben-card-underline" />
            <p className="iecben-card-text">
              Unlike other business registrations, IEC does not require renewal or regular
              compliance filings, reducing administrative overhead.
            </p>
          </article>

          {/* 4 */}
          <article className="iecben-card">
            <h3 className="iecben-card-title">Enhanced Credibility</h3>
            <div className="iecben-card-underline" />
            <p className="iecben-card-text">
              IEC-certified businesses gain credibility with international clients and
              suppliers, improving brand recognition and trust in global trade markets.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default IECBenefits;
