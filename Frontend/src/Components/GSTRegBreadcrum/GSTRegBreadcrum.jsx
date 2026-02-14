import React from "react";
import "./GSTRegBreadcrum.css";

const GSTRegBreadcrum = () => {
  return (
    <section className="gstv2-hero-section">
      <div className="gstv2-hero-container">

        {/* LEFT CONTENT */}
        <div className="gstv2-content-left">

          <span className="gstv2-badge">
            GST REGISTRATION 
          </span>

          <h1 className="gstv2-heading">
            GST Registration
            <span className="gstv2-highlight"> in India</span> 
          </h1>
          <p className="gstv2-sub-description">
            Legal Terminus can help you with GST registration in India, offering hassle-free services within a reasonable timeframe and for competitive professional fees starting from Rs. 1999/-. We assist with GST registration promptly and efficiently to meet your organization’s needs.
          </p>

          {/* STATS */}
          <div className="gstv2-stats-wrapper">
            <div className="gstv2-stat-card">
              <h3 className="gstv2-stat-value">1000+</h3>
              <p className="gstv2-stat-label">Companies Registered</p>
            </div>

            <div className="gstv2-stat-card">
              <h3 className="gstv2-stat-value">100%</h3>
              <p className="gstv2-stat-label">Online Process</p>
            </div>

            <div className="gstv2-stat-card">
              <h3 className="gstv2-stat-value">5+</h3>
              <p className="gstv2-stat-label">Years of Legal Expertise</p>
            </div>
          </div>

          {/* POINTS */}
          <ul className="gstv2-feature-list">
            <li className="gstv2-feature-item">GSTIN Certificate Issuance</li>
            <li className="gstv2-feature-item">Complete Application Filing</li>
            <li className="gstv2-feature-item">Dedicated Expert</li>
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
              <h3 className="gstv2-form-title">Get Expert Assistance</h3>
              <p className="gstv2-form-subtitle">
                Talk to our GST registration expert
              </p>
            </div>

            <form className="gstv2-form-body" onSubmit={(e) => e.preventDefault()}>
              <input className="gstv2-input-field" type="text" placeholder="Full Name" required />
              <input className="gstv2-input-field" type="email" placeholder="Email Address" required />
              <input className="gstv2-input-field" type="tel" placeholder="Mobile Number" required />

              <select className="gstv2-select-field" required>
                <option value="">Preferred Call Time</option>
                <option>10:00 AM – 12:00 PM</option>
                <option>12:00 PM – 2:00 PM</option>
                <option>2:00 PM – 4:00 PM</option>
                <option>4:00 PM – 6:00 PM</option>
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
                Book Free Consultation
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
