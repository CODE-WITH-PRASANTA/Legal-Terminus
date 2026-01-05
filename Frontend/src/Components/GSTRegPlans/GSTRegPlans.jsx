import React, { useState } from "react";
import "./GSTRegPlans.css";

const packages = [
  {
    title: "Corpbiz Silver",
    subtitle: "Recommended for startups and growing your business",
    oldPrice: "₹898",
    price: "₹449",
    badge: "50% off",
    highlight: false,
    features: [
      "No govt fee for registration",
      "GST Form apply in under 48 hours",
      "GST Certificate*",
      "GST or MSME Registration (Anyone)",
    ],
  },
  {
    title: "Corpbiz Gold",
    subtitle:
      "Recommended for startups and business ventures seeking rapid growth.",
    oldPrice: "₹7998",
    price: "₹3999",
    badge: "Most used package",
    highlight: true,
    features: [
      "No govt fee for registration",
      "GST Form apply in under 48 hours",
      "GST Certificate*",
      "GST or MSME Registration (Anyone)",
      "MSME Registration (If Applicable)",
      "GST apply for 12 Months (up to 100 Transactions)",
    ],
  },
  {
    title: "Corpbiz Premium",
    subtitle:
      "Recommended for the growth and success of your business venture",
    oldPrice: "₹67998",
    price: "₹33999",
    badge: "50% off",
    highlight: false,
    features: [
      "No govt fee for registration",
      "GST Form apply in under 48 hours",
      "GST Certificate*",
      "GST or MSME Registration (Anyone)",
      "MSME Registration (If Applicable)",
      "GST apply for 12 Months (up to 100 Transactions)",
      "GST Registration within 7 Business Days",
      "GST Return Filing – Valid for 36 Months",
      "Virtual Office (1st Year)",
      "ITR Filing for 2 Years",
      "MSME Certificate",
      "30-Minute Expert Consultation",
      "Business & Financial Consultant",
      "Dedicated Lawyer Support",
    ],
  },
];

const FEATURE_LIMIT = 6;

const GSTRegistrationPackages = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="gst-reg-section">
      <header className="gst-reg-header">
        <h2 className="gst-reg-title">
          Choose the Best <span>GST Registration</span> – Individual / Proprietor
        </h2>
        <p className="gst-reg-subtitle">
          Corpbiz offers the most affordable GST Registration packages designed
          for Individuals & Proprietors.
        </p>
      </header>

      <div className="gst-reg-grid">
        {packages.map((pkg, index) => {
          const showAll = expanded[index];
          const visibleFeatures = showAll
            ? pkg.features
            : pkg.features.slice(0, FEATURE_LIMIT);

          return (
            <article
              key={index}
              className={`gst-reg-card ${pkg.highlight ? "highlight" : ""}`}
            >
              <div className="gst-reg-card-header">
                <span
                  className={`gst-reg-badge ${
                    pkg.highlight ? "gold" : ""
                  }`}
                >
                  {pkg.badge}
                </span>
                <h3>{pkg.title}</h3>
                <p className="gst-reg-card-subtitle">{pkg.subtitle}</p>
              </div>

              <div className="gst-reg-price-box">
                <div className="gst-reg-old-price">{pkg.oldPrice}</div>
                <div className="gst-reg-price">
                  {pkg.price} <span>+ GST & Govt. Fee</span>
                </div>
              </div>

              <div className="gst-reg-guarantee">
                <strong>100% Money-Back Guarantee</strong>
                <span>Until we file your application</span>
              </div>

              <ul className="gst-reg-features">
                {visibleFeatures.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              {pkg.features.length > FEATURE_LIMIT && (
                <button
                  className="gst-reg-readmore"
                  onClick={() => toggleReadMore(index)}
                >
                  {showAll ? "Read Less" : "Read More"}
                </button>
              )}

              <button className="gst-reg-btn">Place Your Order</button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default GSTRegistrationPackages;
