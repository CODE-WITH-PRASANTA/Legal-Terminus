import React from "react";
import "./ChangeLlpBreadcrum.css";

const ChangeLlpBreadcrum = () => {
  return (
    <section className="ChangeLlp-bd-hero">
      <div className="ChangeLlp-bd-container">

        {/* LEFT CONTENT */}
        <div className="ChangeLlp-bd-content">

          <span className="ChangeLlp-bd-tag">
            Private Limited Company Registration
          </span>

          <h1 className="ChangeLlp-bd-title">
            Private Limited Company Registration
            <span> in India</span>
          </h1>

          <p className="ChangeLlp-bd-description">
            A Private Limited Company is a popular and trusted business structure in India, especially for startups and growing businesses. It helps protect personal assets, builds business credibility, and makes it easier to raise funds.

<br/><br/>
Legal Terminus can help you with Private Limited Company registration in a hassle-free way, whenever you need it. We take care of the complete process—from paperwork to approvals—within a reasonable time. Our professional fees start at ₹3,999, making company registration simple, affordable, and stress-free.

          </p>

          <div className="ChangeLlp-bd-features">
            <div className="ChangeLlp-bd-feature-item"> Minimum 2 Directors Required</div>
            <div className="ChangeLlp-bd-feature-item"> Separate Legal Entity</div>
            <div className="ChangeLlp-bd-feature-item"> Limited Liability Protection</div>
            <div className="ChangeLlp-bd-feature-item"> High Business Credibility</div>
          </div>

          <div className="ChangeLlp-bd-highlights">
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
        <aside className="ChangeLlp-bd-form-wrapper">
          <div className="ChangeLlp-bd-form-card">

            <h3 className="ChangeLlp-bd-form-title">
              Get Expert Assistance
            </h3>

            <p className="ChangeLlp-bd-form-subtitle">
              Talk to our Private Limited Company registration expert
            </p>

            <form
              className="ChangeLlp-bd-form"
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

              <div className="ChangeLlp-bd-whatsapp-row">
                <label className="ChangeLlp-bd-whatsapp-label">
                  <input type="checkbox" defaultChecked />
                  <span className="ChangeLlp-bd-custom-checkbox"></span>
                  <span className="ChangeLlp-bd-whatsapp-text">
                    Receive updates on <strong>WhatsApp</strong>
                  </span>
                </label>
              </div>

              <button type="submit">
                Book Free Consultation
              </button>
            </form>

            <p className="ChangeLlp-bd-form-note">
              🔒 100% Confidential • No Spam • No Hidden Charges
            </p>

          </div>
        </aside>

      </div>
    </section>
  );
};

export default ChangeLlpBreadcrum;
