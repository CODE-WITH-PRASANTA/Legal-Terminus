import React from "react";
import "./BCcompany.css";

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
              Why Choose Bar Code Registration in India
            </h2>
            <p className="pvt-intro-text">
             Before an entity can begin using barcodes, it must first register with GS1 India to obtain the numbers (GS1 Identification Keys) that go inside the barcode. GS1 India provides GS1 Identification Keys which are unique all around the world. The identification key for a Trade Item (Product) is called GTIN which is seen beneath a barcode and starts with the prefix 890. Barcodes help the user to electronically fetch the product details faster and are widely used in supermarkets, malls, stores, etc.
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
            <h3 className="companies-act-title">Barcode Registration</h3>

            <p className="companies-act-text">
              Barcode Registration is the process of obtaining a unique barcode number for your products, which helps in product identification, tracking, and smooth selling across online & retail markets.
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(a)</span>
              Provides a unique identity to each product for easy scanning and verification;
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(b)</span>
              Helps in inventory management, billing, and stock tracking; and
            </p>

            <p className="companies-act-point">
              <span className="companies-act-point-label">(c)</span>
              Improves product acceptance in supermarkets, distributors, and e-commerce platforms.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PvtLtdFull;
