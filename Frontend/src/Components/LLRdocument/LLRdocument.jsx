import React from "react";
import "./LLRdocument.css";
import {
  FaIdCard,
  FaBuilding,
  FaUsers,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaStamp,
} from "react-icons/fa";

const steps = [
  { id: "01", title: "Identity Proof", icon: <FaIdCard />, color: "red" },
  { id: "02", title: "Address Proof", icon: <FaBuilding />, color: "orange" },
  { id: "03", title: "Employee Details", icon: <FaUsers />, color: "yellow" },
  { id: "04", title: "Business Documents", icon: <FaFileAlt />, color: "green" },
  { id: "05", title: "Fee & Challan", icon: <FaMoneyCheckAlt />, color: "cyan" },
  { id: "06", title: "Declaration", icon: <FaStamp />, color: "blue" },
];

const outerDots = Array.from({ length: 48 });

const LabourLicenceTimeline = () => {
  return (
    <section className="lli-timeline-section">
      <h2 className="lli-timeline-heading">
        Documents Required for Labour Licence Registration in India
      </h2>

      <div className="lli-timeline-wrapper">
        {/* CENTER INFOGRAPHIC */}
        <div className="lli-timeline-center">
          {/* CENTER CIRCLE */}
          <div className="lli-timeline-circle">
            <span>
              Documents Required
             
              
            </span>
          </div>

          {/* OUTER DOT RING — 20px GAP */}
          <div className="lli-outer-dot-ring">
            {outerDots.map((_, i) => (
              <span
                key={i}
                className="lli-outer-dot"
                style={{
                  transform: `rotate(${(360 / outerDots.length) * i}deg)
                              translateY(-200px)`, // 180 + 20
                }}
              />
            ))}
          </div>

          {/* SVG CURVED CONNECTOR */}
          <svg
            className="lli-svg"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              id="lliPath"
              d="M200 20
                 A180 180 0 0 1 380 200
                 A180 180 0 0 1 200 380
                 A180 180 0 0 1 20 200
                 A180 180 0 0 1 200 20"
              className="lli-svg-path"
            />
          </svg>
        </div>

        {/* STEPS */}
        <div className="lli-timeline-steps">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`lli-step-card lli-${step.color}`}
              style={{ animationDelay: `${index * 0.25}s` }}
            >
              <span className="lli-step-number">{step.id}</span>
              <div className="lli-step-icon">{step.icon}</div>
              <h4>{step.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabourLicenceTimeline;
