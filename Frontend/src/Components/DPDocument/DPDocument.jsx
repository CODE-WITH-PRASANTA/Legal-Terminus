import React from "react";
import "./DPDocument.css";

const steps = [
  { id: "01", title: "Research", icon: "🔍", color: "#a0005a" },
  { id: "02", title: "Ideation", icon: "💡", color: "#0f6b3f" },
  { id: "03", title: "Development", icon: "⚙️", color: "#2f3fa3" },
  { id: "04", title: "Documentation", icon: "📝", color: "#c62828" },
  { id: "05", title: "Collaboration", icon: "🤝", color: "#2f6f6b" },
  { id: "06", title: "Analysis", icon: "📊", color: "#ef6c00" },
];

export default function DPDocument() {
  return (
    <section className="ladder-section">
      <div className="ladder-header">
        <h2>Dissolve-Partnership Registration Process</h2>
        <p>Step-by-step structured workflow</p>
      </div>

      <div className="ladder-wrapper">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="ladder-step"
            style={{ "--offset": index }}
          >
            <div
              className="ladder-card"
              style={{ borderColor: step.color }}
            >
              <span className="ladder-icon">{step.icon}</span>

              <div className="ladder-text">
                <h4>{step.title}</h4>
                <small>Step {step.id}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
