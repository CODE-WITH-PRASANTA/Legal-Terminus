import React from "react";
import "./FoodLicenseOverview.css";
import foodlicenseIllustration from "../../assets/whypvt-imp1.svg"; // Replace with your actual image if needed

const FoodLicenseOverview = () => {
  return (
    <div className="foodlicense-full-wrapper">

      {/* ===========================
          SECTION 1 — INTRO
      ============================ */}
      <section className="foodlicense-intro-section">
        <div className="foodlicense-intro-container">
          {/* Illustration */}
          <div className="foodlicense-intro-illustration-wrap">
            <img
              src={foodlicenseIllustration}
              alt="Food License illustration"
              className="foodlicense-intro-illustration"
            />
          </div>

          {/* Text */}
          <div className="foodlicense-intro-content">
            <h2 className="foodlicense-intro-title">
              Why Choose Food License (FSSAI) Registration
            </h2>
            <p className="foodlicense-intro-text">
              Obtaining a Food License (FSSAI Registration) is the first step toward building
              consumer trust and ensuring compliance with food safety standards in India.
              The Food Safety and Standards Authority of India (FSSAI) governs this process,
              making it mandatory for businesses involved in the manufacturing, processing,
              storage, distribution, or sale of food products.
              <br /><br />
              FSSAI registration provides a unique identification for your business and
              ensures that your products meet quality standards. Having a valid Food License
              enhances brand credibility, opens up business opportunities, and ensures you
              operate within the regulatory framework of India’s food safety laws.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECTION 2 — FSSAI REGULATION
      ============================ */}
      <section className="foodlicense-act-section">
        <div className="foodlicense-act-container">
          <div className="foodlicense-act-card">
            <h3 className="foodlicense-act-title">FSSAI and Food License Regulation</h3>

            <p className="foodlicense-act-text">
              As per FSSAI regulations, every food business operator (FBO) must obtain a valid
              Food License before commencing operations in India.
            </p>

            <p className="foodlicense-act-point">
              <span className="foodlicense-act-point-label">(a)</span>
              Ensures that food products are safe and meet the standards laid down by FSSAI;
            </p>

            <p className="foodlicense-act-point">
              <span className="foodlicense-act-point-label">(b)</span>
              Builds trust among consumers, suppliers, and authorities; and
            </p>

            <p className="foodlicense-act-point">
              <span className="foodlicense-act-point-label">(c)</span>
              Enables participation in food supply chains and government schemes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodLicenseOverview;
