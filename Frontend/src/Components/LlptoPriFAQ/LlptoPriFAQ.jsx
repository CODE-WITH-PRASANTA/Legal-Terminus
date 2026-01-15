import React, { useState } from "react";
import "./LlptoPriFAQ.css"; // keep your existing CSS file

const faqs = [
  {
    question: "What is an LLP and how is it different from a Private Limited Company?",
    answer:
      "A Limited Liability Partnership (LLP) combines features of a partnership and a company. It offers limited liability to partners and flexibility in internal management. Unlike a private limited company, LLPs have simpler compliance and governance while companies have share capital and stricter statutory requirements.",
  },
  {
    question: "Who can register an LLP in India?",
    answer:
      "Any individual or corporate entity (Indian or foreign) can be a partner in an LLP, subject to sectoral regulations. At least two partners are required to form an LLP.",
  },
  {
    question: "Is LLP registration mandatory for all partnerships?",
    answer:
      "No. Traditional partnerships can operate without LLP registration, but registering as an LLP provides limited liability protection and other statutory benefits. Many professional firms choose LLP structure for these reasons.",
  },
  {
    question: "How do I register an LLP online in India?",
    answer:
      "The usual online steps are: obtain DSCs for partners (if needed), check and reserve the name (RUN-LLP), prepare incorporation documents and LLP agreement, file the incorporation form (Form 2/run the RUN process), and obtain the Certificate of Incorporation from the ROC.",
  },
  {
    question: "What are the documents required for LLP registration?",
    answer:
      "Common documents include identity proof (PAN, passport), address proof (Aadhaar, voter ID), registered office proof (utility bill/lease), digital signature certificates for partners (if required), and a duly signed LLP agreement.",
  },
  {
    question: "How much does it cost to register an LLP in India?",
    answer:
      "Costs depend on professional fees, government filing fees, and state stamp duty for the LLP agreement. Professional fees vary by service provider; government fees depend on proposed capital and ROC schedules.",
  },
  {
    question: "What is the time required to complete LLP registration?",
    answer:
      "If documents are in order, name availability is clear, and filings are correct, registration typically completes in a few working days to a couple of weeks. Delays occur when additional clarifications are requested by the ROC.",
  },
  {
    question: "What are the advantages of registering an LLP?",
    answer:
      "Key advantages: limited liability for partners, separate legal entity, flexible management, fewer compliance formalities compared to companies, perpetual succession, and improved credibility with stakeholders.",
  },
  {
    question: "Can an NRI or foreign national be a partner in an LLP?",
    answer:
      "Yes — NRIs and foreign nationals can be partners, subject to applicable foreign exchange and sectoral regulations. KYC and identity documents are required during registration.",
  },
  {
    question: "Is there any minimum capital required to start an LLP?",
    answer:
      "There is no statutory minimum capital for forming an LLP under the LLP Act. Partners decide the capital contribution among themselves and record it in the LLP agreement.",
  },
  {
    question: "What is DPIN and why is it required for LLP partners?",
    answer:
      "DPIN (Designated Partner Identification Number) was formerly used for designated partners. Currently, partners generally require DIN/DPIN or equivalent identifiers where applicable — consult MCA guidance. Digital identity and KYC are required for compliance.",
  },
  {
    question: "Is a digital signature (DSC) required for LLP registration?",
    answer:
      "A DSC may be required for filing electronic forms on government portals depending on the type of applicant and the form. Many service providers arrange DSCs for partners as part of the process.",
  },
  {
    question: "Do LLPs have to file annual returns and maintain compliance?",
    answer:
      "Yes. LLPs must file annual returns (Form 11) and statement of accounts & solvency (Form 8) with the ROC, and also comply with tax filings (ITR) and other statutory requirements as applicable.",
  },
  {
    question: "What is the Statement of Account and Solvency?",
    answer:
      "It is a statutory filing (Form 8) containing the LLP's financial details and a declaration of solvency. It must be filed annually by the LLP as per ROC requirements.",
  },
  {
    question: "When does an LLP need to undergo an audit?",
    answer:
      "LLPs with turnover exceeding prescribed thresholds (e.g., turnover above certain limits or capital contribution above specified amount) are required to get their accounts audited by a Chartered Accountant. Check current thresholds before filing.",
  },
  {
    question: "Can partners agree on profit-sharing and roles in the LLP agreement?",
    answer:
      "Yes. The LLP agreement sets out roles, duties, profit-sharing ratios, decision-making procedures, and other internal rules — partners have wide latitude to define these terms.",
  },
  {
    question: "How can I change partners or update the LLP agreement later?",
    answer:
      "Amendments to the LLP agreement and changes in partners are effected as per the LLP agreement and by filing the prescribed ROC forms to notify changes in designated partners or alterations in the agreement.",
  },
  {
    question: "What happens if an LLP fails to file returns on time?",
    answer:
      "Late filing may attract penalties and additional fees. Persistent non-compliance could lead to prosecution, increased fines, or regulatory action by the ROC.",
  },
  {
    question: "Does LLP registration provide protection for partner’s personal assets?",
    answer:
      "LLP offers limited liability to partners; however, personal guarantees or fraud can override protection. Partners remain liable to the extent of their agreed contribution.",
  },
  {
    question: "Are foreign-invested businesses allowed as LLPs?",
    answer:
      "Foreign investment policies vary by sector. In many sectors, foreign entities can be partners in LLPs, but sectoral restrictions and FDI rules must be checked prior to formation.",
  },
  {
    question: "What are post-incorporation tasks to complete after incorporation?",
    answer:
      "Typical tasks: obtain PAN & TAN for the LLP, open a bank account, register the LLP agreement if needed, maintain statutory records, and ensure tax and ROC compliances.",
  },
  {
    question: "Can an LLP be converted into a company or vice versa?",
    answer:
      "Yes — conversion between structures is possible under the law, subject to compliance with statutory procedures, approvals, and ROC filings.",
  },
  {
    question: "How do I pick a good LLP name and avoid rejection?",
    answer:
      "Choose a unique, descriptive name that does not infringe trademarks or duplicate existing registered entities. Avoid restricted words and follow naming guidelines on the MCA portal before filing.",
  },
  {
    question: "Where can I get official help or check forms for LLP registration?",
    answer:
      "Official guidance, downloadable forms, and filing portals are available on the Ministry of Corporate Affairs (MCA) website. Consider professional help for documentation and filings to ensure accuracy.",
  },
];

const FaqLLP = () => {
  // default closed (-1) so no answer opens automatically, but you can set 0 if you prefer open first
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="LLP-to-PLC-section">
      <div className="LLP-to-PLC-container">
        {/* Left side – static text */}
        <div className="LLP-to-PLC-left">
          <h2 className="LLP-to-PLC-title">Limited Liability Partnership FAQ's</h2>

          <p className="LLP-to-PLC-intro">
            Explore answers to common questions about Limited Liability Partnership (LLP) registration in India,
            covering key benefits, eligibility, compliance requirements, partner roles, and comparison with other business structures to
            help you choose the best option for your needs.
          </p>
        </div>

        {/* Right side – scrollable Q&A list */}
        <div className="LLP-to-PLC-right">
          <div className="LLP-to-PLC-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`LLP-to-PLC-item ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="LLP-to-PLC-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isActive}
                    aria-controls={`LLP-to-PLC-answer-${index}`}
                  >
                    <span>{item.question}</span>
                    <span className={`LLP-to-PLC-icon ${isActive ? "open" : ""}`} aria-hidden>
                      ▾
                    </span>
                  </button>
                  {isActive && (
                    <div
                      id={`LLP-to-PLC-answer-${index}`}
                      className="LLP-to-PLC-answer"
                      role="region"
                      aria-labelledby={`LLP-to-PLC-question-${index}`}
                    >
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

export default FaqLLP;
