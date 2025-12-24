import React from "react";
import "./SocietyOverview.css";
// replace this path with your actual image
import societyImage from "../../assets/Society-registration-in-India-1-scaled.webp";

const SocietyRegistration = () => {
  return (
    <section className="society-wrapper">
      {/* PART 1 – heading and intro */}
      <div className="society-intro">
        <h2>What is Society Registration?</h2>
        <p>
          A society is an association of people with a common purpose, such as
          promoting literature, science, fine arts, or charity. Society
          Registration is the legal process of formally establishing this
          association under Indian law, granting it a distinct legal identity.
        </p>
        <p>
          Society Registration is possible with at least seven members having a
          similar goal. It helps with maintaining all the financial records and
          legal proceedings under the society&apos;s name.
        </p>

        <h3>Types of Society Registration in India</h3>
        <p>
          The Societies Registration Act, 1860, allows for the formation of
          various non-profit organizations, including:
        </p>
      </div>

      {/* PART 2 – image + bullet list */}
      <div className="society-types">
        <div className="society-types-image">
          <img src={societyImage} alt="Types of Society Registration" />
        </div>

        <ul className="society-types-list">
          <li>
            <strong>Charitable Societies:</strong> Dedicated to activities like
            helping the poor, public welfare, and community improvement.
          </li>
          <li>
            <strong>Educational Societies:</strong> Focused on promoting
            education, setting up schools or colleges, and offering vocational
            training.
          </li>
          <li>
            <strong>Scientific Societies:</strong> Aimed at encouraging
            scientific research, innovation, and sharing scientific knowledge.
          </li>
          <li>
            <strong>Literary Societies:</strong> Established for promoting
            literature, arts, and cultural activities.
          </li>
          <li>
            <strong>Sports Societies:</strong> For encouraging and developing
            sports.
          </li>
          <li>
            <strong>Housing Societies:</strong> Formed for the cooperative
            management and upkeep of residential buildings.
          </li>
        </ul>
      </div>

      {/* PART 3 – legal framework */}
      <div className="society-legal">
        <h3>Legal Framework and Authorities Governing Society Registration</h3>
        <p>
          To register your society, you need to understand the laws that govern
          its formation and operation. These laws and authorities ensure your
          society gains legal standing and can access benefits.
        </p>

        <p>Society Registration in India is mainly governed by:</p>

        <ul>
          <li>
            <strong>The Societies Registration Act 1860:</strong> This central
            law provides the basic legal framework for registering literary,
            scientific, and charitable societies across India. Many states have
            adopted or changed this law to fit their specific needs.
          </li>
          <li>
            <strong>State-specific Societies Registration Acts:</strong> Several
            states have passed their own laws or made changes to the 1860 Act,
            which might include specific rules for certain types of societies
            (e.g., Maharashtra Co-operative Societies Act, 1960).
          </li>
          <li>
            <strong>Registrar of Societies:</strong> This is the main authority
            responsible for registering the Memorandum of Association and Rules
            &amp; Regulations of a society, confirming its legal existence. This
            office usually falls under the respective State Government&apos;s
            authority.
          </li>
          <li>
            <strong>NITI Aayog:</strong> Societies need to{" "}
            <span className="society-link">register on NGO Darpan</span> online
            to seek government grants and foreign contributions approved under
            the Foreign Contribution Regulation Act (FCRA).
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SocietyRegistration;
