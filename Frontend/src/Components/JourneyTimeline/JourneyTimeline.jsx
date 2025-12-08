import React from "react";
import "./JourneyTimeline.css";

const timelineData = [
  {
    year: "2019",
    color: "#0B7CFB",
    text:
      "The journey of Corpbiz begins! We began with a small start-up with the motto to become the top Advisory platform Pan-India."
  },
  {
    year: "2020",
    color: "#F4A63A",
    text:
      "The journey of Corpbiz continues! We expanded our presence and refined our advisory offerings to better serve clients across India."
  },
  {
    year: "2021",
    color: "#E95858",
    text:
      "We expanded our advisory services to highly demanded services in the market, such as providing consultancy services for BIS, CDSCO."
  },
  {
    year: "2022",
    color: "#7F8B95",
    text:
      "As our business grew, it was only logical to establish new branches. We opened new office branches in Mumbai, Chennai and Bangalore."
  },
  {
    year: "2023",
    color: "#19A24B",
    text:
      "Our goal for 2023 is to build our customer base with the target to open 100+ branches in various locations PAN-India."
  }
];

const JourneyTimeline = () => {
  return (
    <section className="Journey-root" aria-labelledby="journey-heading">
      <div className="Journey-container">
        <h2 id="journey-heading" className="Journey-heading">
          Our Journey
        </h2>

        <div className="Journey-grid" role="list">
          {timelineData.map((item) => (
            <article
              className="Journey-card"
              key={item.year}
              role="listitem"
              aria-label={`Year ${item.year}`}
            >
              <div className="Journey-badgeWrapper" aria-hidden="true">
                {/* SVG chevron badge - color set via fill */}
                <svg
                  className="Journey-badge"
                  width="116"
                  height="44"
                  viewBox="0 0 116 44"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id={`g-${item.year}`} x1="0" x2="1">
                      <stop offset="0%" stopColor={item.color} stopOpacity="1" />
                      <stop offset="100%" stopColor={item.color} stopOpacity="0.95" />
                    </linearGradient>
                  </defs>

                  {/* rounded rectangle with chevron triangle on right */}
                  <path
                    d="M6 4 h84 l18 18 -18 18 h-84 a6 6 0 0 1 -6 -6 v-24 a6 6 0 0 1 6 -6 z"
                    fill={`url(#g-${item.year})`}
                  />
                  <text
                    x="30"
                    y="28"
                    fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial"
                    fontWeight="800"
                    fontSize="18"
                    fill="#ffffff"
                  >
                    {item.year}
                  </text>
                </svg>
              </div>

              <div className="Journey-content">
                <p className="Journey-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
