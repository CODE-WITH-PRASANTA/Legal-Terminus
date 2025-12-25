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
      "Click the 'Login' button and enter your registered email and password.",
  },
  {
    step: 3,
    title: "View Public Documents",
    text:
      "Navigate to MCA Services → View Public Documents.",
  },
  {
    step: 4,
    title: "Search for Your Company",
    text:
      "Enter CIN or company name, fill captcha, and submit.",
  },
  {
    step: 5,
    title: "Make Payment",
    text:
      "Pay the prescribed fee (usually ₹100) to access documents.",
  },
  {
    step: 6,
    title: "Download Certificate",
    text:
      "Go to My Workspace → Documents and download the certificate PDF.",
  },
];

export default function Section8Certificate() {
  return (
    <section className="s8cert-section" aria-labelledby="s8cert-heading">
      <div className="s8cert-container">

        {/* Left column */}
        <div className="s8cert-left">
          <h2 id="s8cert-heading" className="s8cert-title">
            Certificate of Incorporation of a Section 8 Company
          </h2>

          <p className="s8cert-intro">
            The Certificate of Incorporation is the official document that proves
            the legal existence of a Section 8 Company under the Companies Act.
          </p>

          <ul className="s8cert-highlights">
            {highlights.map((h, i) => (
              <li className="s8cert-highlight" key={i}>
                <strong className="s8cert-highlight-title">
                  {h.title}:
                </strong>{" "}
                <span className="s8cert-highlight-text">{h.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column */}
        <div className="s8cert-right">
          <div className="s8cert-grid">
            {highlights.slice(0, 4).map((card, i) => (
              <article
                key={card.title}
                className="s8cert-card"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="s8cert-accent" aria-hidden="true" />
                <h3 className="s8cert-card-title">{card.title}</h3>
                <p className="s8cert-card-text">{card.text}</p>
              </article>
            ))}

            {/* Steps card */}
            <article
              className="s8cert-card s8cert-card-wide"
              style={{ animationDelay: "360ms" }}
            >
              <span className="s8cert-accent" aria-hidden="true" />
              <h3 className="s8cert-card-title">
                How to Download a Section 8 Certificate Online
              </h3>

              <ol className="s8cert-steps">
                {steps.map((s) => (
                  <li key={s.step} className="s8cert-step">
                    <span className="s8cert-step-num">{s.step}</span>
                    <div>
                      <div className="s8cert-step-title">{s.title}</div>
                      <div className="s8cert-step-text">{s.text}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            {/* Final card */}
            <article className="s8cert-card" style={{ animationDelay: "520ms" }}>
              <span className="s8cert-accent" aria-hidden="true" />
              <h3 className="s8cert-card-title">License Number</h3>
              <p className="s8cert-card-text">
                The license number mentioned in the certificate confirms the
                company’s non-profit status under Section 8.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
