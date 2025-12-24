// WhatWeOffer.jsx
import React from "react";

/* Bold solid legal icons */
import { FaBuilding, FaPeopleGroup, FaGavel, FaFileShield } from "react-icons/fa6";

/* keep arrow icon */
import { FiArrowRight } from "react-icons/fi";

import "./WhatWeOffer.css";

const services = [
  {
    id: 1,
    title: "Business Law Service",
    icon: <FaBuilding />,
    alt: "Business Law",
  },
  {
    id: 2,
    title: "Family Law Service",
    icon: <FaPeopleGroup />,
    alt: "Family Law",
  },
  {
    id: 3,
    title: "Criminal Defense Service",
    icon: <FaGavel />,
    alt: "Criminal Defense",
  },
  {
    id: 4,
    title: "Personal Injury Service",
    icon: <FaFileShield />,
    alt: "Personal Injury",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="what-we-offer" aria-labelledby="what-we-offer-title">
      <div className="ww-container">
        <header className="ww-header">
          <div>
            <p className="ww-eyebrow">WHAT WE OFFER</p>
            <h2 id="what-we-offer-title" className="ww-title">
              Legal Services for
              <br />
              all matters
            </h2>
          </div>

          <div className="ww-intro" aria-label="Intro paragraphs">
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.
            </p>
            <p>
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </header>

        <div className="ww-grid" role="list">
          {services.map((s) => (
            <article
              className="ww-card"
              role="listitem"
              key={s.id}
              tabIndex={0}
              aria-label={s.title}
            >
              <div className="ww-card-inner">
                <div className="ww-icon-wrap" aria-hidden>
                  <span className="ww-icon">{s.icon}</span>
                </div>

                <h3 className="ww-card-title">{s.title}</h3>

                <div className="ww-card-footer">
                  <span className="ww-learn">Learn more</span>
                  <span className="ww-arrow" aria-hidden>
                    <FiArrowRight />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
