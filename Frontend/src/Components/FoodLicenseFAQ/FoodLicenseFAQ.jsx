import React, { useState } from "react";
import "./FoodLicenseFAQ.css";

const faqs = [
  {
    question: "What is a Food License (FSSAI)?",
    answer:
      "A Food License, issued by the Food Safety and Standards Authority of India (FSSAI), is a mandatory certification for all food-related businesses in India. It ensures that food products meet safety and hygiene standards.",
  },
  {
    question: "Who needs to apply for a Food License?",
    answer:
      "Every food business operator (FBO) involved in manufacturing, processing, packaging, storing, distributing, or selling food products must obtain an FSSAI license or registration.",
  },
  {
    question: "Are there different types of FSSAI licenses?",
    answer:
      "Yes, there are three categories of FSSAI licenses — Basic Registration for small businesses, State License for medium enterprises, and Central License for large-scale or multi-state operations.",
  },
  {
    question: "Is the Food License valid for a lifetime?",
    answer:
      "No. The FSSAI license is valid for 1 to 5 years depending on the selected tenure during registration. It must be renewed before its expiry to continue operations legally.",
  },
  {
    question: "What are the documents required for FSSAI registration?",
    answer:
      "You’ll need a PAN card, proof of business premises, passport-size photo, food category details, and business incorporation certificate (if applicable).",
  },
  {
    question: "Can FSSAI details be updated after registration?",
    answer:
      "Yes, if there are changes in business name, address, ownership, or contact details, you can modify your FSSAI license through the official portal.",
  },
  {
    question: "Can home-based food sellers apply for a Food License?",
    answer:
      "Yes, home-based food businesses such as tiffin services, bakers, or homemade snack sellers must register under the Basic FSSAI category if their turnover is below ₹12 lakhs per year.",
  },
  {
    question: "Is there a government fee for obtaining an FSSAI license?",
    answer:
      "Yes, a nominal government fee applies based on the license category — Basic, State, or Central. Additional fees may apply for modifications or renewals.",
  },
  {
    question: "How can Legal Terminus assist with Food License registration?",
    answer:
      "Legal Terminus provides expert assistance throughout the FSSAI registration process — from document preparation and application filing to approval and renewal support.",
  },
];

const FoodLicenseFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="foodfaq-section">
      <div className="foodfaq-container">
        {/* Left side – static text */}
        <div className="foodfaq-left">
          <h2 className="foodfaq-title">Food License (FSSAI) FAQ&apos;s</h2>

          <p className="foodfaq-intro">
            Obtaining an FSSAI Food License is a crucial step for anyone looking
            to start or operate a food-related business in India. With expert
            guidance, the process is simple and can be completed online within a
            few days.
            <br />
            <br />
            Below are the most commonly asked questions regarding FSSAI
            registration, documentation, process, and compliance to help you
            understand the procedure better.
          </p>
        </div>

        {/* Right side – scrollable Q&A list */}
        <div className="foodfaq-right">
          <div className="foodfaq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`foodfaq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="foodfaq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span className={`foodfaq-icon ${isActive ? "open" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {isActive && (
                    <div className={`foodfaq-answer ${isActive ? "open" : ""}`}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodLicenseFAQ;
