import React from "react";
import "./SocietyAdvantages.css";

const advantageGroups = [
  {
    title: "Legal Recognition and Protection",
    points: [
      {
        label: "Establishes Legal Identity",
        text: "Your society gets its own official legal identity. It can act as a single body, and its affairs are separate from the personal affairs of its members.",
      },
      {
        label: "Protects Assets",
        text: "Registration safeguards society property from unauthorized claims and disputes, and provides limited liability to its members.",
      },
    ],
  },
  {
    title: "Greater Transparency and Credibility",
    points: [
      {
        label: "Builds Trust",
        text: "Being a registered organization is key to building trust. It shows donors, beneficiaries, agencies, and partners that the society is committed to transparency and accountability.",
      },
      {
        label: "Increases Public Confidence",
        text: "Official recognition strengthens your reputation among beneficiaries, partners, and the general public.",
      },
    ],
  },
  {
    title: "Financial Gains",
    points: [
      {
        label: "Access Tax Benefits",
        text: "Registered societies can apply for specific tax exemptions under relevant sections of the Income Tax Act (e.g., 12A and 80G).",
      },
      {
        label: "Attracts More Donations",
        text: "Formal status encourages donors who prefer contributing to recognized and compliant organizations.",
      },
    ],
  },
  {
    title: "Operational Benefits",
    points: [
      {
        label: "Open Bank Accounts",
        text: "A registered society can open and operate bank accounts in its name.",
      },
      {
        label: "Acquire Property and Enter Contracts",
        text: "The society can legally buy, own, and transfer assets in its name, and enter into legal contracts and agreements.",
      },
    ],
  },
  {
    title: "Opportunities for Growth",
    points: [
      {
        label: "Secure Grant Funding",
        text: "Registration is often a mandatory requirement for securing both domestic and international grant funding.",
      },
      {
        label: "Form Partnerships",
        text: (
          <>
            Registration makes it easier to collaborate with government bodies,
            other <span className="ngo-highlight">NGOs</span>, and corporate
            entities for CSR (Corporate Social Responsibility) initiatives.
          </>
        ),
      },
    ],
  },
];

const disadvantages = [
  {
    title: "Compliance Requirements",
    points: [
      {
        label: "Ongoing Compliance",
        text: "Registered societies must meet various annual compliance requirements, including financial audits, annual reports, and regular meetings, which can take time and often need professional help.",
      },
    ],
  },
  {
    title: "Regulatory Oversight",
    points: [
      {
        label: "More Scrutiny",
        text: "Being a registered entity means more scrutiny from regulatory bodies like the Registrar of Societies and the Income Tax Department.",
      },
    ],
  },
  {
    title: "Limited Flexibility",
    points: [
      {
        label: "Formal Amendments",
        text: "The Memorandum of Association and Rules & Regulations are legally binding, and major changes often require formal amendments and re-registration.",
      },
    ],
  },
  {
    title: "Public Accountability",
    points: [
      {
        label: "Transparency Expectations",
        text: "As a public entity, a registered society is expected to maintain transparency, and its financial & operational details may be publicly accessible.",
      },
    ],
  },
  {
    title: "Complex Dissolution",
    points: [
      {
        label: "Regulated Process",
        text: "The process of dissolving a registered society is formal and regulated, requiring specific procedures to be followed, which can be complex.",
      },
    ],
  },
];

const SocietyAdvantages = () => {
  return (
    <section className="soc-adv-wrapper">
      {/* MAIN HEADING + INTRO */}
      <header className="soc-adv-header">
        <h2>Advantages &amp; Disadvantages of Society Registration</h2>
        <p>
          Getting your society registered offers many benefits, but there are
          also some challenges to consider.
        </p>
      </header>

      {/* ADVANTAGES SECTION */}
      <section className="soc-adv-section">
        <h3 className="soc-subtitle">Advantages of Society Registration</h3>
        <div className="soc-adv-grid">
          {advantageGroups.map((group) => (
            <article className="soc-adv-card" key={group.title}>
              <div className="soc-adv-card-header">
                <h4>{group.title}</h4>
                <div className="soc-adv-accent" />
              </div>
              <ul>
                {group.points.map((p) => (
                  <li key={p.label}>
                    <strong>{p.label}:</strong> {p.text}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* DISADVANTAGES SECTION – SAME GRID & CARDS */}
      <section className="soc-adv-section">
        <h3 className="soc-subtitle">Disadvantages of Society Registration</h3>
        <p className="soc-disadv-intro">
          While there are many benefits, it&apos;s important to understand the
          potential downsides as well:
        </p>

        <div className="soc-adv-grid">
          {disadvantages.map((group) => (
            <article className="soc-adv-card" key={group.title}>
              <div className="soc-adv-card-header">
                <h4>{group.title}</h4>
                <div className="soc-adv-accent" />
              </div>
              <ul>
                {group.points.map((p) => (
                  <li key={p.label}>
                    <strong>{p.label}:</strong> {p.text}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default SocietyAdvantages;
