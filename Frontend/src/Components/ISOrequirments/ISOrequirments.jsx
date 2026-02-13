import React from "react";
import "./ISOrequirments.css";

const RequirementsPvt = () => {
  return (
    <section className="req-section">
      <div className="req-container">
        {/* Heading + intro */}
        <header className="req-header">
          <h2 className="req-title">
            Benefits of ISO Certification In India 
          </h2>
          <p className="req-subtitle">
            ISO Certification helps a business improve its work system, maintain quality, and build trust in the market. It also increases efficiency and gives a strong advantage over competitors.
          </p>
        </header>

        {/* Cards */}
        <div className="req-grid">
          {/* 1 */}
          <article className="req-card">
            <h3 className="req-card-title">Better Customer Satisfaction</h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
             ISO makes your work process more clear and organised. This helps you provide consistent quality products/services, which improves customer satisfaction.
            </p>
          </article>

          {/* 2 */}
          <article className="req-card">
            <h3 className="req-card-title">International Recognition</h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
             ISO is accepted worldwide. Having ISO certification makes your business trusted and recognised globally.
            </p>
          </article>

          {/* 3 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Improved Team Performance
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
             When processes are clearly defined, employees understand their roles better. This improves teamwork and overall performance.
            </p>
          </article>

          {/* 4 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Attracts More Customers
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              Customers prefer businesses that follow quality standards. ISO certification increases trust and helps you gain more customers.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RequirementsPvt;
