import React from "react";
import "./Section8Certificate.css";

const highlights = [
  {
    title: "Issuing Authority",
    text:
      "It is issued by the Ministry of Corporate Affairs (MCA) through the jurisdictional Registrar of Companies (ROC).",
  },
  {
    title: "Form Number",
    text: "The certificate is issued in Form INC-11.",
  },
  {
    title: "Key Details",
    text:
      "Includes company name, unique 21-digit Corporate Identity Number (CIN), date of incorporation, PAN and TAN of the company.",
  },
  {
    title: "Evidence of Existence",
    text:
      "Serves as conclusive evidence that all requirements under the Companies Act have been fulfilled.",
  },
  {
    title: "License Number",
    text:
      "For Section 8 companies the government-granted license number is also mentioned, confirming special non-profit status.",
  },
];

const steps = [
  {
    step: 1,
    title: "Visit the MCA Website",
    text:
      "Go to the official Ministry of Corporate Affairs (MCA) website (mca.gov.in).",
  },
  {
    step: 2,
    title: "Log In with Your Credentials",
    text:
      "Click the 'Login' button, enter your registered email and password (or register if you don’t have an account).",
  },
  {
    step: 3,
    title: "Use the 'View Public Documents' Option",
    text:
      "Once logged in, hover over 'MCA Services' → choose 'View Public Documents'.",
  },
  {
    step: 4,
    title: "Search for Your Company",
    text:
      "Enter your company CIN or name, fill the security code (captcha) and click Submit.",
  },
  {
    step: 5,
    title: "Make the Required Payment",
    text:
      "To access documents you may need to pay a small fee (usually ₹100 per company). Follow on-screen payment instructions.",
  },
  {
    step: 6,
    title: "Access and Download the Certificate",
    text:
      "After payment go to 'My Workspace' → 'Documents', locate the Certificate of Incorporation / License and download the PDF.",
  },
];

export default function CertificateSection() {
  return (
    <section className="cert-section" aria-labelledby="cert-heading">
      <div className="cert-container">

        {/* left column: heading + intro */}
        <div className="cert-left">
          <h2 id="cert-heading" className="cert-title">
            Certificate of Incorporation of a Section 8 Company
          </h2>

          <p className="cert-intro">
            The Certificate of Incorporation is the official document that proves the legal existence
            of the Section 8 Company.
          </p>

          <ul className="cert-highlights">
            {highlights.map((h, i) => (
              <li className="cert-highlight" key={i}>
                <strong className="cert-highlight-title">{h.title}:</strong>{" "}
                <span className="cert-highlight-text">{h.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* right column: grid of cards + steps */}
        <div className="cert-right">
          <div className="cert-grid">
            {highlights.slice(0, 4).map((card, i) => (
              <article
                className="cert-card"
                key={card.title}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="cert-card-accent" aria-hidden="true" />
                <h3 className="cert-card-title">{card.title}</h3>
                <p className="cert-card-body">{card.text}</p>
              </article>
            ))}

            {/* A larger card for steps (spans full width on wider screens) */}
            <article className="cert-steps-card" style={{ animationDelay: "380ms" }}>
              <span className="cert-card-accent" aria-hidden="true" />
              <h3 className="cert-card-title">How to Download a Section 8 Company Certificate Online?</h3>
              <p className="cert-card-body">
                If you want to download the Certificate of Incorporation or Section 8 license,
                follow these steps:
              </p>

              <ol className="cert-steps">
                {steps.map((s) => (
                  <li key={s.step} className="cert-step">
                    <strong className="cert-step-num">{s.step}.</strong>
                    <div className="cert-step-content">
                      <div className="cert-step-title">{s.title}</div>
                      <div className="cert-step-text">{s.text}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            {/* final small card (license number) */}
            <article className="cert-card" style={{ animationDelay: "540ms" }}>
              <span className="cert-card-accent" aria-hidden="true" />
              <h3 className="cert-card-title">License Number</h3>
              <p className="cert-card-body">
                The government-granted license number is mentioned in the Certificate confirming the company's special status.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
