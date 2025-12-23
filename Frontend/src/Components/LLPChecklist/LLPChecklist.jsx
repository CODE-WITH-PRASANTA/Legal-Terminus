import React, { useState } from "react";
import "./LLPChecklist.css";

/*
  LLPChecklist.jsx
  - Two visual sections (pre-filing, filing, post-filing) aggregated from your images.
  - Controls let user switch layout type and visual effect.
  - Uses unique class prefix 'ubc-'.
*/

const preFiling = [
  { title: "Name Reservation", text: "Select a distinct name for the LLP and reserve it with the Registrar of Companies (ROC). Name approval is fundamental for LLP registration." },
  { title: "Partnership Agreement", text: "Draft an LLP agreement specifying roles, duties, profit-sharing, and decision-making among partners." },
  { title: "Partner Identification", text: "Obtain Digital Signature Certificates (DSCs) for all partners who will be part of the LLP." },
  { title: "Registered Office", text: "Provide evidence of the registered office address for the LLP." },
];

const filingProcesses = [
  { title: "Document Preparation", text: "Prepare required documents such as LLP agreement, identity proof, address proof, and partners' consent." },
  { title: "Form Submission", text: "Complete and file Form 2 (and other applicable forms) with the ROC along with necessary documents and fees." },
  { title: "Verification", text: "ROC authenticates documents and approves the application for incorporation of the LLP." },
  { title: "Certificate Issuance", text: "On approval, ROC issues the Certificate of Incorporation, establishing the LLP's legal existence." },
];

const postFiling = [
  { title: "LLP Agreement Registration", text: "File the LLP agreement with the ROC within 30 days of incorporation." },
  { title: "PAN and TAN Application", text: "Apply for PAN and TAN for the LLP for tax and TDS purposes." },
  { title: "Annual Compliance", text: "File annual returns and maintain financial records as per applicable LLP regulations." },
  { title: "Notify Changes", text: "Inform ROC of any changes in partners, addresses, or the LLP agreement using prescribed forms." },
];

const layoutOptions = [
  { id: "grid-3", label: "Grid — 3 columns" },
  { id: "grid-2", label: "Grid — 2 columns" },
  { id: "list", label: "List" },
];

const effectOptions = [
  { id: "lift", label: "Lift" },
  { id: "pulse", label: "Pulse" },
  { id: "fade", label: "Fade" },
];

export default function LLPChecklist() {
  const [layout, setLayout] = useState("grid-3");
  const [effect, setEffect] = useState("lift");

  const sectionData = [
    { heading: "Pre-Filing Requirements", items: preFiling },
    { heading: "Filing Processes", items: filingProcesses },
    { heading: "Post-Filing Compliance", items: postFiling },
  ];

  return (
    <section className="ubc-wrap">
      <div className="ubc-inner">
        <header className="ubc-header">
          <h1 className="ubc-title">LLP Incorporation Checklist</h1>
          <p className="ubc-intro">
            After registering your LLP you must follow certain important compliance and process requirements
            that have to be followed after registering an LLP. Here is a detailed outline for the same:
          </p>

          <div className="ubc-controls" role="region" aria-label="layout and effect controls">
            <div className="ubc-control-group">
              <span className="ubc-control-label">Layout</span>
              {layoutOptions.map((opt) => (
                <button
                  key={opt.id}
                  className={`ubc-btn ${layout === opt.id ? "ubc-btn--active" : ""}`}
                  onClick={() => setLayout(opt.id)}
                  aria-pressed={layout === opt.id}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="ubc-control-group">
              <span className="ubc-control-label">Effect</span>
              {effectOptions.map((opt) => (
                <button
                  key={opt.id}
                  className={`ubc-btn ${effect === opt.id ? "ubc-btn--active" : ""}`}
                  onClick={() => setEffect(opt.id)}
                  aria-pressed={effect === opt.id}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <div className={`ubc-checklist ubc-layout--${layout} ubc-effect--${effect}`}>
          {sectionData.map((sec, sidx) => (
            <section className="ubc-section" key={sidx}>
              <h2 className="ubc-section-title">{sec.heading}</h2>

              <ul className="ubc-items">
                {sec.items.map((it, idx) => (
                  <li
                    key={idx}
                    className={`ubc-item`}
                    tabIndex={0}
                    aria-label={`${it.title}: ${it.text}`}
                  >
                    <div className="ubc-item-left">
                      <span className="ubc-dot" aria-hidden></span>
                    </div>

                    <div className="ubc-item-body">
                      <div className="ubc-item-head">
                        <strong className="ubc-item-title">{it.title}</strong>
                      </div>
                      <p className="ubc-item-text">{it.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
