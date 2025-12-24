import React from "react";
import "./LLPProcess.css";

const steps = [
  {
    title: "Step 1: Consultation and Planning",
    text:
      "Our professionals talk with you about your business needs and goals to find the most appropriate LLP structure.",
  },
  {
    title: "Step 2: Name Reservation",
    text:
      "We conduct a thorough name availability search and reserve a unique name of the LLP that complies with regulatory guidelines. Our team will file the RUN-LLP for the same.",
  },
  {
    title: "Step 3: Document Preparation",
    text:
      "Our team assists in drafting the LLP agreement, outlining partner roles, profit-sharing, and operational procedures according to your specifications.",
  },
  {
    title: "Step 4: Digital Signature Certificates (DSC)",
    text:
      "We arrange for the issuance of Digital Signature Certificates (DSC) for all the partners of the LLP.",
  },
  {
    title: "Step 5: Filing with Registrar of Companies (ROC)",
    text:
      "We draft and file Form 2 (application for incorporation of LLP) and other documents with the ROC on your behalf.",
  },
  {
    title: "Step 6: Verification and Approval",
    text:
      "Our professionals coordinate with the ROC to check the documents submitted and confirm LLP Act compliance.",
  },
  {
    title: "Step 7: Certificate of Incorporation",
    text:
      "On approval of registration of the company, we receive the Incorporation documents from the ROC to confirm the legal existence of your LLP.",
  },
  {
    title: "Step 8: Post-Incorporation Compliance",
    text:
      "We help you get PAN and TAN for your LLP, register the LLP agreement, and maintain ongoing compliance with regulatory filings.",
  },
  {
    title: "Step 9: Additional Services",
    text:
      "Vakilsearch offers continuous support for annual compliances, trademark registration, professional tax, proposed LLP structure changes, and other legal compliances.",
  },
];

// connector direction for 9-step snake with 5 columns:
// 1→2→3→4→5 ↓ 6←7←8←9
const getConnectorDirection = (index) => {
  if (index >= 0 && index <= 3) return "right"; // 1→2→3→4
  if (index === 4) return "down";               // 5↓6
  if (index >= 5 && index <= 7) return "left";  // 6←7←8
  return null; // last step no connector
};

export default function SocietyRegistrationSteps() {
  return (
    <section className="soc-wrap">
      {/* PART 1 — Title + Intro (first image layout) */}
      <header className="soc-header">
        <h1 className="soc-title">Vakilsearch's LLP Registration Process</h1>
        <p className="soc-intro">
          At Vakilsearch, we make the LLP registration process simple and easy so that our clients can focus on their business.
          Here's how our LLP registration process generally goes:
        </p>
      </header>

      {/* PART 2 — Snake steps (second image layout) */}
      <div className="soc-timeline" role="list" aria-label="LLP registration steps">
        {steps.map((s, i) => {
          const dir = getConnectorDirection(i);
          return (
            <article
              key={i}
              className={`soc-step soc-step--${i + 1}`}
              role="listitem"
              aria-posinset={i + 1}
              aria-setsize={steps.length}
            >
              <div className="soc-step-index">{i + 1}</div>
              <h3 className="soc-step-title">{s.title}</h3>
              <p className="soc-step-text">{s.text}</p>

              {dir && <div className={`soc-connector soc-connector--${dir}`} aria-hidden />}
            </article>
          );
        })}
      </div>
    </section>
  );
}
