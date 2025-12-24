import React from 'react';
import './UdyamRegBreadcrum.css'
import bgImage from '../../assets/breadcrum.png';

const Breadcrum = () => {
  return (
    <section
      className="breadcrum"
      style={{ '--bg': `url(${bgImage})` }}
    >
      <div className="reg-breadcrum-inner">
        {/* LEFT PANEL */}
        <div className="reg-breadcrum-left-panel">
         <h1 className="reg-breadcrum-title">
              <span className="reg-breadcrum-orange">Udyam Registration Online </span>
              <span className="reg-breadcrum-black">in India</span>
            </h1>

          <h3 className="reg-breadcrum-subtitle">
            <strong>Save 50% Today</strong>{' '}
            <span>
              on <strong>Professional Services</strong>
            </span>
          </h3>

          <p className="reg-breadcrum-desc">
            Legal Terminus can help you with Private Limited Company registration, as and when required, in a hassle-free manner within a reasonable time span. We provide competitive professional fees starting at Rs. 3,999/- for your needs in private limited company registration in India. 
          </p>

          <h4 className="reg-breadcrum-included">What's Included?</h4>

          <div className="reg-breadcrum-features">
            <ul className="reg-breadcrum-col">
              <li>Registration in 1-2 Weeks</li>
              <li>MCA Name Approval</li>
              <li>DSC in 2-4 Days</li>
            </ul>
            <ul className="reg-breadcrum-col">
              <li>DIN, PAN, and SPICE+ Compliance</li>
              <li>MOA &amp; AOA Drafting</li>
            </ul>
          </div>

          <p className="reg-breadcrum-note">
            <span className="reg-breadcrum-star">★</span>
            Register 100+ Companies Every Month + Save 18% with GST Registration
          </p>

          <div className="reg-breadcrum-cta-row">
            <button className="reg-breadcrum-schedule-btn">Book a Schedule ➜</button>

            <div className="reg-breadcrum-reviews">
              <div className="reg-breadcrum-google">
                <img src="https://corpbiz.io/img/google.webp" alt="" />
              </div>
              <div className="reg-breadcrum-trustpilot">
                <img src="https://corpbiz.io/img/trustpilot.webp" alt="" />
                
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL (FORM CARD) */}
        <aside className="reg-breadcrum-right-panel">
          <div className="reg-breadcrum-ribbon">
            <img src="https://corpbiz.io/img/offer_icon.webp" alt="" />
          </div>

          <div className="reg-breadcrum-form-card">
            <h3 className="reg-breadcrum-form-title">Get Free Expert Consultation</h3>

            <form
                className="reg-breadcrum-lead-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="reg-breadcrum-input"
                  placeholder="Your Name"
                  type="text"
                />

                <input
                  className="reg-breadcrum-input"
                  placeholder="Email Address"
                  type="email"
                />

                <div className="reg-breadcrum-phone-row">
                  <input
                    className="reg-breadcrum-input reg-breadcrum-phone"
                    placeholder="Mobile Number"
                    type="tel"
                  />
                </div>

                <select className="reg-breadcrum-input reg-breadcrum-select">
                  <option>Select State</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Karnataka</option>
                </select>

              {/* ⭐ Preferable Call Timing Dropdown */}
                  <select className="reg-breadcrum-input reg-breadcrum-select">
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


                <label className="reg-breadcrum-whatsapp">
                  Get Update on{' '}
                  <span className="reg-breadcrum-wh-icon">Whatsapp</span>
                  <input type="checkbox" defaultChecked />
                  <span className="reg-breadcrum-toggle" />
                </label>

                <button className="reg-breadcrum-get-started" type="submit">
                  GET STARTED NOW
                </button>
              </form>

          </div>
        </aside>
      </div>
    </section>
  );
};

export default Breadcrum;
