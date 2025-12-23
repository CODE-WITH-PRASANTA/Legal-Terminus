import React from "react";
import "./OPCProcess.css";

const steps = [
  {
    title: "Step 1: Consultation",
    text:
      "Pre-consultation to understand the business needs, government charges, and eligibility criteria for OPC registration.",
  },
  {
    title: "Step 2: Documentation",
    text:
      "Assistance in collecting and preparing all required documents such as identity proof, Aadhaar Card, address proof, No Objection Certificate, and registered office proof like utility bills.",
  },
  {
    title: "Step 3: DIN and DSC Application",
    text:
      "Submission of Director Identification Number (DIN) and Digital Signature Certificate (DSC) application for the sole director.",
  },
  {
    title: "Step 4: Name Approval",
    text:
      "We help you choose a unique company name and apply for name reservation through the Ministry of Corporate Affairs (MCA) portal.",
  },
  {
    title: "Step 5: MOA and AOA Drafting",
    text:
      "Preparation of the Memorandum of Association (MOA) and Articles of Association (AOA) as per legal requirements.",
  },
  {
    title: "Step 6: Filing Forms",
    text:
      "Submission of incorporation forms such as INC-32, INC-33, and INC-34 with the Registrar of Companies (ROC).",
  },
  {
    title: "Step 7: Incorporation Certificate",
    text:
      "Obtaining the Certificate of Incorporation from the ROC, confirming OPC company registration.",
  },
  {
    title: "Step 8: PAN and TAN Application",
    text:
      "Assistance in applying for the company’s Permanent Account Number (PAN) and Tax Deduction Account Number (TAN).",
  },
  {
    title: "Step 9: Post-Incorporation Support",
    text:
      "Guidance on post-incorporation compliances, income tax returns, trademark registration, professional tax, and other legal formalities.",
  },
];

// connector direction logic remains SAME
const getConnectorDirection = (index) => {
  if (index >= 0 && index <= 3) return "right";
  if (index === 4) return "down";
  if (index >= 5 && index <= 7) return "left";
  return null;
};

export default function SocietyRegistrationSteps() {
  return (
    <section className="soc-wrap">
      {/* PART 1 — Header (Image 1) */}
      <header className="soc-header">
        <h1 className="soc-title">
          Vakilsearch's OPC Registration Process
        </h1>
        <p className="soc-intro">
          Vakilsearch offers a hassle-free process of registering a One Person
          Company (OPC) in India.
        </p>
      </header>

      {/* PART 2 — Snake Timeline (Image 2) */}
      <div className="soc-timeline" role="list">
        {steps.map((step, index) => {
          const dir = getConnectorDirection(index);
          return (
            <article
              key={index}
              className={`soc-step soc-step--${index + 1}`}
              role="listitem"
            >
              <div className="soc-step-index">{index + 1}</div>
              <h3 className="soc-step-title">{step.title}</h3>
              <p className="soc-step-text">{step.text}</p>

              {dir && (
                <div
                  className={`soc-connector soc-connector--${dir}`}
                  aria-hidden
                />
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
