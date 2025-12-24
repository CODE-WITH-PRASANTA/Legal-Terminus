import React from "react";
import "./Section8Benefits.css";

const benefits = [
  {
    title: "Legal Recognition and Credibility",
    text: "A registered company has higher credibility among donors, government agencies, and corporate partners compared to unregistered entities.",
  },
  {
    title: "Tax Exemptions",
    text: "Eligible for crucial tax benefits under Sections 12AB (tax exemption on income) and 80G (donors can claim tax deductions) of the Income Tax Act.",
  },
  {
    title: "No Minimum Capital",
    text: "There is no prescribed minimum paid-up share capital requirement for the incorporation of a Section 8 company.",
  },
  {
    title: "Stamp Duty Exemption",
    text: "Many states offer exemptions from stamp duty on the company's Memorandum and Articles of Association, reducing the registration cost for the Section 8 company.",
  },
  {
    title: "Separate Legal Identity",
    text: "It can own property, enter into contracts, and sue or be sued in its name.",
  },
  {
    title: "Limited Liability",
    text: "Members' assets are protected, as their liability is limited to unpaid shares.",
  },
  {
    title: "Perpetual Succession",
    text: "The company's existence is continuous, unaffected by changes in its members.",
  },
  {
    title: "Enhanced Fundraising",
    text: "Its formal structure and tax benefits make it easier to attract funds from various sources, including CSR and grants.",
  },
];

const disadvantages = [
  {
    title: "Strict Compliance",
    text: "These companies face stringent compliance requirements under the Companies Act, 2013, involving regular filings and meetings, which can incur substantial professional fees.",
  },
  {
    title: "No Profit Distribution",
    text: "Members cannot receive any profits, which are to be reinvested into the company's objectives. This is a major drawback for those seeking personal financial returns.",
  },
  {
    title: "Complex Regulations",
    text: "The process and rules governed by the MCA are more complex compared to a trust or society.",
  },
  {
    title: "Revocable License",
    text: "The Central Government holds the power to revoke the license if the company is found to be working against its stated objectives or violating legal provisions.",
  },
  {
    title: "No Personal Member Benefits",
    text: "Beyond contributing to a cause, members gain no direct personal financial benefits, ownership stakes, or transferable shares.",
  },
];

const Section8Benefits = () => {
  return (
    <section className="s8b-wrapper">
      {/* Benefits section */}
      <div className="s8b-block">
        <h2 className="s8b-title">Benefits of Section 8 Company Registration</h2>
        <p className="s8b-text">
          Registering as a Section 8 company provides a strong foundation for
          non-profits, offering the following legal and financial benefits:
        </p>

        <div className="s8b-grid">
          {benefits.map((item) => (
            <article key={item.title} className="s8b-card">
              <div className="s8b-dot" />
              <div>
                <h3 className="s8b-card-title">{item.title}</h3>
                <p className="s8b-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Disadvantages section */}
      <div className="s8b-block">
        <h2 className="s8b-title">
          Disadvantages of Section 8 Company Registration
        </h2>
        <p className="s8b-text">
          While a Section 8 company offers many benefits, it also comes with
          certain challenges that require careful attention, such as:
        </p>

        <div className="s8b-grid s8b-grid-disadvantages">
          {disadvantages.map((item) => (
            <article key={item.title} className="s8b-card s8b-card-disadv">
              <div className="s8b-dot" />
              <div>
                <h3 className="s8b-card-title">{item.title}</h3>
                <p className="s8b-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section8Benefits;
