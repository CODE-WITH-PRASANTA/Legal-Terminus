import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import heroImg from "../../assets/faq.webp";
import "./BlogDetailsFaq.css";

const faqItems = [
  {
    question: "How can I apply for a job?",
    answer:
      "You can apply by visiting our careers page, selecting the position you want, and submitting your resume along with a short cover letter.",
  },
  {
    question: "Which specialties are requested today?",
    answer:
      "We are currently seeking legal professionals in corporate law, financial regulation, intellectual property, and international trade compliance.",
  },
  {
    question: "Do you produce products worldwide?",
    answer:
      "Yes. We provide worldwide consultation services with offices and partner teams in more than 25 countries.",
  },
];

const BlogDetailsFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="blog-faq regardingly">
      <div className="faq-inner">
        {/* LEFT SIDE */}
        <div className="faq-left">
          <div className="faq-kicker">FAQ</div>
          <h2 className="faq-heading">
            We resolve <br /> Legal Solutions
          </h2>

          <div className="faq-list" role="list">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="faq-row"
                role="listitem"
                tabIndex={0}
                onClick={() => toggleFAQ(i)} // click whole row
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFAQ(i);
                  }
                }}
              >
                <button
                  type="button"
                  className="faq-toggle"
                  aria-expanded={openIndex === i}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFAQ(i);
                  }}
                >
                  <span className="plus-wrap">
                    {openIndex === i ? <FiMinus size={18} /> : <FiPlus size={18} />}
                  </span>
                </button>

                <div className="faq-content-wrap">
                  <div className="faq-question">{item.question}</div>

                  <div
                    className={`faq-answer ${
                      openIndex === i ? "open-answer" : ""
                    }`}
                  >
                    {item.answer}
                  </div>
                </div>

                <div className="faq-divider" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (IMAGE + CARDS) */}
        <div className="faq-right">
          <div
            className="faq-hero"
            style={{ backgroundImage: `url(${heroImg})` }}
          >
            <div className="stat-wrap">
              <div className="stat-card stat-dark">
                <div className="stat-label">Happy Clients</div>
                <div className="stat-value">124+</div>
                <div className="stat-small">Adipiscing elit, do eiusm.</div>
              </div>

              <div className="stat-card stat-accent">
                <div className="stat-label">Attorneys</div>
                <div className="stat-value">16+</div>
                <div className="stat-small">Sed do eiusmod tempor.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsFaq;
