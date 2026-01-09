import React from "react";
import "./OPCDocuments.css";
import {
  FaIdCard,
  FaUserCheck,
  FaMapMarkerAlt,
  FaHome,
  FaCamera,
  FaFileAlt,
} from "react-icons/fa";

const documents = [
  {
    icon: <FaIdCard />,
    title: "Director’s PAN Card",
    desc: "Copy of the sole shareholder and nominee director’s PAN card.",
    colorClass: "color-1",
  },
  {
    icon: <FaUserCheck />,
    title: "Identity Proof",
    desc: "Aadhaar card, Driving License, Voter ID, or Passport of the sole shareholder and nominee director.",
    colorClass: "color-2",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address Proof",
    desc: "Recent utility bills including water or electricity bill, mobile bill or bank statements.",
    colorClass: "color-3",
  },
  {
    icon: <FaHome />,
    title: "Registered Office Address Proof",
    desc: "Rent agreement with NOC from the owner or utility bills in case of owned property.",
    colorClass: "color-4",
  },
  {
    icon: <FaCamera />,
    title: "Passport Size Photographs",
    desc: "Latest passport-sized photographs of the sole shareholder and nominee director.",
    colorClass: "color-5",
  },
  {
    icon: <FaFileAlt />,
    title: "MOA & AOA",
    desc: "Memorandum and Articles of Association defining business objectives and internal rules.",
    colorClass: "color-6",
  },
];

const OPCDocuments = () => {
  return (
    <section className="opc-doc-section" id="documents">
      <div className="opc-doc-container">
        <div className="opc-doc-center-text">
          <h2 className="opc-doc-heading">OPC Registration Documents Required</h2>
          <p className="opc-doc-sub">
            Below is the list of documents to be submitted for OPC registration in India.
          </p>
        </div>

        <div className="opc-doc-layout">
          {/* Left Side */}
          <div className="opc-doc-side opc-doc-left">
            {documents.slice(0, 3).map((doc, index) => (
              <div
                className={`opc-doc-box left ${doc.colorClass}`}
                key={index}
              >
                <div className="opc-doc-icon">{doc.icon}</div>
                <div className="opc-doc-content">
                  <h3>{doc.title}</h3>
                  <p>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Circle */}
          <div className="opc-doc-center-circle">
            <div className="opc-doc-dotted-ring"></div>
            <div className="opc-doc-circle-inner">
              <h3>OPC DOCUMENTS</h3>
            </div>
          </div>

          {/* Right Side */}
          <div className="opc-doc-side opc-doc-right">
            {documents.slice(3).map((doc, index) => (
              <div
                className={`opc-doc-box right ${doc.colorClass}`}
                key={index}
              >
                <div className="opc-doc-icon">{doc.icon}</div>
                <div className="opc-doc-content">
                  <h3>{doc.title}</h3>
                  <p>{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OPCDocuments;
