import React from "react";
import { FaRegFileAlt, FaCreditCard, FaHeadset, FaEnvelope } from "react-icons/fa";
import "./WorkingProcessPro.css";

const steps = [
  {
    no: "01",
    title: "Application",
    text: "Fill out the application form",
    icon: <FaRegFileAlt />,
    color: "green",
  },
  {
    no: "02",
    title: "Payment",
    text: "Complete the online payment",
    icon: <FaCreditCard />,
    color: "yellow",
  },
  {
    no: "03",
    title: "Processing",
    text: "Our executive processes your application",
    icon: <FaHeadset />,
    color: "red",
  },
  {
    no: "04",
    title: "Confirmation",
    text: "Receive confirmation via email",
    icon: <FaEnvelope />,
    color: "purple",
  },
];

const WorkingProcessPro = () => {
  return (
    <section className="WPI-section">
      <div className="WPI-container">

        <div className="WPI-left">
        <div className="WPI-infographic">
          <div className="WPI-layer back"></div>
          <div className="WPI-layer middle"></div>

          <div className="WPI-layer front">
            <span className="WPI-badge">Legal Terminus</span>
            <h2>Our Working<br />Process</h2>
            <p>Simple & Transparent</p>
          </div>
        </div>
      </div>



        {/* RIGHT STEPS */}
        <div className="WPI-right">
          {steps.map((step, index) => (
            <div className="WPI-step-row" key={index}>
              <span className="WPI-line" />
              <div className={`WPI-step WPI-${step.color}`}>
                <div className="WPI-step-icon">{step.icon}</div>
                <div className="WPI-step-content">
                  <span className="WPI-step-no">{step.no}</span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkingProcessPro;
