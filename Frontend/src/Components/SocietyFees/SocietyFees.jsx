import React from "react";
import "./SocietyFees.css";

const costItems = [
  {
    title: "Registration Fees",
    text: "They can range from Rs. 500 to Rs. 5,000 depending on the state.",
  },
  {
    title: "Stamp Duty",
    text: "Usually between Rs. 1,000 and Rs. 10,000, varying by state and document type.",
  },
  {
    title: "Professional Fees",
    text: "Legal or consultancy fees generally range from Rs. 5,000 to Rs. 15,000, depending on complexity.",
  },
];

const penaltyItems = [
  {
    title: "Failure to Register",
    text: "Under Section 4 of the Societies Registration Act, a society not registered cannot hold property or sue/be sued in its name. While no direct fine applies, the lack of legal status severely limits operations.",
  },
  {
    title: "Failure to File Annual Returns and Accounts",
    text: "Most state acts mandate annual filings. Delay or non-filing can lead to fines ranging from Rs. 1,000 to Rs. 10,000 (varies by state). Some states impose a daily fine of Rs. 50 to Rs. 200 until compliance.",
  },
  {
    title: "Misuse of Society Funds or Fraud",
    text: "Under Section 13 of the Act, misuse of funds or violation of objectives can lead to society cancellation and criminal prosecution of office bearers, punishable with imprisonment up to 6 months or a fine up to Rs. 5,000, or both.",
  },
  {
    title: "Registration Cancellation",
    text: "If a registered society fails to meet ongoing requirements or misuses its funds, its registration can be canceled by the Registrar.",
  },
];

const FeesAndPenalties = () => {
  return (
    <section className="fp-wrapper">
      <header className="fp-header">
        <h2>Society Registration Fees and Penalties</h2>
        <p>
          Includes fees, fines, stamp duties, and legal sections related to
          registration and compliance.
        </p>
      </header>

      {/* PART 1 – Costs */}
      <section className="fp-section">
        <h3 className="fp-subtitle">Society Registration Costs</h3>

        <div className="fp-grid fp-grid--costs">
          {costItems.map((item) => (
            <article className="fp-card fp-card--cost" key={item.title}>
              <h4 className="fp-card-title">{item.title}</h4>
              <p className="fp-card-text">{item.text}</p>
            </article>
          ))}
        </div>

        <p className="fp-note">
          Connect with <span className="fp-link">RegisterKaro</span> for clear
          and transparent pricing for registration and other compliance.
        </p>
      </section>

      {/* PART 2 – Penalties */}
      <section className="fp-section">
        <h3 className="fp-subtitle">
          Penalties and Punishments for Non-Compliance
        </h3>

        <div className="fp-grid fp-grid--penalties">
          {penaltyItems.map((item) => (
            <article className="fp-card fp-card--penalty" key={item.title}>
              <h4 className="fp-card-title">{item.title}</h4>
              <p className="fp-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default FeesAndPenalties;
