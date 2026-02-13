import React from "react";
import "./TrademarktoOppositionBreadcrum.css";

const TradeLicenseBreadcrum = () => {
  return (
    <section className="tlbcr-hero">
      <div className="tlbcr-container">

        {/* LEFT CONTENT */}
        <div className="tlbcr-content">

          <span className="tlbcr-tag">
            Trade License Online Registration
          </span>

          <h1 className="tlbcr-title">
            Trade License Online Registration
            <span> in India</span>
          </h1>

          <p className="tlbcr-description">
            Legal Terminus can help you with Trade License registration in a smooth and hassle-free manner. We offer competitive professional fees starting at Rs. 3,999/- for Trade License registration in India.
          </p>

          <div className="tlbcr-features">
            <div className="tlbcr-feature-item"> Minimum 2 Directors Required</div>
            <div className="tlbcr-feature-item"> Separate Legal Entity</div>
            <div className="tlbcr-feature-item"> Limited Liability Protection</div>
            <div className="tlbcr-feature-item"> High Business Credibility</div>
          </div>

          <div className="tlbcr-highlights">
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
        <aside className="tlbcr-form-wrapper">
          <div className="tlbcr-form-card">

            <h3 className="tlbcr-form-title">
              Get Expert Assistance
            </h3>

            <p className="tlbcr-form-subtitle">
              Talk to our Trade License registration expert
            </p>

            <form
              className="tlbcr-form"
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

              <div className="tlbcr-whatsapp-row">
                <label className="tlbcr-whatsapp-label">
                  <input type="checkbox" defaultChecked />
                  <span className="tlbcr-custom-checkbox"></span>
                  <span className="tlbcr-whatsapp-text">
                    Receive updates on <strong>WhatsApp</strong>
                  </span>
                </label>
              </div>

              <button type="submit">
                Book Free Consultation
              </button>
            </form>

            <p className="tlbcr-form-note">
              🔒 100% Confidential • No Spam • No Hidden Charges
            </p>

          </div>
        </aside>

      </div>
    </section>
  );
};

export default TradeLicenseBreadcrum;
