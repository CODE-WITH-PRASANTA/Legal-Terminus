import React from "react";
import {
  FaFileAlt,
  FaClipboardCheck,
  FaCheckCircle,
  FaHandsHelping,
  FaFolderOpen,
  FaFlagCheckered,
} from "react-icons/fa";
import "./ProDocument.css";

const steps = [
  { id: "01", title: "Document Review", icon: <FaFileAlt /> },
  { id: "02", title: "Eligibility Check", icon: <FaClipboardCheck /> },
  { id: "03", title: "Approval", icon: <FaCheckCircle /> },
  { id: "04", title: "Final Validation", icon: <FaHandsHelping /> },
  { id: "05", title: "Documentation", icon: <FaFolderOpen /> },
  { id: "06", title: "Completion", icon: <FaFlagCheckered /> },
];

export default function HexDocumentSection() {
  return (
    <section className="hex-doc-section">
      <h2 className="hex-doc-title">Document Process Flow</h2>

      <div className="hex-radial">
        <div className="hex-center">PFR DOCS</div>

        {steps.map((step, index) => (
          <div key={step.id} className={`hex-card hex-${index + 1}`}>
            <div className="hex-icon">{step.icon}</div>
            <h3>{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
