import React from "react";
import "./ISOdocument.css";
import {
  FaFileAlt,
  FaBuilding,
  FaUserCheck,
  FaClipboardList,
  FaCertificate,
} from "react-icons/fa";

const isoData = [
  {
    title: "Application Form",
    desc: "Filled ISO certification application form with basic business details.",
    icon: <FaFileAlt />,
    color: "green",
  },
  {
    title: "Business Address Proof",
    desc: "Electricity bill, rent agreement or ownership proof.",
    icon: <FaBuilding />,
    color: "teal",
  },
  {
    title: "Identity Proof",
    desc: "PAN, Aadhaar or Passport of business owner.",
    icon: <FaUserCheck />,
    color: "red",
  },
  {
    title: "Process Documents",
    desc: "Process flow, quality manual and SOP documents.",
    icon: <FaClipboardList />,
    color: "orange",
  },
  {
    title: "Certificate Copy",
    desc: "Existing ISO certificate (if applying for renewal).",
    icon: <FaCertificate />,
    color: "blue",
  },
];

const IsoInfographic = () => {
  return (
    <section className="iso-infographic-section">
      <h2 className="iso-main-heading">
        Documents Required for ISO Certification In India
      </h2>

      <div className="iso-infographic-wrapper">
        {/* CENTER CIRCLE */}
        <div className="iso-center-circle">
          <h3>
            Documents Required
            
          </h3>
        </div>

        {/* ARC LINE */}
        <div className="iso-arc-line"></div>

        {/* DOTS ON ARC */}
        <span className="iso-dot dot1"></span>
        <span className="iso-dot dot2"></span>
        <span className="iso-dot dot3"></span>
        <span className="iso-dot dot4"></span>
        <span className="iso-dot dot5"></span>

        {/* INFOGRAPHIC ITEMS */}
        <div className="iso-items">
          {isoData.map((item, index) => (
            <div className={`iso-card iso-${item.color}`} key={index}>
              <div className="iso-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <span className="iso-line"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsoInfographic;
