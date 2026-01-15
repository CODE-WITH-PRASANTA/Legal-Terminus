import React from "react";
import "./PartnershipLLPBreadcrum.css";

const PartnershipLLPBreadcrum = () => {
  return (
    <section className="partnership-llp-breadcrum-hero">
      <div className="partnership-llp-breadcrum-container">

        {/* LEFT CONTENT */}
        <div className="partnership-llp-breadcrum-content">

          <span className="partnership-llp-breadcrum-tag">
            Private Limited Company Registration
          </span>

          <h1 className="partnership-llp-breadcrum-title">
            Private Limited Company Registration
            <span> in India</span>
          </h1>

          <p className="partnership-llp-breadcrum-description">
            A Private Limited Company is a popular and trusted business structure in India, especially for startups and growing businesses. It helps protect personal assets, builds business credibility, and makes it easier to raise funds.
            <br /><br />
            Legal Terminus can help you with Private Limited Company registration in a hassle-free way, whenever you need it.
          </p>

          <div className="partnership-llp-breadcrum-features">
            <div className="partnership-llp-breadcrum-feature-item">Minimum 2 Directors Required</div>
            <div className="partnership-llp-breadcrum-feature-item">Separate Legal Entity</div>
            <div className="partnership-llp-breadcrum-feature-item">Limited Liability Protection</div>
            <div className="partnership-llp-breadcrum-feature-item">High Business Credibility</div>
          </div>

          <div className="partnership-llp-breadcrum-highlights">
            <div>
              <h3>1,000+</h3>
              <p>Companies Registered</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Online Process</p>
            </div>
            <div>
              <h3>5+</h3>
              <p>Years of Legal Expertise</p>
            </div>
          </div>

        </div>

        {/* RIGHT FORM */}
        <aside className="partnership-llp-breadcrum-form-wrapper">
          <div className="partnership-llp-breadcrum-form-card">

            <h3 className="partnership-llp-breadcrum-form-title">
              Get Expert Assistance
            </h3>

            <p className="partnership-llp-breadcrum-form-subtitle">
              Talk to our Private Limited Company registration expert
            </p>

            <form
              className="partnership-llp-breadcrum-form"
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

              <div className="partnership-llp-breadcrum-whatsapp-row">
                <label className="partnership-llp-breadcrum-whatsapp-label">
                  <input type="checkbox" defaultChecked />
                  <span className="partnership-llp-breadcrum-checkbox"></span>
                  <span className="partnership-llp-breadcrum-whatsapp-text">
                    Receive updates on <strong>WhatsApp</strong>
                  </span>
                </label>
              </div>

              <button type="submit">
                Book Free Consultation
              </button>
            </form>

            <p className="partnership-llp-breadcrum-note">
              🔒 100% Confidential • No Spam • No Hidden Charges
            </p>

          </div>
        </aside>

      </div>
    </section>
  );
};

export default PartnershipLLPBreadcrum;
