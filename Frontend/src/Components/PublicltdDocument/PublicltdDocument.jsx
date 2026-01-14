import React from "react";
import {
  FaExclamation,
  FaCog,
  FaBullseye,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
import "./PublicltdDocument.css";

const steps = [
  {
    step: "01",
    title: "Document Review",
    desc: "Initial verification and assessment of submitted documents.",
    icon: <FaExclamation />,
    color: "pink",
  },
  {
    step: "02",
    title: "Eligibility Check",
    desc: "Ensure compliance with all applicable requirements.",
    icon: <FaCog />,
    color: "purple",
  },
  {
    step: "03",
    title: "Processing",
    desc: "Detailed review and internal processing workflow.",
    icon: <FaBullseye />,
    color: "blue",
  },
  {
    step: "04",
    title: "Approval",
    desc: "Final approval after validation checks.",
    icon: <FaDollarSign />,
    color: "orange",
  },
  {
    step: "05",
    title: "Completion",
    desc: "Successful completion and handover of documents.",
    icon: <FaChartLine />,
    color: "green",
  },
];

const CurvedInfographicSection = () => {
  return (
    <section className="curved-section">
      <div className="curved-wrapper">
        {/* LEFT CIRCLE */}
        <div className="curved-center">
          <span>INFO<br />GRAPHICS</span>
        </div>

        {/* CURVED LINE */}
        <div className="curved-line"></div>

        {/* STEPS */}
        <div className="curved-steps">
          {steps.map((item, index) => (
            <div key={index} className={`curved-step step-${index + 1}`}>
              <div className="step-dot">
                <span>{item.step}</span>
              </div>

              <div className={`step-card ${item.color}`}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="step-icon">{item.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurvedInfographicSection;
