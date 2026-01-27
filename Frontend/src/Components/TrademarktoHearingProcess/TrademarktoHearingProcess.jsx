import React, { useRef } from "react";
import "./TrademarktoHearingProcess.css";

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

    const card = container.querySelector(".thproc-card");
    if (!card) return;

    const gap = 24;
    const cardWidth = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="thproc-section">
      <div className="thproc-container">
        <h2 className="thproc-heading">
          See What Our Customers Say on Google
        </h2>

        <div className="thproc-slider-wrapper">
          <button
            className="thproc-side-arrow thproc-left"
            aria-label="Previous testimonials"
            onClick={() => handleScroll("prev")}
          >
            ❮
          </button>

          <div className="thproc-slider" ref={sliderRef}>
            {testimonials.map((t, idx) => (
              <article className="thproc-card" key={idx}>
                <span className="thproc-quote thproc-quote-top">“</span>

                <div className="thproc-avatar-wrap">
                  <div className="thproc-avatar">
                    <span>{t.initial}</span>
                  </div>
                </div>

                <p className="thproc-text">{t.text}</p>

                <h3 className="thproc-name">{t.name}</h3>
                <p className="thproc-role">{t.role}</p>

                <div className="thproc-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <span className="thproc-quote thproc-quote-bottom">”</span>
              </article>
            ))}
          </div>

          <button
            className="thproc-side-arrow thproc-right"
            aria-label="Next testimonials"
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
