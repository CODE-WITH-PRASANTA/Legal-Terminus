import React, { useState } from "react";
import "./ESICRegFaq.css";

const faqs = [
  {
    question:
      "Is it compulsory for the units to obtain the ESIC Registration Certificate?",
    answer:
      "Yes, every entity eligible under the ESIC Act shall get the certificate by registering its entity under ESIC. The applicant can apply online through the official website of ESIC."
  },
  {
    question:
      "Are there any provisions relating to compliance after registration?",
    answer:
      "Yes. After ESIC registration, employers must comply with periodic contribution payments, filing of returns, and maintenance of employee records as prescribed under the Act."
  },
  {
    question: "What is the ESIC Code?",
    answer:
      "The ESIC Code is a unique 17-digit identification number allotted to employers after successful ESIC registration, used for all compliance and contribution-related activities."
  },
  {
    question:
      "What are the basic wages for the calculation of ESI?",
    answer:
      "Basic wages include all remuneration paid to employees, including allowances, incentives, and overtime, but exclude gratuity and retrenchment compensation."
  },
  {
    question:
      "What are the penal provisions in case of delayed payments?",
    answer:
      "Delayed payments attract interest and penalties as prescribed by ESIC, including interest at applicable rates and damages depending on the delay period."
  },
  {
    question: "Who regulates the ESI Scheme?",
    answer:
      "The Employees’ State Insurance Scheme is regulated by the Employees’ State Insurance Corporation (ESIC) under the Ministry of Labour and Employment, Government of India."
  },
  {
    question: "How is the scheme funded?",
    answer:
      "The scheme is funded through contributions made by employers and employees, along with grants and assistance from the Government of India."
  },
  {
    question: "On what salary is ESIC applicable?",
    answer:
      "ESIC is applicable to employees drawing a monthly salary of up to ₹21,000 (₹25,000 for persons with disabilities)."
  },
  {
    question: "Is ESI compulsory?",
    answer:
      "Yes, ESI registration is compulsory for establishments covered under the ESI Act and employing the prescribed number of employees."
  },
  {
    question: "Who is not eligible for ESIC?",
    answer:
      "Employees earning wages above the prescribed limit and self-employed individuals are not eligible for ESIC coverage."
  }
];

const ESICFaq = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="esicfaq-section">
      <div className="esicfaq-container">
        {/* LEFT SIDE */}
        <div className="esicfaq-left">
          <h2 className="esicfaq-title">Frequently Asked Questions</h2>
          <p className="esicfaq-intro">
            Find clear answers to the most commonly asked questions related to
            ESIC registration, compliance, eligibility, and contributions.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="esicfaq-right">
          <div className="esicfaq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`esicfaq-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <button
                  className="esicfaq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`esicfaq-arrow ${
                      activeIndex === index ? "open" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="esicfaq-answer">
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

export default ESICFaq;
