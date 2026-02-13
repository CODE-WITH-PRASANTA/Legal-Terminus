import React, { useRef } from "react";
import "./DissolvePrivateTestimonial.css";

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
      "This year I went through the company trustestoration in Bhubaneswar by Legal Terminus. Their service is exceptional. I would highly recommend.",
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

const DissolvePrivateTestimonial = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector(
      ".Dissolve-testimonial-card"
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
    <section className="Dissolve-testimonial-section">
      <div className="Dissolve-testimonial-container">
        <h2 className="Dissolve-testimonial-heading">
          See What Our Customers Say on Google
        </h2>

        <div className="Dissolve-testimonial-slider-wrapper">
          {/* Left arrow */}
          <button
            className="Dissolve-testimonial-arrow Dissolve-testimonial-arrow-left"
            aria-label="Previous testimonials"
            onClick={() => handleScroll("prev")}
          >
            ❮
          </button>

          {/* Slider */}
          <div
            className="Dissolve-testimonial-slider"
            ref={sliderRef}
          >
            {testimonials.map((t, idx) => (
              <article
                className="Dissolve-testimonial-card"
                key={idx}
              >
                <span className="Dissolve-testimonial-quote Dissolve-testimonial-quote-top">
                  “
                </span>

                <div className="Dissolve-testimonial-avatar-wrap">
                  <div className="Dissolve-testimonial-avatar">
                    {t.initial}
                  </div>
                </div>

                <p className="Dissolve-testimonial-text">
                  {t.text}
                </p>

                <h3 className="Dissolve-testimonial-name">
                  {t.name}
                </h3>
                <p className="Dissolve-testimonial-role">
                  {t.role}
                </p>

                <div className="Dissolve-testimonial-stars">
                  {Array.from({ length: t.rating }).map(
                    (_, i) => (
                      <span key={i}>★</span>
                    )
                  )}
                </div>

                <span className="Dissolve-testimonial-quote Dissolve-testimonial-quote-bottom">
                  ”
                </span>
              </article>
            ))}
          </div>

          {/* Right arrow */}
          <button
            className="Dissolve-testimonial-arrow Dissolve-testimonial-arrow-right"
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

export default DissolvePrivateTestimonial;
