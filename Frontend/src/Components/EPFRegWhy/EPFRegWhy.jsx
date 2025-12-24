import React from "react";
import "./EPFRegWhy.css";

const reasons = [
  "Proven record of 5000+ successful EPF registrations in India",
  "Company PF registration solutions for 10+ industries",
  "Quick turnaround time – 5X better than competitors",
  "Over 1 million employees covered through our UAN PF registration services",
  "15+ years of experience in PF UAN registration and compliance management",
  "We help you register for UAN number",
  "Seamless integration of EPFO registration with your payroll system",
  "24/7 client support for your employees’ provident fund registration needs",
  "Guidance and training on how to register UAN",
  "Assistance in updating EPFO UAN registered mobile number",
];

const EPFWhyLegalTerminus = () => {
  return (
    <section className="epf-why-wrapper">
      <h2 className="epf-why-heading">
        Why LegalTerminus is the Top Pick for EPF Registration in India?
      </h2>

      <p className="epf-why-intro">
        In the last decade, LegalTerminus has emerged as the most reliable partner for
        EPF registration in India. With a network of 10,000+ professionals, we
        streamline the employee provident fund registration process for your
        business at an affordable rate. Furthermore, we help you register for
        UAN number.
      </p>

      <p className="epf-why-subintro">
        Given below are the reasons why business owners trust us and consider us
        as the first choice for employee provident fund new registration in
        India:
      </p>

      <div className="epf-why-grid">
        {reasons.map((item, index) => (
          <div key={index} className="epf-why-item">
            <span className="epf-why-check">✔</span>
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="epf-why-cta">
        <button className="epf-why-btn">
          Start Free Consultation Today
        </button>
      </div>
    </section>
  );
};

export default EPFWhyLegalTerminus;
