import React from "react";
import "./PFRcompanytab.css";

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
              Why Choose Partnership Firm Registration In India
            </h2>
            <p className="pvt-intro-text">
              Partnership firm registration in India is a prevalent choice for starting a new business. It involves creating an unregistered business entity through a partnership deed, where two or more individuals come together to form a business and distribute profits in an agreed ratio. Compared to corporate business structures, partnership firm registration entails lesser compliance requirements.
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
            <h3 className="companies-act-title">Indian Partnership Act, 1932</h3>

            <p className="companies-act-text">
              As per the Indian Partnership Act, 1932, a partnership firm is a business arrangement where two or more persons agree to run a business together and share its profits as per mutually decided terms, recorded in a Partnership Deed:
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(a)</span>
              The firm operates based on a Partnership Deed, which defines partner roles, capital contribution, profit-sharing ratio, and responsibilities;
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(b)</span>
              The firm must have a minimum of two partners, and the partners jointly manage and control the operations of the business; and
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(c)</span>
              The partners share profits as well as liabilities, meaning each partner can be responsible for obligations of the firm as per the deed and law.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PvtLtdFull;
