import React from "react";
import "./Section8Timeline.css";

const items = [
  {
    title: "Registration Timeline",
    text:
      "The entire Section 8 Company registration process is mostly online and efficient. On average it takes about 10–15 working days from the date of submission of all correct documents. This timeline includes name reservation (1–2 days), document preparation (2–4 days), and application processing by the MCA (5–7 days).",
  },
  {
    title: "Validity",
    text:
      "A Section 8 Company’s registration is valid for perpetuity (i.e., indefinite) — as long as the company complies with annual legal requirements and filings, its registration does not expire.",
  },
  {
    title: "Renewal",
    text:
      "There is no requirement for periodic renewal of the registration. The Certificate of Incorporation for a Section 8 Company is permanent, ensuring long-term sustainability and uninterrupted operation of the non-profit organisation.",
  },
];

export default function Section8Timeline() {
  return (
    <section className="s8-section" aria-labelledby="s8-heading">
      <div className="s8-container">
        <header className="s8-left">
          <h2 id="s8-heading" className="s8-heading">
            Section 8 Company Registration Timeline, Validity &amp; Renewal
          </h2>

          <p className="s8-intro">
            Understanding how long registration takes and whether it needs
            renewal helps you plan governance and operations for your
            non-profit.
          </p>

          <div className="s8-cta">
            <p>
              Need help? <strong>Talk to an expert</strong> to get timelines
              tailored to your state and documents.
            </p>
            <button className="s8-cta-button" type="button">
              Contact Expert
            </button>
          </div>
        </header>

        <div className="s8-right">
          <div className="s8-grid">
            {items.map((it, idx) => (
              <article
                key={it.title}
                className="s8-card"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className="s8-card-accent" />
                <h3 className="s8-card-title">{it.title}</h3>
                <p className="s8-card-text">{it.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
