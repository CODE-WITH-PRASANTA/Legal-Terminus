import React from "react";
import "./Whoweare.css";
import Whowearevideo from "../../assets/whowearevideo.mp4";

const WhoWeAre = () => {
  const items = [
    "Understanding Your Legal & Compliance Needs",
    "Expert Consultation with Legal Professionals",
    "Strategic Legal Planning & Documentation",
    "Review, Revision & Regulatory Checks",
    "Execution with Full Compliance Assurance",
  ];

  return (
    <section className="wwe-root">
      <div className="wwe-inner">

        <p className="wwe-subtitle">
          A trusted legal & compliance partner for modern businesses.
        </p>

        <h2 className="wwe-title">Who We Are</h2>

        {/* HERO CARD */}
        <div className="wwe-hero" role="region" aria-label="Legal Terminus process overview">

          <div className="wwe-left-bg" aria-hidden="true"></div>

          <div className="wwe-card-inner">

            <div className="wwe-left">
              <h3 className="wwe-heading">Our Legal Process</h3>

              <ul className="wwe-list">
                {items.map((text, index) => (
                  <li key={index}>
                    <span className="wwe-check" aria-hidden="true">
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
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

          {/* PLAY BUTTON */}
          <button className="wwe-play" aria-label="Learn more about Legal Terminus">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7L8 5z" fill="#0B1A2B" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
