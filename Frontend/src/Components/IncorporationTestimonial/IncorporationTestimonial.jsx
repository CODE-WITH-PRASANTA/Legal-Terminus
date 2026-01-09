import React, { useRef } from "react";
import "./IncorporationTestimonial.css";

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
      "This year I went through the company incorporation in Bhubaneswar by Legal Terminus. Their service is exceptional. I would highly recommend.",
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

const IncorporationTestimonial = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector(
      ".incorp-testimonial-card"
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
    <section className="incorp-testimonial-section">
      <div className="incorp-testimonial-container">
        <h2 className="incorp-testimonial-heading">
          See What Our Customers Say on Google
        </h2>

        <div className="incorp-testimonial-slider-wrapper">
          {/* Left arrow */}
          <button
            className="incorp-testimonial-arrow incorp-testimonial-arrow-left"
            aria-label="Previous testimonials"
            onClick={() => handleScroll("prev")}
          >
            ❮
          </button>

          {/* Slider */}
          <div
            className="incorp-testimonial-slider"
            ref={sliderRef}
          >
            {testimonials.map((t, idx) => (
              <article
                className="incorp-testimonial-card"
                key={idx}
              >
                <span className="incorp-testimonial-quote incorp-testimonial-quote-top">
                  “
                </span>

                <div className="incorp-testimonial-avatar-wrap">
                  <div className="incorp-testimonial-avatar">
                    {t.initial}
                  </div>
                </div>

                <p className="incorp-testimonial-text">
                  {t.text}
                </p>

                <h3 className="incorp-testimonial-name">
                  {t.name}
                </h3>
                <p className="incorp-testimonial-role">
                  {t.role}
                </p>

                <div className="incorp-testimonial-stars">
                  {Array.from({ length: t.rating }).map(
                    (_, i) => (
                      <span key={i}>★</span>
                    )
                  )}
                </div>

                <span className="incorp-testimonial-quote incorp-testimonial-quote-bottom">
                  ”
                </span>
              </article>
            ))}
          </div>

          {/* Right arrow */}
          <button
            className="incorp-testimonial-arrow incorp-testimonial-arrow-right"
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

export default IncorporationTestimonial;
