import React from "react";
import "./WindupPLCDocument.css";

const steps = [
  {
    id: "01",
    title: "KYC Documents",
    desc: "PAN and Aadhaar of all proposed directors and shareholders along with address proof.",
    className: "step1",
  },
  {
    id: "02",
    title: "Passport Size Photograph",
    desc: "Recent passport size photographs of all proposed directors and shareholders.",
    className: "step2",
  },
  {
    id: "03",
    title: "Electricity Bill",
    desc: "Latest electricity bill of the registered office address of the company.",
    className: "step3",
  },
  {
    id: "04",
    title: "Rent Agreement",
    desc: "Duly notarised rent agreement for registered office address (if rented).",
    className: "step4",
  },
  {
    id: "05",
    title: "No Objection Certificate",
    desc: "NOC from the owner allowing use of premises as registered office.",
    className: "step5",
  },
];

const WindupPLCDocument = () => {
  return (
    <section className="info-section">
      <div className="info-wrapper">

        {steps.map((step, i) => (
          <div key={i} className={`bubble ${step.className}`}>
            <div className="bubble-content">
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}

        <div className="center-circle">
          <h3>DOCUMENT</h3>
          <p>PROCESS STEPS</p>
        </div>

        {/* Outside Labels like original */}
        <span className="label l1">STEP 01</span>
        <span className="label l2">STEP 02</span>
        <span className="label l3">STEP 03</span>
        <span className="label l4">STEP 04</span>
        <span className="label l5">STEP 05</span>

      </div>
    </section>
  );
};

export default WindupPLCDocument;
