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
              Why Choose Food License Registration in India
            </h2>
            <p className="foodlicense-intro-text">
              Food Safety Compliance System (FoSCoS) is an enhanced version of the Food License and Registration System (FLRS) which was launched in 2012 for the issuance of pan-India FSSAI licenses and registrations. It is an autonomous body established under the Ministry of Health and Family Welfare, Government of India. This authority monitors the food business operators in India and promotes food hygiene and safety in India.
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
              Ensures that food products meet safety and hygiene standards as prescribed by FSSAI;
            </p>

            <p className="foodlicense-act-point">
              <span className="foodlicense-act-point-label">(b)</span>
              Builds trust among customers, suppliers, and regulatory authorities; and
            </p>

            <p className="foodlicense-act-point">
              <span className="foodlicense-act-point-label">(c)</span>
              Allows businesses to operate legally and participate in food supply chains and government schemes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodLicenseOverview;
