import React from "react";
import "./FoodLicenseBenefits.css";

const FoodLicenseBenefits = () => {
  return (
    <section className="foodben-section">
      <div className="foodben-container">
        {/* Heading + intro */}
        <header className="foodben-header">
          <h2 className="foodben-title">
            Benefits of Food License (FSSAI) Registration in India
          </h2>
          <p className="foodben-subtitle">
            The Food Safety and Standards Authority of India (FSSAI) registration ensures 
            that your food business operates under the highest standards of safety and quality. 
            Having an FSSAI license not only makes your business legally compliant but also 
            builds consumer trust and opens new opportunities for growth.
          </p>
        </header>

        {/* Cards */}
        <div className="foodben-grid">
          {/* 1 */}
          <article className="foodben-card">
            <h3 className="foodben-card-title">Legal Authorization</h3>
            <div className="foodben-card-underline" />
            <p className="foodben-card-text">
              The FSSAI license legally authorizes food businesses to operate in India, 
              ensuring adherence to government food safety regulations and hygiene standards.
            </p>
          </article>

          {/* 2 */}
          <article className="foodben-card">
            <h3 className="foodben-card-title">Consumer Trust</h3>
            <div className="foodben-card-underline" />
            <p className="foodben-card-text">
              Displaying an FSSAI license number on products increases customer confidence 
              and credibility, signaling that the food is safe and of good quality.
            </p>
          </article>

          {/* 3 */}
          <article className="foodben-card">
            <h3 className="foodben-card-title">Business Expansion</h3>
            <div className="foodben-card-underline" />
            <p className="foodben-card-text">
              Having an FSSAI license helps in expanding your business operations across states 
              and into new markets by strengthening your brand’s reputation.
            </p>
          </article>

          {/* 4 */}
          <article className="foodben-card">
            <h3 className="foodben-card-title">Access to Government Schemes</h3>
            <div className="foodben-card-underline" />
            <p className="foodben-card-text">
              FSSAI-registered food businesses can benefit from government programs, subsidies, 
              and training that support safety, quality improvement, and export opportunities.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FoodLicenseBenefits;
