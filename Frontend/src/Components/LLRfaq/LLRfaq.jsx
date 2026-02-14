import React, { useState } from "react";
import "./LLRfaq.css";

const faqs = [
  {
    question: "Is Labour License mandatory for all business organizations?",
    answer:
      "It is applicable to every establishment (Principal Employer) in which 20 or more workmen are employed or were employed on any day of the preceding 12 months as contract Labour. It is also applicable to every contractor who employs or who employed on any day of the preceding twelve months 20 or more workmen.",
  },
  {
    question: "Who is principal Employer?",
    answer: (
      <div>
        <ol>
          <li>In the case of an office or the department of government or the local authority - the head thereof or the specified person</li>
          <li>In the case of a factory -the owner or occupier or the person named as manager thereof.</li>
          <li>In the case of other establishments - the person responsible for the supervision and control of the establishment, is the principal employer under the Act</li>
        </ol>
      </div>
    ),
  },
  {
    question: "Who is Contractor?",
    answer:
      "Contractor is a person who employs/supplies Labour to the principal employer.",
  },
  {
    question:
      "What is the validity of license?",
    answer:
      "A license granted shall be valid for a period of 1 year",
  },
  {
    question: "What is the due date of renewal of license?",
    answer:
      "The renewal of license can be applied 30 days before the date of expiry.",
  },
  {
    question:
      "What are the documents required for Labour license?",
    answer: (
      <div>
        <ol>
          <li>Any registration certificate of an organization such as Certification of Incorporation/Partnership Deed/GST Registration Certificate/Trade License.</li>
          <li>Rent agreement and any utility bill of the registered office address of the organization.</li>
          <li>PAN card of the organization and all the Directors/Partners/Proprietor.</li>
          <li>Bank statement (with Current transactions) of the organization along with 1 cancelled cheque.</li>
          <li>Digital Signature of the applicant/authorised signatory.</li>
          <li>Total employee strength</li>
          <li>Employees' basic details such as Aadhar number, name, father's name, DOB, address as per Aadhar card</li>
          <li>Employees' Salary details (break up of salary with respect to basic salary and other details including holiday lists)</li>
          <li>Form V from Principal Employer</li>
          <li>Work Order from Principal Employer</li>
        </ol>
      </div>
    ),
  },
  {
    question:
      "What is the time period within which the Labour License can be obtained?",
    answer:
      "The Registering officer shall issue the License within 30 working days of the receipt of application, if the application is complete in all respect.",
  },
  {
    question:
      "What is the procedure to obtain Labour License?",
    answer: (
      <div>
        <p>
          The broad process of obtaining Labour License involves following steps:
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
    question:
      "How Legal Terminus can help you to obtain Labour License?",
    answer:
      "Legal Terminus can help you with obtaining Labour License for your organization, as and when required, in a hassle-free manner within a reasonable time span and for competitive professional fee. To know more, please book a telephonic appointment with one of our consultants free of charge.",
  },
];

const FaqPvt = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Left side – static text */}
        <div className="faq-left">
          <h2 className="faq-title">Labour License Registration FAQ&apos;s</h2>

          <p className="faq-intro">
            Here, we’ve answered the most common questions about labour license registration covering documents, steps, and what happens after registration. These FAQs will help you understand everything clearly and move ahead with confidence.
          </p>

          <p className="faq-intro">
            
          </p>
        </div>

        {/* Right side – scrollable Q&A list */}
        <div className="faq-right">
          <div className="faq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`faq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span className={`faq-icon ${isActive ? "open" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {isActive && (
                   <div className={`faq-answer ${isActive ? "open" : ""}`}>
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

export default FaqPvt;
