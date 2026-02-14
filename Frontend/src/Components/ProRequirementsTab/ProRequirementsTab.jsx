import React from "react";
import "./ProRequirementsTab.css";

const RequirementsPvt = () => {
  return (
    <section className="req-section">
      <div className="req-container">
        {/* Heading + intro */}
        <header className="req-header">
          <h2 className="req-title">
            Benefits of Proprietorship Firm Registration in India
          </h2>
          <p className="req-subtitle">
            Registering a sole proprietorship in India is a great option for small businesses and individual entrepreneurs. Here are the key benefits:


          </p>
        </header>

        {/* Cards */}
        <div className="req-grid">
          {/* 1 */}
          <article className="req-card">
            <h3 className="req-card-title">Easy & Affordable Setup</h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
             Sole proprietorship registration is simple and low-cost. It requires less paperwork and can be started quickly.
            </p>
          </article>

          {/* 2 */}
          <article className="req-card">
            <h3 className="req-card-title">Full Control</h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              You have complete control over your business. You can take decisions freely without needing approval from partners or shareholders.
            </p>
          </article>

          {/* 3 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Simple Tax Filing
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              Taxes are easier to manage in a proprietorship. You can also claim deductions for business-related expenses.
            </p>
          </article>

          {/* 4 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Flexible Business Operations
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              You can run the business your way and make quick changes when needed. It is easy to expand, reduce, or modify operations.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RequirementsPvt;
