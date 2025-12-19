import React from "react";
import "./OPCFeatures.css";

const sections = [
  {
    title: "Features of a One Person Company",
    intro:
      "An one-person company (OPC) allows a single entrepreneur to operate a corporate entity with limited liability protection, ensuring personal assets are protected. It simplifies compliance and administrative requirements, making it easier for solo entrepreneurs to manage their businesses.",
    points: [
      {
        heading: "Single Ownership",
        text:
          "An OPC is formed by a single person, who is both the shareholder and director.",
      },
      {
        heading: "Limited Liability",
        text:
          "The liability of the member is limited to their shares, protecting personal assets.",
      },
      {
        heading: "Perpetual Succession",
        text:
          "An OPC can continue its existence even after the death or incapacity of the owner, through nomination.",
      },
      {
        heading: "Separate Legal Entity",
        text:
          "An OPC is a distinct legal entity from its owner, allowing it to own property, sue, and be sued.",
      },
      {
        heading: "Minimum Compliance",
        text:
          "OPCs have fewer compliance requirements compared to other companies.",
      },
    ],
  },
  {
    title: "Privileges of One-Person Companies",
    intro:
      "Registering as a one person company provides many added advantages and functioning ease.",
    points: [
      {
        heading: "Simplified Annual Returns Filings",
        text:
          "OPCs are required to file fewer documents with the Registrar of Companies.",
      },
      {
        heading: "No Annual General Meetings (AGMs)",
        text:
          "OPCs are not required to hold AGMs, simplifying operational processes.",
      },
      {
        heading: "Access to Loans",
        text:
          "Banks and financial institutions are more likely to offer loans to OPCs due to their formal structure.",
      },
    ],
  },
  {
    title: "Legal Status and Ownership Pattern",
    intro:
      "A One Person Company has a special legal status, different from sole proprietorships.",
    points: [
      {
        heading: "Distinct Legal Identity",
        text:
          "An OPC enjoys a separate legal identity with continuity and stability.",
      },
      {
        heading: "Nominee Structure",
        text:
          "A nominee ensures business continuity under unforeseen conditions.",
      },
      {
        heading: "Complete Ownership Control",
        text:
          "The entire company is owned and controlled by a single individual.",
      },
    ],
  },
];

const OPCFeaturesGrid = () => {
  return (
    <section className="opcgrid-section">
      <div className="opcgrid-container">
        {sections.map((section, index) => (
          <div key={index} className="opcgrid-card">
            <h2 className="opcgrid-title">{section.title}</h2>
            <p className="opcgrid-intro">{section.intro}</p>

            <ul className="opcgrid-list">
              {section.points.map((item, i) => (
                <li key={i} className="opcgrid-item">
                  <span className="opcgrid-dot" />
                  <div>
                    <strong>{item.heading}:</strong> {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OPCFeaturesGrid;
