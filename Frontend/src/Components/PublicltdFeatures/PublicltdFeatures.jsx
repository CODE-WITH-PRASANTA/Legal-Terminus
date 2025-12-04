import React from "react";
import "./PublicltdFeatures.css";

// Import your image (update the path to match your project)
import LLPFeaturesImage from "../../assets/p-1 img.webp"; 
// ← replace file name with your actual illustration image

const LLPFeatures = () => {
  return (
    <section className="llp-features-wrapper">
      <div className="llp-features-inner">
        
        {/* LEFT TEXT CONTENT */}
        <div className="llp-features-left">
          <h1 className="llp-features-title">
            What Are the Key Features of a Limited Liability Partnership?
          </h1>

          <p className="llp-features-intro">
            Limited Liability Partnerships (LLPs) combine the benefits of a
            company and a partnership structure. They offer limited liability to
            partners and a flexible internal management framework. Here is the
            detailed list of the main features of the same:
          </p>

          <ul className="llp-features-list">
            <li>
              <strong>Legal Status of LLPs:</strong> LLPs enjoy separate legal
              personality status, independent of their partners, to hold
              assets, contract, and sue or be sued in their name.
            </li>

            <li>
              <strong>Flexibility in Management:</strong> Flexibility in
              management structure and decision-making is provided through LLPs.
              Partners can either manage the LLP themselves or designate
              specific managers or committees for particular functions.
            </li>

            <li>
              <strong>Liability Protection:</strong> LLP members have limited
              liability, protecting their private property against LLP debts.
            </li>

            <li>
              <strong>Minimum Compliance Requirements:</strong> LLPs avoid AGMs
              and heavy statutory compliance, reducing admin hassles.
            </li>

            <li>
              <strong>Taxation Advantages:</strong> LLP profits are taxed as
              partnership income, avoiding double taxation.
            </li>

            <li>
              <strong>Perpetual Succession:</strong> LLP continues even if
              partners retire, resign, or pass away.
            </li>

            <li>
              <strong>Ease of Transferability:</strong> LLP ownership can be
              transferred smoothly based on the LLP agreement.
            </li>
          </ul>
        </div>

        {/* RIGHT ILLUSTRATION IMAGE */}
        <div className="llp-features-right">
          <img
            src={LLPFeaturesImage}
            alt="LLP Key Features Illustration"
            className="llp-image"
          />
        </div>

      </div>
    </section>
  );
};

export default LLPFeatures;
