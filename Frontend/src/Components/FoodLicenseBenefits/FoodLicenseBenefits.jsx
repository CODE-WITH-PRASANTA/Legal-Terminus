import React from "react";
import "./FoodLicenseBenefits.css";

const FoodLicenseBenefits = () => {
  return (
    <section className="foodben-section">
      <div className="foodben-container">
        {/* Heading + intro */}
        <header className="foodben-header">
          <h2 className="foodben-title">
            Benefits of Food License Registration in India
          </h2>
          <p className="foodben-subtitle">
            FSSAI registration ensures your food business follows proper safety and quality standards. It keeps your business legally compliant, builds customer trust, and supports future growth.
          </p>
        </header>

        {/* Cards */}
        <div className="foodben-grid">
          {/* 1 */}
          <article className="foodben-card">
            <h3 className="foodben-card-title">Legal Approval</h3>
            <div className="foodben-card-underline" />
            <p className="foodben-card-text">
              TFSSAI license helps your food business run legally in India. Without it, you may face penalties, heavy fines, or even business closure.
            </p>
          </article>

          {/* 2 */}
          <article className="foodben-card">
            <h3 className="foodben-card-title">Builds Customer Trust</h3>
            <div className="foodben-card-underline" />
            <p className="foodben-card-text">
              An FSSAI license shows customers that your food is safe and follows hygiene rules. It increases confidence and improves your business image.
            </p>
          </article>

          {/* 3 */}
          <article className="foodben-card">
            <h3 className="foodben-card-title">Helps Business Growth</h3>
            <div className="foodben-card-underline" />
            <p className="foodben-card-text">
              Many big companies, restaurants, retailers, and buyers prefer to work only with FSSAI licensed businesses. It also helps when you want to expand or sell in new markets.
            </p>
          </article>

          {/* 4 */}
          <article className="foodben-card">
            <h3 className="foodben-card-title">Better Brand Reputation</h3>
            <div className="foodben-card-underline" />
            <p className="foodben-card-text">
              FSSAI licensing makes your brand look more professional and reliable, which increases customer loyalty.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FoodLicenseBenefits;
