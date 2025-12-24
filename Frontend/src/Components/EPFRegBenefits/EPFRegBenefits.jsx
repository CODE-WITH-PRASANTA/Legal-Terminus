import React from "react";
import epfImage from "../../assets/img-3.webp";
import "./EPFRegBenefits.css";

const benefits = [
  {
    title: "Risk Reduction",
    desc:
      "EPF reduces financial risk for employees during emergencies. The provident fund works as a safety net and avoids dependency on external borrowing."
  },
  {
    title: "Single Account",
    desc:
      "Employees receive a single PF account throughout their career, which remains unchanged even if they switch jobs or locations."
  },
  {
    title: "Employee Retention",
    desc:
      "Providing EPF increases job satisfaction and improves employee retention, helping organizations attract skilled professionals."
  },
  {
    title: "Savings for Retirement",
    desc:
      "EPF acts as a long-term retirement savings plan ensuring financial security after retirement."
  },
  {
    title: "Market Reputation",
    desc:
      "Organizations offering EPF gain a strong reputation in the job market and appear more trustworthy to employees."
  },
  {
    title: "Pension Benefits",
    desc:
      "A portion of EPF contributions is transferred to the pension scheme, securing income during old age."
  }
];

const EPFBenefits = () => {
  return (
    <section className="epf-benefits-wrapper">
      <div className="epf-benefits-container">

        {/* LEFT SIDE – STICKY IMAGE */}
        <div className="epf-benefits-left">
          <h2 className="epf-benefits-heading">
            Benefits of EPF Registration
          </h2>
          <p className="epf-benefits-subtext">
            Employees and employers both gain multiple advantages from EPF
            registration. Explore the key benefits below.
          </p>

          <img
            src={epfImage}
            alt="EPF Benefits Illustration"
            className="epf-benefits-image"
          />
        </div>

        {/* RIGHT SIDE – SCROLLABLE CARDS */}
        <div className="epf-benefits-right">
          {benefits.map((item, index) => (
            <div className="epf-benefits-card" key={index}>
              <div className="epf-benefits-icon">✓</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EPFBenefits;
