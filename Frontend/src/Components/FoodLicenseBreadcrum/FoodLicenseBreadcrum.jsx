import React from "react";
import "./FoodLicenseBreadcrum.css";

const FoodLicenseBreadcrum = () => {
  return (
    <section className="lt-foodlicense-hero">
      <div className="lt-foodlicense-container">

        {/* LEFT CONTENT */}
        <div className="lt-foodlicense-content">

          <span className="lt-foodlicense-tag">
            Food License (FSSAI) Online Registration
          </span>

          <h1 className="lt-foodlicense-title">
            Food License (FSSAI) Online Registration
            <span> in India</span>
          </h1>

          <p className="lt-foodlicense-description">
            Legal Terminus can help you with Food License registration in a smooth and hassle-free manner. 
            We offer competitive professional fees starting at Rs. 3,999/- for Food License registration in India.
          </p>

          <div className="lt-foodlicense-features">
            <div className="lt-feature-item"> Mandatory for Food Businesses</div>
            <div className="lt-feature-item"> Nationwide Validity</div>
            <div className="lt-feature-item"> Online Application Process</div>
            <div className="lt-feature-item"> Easy Renewal and Modifications</div>
          </div>

          <div className="lt-foodlicense-highlights">
            <div>
              <h3>20,000+</h3>
              <p>Licenses Issued</p>
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
        <aside className="lt-foodlicense-form-wrapper">
          <div className="lt-foodlicense-form-card">

            <h3 className="lt-form-title">
              Get Expert Assistance
            </h3>

            <p className="lt-form-subtitle">
              Talk to our Food License registration expert
            </p>

            <form
              className="lt-foodlicense-form"
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

export default FoodLicenseBreadcrum;
