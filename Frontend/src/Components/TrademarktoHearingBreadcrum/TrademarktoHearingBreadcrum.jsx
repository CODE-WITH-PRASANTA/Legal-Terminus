import React from "react";
import "./TrademarktoHearingBreadcrum.css";

const TradeLicenseBreadcrum = () => {
  return (
    <section className="thbr-hero">
      <div className="thbr-container">

        {/* LEFT CONTENT */}
        <div className="thbr-content">

          <span className="thbr-tag">
            Trade License Online Registration
          </span>

          <h1 className="thbr-title">
            Trade License Online Registration
            <span> in India</span>
          </h1>

          <p className="thbr-description">
            Legal Terminus can help you with Trade License registration in a smooth and hassle-free manner. We offer competitive professional fees starting at Rs. 3,999/- for Trade License registration in India.
          </p>

          <div className="thbr-features">
            <div className="thbr-feature-item"> Minimum 2 Directors Required</div>
            <div className="thbr-feature-item"> Separate Legal Entity</div>
            <div className="thbr-feature-item"> Limited Liability Protection</div>
            <div className="thbr-feature-item"> High Business Credibility</div>
          </div>

          <div className="thbr-highlights">
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
        <aside className="thbr-form-wrapper">
          <div className="thbr-form-card">

            <h3 className="thbr-form-title">
              Get Expert Assistance
            </h3>

            <p className="thbr-form-subtitle">
              Talk to our Trade License registration expert
            </p>

            <form
              className="thbr-form"
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

              <div className="thbr-whatsapp-row">
                <label className="thbr-whatsapp-label">
                  <input type="checkbox" defaultChecked />
                  <span className="thbr-custom-checkbox"></span>
                  <span className="thbr-whatsapp-text">
                    Receive updates on <strong>WhatsApp</strong>
                  </span>
                </label>
              </div>

              <button type="submit">
                Book Free Consultation
              </button>
            </form>

            <p className="thbr-form-note">
              🔒 100% Confidential • No Spam • No Hidden Charges
            </p>

          </div>
        </aside>

      </div>
    </section>
  );
};

export default TradeLicenseBreadcrum;
