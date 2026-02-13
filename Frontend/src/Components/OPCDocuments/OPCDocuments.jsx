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
    desc: "KYC Documents- All the Proposed Directors, Nominee and Shareholders such as: >As ID Proof – PAN and Aadhaar >As Address Proof – Telephone Bill / Mobile Bill / Savings Bank Statement.",
    colorClass: "color-1",
  },
  {
    icon: <FaUserCheck />,
    desc: "Passport Size Photograph: All the Proposed Directors, Nominee and Shareholders.",
    colorClass: "color-2",
  },
  {
    icon: <FaMapMarkerAlt />,
    desc: "Electricity bill corresponding to the registered office address of the company.",
    colorClass: "color-3",
  },
  {
    icon: <FaHome />,
    desc: "Rent Agreement duly notarised with respect to the registered office address of the company (if on rent).",
    colorClass: "color-4",
  },
  {
    icon: <FaCamera />,
    desc: "A No Objection Certificate (NOC) from the owner for use of his/her premises as registered office of the proposed company.",
    colorClass: "color-5",
  },
  {
    icon: <FaFileAlt />,
    desc: "Other documents shall be prepared and provided by our team.",
    colorClass: "color-6",
  },
];

const OPCDocuments = () => {
  return (
    <section className="opc-doc-section" id="documents">
      <div className="opc-doc-container">
        <div className="opc-doc-center-text">
          <h2 className="opc-doc-heading">Documents Required for OPC Registration in India</h2>
          <p className="opc-doc-sub">
            The following essential documents/information are required for registration
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
