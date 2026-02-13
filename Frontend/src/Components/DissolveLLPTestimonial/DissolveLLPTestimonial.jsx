import React, { useRef } from "react";
import "./DissolveLLPTestimonial.css";

const testimonials = [
  {
    name: "Kirti Ranjan Sahu",
    role: "Proprietor of Keshab Jewellers",
    text: "Very professional and efficient ITR filing services. Thank you.",
    rating: 5,
    initial: "K",
  },
  {
    name: "Gobinda Chandra Mishra",
    role: "Influencer",
    text: "Best ITR filing service provider.",
    rating: 5,
    initial: "G",
  },
  {
    name: "Babaji Samal",
    role: "MD, AppsSys Technosoft",
    text:
      "This year I went through the company Dissllp-societysmoration in Bhubaneswar by Legal Terminus. Their service is exceptional. I would highly recommend.",
    rating: 5,
    initial: "B",
  },
  {
    name: "Pritam Rath",
    role: "Director at Stabdha Utility Insights – Private Limited",
    text:
      "Working with Legal Terminus for our annual compliances has been a seamless experience. Highly recommend their services!",
    rating: 5,
    initial: "P",
  },
  {
    name: "Ananya Singh",
    role: "Startup Founder",
    text: "They explained every step clearly and completed the process on time.",
    rating: 5,
    initial: "A",
  },
];

const DissolveLLPTestimonial = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector(
      ".Dissllp-societysm-testimonial-card"
    );
    if (!card) return;

    const gap = 24;
    const cardWidth = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="Dissllp-societysm-testimonial-section">
      <div className="Dissllp-societysm-testimonial-container">
        <h2 className="Dissllp-societysm-testimonial-heading">
          See What Our Customers Say on Google
        </h2>

        <div className="Dissllp-societysm-testimonial-slider-wrapper">
          {/* Left arrow */}
          <button
            className="Dissllp-societysm-testimonial-arrow Dissllp-societysm-testimonial-arrow-left"
            aria-label="Previous testimonials"
            onClick={() => handleScroll("prev")}
          >
            ❮
          </button>

          {/* Slider */}
          <div
            className="Dissllp-societysm-testimonial-slider"
            ref={sliderRef}
          >
            {testimonials.map((t, idx) => (
              <article
                className="Dissllp-societysm-testimonial-card"
                key={idx}
              >
                <span className="Dissllp-societysm-testimonial-quote Dissllp-societysm-testimonial-quote-top">
                  “
                </span>

                <div className="Dissllp-societysm-testimonial-avatar-wrap">
                  <div className="Dissllp-societysm-testimonial-avatar">
                    {t.initial}
                  </div>
                </div>

                <p className="Dissllp-societysm-testimonial-text">
                  {t.text}
                </p>

                <h3 className="Dissllp-societysm-testimonial-name">
                  {t.name}
                </h3>
                <p className="Dissllp-societysm-testimonial-role">
                  {t.role}
                </p>

                <div className="Dissllp-societysm-testimonial-stars">
                  {Array.from({ length: t.rating }).map(
                    (_, i) => (
                      <span key={i}>★</span>
                    )
                  )}
                </div>

                <span className="Dissllp-societysm-testimonial-quote Dissllp-societysm-testimonial-quote-bottom">
                  ”
                </span>
              </article>
            ))}
          </div>

          {/* Right arrow */}
          <button
            className="Dissllp-societysm-testimonial-arrow Dissllp-societysm-testimonial-arrow-right"
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

export default DissolveLLPTestimonial;
