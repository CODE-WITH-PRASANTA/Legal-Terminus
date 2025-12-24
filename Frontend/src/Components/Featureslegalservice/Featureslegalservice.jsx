import React from "react";
import './Featureslegalservice.css'

const leftCards = [
  {
    id: 1,
    title: "Why Corpbiz?",
    text:
      "Corpbiz is a tech-enabled and AI-driven platform where professionals are dedicated to providing legal and financial services to clients.",
    variant: "soft",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 16.5L5.5 21L7.5 13.5L2 9H9L12 2Z" fill="white" />
      </svg>
    ),
    posClass: "fls-pos-1",
  },
  {
    id: 2,
    title: "India's Largest Legal Tech Company",
    text:
      "Corpbiz is a professional service provider that provides business registration, taxation and licensing services. We have a large network of experienced professionals working with us.",
    variant: "soft",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="white" />
      </svg>
    ),
    posClass: "fls-pos-2",
  },
  {
    id: 3,
    title: "99.9% Client Satisfaction",
    text: "In order to ensure client satisfaction, we continuously strive to improve the quality of our services.",
    variant: "soft",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="white" />
      </svg>
    ),
    posClass: "fls-pos-3",
  },
  {
    id: 4,
    title: "Excellent Advisory Services",
    text:
      "With the largest professional network, we are dedicated to offering the best advisory services so that you don't face any complications in your business.",
    variant: "soft",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
        <path d="M12 1L21 22H3L12 1ZM12 4.5L7.5 18H16.5L12 4.5ZM11 10V14H13V10H11ZM11 16V18H13V16H11Z" fill="white" />
      </svg>
    ),
    posClass: "fls-pos-4",
  },
];

const rightBullets = [
  {
    title: "Quick Response:",
    text: "We make sure to answer every query on time. Moreover, none of our emails or calls go unanswered.",
  },
  {
    title: "Advanced Technology:",
    text:
      "Our high-tech platform with customer empowerment tools enables customers to get the best. You can connect with our experts with just a single click.",
  },
  {
    title: "Hassle-free Registration:",
    text:
      "Corpbiz has made the registration process easy. You can leave the hassle of registration to us and focus on other important works.",
  },
  {
    title: "Expert Guidance:",
    text:
      "Our experienced team of professionals provides insightful advice on business execution related to compliance, rules, taxation.",
  },
];

const FeaturesLegalService = () => {
  return (
    <section className="fls-root" aria-labelledby="fls-heading">
      <div className="fls-inner">
        <div className="fls-grid">
          {/* LEFT: Cards */}
          <aside className="fls-left" aria-label="Highlights">
            <div className="fls-cards">
              {leftCards.map((c) => (
                <article
                  key={c.id}
                  className={`fls-card ${c.variant === "accent" ? "fls-card--accent" : "fls-card--soft"} ${c.posClass}`}
                  data-hover-id={c.id}
                >
                  <div className="fls-card__icon" aria-hidden="true">
                    <div className="fls-card__icon-inner">{c.icon}</div>
                  </div>

                  <h4 className="fls-card__title">{c.title}</h4>
                  <p className="fls-card__desc">{c.text}</p>
                </article>
              ))}
            </div>
          </aside>

          {/* RIGHT: Title + bullets */}
          <div className="fls-right">
            <h2 id="fls-heading" className="fls-title">
              Features of Our <span className="fls-title--highlight">Legal Service</span>
            </h2>

            <p className="fls-intro">
              Corpbiz is a tech-driven platform committed to delivering professional services all over India. We deliver exceptional
              services to our clients, and our dedication and commitment can be seen in the following ways:
            </p>

            <ul className="fls-list" role="list">
              {rightBullets.map((b, idx) => (
                <li className="fls-list__item" key={idx}>
                  <span className="fls-check" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M7 12.5L10 15.5L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div className="fls-list__text">
                    <strong>{b.title}</strong> {b.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesLegalService;
