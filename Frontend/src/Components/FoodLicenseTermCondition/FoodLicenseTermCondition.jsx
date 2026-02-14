import React from "react";
import "./FoodLicenseTermCondition.css";

const FoodLicenseTermCondition = () => {
  return (
    <section className="foodlicensetc-section">
      <div className="foodlicensetc-container">
        {/* Heading */}
        <h2 className="foodlicensetc-title">TERMS &amp; CONDITIONS</h2>

        {/* Sub heading */}
        <p className="foodlicensetc-subtitle">
          By subscribing to the above plans, you agree to abide by our following additional terms and conditions
        </p>

        {/* List */}
        <ol className="foodlicensetc-list">
          <li className="foodlicensetc-item">
            In case the above plan does not qualify your requirements, kindly contact our executive, we shall be happy to customise a plan for you
          </li>

          <li className="foodlicensetc-item">
            Please note that the elemental plan is applicable for very small food business operators whose Annual Turnover is less than Rs. 12,00,000/-
          </li>
        </ol>
      </div>
    </section>
  );
};

export default FoodLicenseTermCondition;
