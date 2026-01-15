import React, { useRef } from "react";
import "./FoodLicenseProcess.css";

const testimonials = [
  {
    name: "Rohit Mehta",
    role: "Restaurant Owner",
    text: "Legal Terminus made my FSSAI registration process smooth and quick. Everything was handled online, and I received my Food License certificate within days.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Priya Desai",
    role: "Founder, HealthyBite Foods",
    text: "They guided me perfectly through the entire FSSAI registration steps. Truly professional and transparent service!",
    rating: 5,
    initial: "P",
  },
  {
    name: "Ankit Sharma",
    role: "Director, SpiceHub Foods",
    text: "Great experience with Legal Terminus for both FSSAI and GST registrations. Fast response and no hassles at all.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Simran Kaur",
    role: "Home Baker",
    text: "Excellent customer support and clear guidance throughout my food license application. Highly recommend them to small business owners.",
    rating: 5,
    initial: "S",
  },
  {
    name: "Vikram Singh",
    role: "Owner, Agro Foods",
    text: "Their process was seamless and reliable. Got my FSSAI certificate within a few working days. Thank you Legal Terminus!",
    rating: 5,
    initial: "V",
  },
  {
    name: "Nisha Patel",
    role: "Consultant",
    text: "Fast and efficient service for Food License registration. The team was polite and resolved all my queries promptly.",
    rating: 5,
    initial: "N",
  },
  {
    name: "Arun Gupta",
    role: "Founder, GreenLeaf Kitchens",
    text: "They handled the complete FSSAI application on my behalf. No paperwork or delays — extremely smooth experience.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Kavita Reddy",
    role: "Café Owner",
    text: "Quick, budget-friendly, and reliable service for food business compliance. I’ll definitely recommend them to others.",
    rating: 4,
    initial: "K",
  },
  {
    name: "Rahul Verma",
    role: "Food Entrepreneur",
    text: "Very professional and polite team. My food license was approved without any follow-ups or errors.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Deepa Joshi",
    role: "Startup Founder",
    text: "They took care of all FSSAI documentation and submission efficiently. Really happy with the support provided.",
    rating: 5,
    initial: "D",
  },
];

const FoodLicenseProcess = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector(".foodproc-card");
    if (!card) return;

    const gap = 24;
    const cardWidth = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="foodproc-section">
      <div className="foodproc-container">
        <h2 className="foodproc-heading">
          See What Our Customers Say on Google
        </h2>

        <div className="foodproc-slider-wrapper">
          {/* Left arrow */}
          <button
            className="foodproc-side-arrow foodproc-left"
            aria-label="Previous testimonials"
            onClick={() => handleScroll("prev")}
          >
            ❮
          </button>

          {/* Cards slider */}
          <div className="foodproc-slider" ref={sliderRef}>
            {testimonials.map((t, idx) => (
              <article className="foodproc-card" key={idx}>
                <span className="foodproc-quote foodproc-quote-top">“</span>

                <div className="foodproc-avatar-wrap">
                  <div className="foodproc-avatar">
                    <span>{t.initial}</span>
                  </div>
                </div>

                <p className="foodproc-text">{t.text}</p>

                <h3 className="foodproc-name">{t.name}</h3>
                <p className="foodproc-role">{t.role}</p>

                <div className="foodproc-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <span className="foodproc-quote foodproc-quote-bottom">”</span>
              </article>
            ))}
          </div>

          {/* Right arrow */}
          <button
            className="foodproc-side-arrow foodproc-right"
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

export default FoodLicenseProcess;
