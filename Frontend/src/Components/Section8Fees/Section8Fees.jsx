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
    <section className="fees-wrapper" aria-labelledby="fees-heading">
      <header className="fees-header">
        <h2 id="fees-heading" className="fees-title">
          Section 8 Company Registration Fees
        </h2>
        <p className="fees-intro">
          The total Section 8 Company registration fees are a combination of government charges and professional service costs. The overall cost can vary based on the complexity of the application and the state of registration. Here are the details:
        </p>
      </header>

      <div className="fees-table" role="table" aria-label="Registration fees table">
        {/* Desktop header */}
        <div className="fees-row fees-head" role="row">
          <div className="col col-type" role="columnheader">Type of Fee</div>
          <div className="col col-desc" role="columnheader">Description</div>
          <div className="col col-cost" role="columnheader">Estimated Cost (INR)</div>
        </div>

        {/* Body */}
        <div className="fees-body" role="rowgroup">
          {fees.map((f, idx) => (
            <div
              className={`fees-row fees-item ${idx % 2 === 0 ? "even" : "odd"}`}
              role="row"
              tabIndex={0}
              key={f.type}
            >
              <div className="col col-type" role="cell">
                <div className="type-inner">{f.type}</div>
              </div>
              <div className="col col-desc" role="cell">
                <div className="desc-inner">{f.desc}</div>
              </div>
              <div className="col col-cost" role="cell">
                <div className="cost-inner">{f.cost}</div>
              </div>

              {/* ribbon accent (for card/mobile appearance and hover) */}
              <div className="row-ribbon" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8Fees;
