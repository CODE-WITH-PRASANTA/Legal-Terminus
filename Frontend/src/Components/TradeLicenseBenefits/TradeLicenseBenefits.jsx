import React from "react";
import "./TradeLicenseBenefits.css";

const TradeLicenseBenefits = () => {
  return (
    <section className="tradeben-section">
      <div className="tradeben-container">
        {/* Heading + intro */}
        <header className="tradeben-header">
          <h2 className="tradeben-title">
            Benefits of Trade License Registration in India
          </h2>
          <p className="tradeben-subtitle">
            Trade licenses are issued by municipal authorities to regulate and authorize
            business operations within a locality. Registering ensures that your business
            adheres to safety, health, and legal standards while maintaining credibility in
            the marketplace.
          </p>
        </header>

        {/* Cards */}
        <div className="tradeben-grid">
          {/* 1 */}
          <article className="tradeben-card">
            <h3 className="tradeben-card-title">Legal Business Recognition</h3>
            <div className="tradeben-card-underline" />
            <p className="tradeben-card-text">
              A trade license legally validates your business operations, helping you run
              smoothly under municipal laws and avoid penalties.
            </p>
          </article>

          {/* 2 */}
          <article className="tradeben-card">
            <h3 className="tradeben-card-title">Public Health & Safety Compliance</h3>
            <div className="tradeben-card-underline" />
            <p className="tradeben-card-text">
              Businesses are required to meet specific hygiene, safety, and environmental
              standards, ensuring a safe and compliant operation.
            </p>
          </article>

          {/* 3 */}
          <article className="tradeben-card">
            <h3 className="tradeben-card-title">Improved Business Credibility</h3>
            <div className="tradeben-card-underline" />
            <p className="tradeben-card-text">
              Licensed businesses are more trusted by customers, suppliers, and government
              agencies, which improves reputation and business relationships.
            </p>
          </article>

          {/* 4 */}
          <article className="tradeben-card">
            <h3 className="tradeben-card-title">Eligibility for Local Benefits</h3>
            <div className="tradeben-card-underline" />
            <p className="tradeben-card-text">
              A registered trade license may make your business eligible for municipal
              incentives, ease of approvals, and faster growth support.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TradeLicenseBenefits;
