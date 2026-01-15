import React from "react";
import "./LlptoPrivateBreadcrum.css";

const LLPBreadcrum = () => {
  return (
    <section className="LLP-to-PLC-public-hero">
      <div className="LLP-to-PLC-public-container">

        {/* LEFT CONTENT */}
        <div className="LLP-to-PLC-public-content">

          <span className="LLP-to-PLC-public-tag">
           Limited Liability Partnership
          </span>

          <h1 className="LLP-to-PLC-public-title">
            Limited Liability Partnership
            <span> in India</span>
          </h1>

          <p className="LLP-to-PLC-public-description">
            A Limited Liability Partnership is a popular and trusted business structure in India, especially for startups and growing businesses. It helps protect personal assets, builds business credibility, and makes it easier to raise funds.

<br/><br/>
Legal Terminus can help you with Private Limited Company registration in a hassle-free way, whenever you need it. We take care of the complete process—from paperwork to approvals—within a reasonable time. Our professional fees start at ₹3,999, making company registration simple, affordable, and stress-free.

          </p>

          <div className="LLP-to-PLC-public-features">
            <div className="LLP-to-PLC-feature-item"> Minimum 2 Directors Required</div>
            <div className="LLP-to-PLC-feature-item"> Separate Legal Entity</div>
            <div className="LLP-to-PLC-feature-item"> Limited Liability Protection</div>
            <div className="LLP-to-PLC-feature-item"> High Business Credibility</div>
          </div>

          <div className="LLP-to-PLC-public-highlights">
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
        <aside className="LLP-to-PLC-public-form-wrapper">
          <div className="LLP-to-PLC-public-form-card">

            <h3 className="LLP-to-PLC-form-title">
              Get Expert Assistance
            </h3>

            <p className="LLP-to-PLC-form-subtitle">
              Talk to our Limited Liability Company (LLC) registration expert
            </p>

            <form
              className="LLP-to-PLC-public-form"
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

              <div className="LLP-to-PLC-whatsapp-row">
                <label className="LLP-to-PLC-whatsapp-label">
                  <input type="checkbox" defaultChecked />
                  <span className="LLP-to-PLC-custom-checkbox"></span>
                  <span className="LLP-to-PLC-whatsapp-text">
                    Receive updates on <strong>WhatsApp</strong>
                  </span>
                </label>
              </div>

              <button type="submit">
                Book Free Consultation
              </button>
            </form>

            <p className="LLP-to-PLC-form-note">
              🔒 100% Confidential • No Spam • No Hidden Charges
            </p>

          </div>
        </aside>

      </div>
    </section>
  );
};

export default LLPBreadcrum;
