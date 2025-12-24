import React from 'react';
import './GSTRetBreadcrum.css';
import bgImage from '../../assets/breadcrum.png';

const Breadcrum = () => {
  return (
    <section
      className="breadcrum"
      style={{ '--bg': `url(${bgImage})` }}
    >
      <div className="ret-breadcrum-inner">
        {/* LEFT PANEL */}
        <div className="ret-breadcrum-left-panel">
         <h1 className="ret-breadcrum-title">
              <span className="ret-breadcrum-orange">GST Return Filing</span>{' '}
              <span className="ret-breadcrum-black">in India</span>
            </h1>

          <h3 className="ret-breadcrum-subtitle">
            <strong>Save 50% Today</strong>{' '}
            <span>
              on <strong>Professional Services</strong>
            </span>
          </h3>

          <p className="ret-breadcrum-desc">
            Legal Terminus can help you with Private Limited Company registration, as and when required, in a hassle-free manner within a reasonable time span. We provide competitive professional fees starting at Rs. 3,999/- for your needs in private limited company registration in India. 
          </p>

          <h4 className="ret-breadcrum-included">What's Included?</h4>

          <div className="ret-breadcrum-features">
            <ul className="ret-breadcrum-col">
              <li>Registration in 1-2 Weeks</li>
              <li>MCA Name Approval</li>
              <li>DSC in 2-4 Days</li>
            </ul>
            <ul className="ret-breadcrum-col">
              <li>DIN, PAN, and SPICE+ Compliance</li>
              <li>MOA &amp; AOA Drafting</li>
            </ul>
          </div>

          <p className="ret-breadcrum-note">
            <span className="ret-breadcrum-star">★</span>
            Register 100+ Companies Every Month + Save 18% with GST Registration
          </p>

          <div className="ret-breadcrum-cta-row">
            <button className="ret-breadcrum-schedule-btn">Book a Schedule ➜</button>

            <div className="ret-breadcrum-reviews">
              <div className="ret-breadcrum-google">
                <img src="https://corpbiz.io/img/google.webp" alt="" />
              </div>
              <div className="ret-breadcrum-trustpilot">
                <img src="https://corpbiz.io/img/trustpilot.webp" alt="" />
                
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL (FORM CARD) */}
        <aside className="ret-breadcrum-right-panel">
          <div className="ret-breadcrum-ribbon">
            <img src="https://corpbiz.io/img/offer_icon.webp" alt="" />
          </div>

          <div className="ret-breadcrum-form-card">
            <h3 className="ret-breadcrum-form-title">Get Free Expert Consultation</h3>

            <form
                className="ret-breadcrum-lead-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="ret-breadcrum-input"
                  placeholder="Your Name"
                  type="text"
                />

                <input
                  className="ret-breadcrum-input"
                  placeholder="Email Address"
                  type="email"
                />

                <div className="ret-breadcrum-phone-row">
                  <input
                    className="ret-breadcrum-input ret-breadcrum-phone"
                    placeholder="Mobile Number"
                    type="tel"
                  />
                </div>

                <select className="ret-breadcrum-input ret-breadcrum-select">
                  <option>Select State</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                  <option>Karnataka</option>
                </select>

              {/* ⭐ Preferable Call Timing Dropdown */}
                  <select className="ret-breadcrum-input ret-breadcrum-select">
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


                <label className="ret-breadcrum-whatsapp">
                  Get Update on{' '}
                  <span className="ret-breadcrum-wh-icon">Whatsapp</span>
                  <input type="checkbox" defaultChecked />
                  <span className="ret-breadcrum-toggle" />
                </label>

                <button className="ret-breadcrum-get-started" type="submit">
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
