import React from "react";
import "./LegalFeatures.css";

// React Icons (orange line icons)
import { GiLaurelCrown } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";

const LegalFeatures = () => {
  return (
    <section className="LegalFeatures-root">
      <div className="LegalFeatures-container">

        {/* Heading */}
        <h2 className="LegalFeatures-heading">
          Over 100,000 clients choose Corpbiz for their legal solutions
        </h2>

        {/* Feature Grid */}
        <div className="LegalFeatures-grid">

          {/* Card 1 */}
          <div className="LegalFeatures-card">
            <GiLaurelCrown className="LegalFeatures-icon" />
            <h3 className="LegalFeatures-title">India’s No.1 Legal Platform</h3>
            <p className="LegalFeatures-text">
              Get the legal help from over 10,000+ Independent Professionals across India
            </p>
          </div>

          {/* Card 2 */}
          <div className="LegalFeatures-card">
            <MdSupportAgent className="LegalFeatures-icon" />
            <h3 className="LegalFeatures-title">Get Legal Advice</h3>
            <p className="LegalFeatures-text">
              Post your queries and get response from highly experienced professionals within 30 minutes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="LegalFeatures-card">
            <FaBalanceScale className="LegalFeatures-icon" />
            <h3 className="LegalFeatures-title">
              Contact a Lawyer/CA/Engineers Now?
            </h3>
            <p className="LegalFeatures-text">
              Contact & get legal advice from our network of independent professionals for your specific matter.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LegalFeatures;
