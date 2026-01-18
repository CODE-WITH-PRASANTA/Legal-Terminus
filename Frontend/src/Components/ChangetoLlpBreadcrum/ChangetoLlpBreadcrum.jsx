import React from "react";
import "./ChangetoLlpBreadcrum.css";

const LLPBreadcrum = () => {
  return (
    <section className="llpbr-public-hero">
      <div className="llpbr-public-container">

        {/* LEFT CONTENT */}
        <div className="llpbr-public-content">

          <span className="llpbr-public-tag">
            Limited Liability Partnership Registration
          </span>

          <h1 className="llpbr-public-title">
            Limited Liability Partnership Registration
            <span> in India</span>
          </h1>

          <p className="llpbr-public-description">
            Legal Terminus can assist you with the Limited Liability Partnership (LLP) Registration in India. We ensure a hassle-free process completed within a reasonable timeframe, with competitive professional fees starting from Rs. 7,999/-.
          </p>

          <div className="llpbr-public-features">
            <div className="llpbr-feature-item"> Minimum 2 Directors Required</div>
            <div className="llpbr-feature-item"> Separate Legal Entity</div>
            <div className="llpbr-feature-item"> Limited Liability Protection</div>
            <div className="llpbr-feature-item"> High Business Credibility</div>
          </div>

          <div className="llpbr-public-highlights">
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
        <aside className="llpbr-public-form-wrapper">
          <div className="llpbr-public-form-card">

            <h3 className="llpbr-form-title">
              Get Expert Assistance
            </h3>

            <p className="llpbr-form-subtitle">
              Talk to our LLP registration expert
            </p>

            <form
              className="llpbr-public-form"
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

              <div className="llpbr-whatsapp-row">
                <label className="llpbr-whatsapp-label">
                  <input type="checkbox" defaultChecked />
                  <span className="llpbr-custom-checkbox"></span>
                  <span className="llpbr-whatsapp-text">
                    Receive updates on <strong>WhatsApp</strong>
                  </span>
                </label>
              </div>

              <button type="submit">
                Book Free Consultation
              </button>
            </form>

            <p className="llpbr-form-note">
              🔒 100% Confidential • No Spam • No Hidden Charges
            </p>

          </div>
        </aside>

      </div>
    </section>
  );
};

export default LLPBreadcrum;
