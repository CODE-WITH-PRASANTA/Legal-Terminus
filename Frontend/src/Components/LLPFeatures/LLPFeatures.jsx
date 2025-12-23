import React from "react";
import "./LLPFeatures.css";
import illustration from "../../assets/p-1 img.webp";
const features = [
  {
    title: "Legal Status of LLPs",
    text:
      "LLPs enjoy separate legal personality status, independent of their partners, to hold assets, contract, and sue or be sued in their name.",
  },
  {
    title: "Flexibility in Management",
    text:
      "Partners can either manage the LLP themselves or designate specific managers/committees for particular functions, enabling flexible governance.",
  },
  {
    title: "Liability Protection",
    text:
      "LLP members have limited liability — they are liable only to the extent of their agreed contribution, protecting personal assets from business debts.",
  },
  {
    title: "Minimum Compliance Requirements",
    text:
      "Compared with companies, LLPs often have fewer formalities and record-keeping obligations, reducing administrative burden for small businesses.",
  },
  {
    title: "Taxation Advantages",
    text:
      "LLPs are taxed like partnerships — profits are taxed in the hands of partners, which can avoid the double taxation seen in some corporate structures.",
  },
  {
    title: "Perpetual Succession",
    text:
      "An LLP remains in existence even if partners change (retirement, death or resignation), ensuring continuity of the business.",
  },
  {
    title: "Ease of Transferability",
    text:
      "LLP interests can be transferred subject to the LLP agreement, making changes in ownership possible without disrupting operations.",
  },
];

export default function LlpOverview() {
  return (
    <section className="llp-overview">
      <div className="llp-container">
        <div className="llp-left">
          <h1 className="llp-title">What Are the Key Features of a Limited Liability Partnership?</h1>

          <p className="llp-lead">
            Limited Liability Partnerships (LLPs) combine the benefits of a company and a partnership
            structure. They offer limited liability to partners and a flexible internal management
            framework. Here is the detailed list of the main features:
          </p>

          <ul className="llp-features">
            {features.map((f, i) => (
              <li className="llp-feature" key={i}>
                <strong className="llp-feature-title">{f.title}:</strong>
                <span className="llp-feature-text"> {f.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="llp-right" aria-hidden>
          <div className="illustration-wrap">
            <img src={illustration} alt="LLP illustration" className="llp-illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}
