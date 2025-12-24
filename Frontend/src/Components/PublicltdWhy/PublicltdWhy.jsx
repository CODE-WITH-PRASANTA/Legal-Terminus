import React from "react";
import "./PublicltdWhy.css";

// import your image (update the path/file name as needed)
import ZolvitIllustration from "../../assets/p-4 img.webp";

const HelpSimplifyLLP = () => {
  return (
    <section className="hs-wrapper">
      <div className="hs-inner">
        <div className="hs-grid">
          {/* LEFT: IMAGE */}
          <div className="hs-image-col">
            <img
              src={ZolvitIllustration}
              alt="Zolvit helping with LLP registration"
              className="hs-image"
            />
          </div>

          {/* RIGHT: TEXT CONTENT */}
          <div className="hs-text-col">
            <h1 className="hs-title">
              How Does Legal Terminus Help in Simplifying the LLP Registration
              Process?
            </h1>

            <p className="hs-intro">
              Legal Terminus provides simplified services to facilitate an easy
              process of LLP registration, making it efficient and compliant for
              our clients:
            </p>

            <ul className="hs-list">
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
