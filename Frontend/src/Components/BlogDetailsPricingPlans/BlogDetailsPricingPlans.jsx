import React from "react";
import { FiChevronRight } from "react-icons/fi";
import "./BlogDetailsPricingPlans.css";

const BlogDetailsPricingPlans = () => {
  return (
    <div className="pricing-container regardingly">
      <div className="pricing-cards">
        <div className="pricing-card gold">
          <h2 className="plan-title">Gold pack</h2>
          <p className="plan-desc">Dicta sunt elit explicabo</p>

          <div className="price">
            <span className="currency">$</span>
            <span className="amount">100</span>
            <span className="period">/mo</span>
          </div>

          <ul className="features">
            <li>Support Frequently</li>
            <li>Flexible Charge</li>
            <li>Ontime Result</li>
          </ul>

          <button className="get-now-btn" aria-label="Get Gold pack now">
            GET NOW
          </button>
        </div>

        <div className="pricing-card silver">
          <h2 className="plan-title">Silver pack</h2>
          <p className="plan-desc">Dicta sunt elit explicabo</p>

          <div className="price">
            <span className="currency">$</span>
            <span className="amount">80</span>
            <span className="period">/mo</span>
          </div>

          <ul className="features">
            <li>Support Frequently</li>
            <li>Flexible Charge</li>
            <li>Ontime Result</li>
          </ul>

          <button className="get-now-btn" aria-label="Get Silver pack now">
            GET NOW
          </button>
        </div>
      </div>

      <aside className="pricing-info">
        <p className="subtitle">PRICING PLANS</p>
        <h1 className="title">Our tariff plans</h1>
        <p className="text">
          Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim.
        </p>

        <button className="about-btn" aria-label="About us">
          ABOUT US <FiChevronRight size={18} />
        </button>
      </aside>
    </div>
  );
};

export default BlogDetailsPricingPlans;
