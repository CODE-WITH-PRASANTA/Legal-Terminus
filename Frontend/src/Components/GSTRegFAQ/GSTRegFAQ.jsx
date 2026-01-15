import React, { useState } from "react";
import { FaCircleQuestion } from "react-icons/fa6";
import "./GSTRegFAQ.css";

const faqs = [
  {
    question: "When will it become mandatory for an organization to obtain GST Registration?",
    answer: (
    <div>
      <p>An organization shall be required to obtain GST Registration on fulfilment of prescribed criteria and some key/ basic criteria is mentioned below:-</p>
      <ol>
        <li>When the turnover of any organization exceeds Rs. 40 Lakh in case of supply of Goods</li>
        <li>When the turnover of any organisation exceeds Rs. 20 Lakh in case of supply of Services</li>
        <li>When an organisation makes any inter-state taxable supply</li>
        <li>E-Commerce operator for supplying services as notified</li>
        <li>Organization/ entity who supply goods or services or both through electronic commerce operator</li>
        <li>Non-resident taxable persons making taxable supply</li>
        <li>An organization who is required to deduct TDS as per GST Act</li>
        <li>An organization can voluntarily also apply for GST Registration</li>
      </ol>
    </div>
  ),
  },
  {
    question: "What are some key/ basic documents/information required for GST Registration?",
    answer: (
    <div>
      <ol>
        <li>Any registration certificate of an organization such as Certification of Incorporation/Partnership Deed/GST Registration Certificate/Trade License.</li>
        <li>Rent agreement and any utility bill of the registered office address of the organization.</li>
        <li>Photo, PAN card& Aadhar Card of the organization and all the Directors/Partners/Proprietors.</li>
        <li>Photo, PAN card & Aadhar Card of the Authorised person who will be responsible under GST</li>
        <li>Authorization letter/ Board Resolution for appointment of Authorised person</li>
        <li>Bank statement (with Current transactions) of the organization along with 1 cancelled cheque.</li>
        <li>Digital Signature of the applicant/authorized signatory.</li>
        <li>Head office and branch office details</li>
        <li>Type of business activity (details of goods/ services to be supplied)</li>
      </ol>
    </div>
  ),
  },
  {
  question: "What is the procedure to obtain GST Registration?",
  answer: (
    <div>
      <p>The broad process of obtaining GST Registration involves following steps:</p>
      <ol>
        <li>STEP 1: Provision of requisite mentioned documents/information to us</li>
        <li>STEP 2: Validating the documents/ information and processing the same.</li>
        <li>STEP 3: Filing of application and submission of the same in online/offline manner, as the case may be</li>
        <li>STEP 4: Payment of appropriate government fee as applicable</li>
        <li>STEP 5: Processing of the application and issuance of registration certificate</li>
      </ol>
    </div>
  ),
},

  {
    question:
      "What is the time period within which the GST Registration can be obtained?",
    answer:
      "The process of obtaining GST Registration can take anywhere between 5 to 7 working days, subject to submission of correct information and complete documentation."
  },
  {
    question: "How Legal Terminus can help you to obtain GST Registration?",
    answer:
      "Legal Terminus can help you with obtaining GST registration for your organization, as and when required, in a hassle-free manner within a reasonable time span and for competitive professional fees. To know more, please book a telephonic appointment with one of our consultants free of charge"
  },
];

const GSTFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="GSTFaq-section">
      <div className="GSTFaq-container">

        {/* LEFT CONTENT */}
        <div className="GSTFaq-left">
          <span className="GSTFaq-badge">FAQs</span>
          <h2 className="GSTFaq-title">
            FAQs on GST Registration
          </h2>
          <p className="GSTFaq-intro">
            Clear answers to the most common questions about GST registration,
            eligibility, timelines, and compliance requirements.
          </p>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="GSTFaq-right">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`GSTFaq-item ${isActive ? "active" : ""}`}
              >
                <button
                  className="GSTFaq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="GSTFaq-q-left">
                    <FaCircleQuestion className="GSTFaq-q-icon" />
                    <span>{faq.question}</span>
                  </div>

                  <span
                    className={`GSTFaq-arrow ${isActive ? "open" : ""}`}
                  >
                    ▾
                  </span>
                </button>

                <div
                  className={`GSTFaq-answer-wrapper ${
                    isActive ? "show" : ""
                  }`}
                >
                  <div className="GSTFaq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GSTFaq;
