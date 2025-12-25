import React from "react";
import "./GSTRegBreadcrum.css";

const GSTRegBreadcrum = () => {
  return (
    <section className="gstv2-hero-section">
      <div className="gstv2-hero-container">

        {/* LEFT CONTENT */}
        <div className="gstv2-content-left">

          <span className="gstv2-badge">
            GST REGISTRATION • PAN INDIA
          </span>

          <h1 className="gstv2-heading">
            Register Your Business Under
            <span className="gstv2-highlight"> GST</span> in India
          </h1>

          <p className="gstv2-description">
            GST Registration is mandatory for businesses involved in taxable
            supply of goods or services. <strong>Legal Terminus</strong> provides
            end-to-end GST registration services with accurate filing,
            documentation support, and ongoing compliance guidance.
          </p>

          <p className="gstv2-sub-description">
            Whether you are a startup, freelancer, or established business,
            our GST experts ensure a smooth and hassle-free registration
            process across India.
          </p>

          {/* STATS */}
          <div className="gstv2-stats-wrapper">
            <div className="gstv2-stat-card">
              <h3 className="gstv2-stat-value">7–10 Days</h3>
              <p className="gstv2-stat-label">Average Completion</p>
            </div>

            <div className="gstv2-stat-card">
              <h3 className="gstv2-stat-value">₹0</h3>
              <p className="gstv2-stat-label">Government Fees</p>
            </div>

            <div className="gstv2-stat-card">
              <h3 className="gstv2-stat-value">PAN India</h3>
              <p className="gstv2-stat-label">Service Coverage</p>
            </div>
          </div>

          {/* POINTS */}
          <ul className="gstv2-feature-list">
            <li className="gstv2-feature-item">GSTIN Certificate Issuance</li>
            <li className="gstv2-feature-item">Complete Application Filing</li>
            <li className="gstv2-feature-item">Expert GST Compliance Support</li>
            <li className="gstv2-feature-item">Dedicated Relationship Manager</li>
            <li className="gstv2-feature-item">Transparent & Secure Process</li>
            <li className="gstv2-feature-item">Suitable for All Business Types</li>
          </ul>

          {/* CTA */}
          <div className="gstv2-action-row">
            <button className="gstv2-primary-action">
              Speak to a GST Consultant
            </button>

            <span className="gstv2-trust-note">
              🔒 Trusted by businesses across India
            </span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="gstv2-form-section">
          <div className="gstv2-form-box">

            <div className="gstv2-form-header">
              <h3 className="gstv2-form-title">Free GST Consultation</h3>
              <p className="gstv2-form-subtitle">
                Request a callback from our GST expert
              </p>
            </div>

            <form className="gstv2-form-body" onSubmit={(e) => e.preventDefault()}>
              <input className="gstv2-input-field" type="text" placeholder="Full Name" required />
              <input className="gstv2-input-field" type="email" placeholder="Email Address" required />
              <input className="gstv2-input-field" type="tel" placeholder="Mobile Number" required />

              <select className="gstv2-select-field" required>
                <option value="">Business Type</option>
                <option>Proprietorship</option>
                <option>Partnership</option>
                <option>Private Limited</option>
                <option>LLP</option>
                <option>Other</option>
              </select>

              <select className="gstv2-select-field" required>
                <option value="">State</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
                <option>Karnataka</option>
                <option>Tamil Nadu</option>
                <option>Other</option>
              </select>

              {/* WHATSAPP */}
              <div className="gstv2-whatsapp-section">
                <input type="checkbox" id="gstWhatsapp" className="gstv2-whatsapp-checkbox" defaultChecked />
                <label htmlFor="gstWhatsapp" className="gstv2-whatsapp-label">
                  Receive updates on <strong>WhatsApp</strong>
                </label>
              </div>

              <button type="submit" className="gstv2-submit-button">
                Get Free Consultation
              </button>
            </form>

            <div className="gstv2-form-footer">
              Your information is safe with us • No spam
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GSTRegBreadcrum;
