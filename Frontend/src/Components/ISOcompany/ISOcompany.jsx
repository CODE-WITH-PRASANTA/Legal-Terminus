import React from "react";
import "./ISOcompany.css";

// Replace with your actual illustration
import pvtIllustration from "../../assets/whypvt-imp.svg";

const PvtLtdFull = () => {
  return (
    <div className="pvt-full-wrapper">

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
      <section className="pvt-intro-section">
        <div className="pvt-intro-container">
          {/* Illustration */}
          <div className="pvt-intro-illustration-wrap">
            <img
              src={pvtIllustration}
              alt="Private limited company illustration"
              className="pvt-intro-illustration"
            />
          </div>

          {/* Text */}
          <div className="pvt-intro-content">
            <h2 className="pvt-intro-title">
              Why Choose ISO Certification In india
            </h2>
            <p className="pvt-intro-text">
              ISO refers to the International Organization for Standardization which is an autonomous body who sets global standards for quality, safety and efficiency of products and services. In the competitive global market, ISO certification in India plays a vital role as it provides an edge to the organization having ISO certification with respect to quality, efficiency and safety.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECTION 3 — COMPANIES ACT
      ============================ */}
      <section className="companies-act-section">
        <div className="companies-act-container">
          <div className="companies-act-card">
            <h3 className="companies-act-title">ISO Certification</h3>

            <p className="companies-act-text">
              ISO Certification is an internationally recognised certification that confirms a business follows standard quality and operational practices. It helps organisations improve performance, ensure customer satisfaction, and build market credibility.
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(a)</span>
              Follows defined quality standards and process systems;
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(b)</span>
              Improves efficiency, consistency, and customer trust through structured working methods; and
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(c)</span>
              Enhances business credibility and increases eligibility for tenders, contracts, and global opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PvtLtdFull;
