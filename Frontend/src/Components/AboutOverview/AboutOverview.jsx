import React from "react";
import "./AboutOverview.css";
import aboutimg from "../../assets/bdp6.webp";

const AboutOverview = () => {
  return (
    <section className="AboutOverview-root">
      <div className="AboutOverview-container">

        {/* LEFT CONTENT */}
        <div className="AboutOverview-content">
          <h2 className="AboutOverview-title">About us</h2>

          <p className="AboutOverview-text">
            Welcome to Corpbiz, a vast network of over 10,000 Chartered
            Accountants, 1,000 Company Secretaries, 1,500 Engineers, and
            15,000 Lawyers. Specializing in Compliance, Tax, Audit, and various
            legal services, we are India's leading legal technology platform.
          </p>

          <h3 className="AboutOverview-subheading">Client-Centric and Independent</h3>

          <p className="AboutOverview-text">
            Our platform is unique because clients directly approach us with
            their needs, choosing from our independent professionals who offer
            impartial and genuine advice. At Corpbiz, no member firm can bind or
            obligate others, ensuring unbiased and autonomous consultations.
          </p>

          <h3 className="AboutOverview-subheading">Extensive Reach and Tailored Solutions</h3>

          <p className="AboutOverview-text">
            Spanning over 5,000 Accounting and Law firms and enriched by a pool
            of management consultants and specialists, our network is designed
            for unparalleled accessibility. Serving over 10,000 pin codes across
            India, Corpbiz is your gateway to bespoke legal and professional
            solutions.
          </p>

          <h3 className="AboutOverview-highlight">
            Join us at Corpbiz, where you don't just start a business; you start a
            revolution in professional services
          </h3>
        </div>

        {/* RIGHT IMAGE */}
        <div className="AboutOverview-imageWrapper">
          <img src={aboutimg} alt="About section" className="AboutOverview-image" />
        </div>

      </div>
    </section>
  );
};

export default AboutOverview;
