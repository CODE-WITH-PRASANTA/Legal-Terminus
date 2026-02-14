import React, { useState } from "react";
import "./IECFAQ.css";

const faqs = [
  {
    question: "Is Import Export Code mandatory for all business organizations?",
    answer:
      "The Import Export Code is mandatory for those organizations who are engaged in the business of Import Export of goods or services.",
  },
  {
    question: "What is the validity of IE Code?",
    answer:
      "An Import Export Code once issued is valid for lifetime.",
  },
  {
    question: "What is the due date of renewal of IE Code?",
    answer:
      "Since IEC Certificate is granted for lifetime no renewal is required.",
  },
  {
    question: "What if once wishes to carry on the business of Import Export of Goods and Services in India without obtaining IEC Registration?",
    answer:
      "Import or Export of Goods and/or Services is not possible without having Import Export Code Certificate.",
  },
  {
    question: "What are the documents required for obtaining Import Export Code?",
    answer:
      (
      <div>
        <ol>
          <li>Address Proof (preferably Electricity Bill) of premise(s) from where the business to be carried on in Odisha</li>
          <li>Copy of PAN &Registration certificate of the organisation</li>
          <li>Proof of possession of premises (Rental Agreement/ Utility Bill)</li>
          <li>Copy of PAN of all the Directors/partners/proprietor</li>
          <li>Copy of Address proof of all the Directors/partners/proprietor</li>
          <li>Bank details & Bank Statement of the organisation of last 2 Months (from which it operates) along with cancelled cheque</li>
          <li>PAN, photo & Address proof of the person authorized to represent at the department</li>
          <li>Authorization letter for the above</li>
          <li>Details of business activity to be carried out by the applicant</li>
          <li>Email id & Mobile number</li>
        </ol>
      </div>
    ),
  },
  {
    question: "What is the time period within which the Import Export Code can be obtained?",
    answer:
      "The process of obtaining IEC Registration can take anywhere between 5 to 7 working days, subject to submission of correct information and complete documentation.",
  },
  {
    question: "What is the procedure to obtain Import Export Code?",
    answer:
      (
      <div>
        <p>
          The broad process of obtaining IEC Registration involves following steps:
        </p>

        <ol>
          <li>STEP 1: Provide the above-mentioned documents/information of your organization to one of our consultants.</li>
          <li>STEP 2: Our consultant will process the above documents/ information and validate the same.</li>
          <li>STEP 3: The application for Trade License shall be filled online or offline as the case may be.</li>
          <li>STEP 4: The application shall be submitted with required attachments.</li>
          <li>STEP 5: The department shall process the application and issue a registration certificate</li>
        </ol>
      </div>
    ),
  },

  {
    question: "How Legal Terminus can help you to obtain Import Export Code?",
    answer:
      "Legal Terminus can help you with obtaining Import Export Code for your organization, as and when required, in a hassle-free manner within a reasonable time span and for competitive professional fee. To know more, please book a telephonic appointment with one of our consultants free of charge.",
  },
];

const IECFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="iecfaq-section">
      <div className="iecfaq-container">
        {/* Left side – static text */}
        <div className="iecfaq-left">
          <h2 className="iecfaq-title">Importer Exporter Code Registration FAQ&apos;s</h2>

          <p className="iecfaq-intro">
            Frequently asked questions about importer exporter code
          </p>
        </div>

        {/* Right side – scrollable Q&A list */}
        <div className="iecfaq-right">
          <div className="iecfaq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`iecfaq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="iecfaq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span className={`iecfaq-icon ${isActive ? "open" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {isActive && (
                    <div className={`iecfaq-answer ${isActive ? "open" : ""}`}>
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

export default IECFAQ;
