import React from "react";
import "./PublicltdProcess.css";

const processSteps = [
  {
    step: 1,
    title: "Consultation and Planning",
    text: "Our professionals talk with you about your business needs and goals to find the most appropriate LLP structure."
  },
  {
    step: 2,
    title: "Name Reservation",
    text: "We conduct a thorough name availability search and reserve a unique name of the LLP that complies with regulatory guidelines. Our team will file the RUN-LLP for the same."
  },
  {
    step: 3,
    title: "Document Preparation",
    text: "Our team assists in drafting the LLP agreement, outlining partner roles, profit-sharing, and operational procedures according to your specifications."
  },
  {
    step: 4,
    title: "Digital Signature Certificates (DSC)",
    text: "We arrange for the issuance of Digital Signature Certificates (DSC) for all the partners of the LLP."
  },
  {
    step: 5,
    title: "Filing with Registrar of Companies (ROC)",
    text: "We draft and file Form 2 (application for incorporation of LLP) and other documents with the ROC on your behalf."
  },
  {
    step: 6,
    title: "Verification and Approval",
    text: "Our professionals coordinate with the ROC to check the documents submitted and confirm LLP Act compliance."
  },
  {
    step: 7,
    title: "Certificate of Incorporation",
    text: "On approval of registration of the company, we receive the Incorporation documents from the ROC to confirm the legal existence of your LLP."
  },
  {
    step: 8,
    title: "Post-Incorporation Compliance",
    text: "We help you get PAN and TAN for your LLP, register the LLP agreement, and maintain ongoing compliance with regulatory filings."
  },
  {
    step: 9,
    title: "Additional Services",
    text: "Legal Terminus offers continuous support for annual compliances, trademark registration, professional tax, LLP structure changes, and other legal compliances to help you run and expand your business smoothly."
  }
];

const filingsBlocks = [
  {
    category: "Financial Statements",
    bullets: [
      "LLPs must prepare and file financial statements once a year.",
      "Statement of Accounts: Contains Balance Sheet, Profit and Loss Account, and Cash Flow Statement.",
      "Statement of Solvency: Required to be filed by LLPs having a turnover of more than ₹40 lakhs or capital contribution of more than ₹25 lakhs."
    ]
  },
  {
    category: "Annual Returns",
    bullets: [
      "Annual returns are to be filed by LLPs with the Registrar of Companies (ROC).",
      "Statement of Account: Filed with the ROC within 30 days from the close of six months from the financial year.",
      "Annual Return Form: Filed within 60 days after the financial year closes."
    ]
  },
  {
    category: "Audit Requirements (if any)",
    bullets: [
      "Audit requirements of LLPs are based on their turnover and capital contribution.",
      "Audit Requirement: LLPs with a turnover above ₹40 lakhs or capital contribution above ₹25 lakhs must obtain their accounts audited by a Chartered Accountant.",
      "Exemption: Small LLPs (whose turnover is not more than ₹40 lakhs and whose capital contribution is not more than ₹25 lakhs) are exempted from audit."
    ]
  }
];

const LlpProcessAndFilings = () => {
  return (
    <section className="lp-wrapper">
      <div className="lp-inner">
        {/* SECTION 1 – REGISTRATION PROCESS */}
        <section className="lp-section">
          <h1 className="lp-title">Legal Terminus&apos;s LLP Registration Process</h1>
          <p className="lp-intro">
            At Legal Terminus, we make the LLP registration process simple and easy so
            that our clients can focus on their business. Here&apos;s how our LLP
            registration process generally goes:
          </p>

          <div className="lp-process-grid">
            {processSteps.map((stepObj, index) => (
              <div key={stepObj.step} className="lp-step-card">
                <div className="lp-step-header">
                  <div className="lp-step-circle">{stepObj.step}</div>
                  <div className="lp-step-arrow">➜</div>
                  <h3 className="lp-step-title">{stepObj.title}</h3>
                </div>
                <p className="lp-step-text">{stepObj.text}</p>

                {/* small arrow indicator to next step */}
                {index !== processSteps.length - 1 && (
                  <div className="lp-step-flow">
                    Next step <span className="lp-step-flow-arrow">➜</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 – ANNUAL FILINGS */}
        <section className="lp-section">
          <h1 className="lp-title">
            Annual Filings for Limited Liability Partnership
          </h1>

          <div className="lp-filings-grid">
            {filingsBlocks.map((block, i) => (
              <div key={block.category} className="lp-filing-card">
                <h2 className="lp-filing-heading">{block.category}</h2>
                <ul className="lp-filing-list">
                  {block.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default LlpProcessAndFilings;
