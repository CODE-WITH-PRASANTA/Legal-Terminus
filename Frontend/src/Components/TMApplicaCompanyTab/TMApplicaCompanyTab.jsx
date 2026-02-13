import React from "react";
import "./TMApplicaCompanyTab.css";

// Replace with your actual illustration
import pvtIllustration from "../../assets/whypvt-imp.svg";

const PvtLtdFull = () => {
  return (
    <div className="Tm-Application-full-wrapper">

      {/* ===========================
          SECTION 1 — OVERVIEW
      ============================ */}
      {/* <div className="overview-wrapper">
        <h2 className="overview-title">Understanding the Basics
</h2>
        <p className="overview-text">
A Private Limited Company is a legally registered business under the Companies Act, 2013, with its own separate identity from its owners. It protects the personal assets of its members, limits who can own shares, and must have a registered office address. </p>
      </div> */}

      {/* ===========================
          SECTION 2 — INTRO
      ============================ */}
      <section className="Tm-Application-intro-section">
        <div className="Tm-Application-intro-container">
          {/* Illustration */}
          <div className="Tm-Application-intro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="Tm-Application-intro-illustration"
            />
          </div>

          {/* Text */}
          <div className="Tm-Application-intro-content">
            <h2 className="Tm-Application-intro-title">
              Why Choose Proprietorship Firms Registration
            </h2>
            <p className="Tm-Application-intro-text">
             Sole proprietorship firm registration in India is the easiest way to start a new business. It’s when one person owns and runs the business, and they’re personally responsible for any debt it incurs. In simple terms, there’s no legal difference between the sole proprietorship firm and the sole proprietors themselves. Here are answers to some common questions about proprietorship firm registration in India.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECTION 3 — COMPANIES ACT
      ============================ */}
      <section className="Tm-Application-companies-act-section">
        <div className="Tm-Application-companies-act-container">
          <div className="Tm-Application-companies-act-card">
            {/* <h3 className="Tm-Application-companies-act-title">Companies Act, 2013</h3> */}

            <p className="Tm-Application-companies-act-text">
              A Sole Proprietorship is a simple business structure owned and managed by a single individual. It does not have a separate legal identity from its owner and is one of the easiest ways to start a business in India.
            </p>

            <p className="Tm-Application-companies-act-point">
              <span className="Tm-Application-companies-act-point-label">(a)</span>
              PAN and Aadhaar of the proprietor;
            </p>

            <p className="Tm-Application-companies-act-point">
              <span className="Tm-Application-companies-act-point-label">(b)</span>
              Business address proof and utility bill; and
            </p>

            <p className="Tm-Application-companies-act-point">
              <span className="Tm-Application-companies-act-point-label">(c)</span>
              Basic registrations like GST Registration (if applicable), Shop & Establishment License, or Udyam Registration.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PvtLtdFull;
