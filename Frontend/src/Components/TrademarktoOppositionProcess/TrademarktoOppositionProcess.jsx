import React, { useRef } from "react";
import "./TrademarktoOppositionProcess.css";

const testimonials = [
  {
    name: "Kirti Ranjan Sahu",
    role: "Proprietor of Keshab Jewellers",
    text: "Very professional and efficient Trade License services. Thank you.",
    rating: 5,
    initial: "K",
  },
  {
    name: "Gobinda Chandra Mishra",
    role: "Influencer",
    text: "Best Trade License service provider.",
    rating: 5,
    initial: "G",
  },
  {
    name: "Babaji Samal",
    role: "MD, AppsSys Technosoft",
    text: "I went through the Trade License registration in Bhubaneswar with Legal Terminus. Their service is exceptional. Highly recommended!",
    rating: 5,
    initial: "B",
  },
  {
    name: "Pritam Rath",
    role: "Director at Stabdha Utility Insights – Private Limited",
    text: "Working with Legal Terminus for Trade License compliance was seamless. Highly recommend their services!",
    rating: 5,
    initial: "P",
  },
  {
    name: "Ananya Singh",
    role: "Startup Founder",
    text: "They explained every step clearly and completed my Trade License on time.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Rahul Verma",
    role: "Consultant",
    text: "Smooth Trade License process and very responsive support.",
    rating: 4,
    initial: "R",
  },
  {
    name: "Sneha Patil",
    role: "Entrepreneur",
    text: "Got timely reminders for all renewal dates. Stress-free now!",
    rating: 5,
    initial: "S",
  },
  {
    name: "Mohit Sharma",
    role: "Director, FinSync Solutions",
    text: "Their advisory has helped us structure our business better.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Arjun Nair",
    role: "Proprietor",
    text: "Very polite staff and accurate guidance throughout the process.",
    rating: 4,
    initial: "A",
  },
  {
    name: "Ritu Jain",
    role: "Business Owner",
    text: "Paperwork was minimal and everything happened online. Very convenient.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Deepak Kulkarni",
    role: "Co-Founder, TechHive",
    text: "They took care of all municipal filings and kept me updated.",
    rating: 5,
    initial: "D",
  },
  {
    name: "Neha Agarwal",
    role: "Consultant",
    text: "Prompt responses, transparent pricing, and professional service.",
    rating: 5,
    initial: "N",
  },
];

const TradeLicenseProcess = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector(".tlp-card");
    if (!card) return;

    const gap = 24;
    const cardWidth = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="tlp-section">
      <div className="tlp-container">
        <h2 className="tlp-heading">
          See What Our Customers Say on Google
        </h2>

        <div className="tlp-slider-wrapper">
          <button
            className="tlp-side-arrow tlp-left"
            onClick={() => handleScroll("prev")}
          >
            ❮
          </button>

          <div className="tlp-slider" ref={sliderRef}>
            {testimonials.map((t, idx) => (
              <article className="tlp-card" key={idx}>
                <span className="tlp-quote tlp-quote-top">“</span>

                <div className="tlp-avatar-wrap">
                  <div className="tlp-avatar">
                    <span>{t.initial}</span>
                  </div>
                </div>

                <p className="tlp-text">{t.text}</p>

                <h3 className="tlp-name">{t.name}</h3>
                <p className="tlp-role">{t.role}</p>

                <div className="tlp-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <span className="tlp-quote tlp-quote-bottom">”</span>
              </article>
            ))}
          </div>

          <button
            className="tlp-side-arrow tlp-right"
            onClick={() => handleScroll("next")}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default TradeLicenseProcess;
