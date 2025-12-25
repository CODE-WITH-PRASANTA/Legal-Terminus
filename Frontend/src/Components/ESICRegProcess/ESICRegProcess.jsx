import React from "react";
import "./ESICRegProcss.css";

const steps = [
  {
    title: "Login to ESIC Portal",
    points: [
      "Employer must register on the ESIC portal",
      "Click on 'Sign Up' under Employer Login",
      "Fill in required details and submit the form"
    ]
  },
  {
    title: "Confirmation Mail",
    points: [
      "Confirmation mail sent to registered email & mobile",
      "Email contains username and password for ESIC login"
    ]
  },
  {
    title: "Employer Registration Form – 1",
    points: [
      "Login using credentials received via email",
      "Click on 'New Employer Registration'",
      "Select Type of Unit and submit",
      "Fill unit, employer, and employee details",
      "Submit the completed Form-1"
    ]
  },
  {
    title: "Payment for Registration",
    points: [
      "Payment page opens after Form-1 submission",
      "Employer must pay advance contribution for 6 months",
      "Select preferred payment mode and complete payment"
    ]
  },
  {
    title: "Registration Letter",
    points: [
      "System-generated Registration Letter (C-11) is issued",
      "Contains 17-digit ESIC Registration Number",
      "Acts as valid proof of ESIC registration"
    ]
  }
];

const ESIRegistrationProcedure = () => {
  return (
    <section className="esi-proc-section">
      <h2 className="esi-proc-main-title">
        What is the Registration Procedure of ESI Registration in India?
      </h2>

      <div className="esi-proc-grid">
        {steps.map((step, index) => (
          <div key={index} className="esi-proc-step">
            <div className="esi-proc-step-header">
              <span className="esi-proc-step-number">{index + 1}</span>
              <h3>{step.title}</h3>
            </div>

            <ul>
              {step.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {index < steps.length - 1 && (
              <div className="esi-proc-arrow">➜</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ESIRegistrationProcedure;
