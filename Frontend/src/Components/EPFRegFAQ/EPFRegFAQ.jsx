import React, { useState } from "react";
import "./EPFRegFAQ.css"

const epfFaqs = [
  {
    question: "What are the regulatory bodies for EPF Registration?",
    answer:
      "EPF Registration is regulated by the Employees’ Provident Fund Organisation (EPFO). The Employees’ Provident Funds and Miscellaneous Provisions Act, 1952 governs the functioning, management, and compliance of provident fund accounts in India."
  },
  {
    question: "Does the PF account change if an employee switches jobs?",
    answer:
      "No. The PF account remains the same throughout an employee’s career. The Universal Account Number (UAN) allows seamless transfer of PF balances when changing jobs."
  },
  {
    question: "When is an organization required to get EPF Registration?",
    answer:
      "An organization must register for EPF when it employs 20 or more employees. Voluntary registration is also permitted for establishments with fewer employees."
  },
  {
    question: "When is ESIC registration made necessary?",
    answer:
      "ESIC registration becomes mandatory when an organization employs 10 or more employees (in most states) and the employee wages fall within the prescribed limit."
  },
  {
    question: "Which employees get PF benefits?",
    answer:
      "All salaried employees earning wages as defined under the EPF Act are eligible for PF benefits, including full-time, part-time, and contractual employees."
  },
  {
    question: "What is an Employee Deposit Linked Insurance Scheme?",
    answer:
      "EDLI provides life insurance coverage to EPF members. In case of the employee’s death during service, the nominee receives insurance benefits linked to PF contributions."
  },
  {
    question: "What is the time required to get the money from the EPF account?",
    answer:
      "PF withdrawals typically take 7–20 working days once the claim is submitted and verified through the EPFO portal."
  },
  {
    question: "Is the amount received as PF taxable?",
    answer:
      "PF withdrawals are tax-free if the employee has completed 5 years of continuous service. Otherwise, tax may apply as per income tax rules."
  },
  {
    question: "How much time is required to obtain EPF Registration?",
    answer:
      "EPF Registration usually takes 5–10 working days, provided all documents and details are correctly submitted."
  },
  {
    question: "What are the changes brought in PF contribution since COVID-19?",
    answer:
      "During COVID-19, the PF contribution rate was temporarily reduced from 12% to 10% for both employers and employees to provide financial relief."
  }
];

const EPFFaq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="epf-faq-section">
      <div className="epf-faq-container">
        {/* LEFT SIDE */}
        <div className="epf-faq-left">
          <h2 className="epf-faq-title">
            Helpful Questions About EPF Registration in India
          </h2>
          <p className="epf-faq-subtitle">
            Have a look at the answers to the most asked questions about EPF
            Registration, compliance, eligibility, and benefits in India.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="epf-faq-right">
          <div className="epf-faq-list">
            {epfFaqs.map((faq, index) => (
              <div
                key={index}
                className={`epf-faq-item ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <button
                  className="epf-faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`epf-faq-arrow ${
                      activeIndex === index ? "open" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="epf-faq-answer">
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

export default EPFFaq;
