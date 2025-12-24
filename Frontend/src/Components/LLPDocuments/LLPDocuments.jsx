import React from "react";
import "./LLPDocuments.css";

// small/normal image (shown under the heading)
import topImage from "../../assets/p-2 img.webp";

export default function LLPDocuments() {
  const cards = [
    {
      title: "Identity Proof of Partners",
      content: [
        "PAN Card (Indian Nationals) or Passport (Foreign Nationals)",
        "Aadhaar Card or Voter ID Card",
        "Passport photograph",
      ],
    },
    {
      title: "Address Proof of Partners",
      content: [
        "Aadhaar Card or Voter ID Card",
        "Passport or Driving License",
        "Utility bills (not older than 2 months)",
      ],
    },
    {
      title: "Registered Office Proof",
      content: [
        "Rent agreement or lease deed (if rented)",
        "Property receipt or ownership deed (if owned)",
        "NOC from the landlord (if rented)",
      ],
    },
    {
      title: "LLP Agreement",
      content: [
        "Duly drafted LLP agreement defining roles and responsibilities",
      ],
    },
    {
      title: "Digital Signature Certificates (DSC)",
      content: ["DSC of all partners seeking LLP registration"],
    },
    {
      title: "Consent of Partners (Form 9)",
      content: ["Consent of every partner to be part of the LLP"],
    },
    {
      title: "Form 2 – Incorporation",
      content: [
        "Partner details, registered office address, LLP agreement, etc.",
      ],
    },
    {
      title: "Form 1 – Declaration",
      content: [
        "Declaration by designated partners for meeting all requirements",
      ],
    },
    {
      title: "Optional Documents",
      content: [
        "Qualification proof (if partners are professionals)",
        "Certificate of incorporation (if partner is a company)",
      ],
    },
  ];

  return (
    <section className="ubd-wrap">
      <div className="ubd-inner">
        {/* Title */}
        <h1 className="ubd-title">Documents Required for LLP Registration</h1>
        <p className="ubd-lead">
          Below are the essential documents required for LLP incorporation in India.
        </p>

        {/* Image placed under heading, normal size */}
        <div className="ubd-inline-image" aria-hidden>
          <img src={topImage} alt="LLP documents illustration" className="ubd-inline-image-img" />
        </div>

        {/* Cards Grid */}
        <ul className="ubd-cards-grid" role="list">
          {cards.map((card, idx) => (
            <li className="ubd-card" key={idx}>
              <h3 className="ubd-card-title">{card.title}</h3>

              <ul className="ubd-card-list">
                {card.content.map((line, i) => (
                  <li className="ubd-card-list-item" key={i}>
                    {line}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
