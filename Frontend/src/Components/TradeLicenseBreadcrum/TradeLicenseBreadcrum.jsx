import React from "react";
import "./TradeLicenseBreadcrum.css";

const TradeLicenseBreadcrum = () => {
  return (
    <section className="lt-trade-hero">
      <div className="lt-trade-container">

        {/* LEFT CONTENT */}
        <div className="lt-trade-content">

          <span className="lt-trade-tag">
            Trade License Online Registration
          </span>

          <h1 className="lt-trade-title">
            Trade License Online Registration
            <span> in India</span>
          </h1>

          <p className="lt-trade-description">
            Legal Terminus can help you with Trade License registration in a smooth and hassle-free manner. We offer competitive professional fees starting at Rs. 3,999/- for Trade License registration in India.
          </p>

          <div className="lt-trade-features">
            <div className="lt-feature-item"> Minimum 2 Directors Required</div>
            <div className="lt-feature-item"> Separate Legal Entity</div>
            <div className="lt-feature-item"> Limited Liability Protection</div>
            <div className="lt-feature-item"> High Business Credibility</div>
          </div>

          <div className="lt-trade-highlights">
            <div>
              <h3>12,000+</h3>
              <p>Licenses Registered</p>
            </div>
            <div>
              <h3>99%</h3>
              <p>Approval Success Rate</p>
            </div>
            <div>
              <h3>15+</h3>
              <p>Years of Legal Expertise</p>
            </div>
          </div>

        </div>

        {/* RIGHT FORM */}
        <aside className="lt-trade-form-wrapper">
          <div className="lt-trade-form-card">

            <h3 className="lt-form-title">
              Get Expert Assistance
            </h3>

            <p className="lt-form-subtitle">
              Talk to our Trade License registration expert
            </p>

            <form
              className="lt-trade-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Mobile Number" required />

              <select required>
                <option value="">Select Your State</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
                <option>Karnataka</option>
                <option>Tamil Nadu</option>
                <option>Other</option>
              </select>

              <select>
                <option value="">Preferred Call Time</option>
                <option>10:00 AM – 12:00 PM</option>
                <option>12:00 PM – 2:00 PM</option>
                <option>2:00 PM – 4:00 PM</option>
                <option>4:00 PM – 6:00 PM</option>
              </select>

              <div className="lt-whatsapp-row">
                <label className="lt-whatsapp-label">
                  <input type="checkbox" defaultChecked />
                  <span className="lt-custom-checkbox"></span>
                  <span className="lt-whatsapp-text">
                    Receive updates on <strong>WhatsApp</strong>
                  </span>
                </label>
              </div>

              <button type="submit">
                Book Free Consultation
              </button>
            </form>

            <p className="lt-form-note">
              🔒 100% Confidential • No Spam • No Hidden Charges
            </p>

          </div>
        </aside>

      </div>
    </section>
  );
};

export default TradeLicenseBreadcrum;
