import React, { useState } from "react";
import "./Whoweare.css";
import WhoweareVideo from "../../assets/whoweare.mp4";

const WhoWeAre = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const items = [
    "Understanding Your Legal & Compliance Needs",
    "Expert Consultation with Legal Professionals",
    "Strategic Legal Planning & Documentation",
    "Review, Revision & Regulatory Checks",
    "Execution with Full Compliance Assurance",
  ];

  const handleVideoEnd = () => {
    setPlayVideo(false);
  };

  return (
    <section className="wwe-root">
      <div className="wwe-inner">

        <p className="wwe-subtitle">
          A trusted legal & compliance partner for modern businesses.
        </p>

        <h2 className="wwe-title">Who We Are</h2>

        {/* HERO CARD */}
        <div
          className={`wwe-hero ${playVideo ? "video-active" : ""}`}
          role="region"
          aria-label="Legal Terminus process overview"
        >
          {!playVideo && (
            <div className="wwe-left-bg" aria-hidden="true"></div>
          )}

          <div className="wwe-card-inner">
            {!playVideo && (
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
            )}

            <div className="wwe-spacer" aria-hidden="true"></div>
          </div>

          {/* VIDEO */}
          {playVideo && (
            <div className="wwe-video-wrapper">
              <video
                className="wwe-video"
                src={WhoweareVideo}
                autoPlay
                controls
                onEnded={handleVideoEnd}
              />
            </div>
          )}

          {/* PLAY BUTTON */}
          {!playVideo && (
            <button
              className="wwe-play"
              aria-label="Play company overview video"
              onClick={() => setPlayVideo(true)}
            >
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5z" fill="#0B1A2B" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
