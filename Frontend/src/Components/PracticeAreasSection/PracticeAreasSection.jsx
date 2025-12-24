// PracticeAreasSection.jsx
import React from "react";
import {
  FaBalanceScale,
  FaGavel,
  FaHandshake,
  FaShieldAlt,
  FaFileSignature,
  FaUsers,
} from "react-icons/fa";
import "./PracticeAreasSection.css";

const PracticeAreasSection = () => {
  const areas = [
    {
      id: "corporate",
      icon: <FaBalanceScale />,
      title: "Corporate Law",
      text: "Expert legal solutions for businesses, mergers, and corporate compliance.",
      highlight: false,
    },
    {
      id: "litigation",
      icon: <FaGavel />,
      title: "Civil Litigation",
      text: "Strong representation in court for disputes, claims, and justice.",
      highlight: true,
    },
    {
      id: "contract",
      icon: <FaHandshake />,
      title: "Contract Law",
      text: "Drafting and reviewing contracts that protect your interests.",
      highlight: false,
    },
    {
      id: "criminal",
      icon: <FaShieldAlt />,
      title: "Criminal Defense",
      text: "Dedicated defense strategies to protect your rights and freedom.",
      highlight: true,
    },
    {
      id: "notary",
      icon: <FaFileSignature />,
      title: "Notary Services",
      text: "Reliable document authentication, signatures, and certifications.",
      highlight: false,
    },
    {
      id: "family",
      icon: <FaUsers />,
      title: "Family Law",
      text: "Compassionate legal support for family matters and relationships.",
      highlight: true,
    },
  ];

  return (
    <section className="practiceareassection">
      <div className="practiceareassection-container">

        {/* ⭐ NEW SUBTITLE ABOVE MAIN TITLE */}
        <p className="practiceareassection-toplabel">Practice Areas</p>

        <header className="practiceareassection-head">
          <h2 className="practiceareassection-title">Our Practice Areas</h2>
          <p className="practiceareassection-subtitle">
            We provide professional and trusted legal services with excellence.
          </p>
        </header>

        <div className="practiceareassection-grid">
          {areas.map((area, idx) => (
            <article
              key={area.id}
              className={`practiceareassection-card ${area.highlight ? "highlight" : ""}`}
              tabIndex={0}
              style={{ ["--i"]: idx + 1 }}
            >
              <div className="practiceareassection-card-inner">

                <div className="practiceareassection-card-top">
                  <div className="practiceareassection-icon">{area.icon}</div>
                  <h3 className="practiceareassection-card-title">{area.title}</h3>
                </div>

                <p className="practiceareassection-card-text">{area.text}</p>

                <div className="practiceareassection-actions">
                  <button className="practiceareassection-btn">
                    Read More <span className="btn-arrow">→</span>
                  </button>
                  <button className="practiceareassection-ghost">Consult</button>
                </div>

                {/* decorative layer - fixed pointer issue */}
                <div className="practiceareassection-card-back"></div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PracticeAreasSection;
