import React from "react";
import "./DissolveLLPDocuments.css";

const items = [
  { id: "01", title: "Research", icon: "🔍", color: "#2563eb" },
  { id: "02", title: "Ideation", icon: "💡", color: "#16a34a" },
  { id: "03", title: "Development", icon: "⚙️", color: "#7c3aed" },
  { id: "04", title: "Documentation", icon: "📝", color: "#dc2626" },
  { id: "05", title: "Collaboration", icon: "🤝", color: "#0891b2" },
  { id: "06", title: "Analysis", icon: "📊", color: "#ea580c" },
];

export default function DissolveLLPDocuments() {
  return (
    <section className="llp-step-section">
      <div className="llp-step-header">
        <h2>Dissolve-llp Registration Process</h2>
        <p>Step-by-step structured workflow</p>
      </div>

      <div className="llp-steps">
        {items.map((item) => (
          <div key={item.id} className="llp-step">
            <div
              className="llp-step-badge"
              style={{ background: item.color }}
            >
              <span className="llp-step-icon">{item.icon}</span>
              <span className="llp-step-id">{item.id}</span>
            </div>

            <div className="llp-step-content">
              <h4>{item.title}</h4>
              <p>
                Each step ensures proper compliance, accuracy, and
                documentation before proceeding further.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
