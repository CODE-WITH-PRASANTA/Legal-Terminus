import React, { useState } from "react";
import "./TrustProcess.css";

const steps = [
  {
    no: 1,
    title: "Draft the Trust Deed",
    long: true,
    body: (
      <>
        <p className="step-body-intro">
          This is the most crucial step. The Trust Deed should clearly state:
        </p>
        <ul className="step-bullets">
          <li>Name and address of the Settlor.</li>
          <li>Name(s) and address(es) of the Trustee(s).</li>
          <li>
            Name(s) of the Beneficiary(ies) or the charitable object if it's a
            public trust.
          </li>
          <li>Name of the Trust.</li>
          <li>Address of the Trust.</li>
          <li>The trust property (movable or immovable).</li>
          <li>The objectives of the trust.</li>
          <li>
            Rules and regulations for managing the trust, appointing/removing
            trustees, etc.
          </li>
          <li>Duration of the trust (if not perpetual).</li>
        </ul>
      </>
    ),
  },
  {
    no: 2,
    title: "Procure Stamp Paper",
    text: "The Trust Deed must be executed on non-judicial stamp paper of appropriate value, which varies by state.",
  },
  {
    no: 3,
    title: "Signatures and Witnesses",
    text: "The Settlor and Trustees must sign the Trust Deed in the presence of at least two independent witnesses.",
  },
  {
    no: 4,
    title: "Obtain DSC (Digital Signature Certificate)",
    text: "For certain online filings related to trusts, especially for post-registration compliance like income tax.",
  },
  {
    no: 5,
    title: "Approach the Sub-Registrar",
    text: "Immovable property must be registered with the trust deed. Movable property registration is optional but recommended.",
  },
  {
    no: 6,
    title: "Submit Documents",
    text: "Along with the Trust Deed, submit KYC documents of the Settlor and Trustees.",
  },
  {
    no: 7,
    title: "Pay Registration Fees",
    text: "Pay the applicable registration fees to the Sub-Registrar.",
  },
  {
    no: 8,
    title: "Obtain Registered Deed",
    text: "Once the Sub-Registrar approves, the Trust Deed will be registered.",
  },
  {
    no: 9,
    title: "Download Copy",
    text: "Log in to your state portal, select your trust, and download the registration certificate.",
  },
];

const TrustRegistrationStepsGrid = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="steps-section">
      <h2 className="steps-title">Step-by-Step Process to Register a Trust</h2>
      <p className="steps-intro">
        Here’s a general outline of how to make a trust in India and get it
        registered:
      </p>

      <div className="steps-grid">
        {steps.map((step) => (
          <article key={step.no} className="step-card equal-height">

            {/* HEADER */}
            <header className="step-header">
              <span className="step-number">{step.no}.</span>
              <h3 className="step-title">{step.title}</h3>
            </header>

            {/* FIRST CARD WITH READ MORE */}
            {step.long ? (
              <>
                <div
                  className={
                    showMore ? "step-content expanded" : "step-content collapsed"
                  }
                >
                  {step.body}
                </div>

                <button
                  className="read-more-btn"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Read Less" : "Read More"}
                </button>
              </>
            ) : (
              <p className="step-text">{step.text}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default TrustRegistrationStepsGrid;
