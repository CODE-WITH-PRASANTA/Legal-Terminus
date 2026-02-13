import React from "react";
import "./SocietyDocument.css";

const items = [
  { id: "01", title: "Research", icon: "🔍", color: "#a0005a" },
  { id: "02", title: "Ideation", icon: "💡", color: "#0f6b3f" },
  { id: "03", title: "Development", icon: "⚙️", color: "#2f3fa3" },
  { id: "04", title: "Documentation", icon: "📝", color: "#c62828" },
  { id: "05", title: "Collaboration", icon: "🤝", color: "#2f6f6b" },
  { id: "06", title: "Analysis", icon: "📊", color: "#ef6c00" },
];

export default function SocietyDocument() {
  return (
    <section className="sd-section">
      <div className="sd-header">
        <h2>Society Registration Process</h2>
        <p>Clear and structured workflow for registration</p>
      </div>

      <div className="sd-grid">
        {items.map((item) => (
          <div key={item.id} className="sd-card">
            <div
              className="sd-icon-wrap"
              style={{ background: item.color }}
            >
              <span className="sd-icon">{item.icon}</span>
              <span className="sd-number">{item.id}</span>
            </div>

            <h4>{item.title}</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
