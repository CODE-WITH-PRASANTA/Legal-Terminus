import React from "react";
import "./OPCElegibility.css";
import eligibilityImg from "../../assets/blue-lap.webp";

const eligibilityPoints = [
  {
    title: "Single Shareholder",
    text: "An OPC can be incorporated by only a natural person, who should be an Indian citizen and resident.",
  },
  {
    title: "Nominee Director",
    text: "The sole shareholder has to nominate a person who will assume charge in the event of death or disability.",
  },
  {
    title: "Not a Minor",
    text: "The person incorporating the OPC cannot be a minor.",
  },
  {
    title: "Capital Requirement",
    text: "Minimum authorised capital to incorporate OPC is ₹1 lakh but no minimum paid-up capital is required.",
  },
  {
    title: "Sole Director",
    text: "A sole member may also serve as the sole director of the company.",
  },
  {
    title: "Director’s Duties",
    text: "Directors must comply with statutory duties and obligations under the Companies Act, 2013.",
  },
];

const OPCEligibility = () => {
  return (
    <section className="opc-eligibility">
      <div className="opc-eligibility__grid">
        
        {/* Left Image */}
        <div className="opc-eligibility__image">
          <img src={eligibilityImg} alt="OPC Eligibility Criteria" />
        </div>

        {/* Right Content */}
        <div className="opc-eligibility__content">
          <h2>Eligibility Criteria for OPC Registration in India</h2>
          <p className="opc-eligibility__intro">
            Eligibility conditions for OPC registration in India are noted below:
          </p>

          <div className="opc-eligibility__cards">
            {eligibilityPoints.map((item, index) => (
              <div className="opc-eligibility__card" key={index}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OPCEligibility;
