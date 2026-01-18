import React from "react";
import "./CICdocuments.css";

const steps = [
  { id: "01", title: "Step One", color: "#ff4d6d" },
  { id: "02", title: "Step two", color: "#ff8c00" },
  { id: "03", title: "Step Three", color: "#ffc107" },
  { id: "04", title: "Step Four", color: "#7cb342" },
  { id: "05", title: "Step Five", color: "#26a69a" },
  { id: "06", title: "Step Six", color: "#42a5f5" },
  { id: "07", title: "Step Seven", color: "#8e24aa" },
];

export default function cicDocument() {
  return (
    <section className="cic-Document">
      <h2 className="cic-Document-heading">
        Document Required for Change In Name(Company)
      </h2>

      <div className="cic-Document-wrapper">
        <div className="cic-Document-center">
          <h3>Document </h3>
          <span>Required</span>
        </div>

        {steps.map((step, i) => (
          <div
            key={step.id}
            className="cic-Document-step"
            style={{ "--i": i, "--clr": step.color }}
          >
            <div className="cic-Document-card">
              <span className="cic-Document-badge">
                STEP {step.id}
              </span>
              <h4>{step.title}</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
