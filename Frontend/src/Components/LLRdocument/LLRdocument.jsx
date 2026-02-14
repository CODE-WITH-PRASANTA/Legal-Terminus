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
  { id: "01", title: "Any registration certificate of an organization such as Certification of Incorporation/Partnership Deed/Trade License.", icon: <FaIdCard />, color: "red" },
  { id: "02", title: "Rent agreement and Electricity bill of the registered office address of the organization.", icon: <FaBuilding />, color: "orange" },
  { id: "03", title: "Photo, PAN card & Aadhar Card of all the Directors/Partners/Proprietor.", icon: <FaUsers />, color: "yellow" },
  { id: "04", title: "Work order for employement of more than 50 employees in which Date of Commencement and Date of Completion should be mentioned.", icon: <FaFileAlt />, color: "green" },
  { id: "05", title: "Authorization letter/ Board Resolution for Authorised person (shall be provided by us", icon: <FaMoneyCheckAlt />, color: "cyan" },
  { id: "06", title: "A detailed checklist will be provided by our team in this respect", icon: <FaStamp />, color: "blue" },
];

const outerDots = Array.from({ length: 48 });

const LabourLicenceTimeline = () => {
  return (
    <section className="pvtltd-gst-wrapper">
      <h2 className="gst-heading">
        Documents Required for Labour Licence Registration in India
      </h2>
<br></br>
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
