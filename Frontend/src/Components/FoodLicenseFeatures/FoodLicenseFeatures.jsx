import React from "react";
import "./FoodLicenseFeatures.css";
import featuresIllustration from "../../assets/foodlicense.png";

const FoodLicenseFeatures = () => {
  return (
    <section className="food-license-features-section">
      <div className="food-license-features-container">
        {/* Left graphic */}
        <div className="food-license-features-illustration-wrap">
          <img
            src={featuresIllustration}
            alt="Types of Food License"
            className="food-license-features-illustration"
          />
        </div>

        {/* Right content */}
        <div className="food-license-features-content">
          <h2 className="food-license-features-title">
            Types of FSSAI Licenses in India
          </h2>

          <p className="food-license-features-intro">
            If you run any food-related business in India, getting an FSSAI license/registration is mandatory. The type of license depends on your business size and yearly turnover
          </p>

          {/* Type 1 */}
          <div className="food-license-features-block">
            <h3 className="food-license-features-subtitle">Basic FSSAI License Registration</h3>
            <p className="food-license-features-text">
              Suitable for small-scale food businesses and startups with an annual turnover 
              below ₹12 lakhs. This license is ideal for small vendors, cottage industries, 
              and home-based food manufacturers.
            </p>
          </div>

          {/* Type 2 */}
          <div className="food-license-features-block">
            <h3 className="food-license-features-subtitle">State FSSAI License Registration</h3>
            <p className="food-license-features-text">
              Applicable for medium-sized food businesses with an annual turnover 
              between ₹12 lakhs and ₹20 crores. It covers manufacturers, distributors, 
              and transporters operating within a specific state.
            </p>
          </div>

          {/* Type 3 */}
          <div className="food-license-features-block">
            <h3 className="food-license-features-subtitle">Central FSSAI License Registration</h3>
            <p className="food-license-features-text">
              Designed for large-scale food manufacturers, importers, or exporters 
              with operations in multiple states or turnover above ₹20 crores. 
              It is mandatory for businesses involved in international trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodLicenseFeatures;
