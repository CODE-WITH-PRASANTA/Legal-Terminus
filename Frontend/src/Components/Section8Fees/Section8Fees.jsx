import React from "react";
import "./Section8Fees.css";

const fees = [
  {
    type: "Government Fees (MCA Fees)",
    desc: "SPICe+ form, name reservation (RUN), MoA, AoA filings.",
    cost: "₹500 to ₹8,000",
  },
  {
    type: "Digital Signature Certificate (DSC) & Director Identification Number (DIN)",
    desc: "Mandatory for all directors. Includes DSC token + DIN application.",
    cost: "₹1,000 to ₹3,000 per director",
  },
  {
    type: "Stamp Duty",
    desc: "Exempt in most states for Section 8, but some states charge a nominal stamp duty.",
    cost: "Typically Exempt – ₹100 to ₹2,500",
  },
  {
    type: "Notary and Other Charges",
    desc: "Notarization, affidavits, courier, and document printing.",
    cost: "₹200 to ₹1,000",
  },
  {
    type: "Professional Fees",
    desc: "Consultant/CA/CS charges for end-to-end support, including MoA/AoA drafting.",
    cost: "₹10,000 to ₹25,000",
  },
  {
    type: "PAN & TAN Application",
    desc: "Mandatory post-registration under SPICe+ Part B.",
    cost: "₹150 to ₹300",
  },
  {
    type: "Name Approval via RUN (if used separately)",
    desc: "If not using the integrated SPICe+ process for name approval.",
    cost: "₹1,000 (optional if needed separately)",
  },
  {
    type: "Incorporation Certificate Copy Fees (Physical/Certified)",
    desc: "If a certified copy is requested from the ROC.",
    cost: "₹100 to ₹500",
  },
  {
    type: "GST Registration (if applicable)",
    desc: "May be needed for revenue-generating activities or fundraising.",
    cost: "₹1,000 to ₹2,500 (professional fee)",
  },
  {
    type: "Bank Account Opening Assistance",
    desc: "Optional professional support or document couriering.",
    cost: "₹500 to ₹1,000",
  },
  {
    type: "Post-Incorporation Compliance (Optional/First Year)",
    desc: "Filing ADT-1 (auditor), annual returns, etc.",
    cost: "₹5,000 to ₹10,000 (first-year estimate)",
  },
];

const Section8Fees = () => {
  return (
    <section className="s8fees-wrapper" aria-labelledby="s8fees-heading">
      <header className="s8fees-header">
        <h2 id="s8fees-heading" className="s8fees-title">
          Section 8 Company Registration Fees
        </h2>
        <p className="s8fees-intro">
          The total Section 8 Company registration fees are a combination of
          government charges and professional service costs. The overall cost
          varies based on complexity and state of registration.
        </p>
      </header>

      <div
        className="s8fees-table"
        role="table"
        aria-label="Section 8 registration fees"
      >
        {/* Desktop Header */}
        <div className="s8fees-row s8fees-head" role="row">
          <div className="s8fees-col s8fees-col-type" role="columnheader">
            Type of Fee
          </div>
          <div className="s8fees-col s8fees-col-desc" role="columnheader">
            Description
          </div>
          <div className="s8fees-col s8fees-col-cost" role="columnheader">
            Estimated Cost (INR)
          </div>
        </div>

        {/* Body */}
        <div className="s8fees-body" role="rowgroup">
          {fees.map((f, idx) => (
            <div
              key={f.type}
              className={`s8fees-row s8fees-item ${
                idx % 2 === 0 ? "s8fees-even" : "s8fees-odd"
              }`}
              role="row"
              tabIndex={0}
            >
              <div className="s8fees-col s8fees-col-type" role="cell">
                <div className="s8fees-type">{f.type}</div>
              </div>

              <div className="s8fees-col s8fees-col-desc" role="cell">
                <div className="s8fees-desc">{f.desc}</div>
              </div>

              <div className="s8fees-col s8fees-col-cost" role="cell">
                <div className="s8fees-cost">{f.cost}</div>
              </div>

              <div className="s8fees-ribbon" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8Fees;
