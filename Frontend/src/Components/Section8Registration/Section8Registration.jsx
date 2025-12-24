import React from "react";
import "./Section8Registration.css";

const steps = [
  {
    id: 1,
    title: "Step 1. Get DSC & DIN",
    body: [
      "Obtain a Digital Signature Certificate (DSC) for proposed directors — required to sign forms and documents electronically on the MCA portal.",
      "Along with DSC, each director must obtain a Director Identification Number (DIN), a unique eight-digit number issued by the MCA (applied via Form DIR-3).",
    ],
  },
  {
    id: 2,
    title: "Step 2. Name Reservation (SPICe+ Part A)",
    body: [
      "Reserve a unique name for the proposed company using SPICe+ Part A on the MCA portal. The name should reflect the company's objectives and follow MCA naming guidelines.",
      "You may submit up to six name options in order of preference.",
    ],
  },
  {
    id: 3,
    title: "Step 3. Draft MOA & AOA",
    body: [
      "Prepare the Memorandum of Association (MOA) as per Form INC-13 and the Articles of Association (AOA). These documents outline the company's charitable objectives and internal rules.",
    ],
  },
  {
    id: 4,
    title: "Step 4. File Incorporation Forms (SPICe+ Part B)",
    body: [
      "Fill the SPICe+ Part B form which integrates applications for company incorporation, DIN allotment, PAN and TAN.",
      "You may optionally request GST registration and linked registrations (EPFO, ESIC) via AGILE-PRO-S.",
    ],
  },
  {
    id: 5,
    title: "Step 5. Submit Linked Forms",
    body: [
      "Upload signed MOA and AOA and submit any mandatory linked forms such as AGILE-PRO-S for GST/EPF/ESI where applicable.",
    ],
  },
  {
    id: 6,
    title: "Step 6. Scrutiny by ROC",
    body: [
      "Registrar of Companies (ROC) reviews the submitted forms and documents. If everything is in order the ROC will issue the license in Form INC-16.",
    ],
  },
  {
    id: 7,
    title: "Step 7. Issuance of Certificate",
    body: [
      "ROC issues the Section 8 Company Registration Certificate (Form INC-11) — conclusive proof of incorporation. The company can now commence operations.",
    ],
  },
];

const complianceRows = [
  // initial compliances (post-incorporation)
  {
    area: "First Board Meeting",
    requirement:
      "Hold the first Board Meeting. Directors to disclose interest in other entities (MBP-1) and declare non-disqualification (DIR-8).",
    due: "Within 30 days of incorporation",
    form: "Minutes of Meeting, Form MBP-1, Form DIR-8",
  },
  {
    area: "Appointment of First Auditor",
    requirement:
      "Appoint the first statutory auditor at the first Board Meeting.",
    due: "Within 30 days of incorporation (at the first Board Meeting)",
    form: "No e-filing initially; ADT-1 filed within 15 days of AGM after appointment",
  },
  {
    area: "Registered Office",
    requirement:
      "If not provided at incorporation, establish a registered office and file details.",
    due: "Within 30 days of incorporation (if not already filed)",
    form: "Form INC-22",
  },
  {
    area: "Commencement of Business",
    requirement: "File a declaration for commencement of business.",
    due: "Within 180 days of incorporation",
    form: "Form INC-20A",
  },
  {
    area: "Bank Account",
    requirement:
      "Open a company bank account and deposit subscription money (if any).",
    due: "Within 60 days of incorporation (though operational sooner)",
    form: "Bank documents (COI, MOA, AOA, PAN)",
  },
  {
    area: "Statutory Registers & Books of Accounts",
    requirement:
      "Maintain statutory registers and proper books of accounts at the registered office.",
    due: "Ongoing from the date of incorporation",
    form: "Physical registers, accounting records",
  },

  // annual compliances
  {
    area: "Board Meetings",
    requirement:
      "Hold at least two Board Meetings in a financial year (gap not exceeding 120 days).",
    due: "At least twice a year",
    form: "Minutes of Meetings",
  },
  {
    area: "Annual General Meeting (AGM)",
    requirement:
      "Convene the AGM to approve financial statements and auditor's report.",
    due: "Within 6 months of the end of the financial year",
    form: "Notice of AGM, Minutes",
  },
  {
    area: "Filing of Financial Statements",
    requirement:
      "File audited financial statements (Balance Sheet, P&L, Cash Flow).",
    due: "Within 30 days from the date of the AGM",
    form: "Form AOC-4",
  },
  {
    area: "Filing of Annual Return",
    requirement:
      "File the company's annual return containing details of directors and shareholders.",
    due: "Within 60 days from the date of the AGM",
    form: "Form MGT-7",
  },
  {
    area: "Income Tax Return (ITR)",
    requirement: "File the annual Income Tax Return.",
    due: "September 30 of the assessment year (for companies subject to audit)",
    form: "Applicable ITR Form",
  },
  {
    area: "DIR-3 KYC",
    requirement:
      "Directors holding DIN must complete their KYC annually.",
    due: "September 30 of every year",
    form: "Form DIR-3 KYC",
  },
  {
    area: "12AB & 80G Compliance",
    requirement:
      "If registered under 12AB & 80G, comply with donation statements and related filing.",
    due: "As per Income Tax Act rules",
    form: "Forms 10A/10AB, Form 10BD",
  },

  // event-based
  {
    area: "Change in Directors",
    requirement: "Report any appointment, resignation, or change in designation.",
    due: "Within 30 days of the change",
    form: "Form DIR-12",
  },
  {
    area: "Alteration in MOA/AOA",
    requirement: "If there are changes to the MOA/AOA, file the relevant forms.",
    due: "Within 30 days of passing the resolution",
    form: "Form MGT-14",
  },
  {
    area: "GST Registration",
    requirement:
      "If annual turnover exceeds threshold (₹20L for services, ₹40L for goods), register for GST.",
    due: "As and when threshold is crossed",
    form: "GST REG-01 / other forms",
  },
  {
    area: "Foreign Contribution (FCRA)",
    requirement:
      "If receiving foreign contributions, comply with FCRA and file annual returns.",
    due: "Annually (Form FC-4) and as required",
    form: "Form FC-4",
  },
  {
    area: "Significant Beneficial Ownership (SBO)",
    requirement: "Maintain an SBO register and report changes to ROC.",
    due: "As and when applicable",
    form: "Form BEN-2",
  },
];

const RegistrationProcess = () => {
  return (
    <main className="reg-wrapper">
      <section className="reg-steps">
        <h1 className="reg-title">How to Register a Section 8 Company: section8-step-by-Step Process</h1>
        <p className="reg-lead">
          Here's a guide on the steps for incorporation of a Section 8 company through the MCA online portal.
        </p>

        <div className="section8-steps-grid">
          {steps.map((s) => (
            <article key={s.id} className="section8-step-card">
              <h2 className="section8-step-number">Step {s.id}</h2>
              <h3 className="section8-step-title">{s.title.replace(/^Step \d+\.\s*/, "")}</h3>
              <ul className="section8-step-bullets">
                {s.body.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="compliance-section">
        <h2 className="compliance-title">Post-Incorporation Compliance Checklist for Section 8 Company</h2>
        <p className="compliance-lead">
          Maintaining compliance is crucial — the table below summarizes common compliance areas, due dates, and forms/remarks.
        </p>

        <div className="compliance-table-wrap">
          {/* Desktop header */}
          <div className="table-header">
            <div className="col area">Compliance Area</div>
            <div className="col req">Specific Requirement</div>
            <div className="col due">Due Date/Frequency</div>
            <div className="col forms">Forms/Remarks</div>
          </div>

          {/* Rows */}
          <div className="table-body">
            {complianceRows.map((r, idx) => (
              <article key={idx} className={`table-row ${idx % 2 === 0 ? "even" : "odd"}`} tabIndex={0}>
                <div className="col area"><strong>{r.area}</strong></div>
                <div className="col req">{r.requirement}</div>
                <div className="col due">{r.due}</div>
                <div className="col forms">{r.form}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegistrationProcess;
