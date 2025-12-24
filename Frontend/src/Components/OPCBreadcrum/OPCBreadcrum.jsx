import React from 'react';
import './OPCBreadcrum.css';
import bgImage from '../../assets/breadcrum.png';

const PublicBreadcrum = () => {
  return (
    <section
      className="opc-breadcrum"
      style={{ '--bg': `url(${bgImage})` }}
    >
      <div className="opc-breadcrum-inner">

        {/* LEFT PANEL */}
        <div className="opc-breadcrum-left-panel">

          <h1 className="opc-breadcrum-title">
            <span className="opc-breadcrum-orange">One Person Company (OPC) Online</span>{' '}
            <span className="opc-breadcrum-black">in India</span>
          </h1>

          <h3 className="opc-breadcrum-subtitle">
            <strong>Save 50% Today</strong>{' '}
            <span>
              on <strong>Professional Services</strong>
            </span>
          </h3>

          <p className="opc-breadcrum-desc">
            Legal Terminus can help you with Public Limited Company registration in a smooth and hassle-free manner. We offer competitive professional fees starting at Rs. 3,999/- for Public Limited Company registration in India.
          </p>

          <h4 className="opc-breadcrum-included">What's Included?</h4>

          <div className="opc-breadcrum-features">
            <ul className="opc-breadcrum-col">
              <li>Registration in 1–2 Weeks</li>
              <li>MCA Name Approval</li>
              <li>DSC in 2–4 Days</li>
            </ul>

            <ul className="opc-breadcrum-col">
              <li>DIN, PAN, and SPICE+ Compliance</li>
              <li>MOA & AOA Drafting</li>
            </ul>
          </div>

          <p className="opc-breadcrum-note">
            <span className="opc-breadcrum-star">★</span>
            Register 100+ Public Limited Companies Every Month + Save 18% with GST Registration
          </p>

          <div className="opc-breadcrum-cta-row">
            <button className="opc-breadcrum-schedule-btn">Book a Schedule ➜</button>

            <div className="opc-breadcrum-reviews">
              <div className="opc-breadcrum-google">
                <img src="https://corpbiz.io/img/google.webp" alt="" />
              </div>

              <div className="opc-breadcrum-trustpilot">
                <img src="https://corpbiz.io/img/trustpilot.webp" alt="" />
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <aside className="opc-breadcrum-right-panel">

          <div className="opc-breadcrum-ribbon">
            <img src="https://corpbiz.io/img/offer_icon.webp" alt="" />
          </div>

          <div className="opc-breadcrum-form-card">
            <h3 className="opc-breadcrum-form-title">Get Free Expert Consultation</h3>

            <form
              className="opc-breadcrum-lead-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="opc-breadcrum-input"
                placeholder="Your Name"
                type="text"
              />

              <input
                className="opc-breadcrum-input"
                placeholder="Email Address"
                type="email"
              />

              <div className="opc-breadcrum-phone-row">
                <input
                  className="opc-breadcrum-input opc-breadcrum-phone"
                  placeholder="Mobile Number"
                  type="tel"
                />
              </div>

              <select className="opc-breadcrum-input opc-breadcrum-select">
                <option>Select State</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
                <option>Karnataka</option>
              </select>

              <select className="opc-breadcrum-input opc-breadcrum-select">
                <option>Select Preferable Time to Call</option>
                <option>9:00 AM – 10:00 AM</option>
                <option>10:00 AM – 11:00 AM</option>
                <option>11:00 AM – 12:00 PM</option>
                <option>12:00 PM – 1:00 PM</option>
                <option>1:00 PM – 2:00 PM</option>
                <option>2:00 PM – 3:00 PM</option>
                <option>3:00 PM – 4:00 PM</option>
                <option>4:00 PM – 5:00 PM</option>
                <option>5:00 PM – 6:00 PM</option>
                <option>6:00 PM – 7:00 PM</option>
              </select>

              <label className="opc-breadcrum-whatsapp">
                Get Update on <span className="opc-breadcrum-wh-icon">Whatsapp</span>
                <input type="checkbox" defaultChecked />
                <span className="opc-breadcrum-toggle" />
              </label>

              <button className="opc-breadcrum-get-started" type="submit">
                GET STARTED NOW
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default PublicBreadcrum;
