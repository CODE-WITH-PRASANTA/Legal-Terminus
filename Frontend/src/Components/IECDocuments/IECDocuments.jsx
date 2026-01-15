import React from "react";
import "./IECDocuments.css";
import {
  FaRegLightbulb,
  FaUserCheck,
  FaFileAlt,
  FaRegClock,
  FaCog,
  FaGlobe,
} from "react-icons/fa";

const steps = [
  {
    num: "01",
    title: "Application Preparation",
    desc: "Collect required business and identity details before filing IEC.",
    icon: <FaRegLightbulb />,
    color: "red",
  },
  {
    num: "02",
    title: "Document Upload",
    desc: "Submit PAN, Aadhaar, and business documents securely online.",
    icon: <FaUserCheck />,
    color: "orange",
  },
  {
    num: "03",
    title: "Payment & Verification",
    desc: "Pay government fees and verify all submitted details.",
    icon: <FaFileAlt />,
    color: "yellow",
  },
  {
    num: "04",
    title: "DGFT Approval",
    desc: "DGFT verifies details and approves IEC registration.",
    icon: <FaRegClock />,
    color: "green",
  },
  {
    num: "05",
    title: "IEC Certificate Issued",
    desc: "IEC code is generated and available for download instantly.",
    icon: <FaCog />,
    color: "cyan",
  },
  {
    num: "06",
    title: "Start Import/Export",
    desc: "Use your IEC to begin trading globally with compliance.",
    icon: <FaGlobe />,
    color: "blue",
  },
];

const IECDocuments = () => {
  return (
    <section className="iec-doc-section">
      <div className="iec-doc-container">
        {/* Page Title */}
        <h2 className="iec-doc-heading">Import Export Code (IEC) Documents</h2>

        <div className="iec-doc-layout">
          {/* LEFT CIRCLE */}
          <div className="iec-doc-left">
            <div className="iec-doc-main-circle">
              <h3>IMPORT EXPORT CODE</h3>
              <p>Process Overview</p>
            </div>

            {/* Center Source Point */}
            <div className="iec-doc-center-point"></div>

            {/* Color Lines from one source */}
            {steps.map((step, i) => (
              <div className={`iec-doc-connector ${step.color} line-${i + 1}`} key={i}></div>
            ))}
          </div>

          {/* RIGHT BOXES */}
          <div className="iec-doc-right">
            {steps.map((step, index) => (
              <div className={`iec-doc-box ${step.color}`} key={index}>
                <div className="iec-doc-num">{step.num}</div>
                <div className="iec-doc-box-content">
                  <div className="iec-doc-icon">{step.icon}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IECDocuments;
