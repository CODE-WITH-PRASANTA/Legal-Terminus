import React, { useRef } from "react";
import "./ChangetoLlpTestimonial.css";

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
    text:
      "They explained every step clearly and completed the process on time.",
    rating: 5,
    initial: "A",
  },
  {
    name: "Rahul Verma",
    role: "Consultant",
    text: "Smooth GST registration and very responsive support.",
    rating: 4,
    initial: "R",
  },
  {
    name: "Sneha Patil",
    role: "Entrepreneur",
    text:
      "Got timely reminders for all compliance due dates. Stress-free now.",
    rating: 5,
    initial: "S",
  },
  {
    name: "Mohit Sharma",
    role: "Director, FinSync Solutions",
    text:
      "Their advisory has helped us structure our business better.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Arjun Nair",
    role: "Proprietor",
    text:
      "Very polite staff and accurate guidance for tax planning.",
    rating: 4,
    initial: "A",
  },
  {
    name: "Ritu Jain",
    role: "Business Owner",
    text:
      "Paperwork was minimal and everything happened online. Very convenient.",
    rating: 5,
    initial: "R",
  },
  {
    name: "Deepak Kulkarni",
    role: "Co-Founder, TechHive",
    text:
      "They took care of all MCA filings and kept us updated at every step.",
    rating: 5,
    initial: "D",
  },
  {
    name: "Neha Agarwal",
    role: "Consultant",
    text:
      "Prompt responses, transparent pricing and professional work.",
    rating: 5,
    initial: "N",
  },
];

const GoogleTestimonials = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector(".llptest-card");
    if (!card) return;

    const gap = 24;
    const cardWidth = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="llptest-section">
      <div className="llptest-container">
        <h2 className="llptest-heading">
          See What Our Customers Say on Google
        </h2>

        <div className="llptest-slider-wrapper">
          <button
            className="llptest-side-arrow llptest-left"
            aria-label="Previous testimonials"
            onClick={() => handleScroll("prev")}
          >
            ❮
          </button>

          <div className="llptest-slider" ref={sliderRef}>
            {testimonials.map((t, idx) => (
              <article className="llptest-card" key={idx}>
                <span className="llptest-quote llptest-quote-top">“</span>

                <div className="llptest-avatar-wrap">
                  <div className="llptest-avatar">
                    <span>{t.initial}</span>
                  </div>
                </div>

                <p className="llptest-text">{t.text}</p>

                <h3 className="llptest-name">{t.name}</h3>
                <p className="llptest-role">{t.role}</p>

                <div className="llptest-stars">
                  {Array.from({ lenllph: t.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <span className="llptest-quote llptest-quote-bottom">”</span>
              </article>
            ))}
          </div>

          <button
            className="llptest-side-arrow llptest-right"
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

export default GoogleTestimonials;
