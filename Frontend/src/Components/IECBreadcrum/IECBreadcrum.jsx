import React from "react";
import "./IECBreadcrum.css";

const IECBreadcrum = () => {
  return (
    <section className="lt-iec-hero">
      <div className="lt-iec-container">

        {/* LEFT CONTENT */}
        <div className="lt-iec-content">

          <span className="lt-iec-tag">
            Importer Exporter Code (IEC) Registration
          </span>

          <h1 className="lt-iec-title">
            Importer Exporter Code (IEC) Registration
            <span> in India</span>
          </h1>

          <p className="lt-iec-description">
            Legal Terminus can help you with the Importer Exporter Code Registration for your organization, as and when required, in a hassle-free manner within a reasonable time span and for competitive professional fee which starts from Rs. 1,999/-
          </p>

          <div className="lt-iec-features">
            <div className="lt-feature-item"> Mandatory for Import/Export</div>
            <div className="lt-feature-item"> Lifetime Validity</div>
            <div className="lt-feature-item"> Online Application Process</div>
            <div className="lt-feature-item"> Easy Renewal and Updates</div>
          </div>

          <div className="lt-iec-highlights">
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
        <aside className="lt-iec-form-wrapper">
          <div className="lt-iec-form-card">

            <h3 className="lt-form-title">
              Get Expert Assistance
            </h3>

            <p className="lt-form-subtitle">
              Talk to our Importer Exporter Code registration expert
            </p>

            <form
              className="lt-iec-form"
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

export default IECBreadcrum;
