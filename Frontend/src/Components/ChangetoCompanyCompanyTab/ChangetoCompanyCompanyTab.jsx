import React from "react";
import "./ChangetoCompanyCompanyTab.css";

import pvtIllustration from "../../assets/whypvt-imp.svg";

const PvtLtdFull = () => {
  return (
    <div className="prp-pt-full-wrapper">

      {/* ===========================
          SECTION 2 — INTRO
      ============================ */}
      <section className="prp-pt-intro-section">
        <div className="prp-pt-intro-container">

          {/* Illustration */}
          <div className="prp-pt-intro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="prp-pt-intro-illustration"
            />
          </div>

          {/* Text */}
          <div className="prp-pt-intro-content">
            <h2 className="prp-pt-intro-title">
              Why Choose Proprietorship Firms Registration
            </h2>
            <p className="prp-pt-intro-text">
              Sole proprietorship firm registration in India is the easiest way to start a new business. It’s when one person owns and runs the business, and they’re personally responsible for any debt it incurs. In simple terms, there’s no legal difference between the sole proprietorship firm and the sole proprietors themselves. Here are answers to some common questions about proprietorship firm registration in India.
            </p>
          </div>

        </div>
      </section>

      {/* ===========================
          SECTION 3 — INFO CARD
      ============================ */}
      <section className="prp-pt-companies-act-section">
        <div className="prp-pt-companies-act-container">
          <div className="prp-pt-companies-act-card">

            <p className="prp-pt-companies-act-text">
              A Sole Proprietorship is a simple business structure owned and managed by a single individual. It does not have a separate legal identity from its owner and is one of the easiest ways to start a business in India.
            </p>

            <p className="prp-pt-companies-act-point">
              <span className="prp-pt-companies-act-point-label">(a)</span>
              PAN and Aadhaar of the proprietor;
            </p>

            <p className="prp-pt-companies-act-point">
              <span className="prp-pt-companies-act-point-label">(b)</span>
              Business address proof and utility bill; and
            </p>

            <p className="prp-pt-companies-act-point">
              <span className="prp-pt-companies-act-point-label">(c)</span>
              Basic registrations like GST Registration (if applicable), Shop & Establishment License, or Udyam Registration.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PvtLtdFull;
