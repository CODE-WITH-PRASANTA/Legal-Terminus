import React from "react";
import "./TrustBenefits.css";
import benefitsImg from "../../assets/benefits-of-trust-Registration.webp"; // your image here

export default function BenefitsGridSection() {
  return (
    <div className="benefits-wrapper">

      {/* Heading */}
      <h2 className="benefits-title">
        Benefits of Trust Registration in India
      </h2>
      <p className="benefits-subtext">
        Securing Trust Registration offers many advantages:
      </p>

      {/* 🔥 IMAGE MOVED HERE — directly under heading */}
      <div className="benefits-top-image-block">
        <img src={benefitsImg} alt="Benefits of Trust Registration" className="benefits-top-image" />
      </div>

      {/* GRID CONTENT */}
      <div className="benefits-grid">

        <div className="benefit-col">
          <h3>Legal Recognition & Protection</h3>
          <ul>
            <li><strong>Establish Legal Identity:</strong> Trust gains formal legal status.</li>
            <li><strong>Secure Asset Protection:</strong> Shields assets from disputes.</li>
          </ul>
        </div>

        <div className="benefit-col">
          <h3>Enhanced Transparency & Credibility</h3>
          <ul>
            <li><strong>Build Stakeholder Trust:</strong> Shows commitment to accountability.</li>
            <li><strong>Increase Public Confidence:</strong> Improves organizational reputation.</li>
          </ul>
        </div>

        <div className="benefit-col">
          <h3>Financial Advantages</h3>
          <ul>
            <li><strong>Access Tax Benefits:</strong> Eligible for Income Tax Act exemptions.</li>
            <li><strong>Attract More Donations:</strong> Encourages donor confidence.</li>
          </ul>
        </div>

        <div className="benefit-col">
          <h3>Operational Advantages</h3>
          <ul>
            <li><strong>Start a Business:</strong> Get benefits under MSME registration.</li>
            <li><strong>Acquire Property:</strong> Buy, sell & manage assets legally.</li>
          </ul>
        </div>

        <div className="benefit-col">
          <h3>Growth Opportunities</h3>
          <ul>
            <li><strong>Secure Grant Funding:</strong> Needed for most grant applications.</li>
            <li><strong>Form Partnerships:</strong> Enables collaboration with government bodies.</li>
          </ul>
        </div>

        <div className="benefit-col">
          <h3>Perpetual Existence</h3>
          <ul>
            <li><strong>Ensure Continuity:</strong> Trust continues even if trustees change.</li>
            <li><strong>Create Lasting Impact:</strong> Mission survives beyond individuals.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
