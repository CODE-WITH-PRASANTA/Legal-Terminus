import React from "react";
import {
  FaExclamation,
  FaCog,
  FaBullseye,
  FaDollarSign,
  FaChartLine,
} from "react-icons/fa";
import "./PublictoPriDocument.css";

const steps = [
  {
    step: "01",
    title: "Document Review",
    desc: "Initial verification and assessment of submitted documents.",
    icon: <FaExclamation />,
    color: "pubpri-cvd-pink",
  },
  {
    step: "02",
    title: "Eligibility Check",
    desc: "Ensure compliance with all applicable requirements.",
    icon: <FaCog />,
    color: "pubpri-cvd-purple",
  },
  {
    step: "03",
    title: "Processing",
    desc: "Detailed review and internal processing workflow.",
    icon: <FaBullseye />,
    color: "pubpri-cvd-blue",
  },
  {
    step: "04",
    title: "Approval",
    desc: "Final approval after validation checks.",
    icon: <FaDollarSign />,
    color: "pubpri-cvd-orange",
  },
  {
    step: "05",
    title: "Completion",
    desc: "Successful completion and handover of documents.",
    icon: <FaChartLine />,
    color: "pubpri-cvd-green",
  },
];

const CurvedInfographicSection = () => {
  return (
    <section className="pubpri-cvd-section">
      <div className="pubpri-cvd-wrapper">
        {/* LEFT CIRCLE */}
        <div className="pubpri-cvd-center">
          <span>
            INFO
            <br />
            GRAPHICS
          </span>
        </div>

        {/* CURVED LINE */}
        <div className="pubpri-cvd-line"></div>

        {/* STEPS */}
        <div className="pubpri-cvd-steps">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`pubpri-cvd-step pubpri-cvd-step-${index + 1}`}
            >
              <div className="pubpri-cvd-step-dot">
                <span>{item.step}</span>
              </div>

              <div className={`pubpri-cvd-step-card ${item.color}`}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
                <div className="pubpri-cvd-step-icon">{item.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurvedInfographicSection;
