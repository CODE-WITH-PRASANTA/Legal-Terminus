import React from 'react';
import './PublicBreadcrum.css';
import bgImage from '../../assets/breadcrum.png';

const PublicBreadcrum = () => {
  return (
    <section
      className="public-breadcrum"
      style={{ '--bg': `url(${bgImage})` }}
    >
      <div className="public-breadcrum-inner">

        {/* LEFT PANEL */}
        <div className="public-breadcrum-left-panel">

          <h1 className="public-breadcrum-title">
            <span className="public-breadcrum-orange">Public Limited Company Registration</span>{' '}
            <span className="public-breadcrum-black">in India</span>
          </h1>

          <h3 className="public-breadcrum-subtitle">
            <strong>Save 50% Today</strong>{' '}
            <span>
              on <strong>Professional Services</strong>
            </span>
          </h3>

          <p className="public-breadcrum-desc">
            Legal Terminus can help you with Public Limited Company registration in a smooth and hassle-free manner. We offer competitive professional fees starting at Rs. 3,999/- for Public Limited Company registration in India.
          </p>

          <h4 className="public-breadcrum-included">What's Included?</h4>

          <div className="public-breadcrum-features">
            <ul className="public-breadcrum-col">
              <li>Registration in 1–2 Weeks</li>
              <li>MCA Name Approval</li>
              <li>DSC in 2–4 Days</li>
            </ul>

            <ul className="public-breadcrum-col">
              <li>DIN, PAN, and SPICE+ Compliance</li>
              <li>MOA & AOA Drafting</li>
            </ul>
          </div>

          <p className="public-breadcrum-note">
            <span className="public-breadcrum-star">★</span>
            Register 100+ Public Limited Companies Every Month + Save 18% with GST Registration
          </p>

          <div className="public-breadcrum-cta-row">
            <button className="public-breadcrum-schedule-btn">Book a Schedule ➜</button>

            <div className="public-breadcrum-reviews">
              <div className="public-breadcrum-google">
                <img src="https://corpbiz.io/img/google.webp" alt="" />
              </div>

              <div className="public-breadcrum-trustpilot">
                <img src="https://corpbiz.io/img/trustpilot.webp" alt="" />
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <aside className="public-breadcrum-right-panel">

          <div className="public-breadcrum-ribbon">
            <img src="https://corpbiz.io/img/offer_icon.webp" alt="" />
          </div>

          <div className="public-breadcrum-form-card">
            <h3 className="public-breadcrum-form-title">Get Free Expert Consultation</h3>

            <form
              className="public-breadcrum-lead-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className="public-breadcrum-input"
                placeholder="Your Name"
                type="text"
              />

              <input
                className="public-breadcrum-input"
                placeholder="Email Address"
                type="email"
              />

              <div className="public-breadcrum-phone-row">
                <input
                  className="public-breadcrum-input public-breadcrum-phone"
                  placeholder="Mobile Number"
                  type="tel"
                />
              </div>

              <select className="public-breadcrum-input public-breadcrum-select">
                <option>Select State</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
                <option>Karnataka</option>
              </select>

              <select className="public-breadcrum-input public-breadcrum-select">
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

              <label className="public-breadcrum-whatsapp">
                Get Update on <span className="public-breadcrum-wh-icon">Whatsapp</span>
                <input type="checkbox" defaultChecked />
                <span className="public-breadcrum-toggle" />
              </label>

              <button className="public-breadcrum-get-started" type="submit">
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
