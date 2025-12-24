import React from "react";
import "./UdyamRegProcess.css"

const steps = [
  {
    title: "Start Registration",
    points: [
      "Visit the official Udyam Registration portal",
      "Choose new entrepreneur registration option",
      "Proceed to the registration form",
    ],
  },
  {
    title: "Aadhaar Verification",
    points: [
      "Enter Aadhaar number and name",
      "Validate OTP received on registered mobile",
      "Accept declaration and continue",
    ],
  },
  {
    title: "PAN Verification",
    points: [
      "Select organization type",
      "Enter PAN details as per records",
      "Validate PAN and accept declaration",
    ],
  },
  {
    title: "Business Details",
    points: [
      "Fill enterprise and owner details",
      "Enter plant/unit address and activity",
      "Select NIC code and employee details",
    ],
  },
  {
    title: "Final Submission",
    points: [
      "Confirm additional registrations if required",
      "Submit application with OTP",
      "Download Udyam Registration Certificate",
    ],
  },
];

const UdyamProcess = () => {
  return (
    <section className="udyam-process-section">
      <div className="udyam-process-container">
        <h2 className="udyam-process-heading">
          How to Apply for MSME (Udyam) Registration
        </h2>

        <div className="udyam-process-grid">
          {steps.map((step, index) => (
            <div key={index} className="udyam-step-wrapper">
              <div className="udyam-step-card">
                <div className="udyam-step-badge">
                  Step {index + 1}
                </div>

                <h3 className="udyam-step-title">{step.title}</h3>

                <ul className="udyam-step-list">
                  {step.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              {index !== steps.length - 1 && (
                <div className="udyam-step-arrow">➜</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UdyamProcess;
