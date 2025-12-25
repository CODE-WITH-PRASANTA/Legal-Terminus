import React, { useState } from "react";
import "./UdyamRegFAQ.css"

const faqs = [
  {
    question: "What is Udyog Aadhaar number?",
    answer:
      "Udyog Aadhaar was the earlier MSME registration system issued by the Government of India. It has now been replaced by Udyam Registration. Existing Udyog Aadhaar holders must migrate to the Udyam portal."
  },
  {
    question: "How can I verify my Udyam Registration Number online?",
    answer:
      "You can verify your Udyam Registration Number by visiting the official Udyam portal and using the 'Verify Udyam Registration Number' option with your Udyam number and registered mobile OTP."
  },
  {
    question:
      "How long does it take to receive the Udyam certificate after registration?",
    answer:
      "In most cases, the Udyam Registration Certificate is generated immediately after successful submission. In some cases, it may take up to 1–2 working days."
  },
  {
    question: "How to check MSME registration by PAN number?",
    answer:
      "You can check MSME/Udyam registration details using the PAN number through the official Udyam portal by selecting the PAN-based search option."
  },
  {
    question: "How to download Udyam certificate?",
    answer:
      "You can download the Udyam Registration Certificate from the official Udyam portal by entering your Udyam Registration Number and verifying via OTP."
  }
];

const UdyamFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="udyamfaq-section">
      <div className="udyamfaq-container">
        {/* LEFT SIDE */}
        <div className="udyamfaq-left">
          <h2 className="udyamfaq-title">
            FAQs Related to Udyam Registration
          </h2>
          <p className="udyamfaq-intro">
            Find answers to the most frequently asked questions related to
            Udyam (MSME) Registration, verification, and certificate download.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="udyamfaq-right">
          <div className="udyamfaq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`udyamfaq-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <button
                  className="udyamfaq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`udyamfaq-arrow ${
                      activeIndex === index ? "open" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="udyamfaq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UdyamFaq;
