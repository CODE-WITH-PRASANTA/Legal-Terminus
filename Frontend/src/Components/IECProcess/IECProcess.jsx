import React, { useRef } from "react";
import "./IECProcess.css";

const testimonials = [
  {
    name: "Rohit Mehta",
    role: "Importer, Global Trade Exports",
    text: "Legal Terminus made my IEC registration smooth and fast. Everything was handled online, and I received my IEC code within days.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Priya Desai",
    role: "Founder, CraftNest Exports",
    text: "They guided me perfectly through the entire import-export registration process. Truly professional service.",
    rating: 5,
    initial: "P",
  },
  {
    name: "Ankit Sharma",
    role: "Director, A2 International",
    text: "Great experience with Legal Terminus for IEC and GST registrations. Quick response and no hassles at all.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Simran Kaur",
    role: "Entrepreneur",
    text: "Excellent customer service and step-by-step guidance for IEC filing. Highly recommend them for startups.",
    rating: 5,
    initial: "S",
  },
  {
    name: "Vikram Singh",
    role: "Exporter, Agro Solutions",
    text: "Their process is seamless and transparent. Got my IEC within a few working days. Thank you Legal Terminus!",
    rating: 5,
    initial: "V",
  },
  {
    name: "Nisha Patel",
    role: "Consultant",
    text: "Fast and efficient service for IEC registration. The team was supportive and answered all my queries patiently.",
    rating: 5,
    initial: "N",
  },
  {
    name: "Arun Gupta",
    role: "Founder, Infinity Imports",
    text: "They handled the complete DGFT process on my behalf. No paperwork or follow-ups needed from my side.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Kavita Reddy",
    role: "Business Owner",
    text: "Quick, reliable, and budget-friendly IEC registration support. I will definitely use their services again.",
    rating: 4,
    initial: "K",
  },
  {
    name: "Rahul Verma",
    role: "Freelance Exporter",
    text: "Very polite team and clear communication throughout. My IEC was processed without any delay.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Deepa Joshi",
    role: "Startup Owner",
    text: "They took care of documentation and DGFT submission perfectly. Loved the professionalism.",
    rating: 5,
    initial: "D",
  },
];

const IECProcess = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector(".iecproc-card");
    if (!card) return;

    const gap = 24;
    const cardWidth = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="iecproc-section">
      <div className="iecproc-container">
        <h2 className="iecproc-heading">
          See What Our Customers Say on Google
        </h2>

        <div className="iecproc-slider-wrapper">
          {/* Left arrow */}
          <button
            className="iecproc-side-arrow iecproc-left"
            aria-label="Previous testimonials"
            onClick={() => handleScroll("prev")}
          >
            ❮
          </button>

          {/* Cards slider */}
          <div className="iecproc-slider" ref={sliderRef}>
            {testimonials.map((t, idx) => (
              <article className="iecproc-card" key={idx}>
                <span className="iecproc-quote iecproc-quote-top">“</span>

                <div className="iecproc-avatar-wrap">
                  <div className="iecproc-avatar">
                    <span>{t.initial}</span>
                  </div>
                </div>

                <p className="iecproc-text">{t.text}</p>

                <h3 className="iecproc-name">{t.name}</h3>
                <p className="iecproc-role">{t.role}</p>

                <div className="iecproc-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <span className="iecproc-quote iecproc-quote-bottom">”</span>
              </article>
            ))}
          </div>

          {/* Right arrow */}
          <button
            className="iecproc-side-arrow iecproc-right"
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

export default IECProcess;
