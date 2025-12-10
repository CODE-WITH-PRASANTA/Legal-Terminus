import React, { useState } from "react";
import "./TrustFAQ.css"; 

const faqs = [
  {
    question: "What is Trust Registration?",
    answer:
      "Trust registration is the legal process of creating a trust through a written trust deed and registering it with the appropriate authority (usually the Sub-Registrar) under the Indian Trusts Act or relevant state laws. Once registered, the trust gets legal recognition to hold property and carry out its charitable or private objectives.",
  },
  {
    question: "How to register a trust online in India?",
    answer:
      "Many states now allow parts of the process to be done online – such as booking appointments, paying stamp duty, and generating certain documents. However, the trust deed usually needs to be executed on stamp paper and presented physically at the Sub-Registrar’s office. Professional platforms and consultants can help you complete most formalities digitally and coordinate the physical signing and registration.",
  },
  {
    question: "What is the purpose of Trust Registration?",
    answer:
      "Registration gives the trust a formal legal identity, allows it to hold property in its own name, improves transparency for donors and beneficiaries, and is often mandatory for availing tax exemptions like 12A and 80G. A registered trust is easier to manage, regulate, and protect from disputes.",
  },
  {
    question: "Is it mandatory to obtain a PAN card for a registered trust?",
    answer:
      "Yes. A registered trust that receives donations, holds investments, or opens a bank account must obtain a PAN card. PAN is required for filing income-tax returns, applying for 12A/80G, and complying with banking and TDS rules.",
  },
  {
    question: "How many types of trust registrations are there?",
    answer:
      "Broadly, trusts are classified as public trusts (charitable or religious), private trusts (for specific individuals or families), and public-cum-private trusts. The exact categories and procedures can vary slightly depending on the purpose of the trust and the state in which it is registered.",
  },
  {
    question: "Which type of trust is best?",
    answer:
      "The best type depends on your objective. Public charitable trusts are ideal for NGOs and social causes, while private trusts work well for estate and succession planning for family members. If your main goal is public benefit and tax exemptions, a public charitable trust is usually preferred.",
  },
  {
    question: "What are the documents required for trust registration?",
    answer:
      "Common documents include: the drafted trust deed, ID and address proof of the settlor and trustees, passport-size photographs, proof of the registered office address (electricity bill, tax receipt, or rent agreement with NOC), and any additional affidavits or declarations required by the local Sub-Registrar.",
  },
  {
    question:
      "Is it necessary to have a physical office address for trust registration?",
    answer:
      "Yes, you must provide an address that will serve as the trust’s registered office for communication and legal records. This can be a rented or owned premises, or in some cases even a residential address, so long as you have proper proof and (for rented premises) a landlord’s NOC.",
  },
  {
    question: "Can a trust be converted into a private limited company?",
    answer:
      "Direct conversion is generally not provided for under Indian law. However, in practice, a company with similar objectives can be formed and the trust’s activities or assets may be transferred subject to approvals, documentation, and compliance with tax and charity regulations. You should always take professional advice before attempting such restructuring.",
  },
  {
    question: "How to get an 80G registration for a trust?",
    answer:
      "After registering the trust and obtaining a PAN, you can apply to the Income Tax Department for 12A and 80G registration by filing the prescribed online forms, uploading documents such as the trust deed, activity reports, and financial statements, and responding to any queries from the department. On approval, donors to the trust can claim tax deductions under Section 80G.",
  },
  {
    question: "How long does trust registration take in India?",
    answer:
      "The time frame varies by state and the workload of the Sub-Registrar’s office. Once the deed is drafted and documents are ready, registration may be completed in a few working days to a couple of weeks. Additional approvals like 12A/80G will take extra time.",
  },
  {
    question: "Can foreigners be trustees in an Indian trust?",
    answer:
      "In many cases, foreign nationals and NRIs can be appointed as trustees, provided they meet KYC requirements and comply with applicable laws such as FCRA, FEMA, and any state-specific rules. If the trust will receive foreign contributions, FCRA registration or prior permission becomes very important.",
  },
  {
    question: "How many members are required for trust registration?",
    answer:
      "Typically, you need at least one settlor and two trustees (three persons in total), although many charitable trusts prefer to have three or more trustees for better governance. The exact number may vary depending on the state’s practice or the trust’s own rules.",
  },
  {
    question: "Can a trust be registered online?",
    answer:
      "Partially, yes. You can draft the deed, collect KYC documents, and pay stamp duty online in many states. But execution of the deed and final registration usually involve physical signatures and witnessing at the Sub-Registrar’s office or before an authorised officer.",
  },
  {
    question: "Is trust registration different in different states?",
    answer:
      "Yes. While the broad principles are similar, stamp duty rates, registration fees, formats of affidavits, and the authority in charge (Charity Commissioner or Sub-Registrar) can differ from state to state. It’s important to follow the specific procedure of the state where the trust will be based.",
  },
  {
    question: "How much does trust registration cost?",
    answer:
      "The cost mainly includes stamp duty on the trust deed, registration fees at the Sub-Registrar office, and any professional or drafting fees you pay. Stamp duty itself varies widely by state and by the nature of the trust, so the total cost can range from a few thousand rupees upwards.",
  },
  {
    question: "Can a trust own property?",
    answer:
      "Yes. A registered trust can hold movable and immovable property in its own name, subject to the objects in its trust deed. Property acquired must be used for the purposes of the trust and is managed by the trustees for the benefit of the beneficiaries or the public.",
  },
  {
    question: "How do I modify a trust deed after registration?",
    answer:
      "If the trust deed allows for amendments, the trustees can pass a resolution to revise specific clauses and execute a supplementary deed. This supplementary deed must then be registered with the same authority that registered the original deed, and in some states approval from the Charity Commissioner may be required.",
  },
  {
    question: "Can a trust be converted into an NGO?",
    answer:
      "A registered charitable trust is already considered a form of NGO. However, if you wish to operate as a different legal form such as a Section 8 company or society, you may need to create that new entity and transfer activities or assets following due process and regulatory approvals.",
  },
  {
    question: "What are the tax benefits of registered trusts?",
    answer:
      "Charitable trusts that obtain 12A registration may be exempt from paying income tax on eligible income, and those with 80G approval allow donors to claim tax deductions on donations. Additional benefits can include exemptions on certain capital gains and property taxes, depending on local laws and compliance with the conditions laid down by tax authorities.",
  },
];

const FaqTrust = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="trustfaq-section">
      <div className="trustfaq-container">
        {/* Left side – static text */}
        <div className="trustfaq-left">
          <h2 className="trustfaq-title">Trust Registration FAQ&apos;s</h2>

          <p className="trustfaq-intro">
            Setting up a trust is a powerful way to support charitable causes,
            manage family wealth, or protect assets for future generations.
            The process can feel legal and technical, but once you understand
            the basics, it becomes much easier to navigate.
          </p>

          <p className="trustfaq-intro">
            To help you get clarity, we&apos;ve answered the most common
            questions on trust registration in India — from documents and
            timelines to tax benefits and foreign trustees. Browse through the
            FAQs on the right to understand each step clearly before you
            register your trust.
          </p>
        </div>

        {/* Right side – scrollable Q&A list */}
        <div className="trustfaq-right">
          <div className="trustfaq-list">
            {faqs.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`trustfaq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    type="button"
                    className="trustfaq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{item.question}</span>
                    <span className={`trustfaq-icon ${isActive ? "open" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {isActive && (
                    <div className="trustfaq-answer">
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

export default FaqTrust;
