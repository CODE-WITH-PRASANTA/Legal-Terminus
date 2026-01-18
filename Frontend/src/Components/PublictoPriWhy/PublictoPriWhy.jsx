import React from "react";
import "./PublictoPriWhy.css";

import ZolvitIllustration from "../../assets/p-4 img.webp";

const HelpSimplifyLLP = () => {
  return (
    <section className="plt-wh-wrapper">
      <div className="plt-wh-inner">
        <div className="plt-wh-grid">
          {/* LEFT: IMAGE */}
          <div className="plt-wh-image-col">
            <img
              src={ZolvitIllustration}
              alt="Zolvit helping with LLP registration"
              className="plt-wh-image"
            />
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="plt-wh-text-col">
            <h1 className="plt-wh-title">
              How Does Legal Terminus Help in Simplifying the LLP Registration
              Process?
            </h1>

            <p className="plt-wh-intro">
              Legal Terminus provides simplified services to facilitate an easy
              process of LLP registration, making it efficient and compliant for
              our clients:
            </p>

            <ul className="plt-wh-list">
              <li>
                <strong>Consultation and Planning:</strong> Specialist
                consultation to learn about business needs and organise the LLP
                as such.
              </li>
              <li>
                <strong>Name Reservation:</strong> Executing LLP name
                availability checks and acquiring a distinct name for the LLP.
              </li>
              <li>
                <strong>Document Preparation:</strong> Help in preparing the LLP
                agreement and preparing the documents for filing.
              </li>
              <li>
                <strong>Filing and Documentation:</strong> Preparation of LLP
                incorporation documents and coordination with regulatory bodies.
              </li>
              <li>
                <strong>Digital Signature Certificates (DSC):</strong>{" "}
                Coordinating the obtaining of DSCs by partners and designated
                partners.
              </li>
              <li>
                <strong>Post-Incorporation Support:</strong> Coordinating
                post-incorporation compliances like PAN and TAN filings, LLP
                agreement filing, and annual filing requirements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSimplifyLLP;
