import React from "react";
import "./PritoLlpBreadcrum.css";

const Breadcrum = () => {
  return (
    <section className="PLC-to-LLP-public-hero">
      <div className="PLC-to-LLP-public-container">

        {/* LEFT CONTENT */}
        <div className="PLC-to-LLP-public-content">

          <span className="PLC-to-LLP-public-tag">
            Private Limited Company Registration
          </span>

          <h1 className="PLC-to-LLP-public-title">
            Private Limited Company Registration
            <span> in India</span>
          </h1>

          <p className="PLC-to-LLP-public-description">
            A Private Limited Company is a popular and trusted business structure in India, especially for startups and growing businesses. It helps protect personal assets, builds business credibility, and makes it easier to raise funds.

<br/><br/>
Legal Terminus can help you with Private Limited Company registration in a hassle-free way, whenever you need it. We take care of the complete process—from paperwork to approvals—within a reasonable time. Our professional fees start at ₹3,999, making company registration simple, affordable, and stress-free.

          </p>

          <div className="PLC-to-LLP-public-features">
            <div className="PLC-to-LLP-feature-item"> Minimum 2 Directors Required</div>
            <div className="PLC-to-LLP-feature-item"> Separate Legal Entity</div>
            <div className="PLC-to-LLP-feature-item"> Limited Liability Protection</div>
            <div className="PLC-to-LLP-feature-item"> High Business Credibility</div>
          </div>

          <div className="PLC-to-LLP-public-highlights">
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
        <aside className="PLC-to-LLP-public-form-wrapper">
          <div className="PLC-to-LLP-public-form-card">

            <h3 className="PLC-to-LLP-form-title">
              Get Expert Assistance
            </h3>

            <p className="PLC-to-LLP-form-subtitle">
              Talk to our Private Limited Company registration expert
            </p>

            <form
              className="PLC-to-LLP-public-form"
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

              <div className="PLC-to-LLP-whatsapp-row">
                <label className="PLC-to-LLP-whatsapp-label">
                  <input type="checkbox" defaultChecked />
                  <span className="PLC-to-LLP-custom-checkbox"></span>
                  <span className="PLC-to-LLP-whatsapp-text">
                    Receive updates on <strong>WhatsApp</strong>
                  </span>
                </label>
              </div>

              <button type="submit">
                Book Free Consultation
              </button>
            </form>

            <p className="PLC-to-LLP-form-note">
              🔒 100% Confidential • No Spam • No Hidden Charges
            </p>

          </div>
        </aside>

      </div>
    </section>
  );
};

export default Breadcrum;
