import React, { useState } from "react";
import "./DPFAQ.css";

const faqs = [
  {
    question: "How many persons are required to form a Private Limited Company?",
    answer:
      "Minimum two persons are required to form a Private Limited Company and a maximum up to 200 persons can be a member of a single Private Limited Company.",
  },
  {
    question: "How many Directors are required to form a Private Limited Company?",
    answer:
      "Minimum two directors are required in a Private Limited Company, with an upper cap up to 15 directors.",
  },
  {
    question: "Who are Directors of the company?",
    answer:
      "Directors are officers of the company who are responsible for managing the company and making the decisions as to its operation on a day to day basis, for the benefit of the shareholders.",
  },
  {
    question:
      "What is a company shareholder?",
    answer:
      "Shareholders are the owners of companies limited by shares. As the beneficial owners of a limited company, they are not involved in day-to-day management or financial affairs. They are also called 'members' and they agree to become part of a company by taking a minimum of one share in it. The quantity of shares held by each person represents how much of the business they own.",
  },
  {
    question: "How much capital is required to start a Private Limited Company?",
    answer:
      "The Private Limited Company can be incorporated with any amount of capital and there is no lower or upper limit. Further, the government has relaxed the government fees for Incorporation of a Private Limited Company up to an Authorized capital of Rs. 15,00,000/-, however, the stamp duty, which is still levied, varies from State to State.",
  },
  {
    question:
      "What are some basic/ key documents required to incorporate a Private Limited Company in India?",
    answer:(
      <div>
        <ol>
          <li>PAN Card (All the Proposed Directors and/or Shareholders)</li>
          <li>ID Proof (All the Proposed Directors and/or Shareholders) (Passport/ Voter ID/ Aadhar Card/ Driving License)</li>
          <li>Address Proof (All the Proposed Directors and/or Shareholders) (Telephone Bill/ Mobile Bill/ Savings Bank Statement)</li>
          <li>Passport size Photograph (All the Proposed Directors and/or Shareholders)</li>
          <li>Rent Agreement (For proposed company Address)</li>
          <li>Electricity bill</li>
          <li>A permission letter from the owner about use of his premises for registered office of the proposed company (NOC)</li>
          <li>All the documents mentioned above in point no 1 to 3 need to be self-signed by the respective proposed directors/ members/ shareholders All the utility bills or bank statements shall be less than 2 months old</li>
        </ol>
      </div>
    ),
  },
  {
    question:
      "What is the procedure to register a Private Limited Company?",
    answer: (
      <div>
        <p>
          The broad process of registering a Private Limited company involves following steps:
        </p>

        <ol>
          <li>STEP 1 : Document Submission: Provision of requisite documents/information to us (As per the checklist to be provided by us)</li>
          <li>STEP 2 : Company Name & Objects Finalization: Finalisation of Objects along with Name of the proposed company (Name shall be finalised on the basis of a search report duly conducted & provided by our team)</li>
          <li>STEP 3: Name Reservation Application: Filing of Application for Name Reservation in requisite e-form along with applicable government fees</li>
          <li>STEP 4: Digital Signature Certificates: Preparation of requisite numbers of DSC with respect to the proposed Promoters & Directors and Registration of DSC in MCA Portal</li>
          <li>STEP 5: Incorporation Document Preparation: Preparation of further incorporation documents upon receipt of name approval letter from the department</li>
          <li>STEP 6: Final Form Upload and Fee Payment: Uploading of Final Incorporation Forms to the MCA portal along with applicable government fees</li>
          <li>STEP 7: Registration Certificate Issuance: Processing of the application by the department and issuance of registration certificate</li>
        </ol>
      </div>
    ),
  },
  {
    question:
      "What is the time period within which a Private Limited Company can be incorporated?",
    answer:
      "The process of incorporating a Private Limited Company can take anywhere between 10 to 15 working days, subject to submission of correct information and complete documentation.",
  },
  {
    question:
      "How Legal Terminus can help you incorporate a Private Limited Company in India?",
    answer:
      "Legal Terminus can help you with incorporation of Private Limited Company for you, as and when required, in a hassle-free manner within a reasonable time span and for competitive professional fee. To know more, please book a telephonic appointment with one of our consultants free of charge.",
  },
];

const DPFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="Diss-ps-faqsection">
      <div className="Diss-ps-faqcontainer">
        {/* Left side – static text */}
        <div className="Diss-ps-faqleft">
          <h2 className="Diss-ps-faqtitle">Private Limited Company Registration FAQ&apos;s</h2>

          <p className="Diss-ps-faqintro">
            Starting a Private Limited Company in India is an important step for any business owner. With the right support, the process can be simple and stress-free.

<br/><br/>
Here, we’ve answered the most common questions about company registration—covering documents, steps, and what happens after registration. These FAQs will help you understand everything clearly and move ahead with confidence.

          </p>

          <p className="Diss-ps-faqintro">
            
          </p>
        </div>

        {/* Right side – scrollable Q&A list */}
        <div className="Diss-ps-faqright">
          <div className="Diss-ps-faqlist">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`Diss-ps-faqitem ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="Diss-ps-faqquestion"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span className={`Diss-ps-faqicon ${isActive ? "open" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {isActive && (
                   <div className={`Diss-ps-faqanswer ${isActive ? "open" : ""}`}>
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

export default DPFAQ;
