import React from "react";
import "./OPCPlans.css";

const plans = [
  {
    id: "starter",
    title: "Starter",
    desc: "Perfect for submitting your company application with expert assistance in 14 days.",
    origPrice: "₹1,499",
    discountBadge: "₹500 off",
    price: "₹999",
    note: "+ Govt. Fee",
    features: [
      "Expert assisted process",
      "Your company name is filed in just 2 – 4 days",
      "DSC in just 4 – 7 days",
      "SPICe+ form filing in 14 days*",
      "Incorporation Certificate in 28 – 35 days",
      "Company PAN+TAN",
      "DIN for directors",
    ],
  },

  {
    id: "standard",
    title: "Standard",
    desc: "Faster application submission with expert assistance in just 7 days.",
    origPrice: "₹2,999",
    discountBadge: "50% off",
    price: "₹1,499",
    note: "+ Govt. Fee",
    badge: true, // shows ribbon
    features: [
      "Expert assisted process",
      "Your company name is filed in just 1 – 2 days*",
      "DSC in just 3 – 4 days",
      "SPICe+ form filing in 7 days*",
      "Incorporation Certificate in 14 – 21 days",
      "Company PAN+TAN",
      "DIN for directors",
      "Digital welcome kit with checklist",
    ],
  },

  {
    id: "pro",
    title: "Pro",
    desc: "Includes fast application submission and trademark filing in 7 days.",
    origPrice: "₹4,999",
    discountBadge: "30% off",
    price: "₹3,499",
    note: "+ Govt. Fee",
    features: [
      "Expert assisted process",
      "Your company name is filed in just 1 – 2 days*",
      "DSC in just 3 – 4 days",
      "SPICe+ form filing in 7 days*",
      "Incorporation Certificate in 14 – 21 days",
      "Company PAN+TAN",
      "DIN for directors",
      "MSME registration (Free)",
      "Expedited Trademark application filing",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="pp-section">
      <div className="pp-inner">
        <h2 className="pp-title">Right Plan for Your Business</h2>
        <p className="pp-sub">Our experts register 1500+ companies every month.</p>

        <div className="pp-grid">
          {plans.map((plan) => (
            <div key={plan.id} className="pp-card-wrapper">
              {plan.badge && (
                <div className="pp-ribbon">
                  <span className="pp-ribbon-text">Most Popular</span>
                  <span className="pp-ribbon-tag">FLAT <strong>50% OFF</strong></span>
                </div>
              )}

              <div className="pp-card">
                {/* Card Content */}
                <h3 className="pp-card-title">{plan.title}</h3>
                <p className="pp-card-desc">{plan.desc}</p>

                <div className="pp-price-box">
                  <div className="pp-old-price">{plan.origPrice}</div>
                  <span className="pp-discount">{plan.discountBadge}</span>
                </div>

                <div className="pp-new-price">
                  {plan.price} <span className="pp-note">{plan.note}</span>
                </div>

                <button className="pp-btn">Get Started</button>

                <h4 className="pp-feat-title">What you'll get</h4>
                <ul className="pp-features">
                  {plan.features.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
