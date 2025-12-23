import React from "react";
import "./LLPPlans.css";

const plans = [
  {
    id: "standard",
    title: "Standard",
    subtitle: "Standard application filing: Regular processing time",
    oldPrice: "₹1,999",
    price: "₹1,499",
    note: "+ Govt. Fee",
    badge: "25% discount",
    features: [
      "Expert assisted process",
      "Your company name is reserved in just 2 - 4 days",
      "DSC in 4 - 7 days",
      "LLP Incorporation form filing done in 21 days*",
      "LLP Incorporation Certificate",
      "LLP agreement form filing done in 14 days (Post Incorporation)",
      "Company PAN+TAN",
      "DIN for directors",
    ],
    cta: "Get Started",
  },
  {
    id: "fastrack",
    title: "Fastrack",
    subtitle: "Expedited application filing: Faster processing for quicker results",
    oldPrice: "₹3,599",
    price: "₹2,499",
    note: "+ Govt. Fee",
    badge: "35% discount",
    features: [
      "Expert assisted process",
      "Your company name is reserved in just 24 hours*",
      "DSC in just 24 hours*",
      "LLP Incorporation form filing done in 14 days*",
      "LLP Incorporation Certificate",
      "Digital welcome kit that includes a checklist of all post-incorporation compliances",
      "Company PAN+TAN",
      "DIN for directors",
    ],
    cta: "Get Started",
  },
  {
    id: "premium",
    title: "Premium",
    subtitle: "Complete solution(LLP incorporation + Annual compliance)",
    oldPrice: "₹21,999",
    price: "₹10,999",
    note: "+ Govt. Fee",
    badge: "50% discount",
    features: [
      "Expert assisted process",
      "Your company name is reserved in just 24 hours*",
      "DSC in just 24 hours*",
      "LLP Incorporation form filing done in 14 days*",
      "LLP Incorporation Certificate",
      "LLP agreement form filing done in 14 days (Post Incorporation)",
      "Company PAN+TAN",
      "DIN for directors",
      "30-minute call with a senior CA/CS for your planning",
      "Form 8 & 11 filing (One year)",
      "DIR 3 KYC (For 2 directors)",
      "One Year Income Tax filing (Upto turnover of 20 lakhs)",
      "Accounting & Bookkeeping (Upto 100 transactions)",
      "Accounting software (1-year license)",
    ],
    cta: "Get Started",
    popular: true,
    ribbonText: "Most Popular",
  },
];

export default function PricingCards() {
  return (
    <section className="pricing-section">
      <div className="pricing-inner">
        <h2 className="pricing-title">Right Plan For Your Business</h2>
        <p className="pricing-subtitle">
          Vakilsearch's incorporation experts register over 1500 companies every
          month.
        </p>

        <div className="cards-row">
          {plans.map((p) => (
            <article
              key={p.id}
              className={`pricing-card ${p.id} ${p.popular ? "popular" : ""}`}
              aria-labelledby={`${p.id}-title`}
            >
              {p.popular && (
                <>
                  <div className="ribbon">
                    <span>{p.ribbonText}</span>
                  </div>
                </>
              )}

              <header className="card-head">
                <h3 id={`${p.id}-title`} className="card-title">
                  {p.title}
                </h3>
                <p className="card-sub">{p.subtitle}</p>
              </header>

              <div className="price-block">
                <div className="price-top">
                  <div className="old-price">
                    <s>{p.oldPrice}</s>
                    <span className="badge">{p.badge}</span>
                  </div>
                </div>

                <div className="price-main">
                  <div className="amount">{p.price}</div>
                  <div className="gov-note">{p.note}</div>
                </div>
              </div>

              <div className="cta-wrap">
                <button className="cta-btn">{p.cta}</button>
              </div>

              <div className="divider" />

              <div className="what-you-get">
                <h4>What you'll get</h4>
                <ul>
                  {p.features.map((f, i) => (
                    <li key={i}>
                      <span className="check">✓</span>
                      <span className="feature-text">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Note: Government fees for incorporation are extra and it varies from
          state to state. <a href="#">T&C</a>
        </p>
      </div>
    </section>
  );
}
