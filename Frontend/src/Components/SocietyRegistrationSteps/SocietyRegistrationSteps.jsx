import React from "react";
import "./SocietyRegistrationSteps.css";

const steps = [
  {
    title: "Draft the Memorandum of Association (MOA)",
    summary:
      "Create the core document that defines your society and its purpose.",
    points: [
      "Name of the society.",
      "Objectives and goals of the society.",
      "Names, addresses, and occupations of governing body members.",
      "Names, addresses, and occupations of seven or more founding members.",
    ],
  },
  {
    title: "Draft the Rules and Regulations",
    summary:
      "Define how the society will be managed and how members will function.",
    points: [
      "Criteria and procedures for membership.",
      "Rules for meetings (AGM, EGM), attendance, and voting.",
      "Powers and duties of the governing body and office bearers.",
      "Financial management, accounting, and audit procedures.",
      "Provisions for changing rules and dissolving the society.",
    ],
  },
  {
    title: "Prepare Supporting Documents",
    summary:
      "Collect identity, address, and other proofs for members and office.",
    points: [
      "ID & address proofs of founding members.",
      "Registered office address proof.",
    ],
  },
  {
    title: "Signatures and Witnessing",
    summary: "Get MOA and Rules & Regulations signed and witnessed.",
    points: [
      "Signed by at least seven founding members.",
      "Verified by a Notary Public or Oath Commissioner.",
      "Preferably signed by at least two witnesses.",
    ],
  },
  {
    title: "Submit to Registrar of Societies",
    summary:
      "File the application with the Registrar (offline or online).",
    points: [
      "Submit forms and documents at the local Registrar office, or",
      "Use the official online portal of your state.",
      "Fill in society name, objectives, governing body, and office address.",
    ],
  },
  {
    title: "Pay Registration Fees",
    summary:
      "Pay the applicable registration fees as per your state rules.",
    points: [
      "Fees vary by state government.",
      "Payment may be online or at the Registrar office.",
    ],
  },
  {
    title: "Verification and Scrutiny",
    summary:
      "Registrar reviews your application for completeness and compliance.",
    points: [
      "Documents checked under the Societies Registration Act.",
      "Registrar may ask for more details or clarifications.",
    ],
  },
  {
    title: "Issuance of Registration Certificate",
    summary:
      "Receive the official certificate once your application is approved.",
    points: [
      "Registrar issues the Society Registration Certificate.",
      "Your society is now legally recognized as a separate entity.",
    ],
  },
];

// decide arrow direction for each step in desktop snake layout
const getConnectorDirection = (index) => {
  // indexes: 0-7  (1–8)
  if (index === 0 || index === 1 || index === 2) return "right"; // 1→2→3→4
  if (index === 3) return "down";                                 // 4↓5
  if (index === 4 || index === 5 || index === 6) return "left";   // 5←6←7←8
  return null; // last step (7) has no connector
};

const SocietyRegistrationSteps = () => {
  return (
    <section className="soc-steps-wrapper">
      <header className="soc-steps-header">
        <h2>How to Register a Society: Step-by-Step Process</h2>
        <p>
          Here&apos;s a general guide on how to form and register a society in
          India. The cards below follow a snake-style flow from Step 1 to Step 8.
        </p>
      </header>

      <div className="soc-steps-grid">
        {steps.map((step, index) => {
          const direction = getConnectorDirection(index);

          return (
            <article
              key={step.title}
              className={`soc-step-card soc-step-card--${index + 1}`}
            >
              <div className="soc-step-number">{index + 1}</div>
              <h3 className="soc-step-title">{step.title}</h3>
              <p className="soc-step-summary">{step.summary}</p>
              <ul className="soc-step-list">
                {step.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>

              {direction && (
                <div
                  className={`soc-step-connector soc-step-connector--${direction}`}
                />
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SocietyRegistrationSteps;
