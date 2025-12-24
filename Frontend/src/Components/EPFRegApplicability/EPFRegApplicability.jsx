import React from "react";
import "./EPFRegApplicability.css";

const epfSections = [
  {
    title: "EPF Registration UAN (Universal Account Number)",
    description:
      "Once the establishment is registered in the EPFO portal, a Universal Account Number (UAN) is generated for employees to manage PF claims and transfers.",
    points: [
      "Visit EPFO UAN activation portal",
      "Enter UAN, Member ID, Aadhaar & PAN",
      "Fill personal & contact details",
      "Receive OTP on registered mobile",
      "Verify OTP to activate UAN"
    ]
  },
  {
    title: "Applicability of EPF Registration",
    description:
      "Government rules define when EPF registration becomes mandatory for employers and employees in India.",
    points: [
      "PF applicable from the first working day",
      "Mandatory for organizations with 20+ employees",
      "Voluntary registration for entities with less than 20 employees",
      "Applicable to full-time, WFH, contractors & freelancers"
    ]
  },
  {
    title: "Mandatory Requirements for EPF Registration",
    description:
      "Certain conditions mandate EPF registration under the EPF Act, 1952.",
    points: [
      "Schedule I of EPF Act specifies mandatory industries",
      "Organizations with more than 20 employees",
      "Government may add industries via notification",
      "Societies must have at least 50 workers",
      "Voluntary registration allowed for smaller entities"
    ]
  },
  {
    title: "Who is Not Eligible & PF Exclusions",
    description:
      "Some individuals and salary components are excluded from PF benefits.",
    points: [
      "Interns or apprentices",
      "Retired employees",
      "Non-resident Indians (NRIs)",
      "Individuals working abroad",
      "HRA, Bonus, OT, Food & Travel Allowances"
    ]
  }
];

const EPFInfoGrid = () => {
  return (
    <section className="epf-info-section">
      <div className="epf-info-grid">
        {epfSections.map((section, index) => (
          <div key={index} className="epf-info-card">
            <h2 className="epf-info-title">{section.title}</h2>
            <p className="epf-info-desc">{section.description}</p>

            <ul className="epf-info-list">
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="epf-info-cta">
        <button>Connect With Our Consultant Now</button>
      </div>
    </section>
  );
};

export default EPFInfoGrid;
