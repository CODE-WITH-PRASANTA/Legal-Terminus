import React from "react";
import "./TradeLicenseBenefits.css";

const TradeLicenseBenefits = () => {
  return (
    <section className="tradeben-section">
      <div className="tradeben-container">
        {/* Heading + intro */}
        <header className="tradeben-header">
          <h2 className="tradeben-title">
            Benefits of Trade License Registration in India
          </h2>
          <p className="tradeben-subtitle">
            A Trade License is an important document for running a business legally in a city/municipal area. It not only keeps your business compliant but also gives many practical benefits.
          </p>
        </header>

        {/* Cards */}
        <div className="tradeben-grid">
          {/* 1 */}
          <article className="tradeben-card">
            <h3 className="tradeben-card-title">Builds Trust & Credibility</h3>
            <div className="tradeben-card-underline" />
            <p className="tradeben-card-text">
              A trade license shows that your business is registered and approved by the local authority. This makes customers feel more confident and helps your business look genuine and professional.
            </p>
          </article>

          {/* 2 */}
          <article className="tradeben-card">
            <h3 className="tradeben-card-title">Helps You Get Loans & Financial Support</h3>
            <div className="tradeben-card-underline" />
            <p className="tradeben-card-text">
              When your business has a trade license, it becomes easier to apply for bank loans, business funding, and finance options. Most banks prefer businesses that follow all required rules.
            </p>
          </article>

          {/* 3 */}
          <article className="tradeben-card">
            <h3 className="tradeben-card-title">Improves Business Reputation</h3>
            <div className="tradeben-card-underline" />
            <p className="tradeben-card-text">
              Licensed businesses get better acceptance in the market. It helps you build a good image and stronger reputation over time compared to unlicensed businesses.
            </p>
          </article>

          {/* 4 */}
          <article className="tradeben-card">
            <h3 className="tradeben-card-title">Increases Investor Confidence</h3>
            <div className="tradeben-card-underline" />
            <p className="tradeben-card-text">
              Investors usually choose businesses that are legally registered and properly managed. A trade license helps show that your business is serious and safe to invest in.
            </p>
          </article>

          {/* 5 */}
          <article className="tradeben-card">
            <h3 className="tradeben-card-title">Fewer Legal Issues</h3>
            <div className="tradeben-card-underline" />
            <p className="tradeben-card-text">
              With a trade license, your business is less likely to face fines, notices, or legal action from municipal authorities. It keeps your operations smooth.
            </p>
          </article>

          {/* 6 */}
          <article className="tradeben-card">
            <h3 className="tradeben-card-title">Promotes Hygiene & Safety</h3>
            <div className="tradeben-card-underline" />
            <p className="tradeben-card-text">
              Trade license rules ensure that businesses maintain cleanliness and safety standards at the workplace. This creates a better environment for customers and employees.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TradeLicenseBenefits;
