import React from "react";
import "./DissolveLLPBreadcrum.css";

const DissolveLLPBreadcrum = () => {
  return (
    <section className="Dissllp-public-hero">
      <div className="Dissllp-public-container">

        {/* LEFT CONTENT */}
        <div className="Dissllp-public-content">

          <span className="Dissllp-public-tag">
            Dissolve-LLP  Registration
          </span>

          <h1 className="Dissllp-public-title">
            Dissolve-LLP Registration
            <span> in India</span>
          </h1>

          <p className="Dissllp-public-description">
            Legal Terminus can help you with Public Limited Company registration in a smooth and hassle-free manner. We offer competitive professional fees starting at Rs. 3,999/- for Public Limited Company registration in India.
          </p>

          <div className="Dissllp-public-features">
            <div className="Dissllp-feature-item"> Minimum 2 Directors Required</div>
            <div className="Dissllp-feature-item"> Separate Legal Entity</div>
            <div className="Dissllp-feature-item"> Limited Liability Protection</div>
            <div className="Dissllp-feature-item"> High Business Credibility</div>
          </div>

          <div className="Dissllp-public-highlights">
            <div>
              <h3>12,000+</h3>
              <p>Companies Registered</p>
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
        <aside className="Dissllp-public-form-wrapper">
          <div className="Dissllp-public-form-card">

            <h3 className="Dissllp-form-title">
              Get Expert Assistance
            </h3>

            <p className="Dissllp-form-subtitle">
              Talk to our Private Limited Company registration expert
            </p>

            <form
              className="Dissllp-public-form"
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

              <div className="Dissllp-whatsapp-row">
                <label className="Dissllp-whatsapp-label">
                  <input type="checkbox" defaultChecked />
                  <span className="Dissllp-custom-checkbox"></span>
                  <span className="Dissllp-whatsapp-text">
                    Receive updates on <strong>WhatsApp</strong>
                  </span>
                </label>
              </div>

              <button type="submit">
                Book Free Consultation
              </button>
            </form>

            <p className="Dissllp-form-note">
              🔒 100% Confidential • No Spam • No Hidden Charges
            </p>

          </div>
        </aside>

      </div>
    </section>
  );
};

export default DissolveLLPBreadcrum;
