import React from "react";
import "./GSTRegPlans.css";

const packages = [
  {
    type: "silver",
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
    type: "gold",
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
    type: "premium",
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
      "GST Registration within 7 Business Days (Rs. 649)",
      "GST Return Filing – Valid for 36 Months* (Rs. 24,999)",
      "Apply for Virtual Space of Business (1st Year - Rs. 8,999)",
      "ITR Filing for 2 Years* (Rs. 3,999)",
      "MSME Certificate",
      "30-Minute Consultation with each Expert",
      "Business & Financial Consultant (Rs. 2,499)",
      "Lawyer (Rs. 699)",
    ],
  },
];

const GSTRegistrationPackages = () => {
  return (
    <section className="gst-reg-section">
      {/* Header */}
      <header className="gst-reg-header">
        <h2 className="gst-reg-title">
          Choose the Best <span>GST Registration</span> – Individual/Proprietor Package
        </h2>
        <p className="gst-reg-subtitle">
          Corpbiz offers you the most affordable packages for GST Registration –
          Individual/Proprietor.
        </p>
      </header>

      {/* Cards Grid */}
      <div className="gst-reg-grid">
        {packages.map((pkg, index) => (
          <article
            key={index}
            className={`gst-reg-card ${pkg.highlight ? "highlight" : ""}`}
          >
            {/* Card Header */}
            <div className="gst-reg-card-header">
              <h3>{pkg.title}</h3>

              {pkg.badge && (
                <span className={`gst-reg-badge ${pkg.highlight ? "gold" : ""}`}>
                  {pkg.badge}
                </span>
              )}

              <p className="gst-reg-card-subtitle">{pkg.subtitle}</p>
            </div>

            {/* Pricing */}
            <div className="gst-reg-price-box">
              <div className="gst-reg-old-price">{pkg.oldPrice}</div>
              <div className="gst-reg-price">
                {pkg.price} <span>+ GST And Govt. Fee</span>
              </div>
            </div>

            {/* Guarantee */}
            <div className="gst-reg-guarantee">
              <strong>100% Money-Back Guarantee.</strong>
              <span>Until We File Your Application T&C</span>
            </div>

            {/* Features */}
            <ul className="gst-reg-features">
              {pkg.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* CTA */}
            <button className="gst-reg-btn">Place Your Order</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GSTRegistrationPackages;
