import React from "react";
import "./IECBenefits.css";

const IECBenefits = () => {
  return (
    <section className="iecben-section">
      <div className="iecben-container">
        {/* Heading + intro */}
        <header className="iecben-header">
          <h2 className="iecben-title">
            Benefits of Importer Exporter Code Registration in India
          </h2>
          <p className="iecben-subtitle">
            IEC Registration offers many strategic and financial benefits:
          </p>
        </header>

        {/* Cards */}
        <div className="iecben-grid">
          {/* 1 */}
          <article className="iecben-card">
            <h3 className="iecben-card-title">Legal Permission</h3>
            <div className="iecben-card-underline" />
            <p className="iecben-card-text">
              Get official approval to do import and export work without any legal issues.
            </p>
          </article>

          {/* 2 */}
          <article className="iecben-card">
            <h3 className="iecben-card-title">Banking Support</h3>
            <div className="iecben-card-underline" />
            <p className="iecben-card-text">
              Open a foreign currency bank account and get better support for international payments.
            </p>
          </article>

          {/* 3 */}
          <article className="iecben-card">
            <h3 className="iecben-card-title">Extra Benefits</h3>
            <div className="iecben-card-underline" />
            <p className="iecben-card-text">
              Get benefits like refunds and government incentives on exports.
            </p>
          </article>

          {/* 4 */}
          <article className="iecben-card">
            <h3 className="iecben-card-title">Better Trust</h3>
            <div className="iecben-card-underline" />
            <p className="iecben-card-text">
              Build a strong image and gain trust from international buyers and suppliers.
            </p>
          </article>

          {/* 5 */}
          <article className="iecben-card">
            <h3 className="iecben-card-title">Faster Customs</h3>
            <div className="iecben-card-underline" />
            <p className="iecben-card-text">
              Goods clear faster at ports and borders with fewer delays.
            </p>
          </article>

          {/* 6 */}
          <article className="iecben-card">
            <h3 className="iecben-card-title">More Opportunities</h3>
            <div className="iecben-card-underline" />
            <p className="iecben-card-text">
              Apply for government tenders where IEC is required.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default IECBenefits;
