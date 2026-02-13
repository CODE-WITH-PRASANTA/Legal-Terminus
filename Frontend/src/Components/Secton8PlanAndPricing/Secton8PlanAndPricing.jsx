import React from "react";
import "./Section8PlanAndPricing.css";

const Section8PlanAndPricing = () => {
  return (
    <section className="s8-pricing-section">
      <div className="s8-pricing-container">

        {/* ================= HEADER ================= */}
        <header className="s8-pricing-header">
          <h2 className="s8-pricing-title">CHOOSE YOUR PLAN</h2>
          <p className="s8-pricing-subtitle">
            Register your company with pocket-friendly prices
          </p>
        </header>

        {/* ================= CARDS ================= */}
        <div className="s8-pricing-cards">

          {/* ========== ELEMENTAL ========== */}
          <article className="s8-plan-card">
            <div>
              <div className="s8-plan-header">
                <div className="s8-plan-name">Elemental</div>
                <div className="s8-plan-old-price">₹5,999</div>
                <div className="s8-plan-price">₹3,999</div>
                <div className="s8-plan-meta">Excluding gov fee</div>
              </div>

              <div className="s8-plan-body">
                <ul className="s8-plan-list">
                  <li className="s8-plan-list-item">Search Report of Name Availability</li>
                  <li className="s8-plan-list-item">1 RUN Name Approval Certificate</li>
                  <li className="s8-plan-list-item">DIN for 2 Directors</li>
                  <li className="s8-plan-list-item">Certificate of Incorporation</li>
                  <li className="s8-plan-list-item">E-PAN & E-TAN</li>
                  <li className="s8-plan-list-item">E-MOA & E-AOA</li>
                  <li className="s8-plan-list-item">Bank Account Documents</li>
                  <li className="s8-plan-list-item">1st Auditor Appointment Docs</li>
                  <li className="s8-plan-list-item">EPF & ESI Registration</li>
                </ul>
              </div>
            </div>

            <div className="s8-plan-footer">
              <button className="s8-plan-button">Buy Now</button>
            </div>
          </article>

          {/* ========== ENRICHED ========== */}
          <article className="s8-plan-card">
            <div>
              <div className="s8-plan-header">
                <div className="s8-plan-name">Enriched</div>
                <div className="s8-plan-old-price">₹7,999</div>
                <div className="s8-plan-price">₹5,999</div>
                <div className="s8-plan-meta">
                  Excluding gov fee <span className="s8-popular">Popular</span>
                </div>
              </div>

              <div className="s8-plan-body">
                <ul className="s8-plan-list">
                  <li className="s8-plan-list-item">Elemental Plan Plus</li>
                  <li className="s8-plan-list-item">Share Certificate</li>
                  <li className="s8-plan-list-item">Commencement of Business</li>
                  <li className="s8-plan-list-item">Udyam/MSME Registration</li>
                </ul>
              </div>
            </div>

            <div className="s8-plan-footer">
              <button className="s8-plan-button">Buy Now</button>
            </div>
          </article>

          {/* ========== SUPREME ========== */}
          <article className="s8-plan-card">
            <div>
              <div className="s8-plan-header">
                <div className="s8-plan-name">Supreme</div>
                <div className="s8-plan-old-price">₹29,999</div>
                <div className="s8-plan-price">₹24,999</div>
                <div className="s8-plan-meta">Excluding gov fee</div>
              </div>

              <div className="s8-plan-body">
                <ul className="s8-plan-list">
                  <li className="s8-plan-list-item">Enriched Plan Plus</li>
                  <li className="s8-plan-list-item">Company IT Filing</li>
                  <li className="s8-plan-list-item">Directors & Annual Reports</li>
                  <li className="s8-plan-list-item">AOC-4, MGT-7, ADT-1 Filing</li>
                  <li className="s8-plan-list-item">Board & AGM Minutes</li>
                  <li className="s8-plan-list-item">Statutory Registers</li>
                  <li className="s8-plan-list-item">DIR KYC (2 Directors)</li>
                  <li className="s8-plan-list-item">Directors IT Filing</li>
                </ul>
              </div>
            </div>

            <div className="s8-plan-footer">
              <button className="s8-plan-button">Buy Now</button>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Section8PlanAndPricing;
