import React from "react";
import "./EPFRegOverview.css";
import epfHeroImg from "../../assets/img-5.webp";
import epfInfoImg from "../../assets/img-4.webp";

const EPFRegistration = () => {
  return (
    <section className="epf-wrapper">

      {/* ===== SECTION 1 : OVERVIEW ===== */}
      <div className="epf-overview">
        <div className="epf-overview-text">
          <h2>EPF Registration – An Overview</h2>
          <p>
            For those who are working as an employee in an organization, the Employee Provident Fund (EPF) is a specialist fund that offers retirement and related benefits.
          </p>
          <p>
            Under The Employees' Provident Funds and Miscellaneous Provisions Act, 1952, organizations that meet certain requirements—including all workers receiving fixed wages—must register for EPF. To avoid fines, employers must proceed with EPF registration within a month of recruiting more than 20 workers.
          </p>
          <p>
            Every employee receives an EPF number and a Universal Account Number (UAN), which are unaffected by changes in employment. Section 2(3) of the Act applies to all establishments in India. EPF registration in India is mandatory for employers with 20+ employees.
          </p>
          <p>
            Get employees provident fund organization registration along with easy epfo signup through our experts and streamline your company pf registration journey.
          </p>
        </div>

        <div className="epf-overview-img">
          <img src={epfHeroImg} alt="EPF Registration" />
        </div>
      </div>

      {/* ===== SECTION 2 : WHAT IS EPF ===== */}
      <div className="epf-info">
        <div className="epf-info-img">
          <img src={epfInfoImg} alt="What is EPF" />
        </div>

        <div className="epf-info-text">
          <h2>What is an EPF?</h2>
          <p>
            The term "EPF" stands for Employee Provident Fund, a retirement savings plan popular in nations like India and Malaysia in which both the company and the employee contribute.
          </p>
          <p>
           The Employee Provident Fund Ordinance, which was later transformed into the Employees' Provident Funds & Miscellaneous Provisions Act, of 1952, which applied to all states, was how the Indian government founded the EPF in 1951.
          </p>
          <p>
            Maintaining a strong relationship between employer and employee is the fund's primary goal. EPF provides EPS, risk coverage, and a uniform account to meet emergency needs and long-term goals. Businesses need to register with EPFO.
          </p>

          <button className="epf-primary-btn">
            Book Free Consultation Now
          </button>
        </div>
      </div>

      {/* ===== SECTION 3 : EMPLOYEE DEFINITION ===== */}
      <div className="epf-employee">
        <h2>
          Meaning of Employee under EPF Registration
        </h2>

        <p>
          As per Section 2(f) of the EPF Act, an employee includes any individual
          earning wages directly or indirectly from an establishment.
        </p>

        <div className="epf-employee-grid">
          {[
            {
              title: "Full-Time Employees",
              desc: "Permanent employees working on a long-term basis with the organization."
            },
            {
              title: "Part-Time Employees",
              desc: "Employees working for limited hours but still covered under EPF."
            },
            {
              title: "Work From Home Employees",
              desc: "Remote employees working for a fixed duration under the employer."
            },
            {
              title: "Contractors",
              desc: "Individuals hired for specific projects under the establishment."
            },
            {
              title: "Consultants",
              desc: "Professionals providing consulting services for a defined period."
            },
            {
              title: "Freelancers",
              desc: "Freelancers included under EPF per Social Security Code amendments."
            }
          ].map((item, index) => (
            <div className="epf-employee-card" key={index}>
              <span className="epf-check">✔</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SECTION 4 : CTA ===== */}
      <div className="epf-cta">
        <button className="epf-secondary-btn">
          Schedule a Call Now
        </button>
      </div>

    </section>
  );
};

export default EPFRegistration;
