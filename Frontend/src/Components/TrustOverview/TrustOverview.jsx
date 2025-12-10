import React from "react";
import "./TrustOverview.css";

// 🔁 Replace this path with your actual image file
import typesOfTrustImage from "../../assets/Types-of-trust-registration.webp";

const TrustRegistrationSection = () => {
  return (
    <section className="trust-section">
      {/* ========== PART 1: What is Trust Registration + image on right ========== */}
      <div className="trust-top">
        <div className="trust-text">
          <h2 className="trust-title">What is Trust Registration?</h2>

          <p className="trust-paragraph">
            A trust is a legal arrangement where one person transfers property
            (the <span className="trust-quote">“settlor”</span>) to another
            person to hold and manage (the{" "}
            <span className="trust-quote">“trustee”</span>) for the benefit of a
            third person or group (the <span className="trust-quote">
              “beneficiary”
            </span>
            ) or a specific purpose.
          </p>

          <p className="trust-paragraph">
            Trust Registration is the formal process of legally establishing a
            trust under various trust registration acts. This registration
            provides legal recognition, enables tax benefits, and ensures the
            trust operates as intended.
          </p>

          <p className="trust-link-text">
            
          </p>
        </div>

         {/* image on center-right side */}
        <div className="trust-image-wrapper">
          <div className="trust-image-shadow" />
          <img
            src={typesOfTrustImage}
            alt="Types of Trusts"
            className="trust-image"
          />
        </div>
      </div>

       
      {/* ========== PART 2: Types + Objectives ========== */}
      <div className="trust-section-block">
        <h3 className="trust-subtitle">
          Types of Trusts Available for Registration in India
        </h3>

        <ul className="trust-bullet-list">
          <li>
            <strong>Public Trusts:</strong> Established for public benefit
            purposes like education, healthcare, and poverty alleviation.
          </li>
          <li>
            <strong>Private Trusts:</strong> Created for specific
            beneficiaries, often family members.
          </li>
          <li>
            <strong>Religious Trusts:</strong> Focused on religious activities
            and the maintenance of places of worship.
          </li>
          <li>
            <strong>Charitable Trusts:</strong> Dedicated to charitable causes
            like relief for the poor, education, and medical relief.
          </li>
        </ul>
      </div>


     

      <div className="trust-section-block">
        <h3 className="trust-subtitle">Objectives of a Trust</h3>

        <p className="trust-paragraph">
          The main objective of Trust Registration in India is to give legal
          validity and operational structure to the intentions of the settlor.
          It helps in:
        </p>

        <ul className="trust-bullet-list">
          <li>Legally binding the trustees to the trust&apos;s objectives.</li>
          <li>Protecting the assets held within the trust.</li>
          <li>Ensuring the benefits reach the intended beneficiaries.</li>
          <li>
            Enabling the trust to receive donations and exemptions during{" "}
            <span className="trust-highlight">ITR filing</span>.
          </li>
          <li>
            Providing a framework for the administration and management of the
            trust.
          </li>
          <li>Allowing the trust to sue or be sued in its capacity.</li>
          <li>
            Facilitating <span className="trust-highlight">
              GST registration
            </span>{" "}
            for the trust if it undertakes taxable activities.
          </li>
        </ul>
      </div>

      {/* ========== PART 3: Laws Governing ========== */}
      <div className="trust-section-block">
        <h3 className="trust-subtitle">
          Laws Governing Trust Registration in India
        </h3>

        <p className="trust-paragraph">
          To register your trust, you must understand the laws that define its
          formation and operation. These statutes and authorities ensure your
          trust gains legal validity and access to benefits.
        </p>

        <h4 className="trust-mini-heading">Legal Framework</h4>
        <p className="trust-paragraph">
          Trust registration in India is primarily governed by:
        </p>

        <ul className="trust-bullet-list">
          <li>
            <strong>The Indian Trusts Act, 1882 –</strong> Provides the
            foundational legal framework for private trusts.
          </li>
          <li>
            <strong>The Bombay Public Trusts Act, 1950 –</strong> Applicable in
            Maharashtra and Gujarat.
          </li>
          <li>
            <strong>State-specific Trust Acts –</strong> Various states have
            their own Trust Acts for public trusts.
          </li>
          <li>
            <strong>The Registration Act, 1908 –</strong> Governs the
            registration of trust deeds.
          </li>
          <li>
            <strong>The Income Tax Act, 1961 –</strong> Covers tax implications
            and exemptions.
          </li>
        </ul>

        <h4 className="trust-mini-heading">
          Regulatory Authorities for Trust Registration in India
        </h4>

        <p className="trust-paragraph">
          To maintain legal validity and access government benefits, trusts must
          interact with the following authorities:
        </p>

        <ul className="trust-bullet-list">
          <li>
            <strong>
              Registrar/Sub-Registrar Office (under the Registration Act, 1908):
            </strong>{" "}
            Responsible for registering the trust deed, confirming the
            trust&apos;s legal existence.
          </li>
          <li>
            <strong>Charity Commissioner (in applicable states):</strong>{" "}
            Oversees registration, financial audits, and handles complaints for
            public charitable trusts.
          </li>
          <li>
            <strong>Income Tax Department:</strong> Grants the 12A and 80G
            registration, which are necessary for tax exemptions and donor
            benefits.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TrustRegistrationSection;
