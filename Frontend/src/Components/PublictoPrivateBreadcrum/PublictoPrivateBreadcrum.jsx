import React from "react";
import "./PublictoPrivateBreadcrum.css";

const PublicBreadcrum = () => {
  return (
    <section className="plt-bc-hero">
      <div className="plt-bc-container">

        {/* LEFT CONTENT */}
        <div className="plt-bc-content">

          <span className="plt-bc-tag">
            Public Limited Company Registration
          </span>

          <h1 className="plt-bc-title">
            Public Limited Company Registration
            <span> in India</span>
          </h1>

          <p className="plt-bc-description">
            A Public Limited Company is a trusted and scalable business structure
            ideal for large enterprises looking to raise capital from the public.
            Legal Terminus assists you with complete Public Limited Company
            registration in India, ensuring legal accuracy, regulatory compliance,
            and timely approval.
          </p>

          <div className="plt-bc-features">
            <div className="plt-bc-feature-item"> Minimum 7 Shareholders Required</div>
            <div className="plt-bc-feature-item"> Suitable for Fundraising & IPO</div>
            <div className="plt-bc-feature-item"> Limited Liability Protection</div>
            <div className="plt-bc-feature-item"> High Business Credibility</div>
          </div>

          <div className="plt-bc-highlights">
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
        <aside className="plt-bc-form-wrapper">
          <div className="plt-bc-form-card">

            <h3 className="plt-bc-form-title">
              Get Expert Assistance
            </h3>

            <p className="plt-bc-form-subtitle">
              Talk to our Public Company registration expert
            </p>

            <form
              className="plt-bc-form"
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

              <div className="plt-bc-whatsapp-row">
                <label className="plt-bc-whatsapp-label">
                  <input type="checkbox" defaultChecked />
                  <span className="plt-bc-custom-checkbox"></span>
                  <span className="plt-bc-whatsapp-text">
                    Receive updates on <strong>WhatsApp</strong>
                  </span>
                </label>
              </div>

              <button type="submit">
                Book Free Consultation
              </button>
            </form>

            <p className="plt-bc-form-note">
              🔒 100% Confidential • No Spam • No Hidden Charges
            </p>

          </div>
        </aside>

      </div>
    </section>
  );
};

export default PublicBreadcrum;
