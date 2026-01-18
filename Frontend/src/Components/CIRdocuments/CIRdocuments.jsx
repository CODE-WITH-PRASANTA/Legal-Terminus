import React from "react";
import {
  FaMapMarkerAlt,
  FaFileAlt,
  FaBuilding,
  FaUserTie,
  FaStamp
} from "react-icons/fa";
import "./CIRdocuments.css";

const LLPRegisteredOfficeInfographic = () => {
  return (
    <section className="cir-infographic-section">
      <h2 className="cir-infographic-heading">
        Documents Required for Change In Registered Office Address (LLP)
      </h2>

      <div className="cir-infographic-wrapper">

        {/* SVG CONNECTOR LINES */}
        <svg
          className="cir-connector-svg"
          viewBox="0 0 1200 560"
          preserveAspectRatio="none"
        >
          <path d="M600 460 C360 300,180 200,120 120" className="cir-line teal" />
          <path d="M600 460 C480 260,360 200,300 120" className="cir-line green" />
          <path d="M600 460 C600 260,600 200,600 120" className="cir-line purple" />
          <path d="M600 460 C720 260,840 200,900 120" className="cir-line red" />
          <path d="M600 460 C840 300,1020 200,1080 120" className="cir-line orange" />
        </svg>

        {/* TOP INFO CARDS */}
        <div className="cir-item teal" data-line="teal">
          <FaMapMarkerAlt />
          <h4>Address Proof</h4>
          <p>Electricity bill, Rent Agreement</p>
        </div>

        <div className="cir-item green" data-line="green">
          <FaBuilding />
          <h4>Ownership Proof</h4>
          <p>Sale deed or NOC</p>
        </div>

        <div className="cir-item purple" data-line="purple">
          <FaUserTie />
          <h4>Partner Approval</h4>
          <p>Resolution by partners</p>
        </div>

        <div className="cir-item red" data-line="red">
          <FaFileAlt />
          <h4>LLP Agreement</h4>
          <p>Amended LLP Agreement</p>
        </div>

        <div className="cir-item orange" data-line="orange">
          <FaStamp />
          <h4>Consent Letter</h4>
          <p>Owner consent certificate</p>
        </div>

        {/* BOTTOM MAIN CIRCLE */}
        <div className="cir-center-circle">
          <h3>Documents Required</h3>
        </div>

      </div>
    </section>
  );
};

export default LLPRegisteredOfficeInfographic;
