import React from "react";
import './Whoweare.css'

const WhoWeAre = () => {
  const items = [
    "We Do Our Research.",
    "We Meet Our Client.",
    "We Create Ideas.",
    "We Revise or Make Changes.",
    "We Execute the Work.",
  ];

  return (
    <section className="wwe-root">
      <div className="wwe-inner">

        <p className="wwe-subtitle">
          A business consulting company that constitutes faith.
        </p>

        <h2 className="wwe-title">Who we are</h2>

        {/* HERO CARD */}
        <div className="wwe-hero" role="region" aria-label="Watch our process">

          <div className="wwe-left-bg" aria-hidden="true"></div>

          <div className="wwe-card-inner">

            <div className="wwe-left">
              <h3 className="wwe-heading">Watch our process</h3>

              <ul className="wwe-list">
                {items.map((text, index) => (
                  <li key={index}>
                    <span className="wwe-check" aria-hidden="true">
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 5.25L4.75 9L13 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="wwe-item-text">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="wwe-spacer" aria-hidden="true"></div>
          </div>

          {/* CENTER PLAY BUTTON */}
          <button className="wwe-play" aria-label="Play video">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8 5v14l11-7L8 5z" fill="#0B1A2B" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
