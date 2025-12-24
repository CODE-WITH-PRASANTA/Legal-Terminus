import React from "react";
import "./EPFRegProcess.css";

const steps = [
  {
    title: "Step 1 – Visit the EPFO Website",
    text:
      "Firstly, you need to visit the official EPFO website and hit the establishment registration button present on the home page.",
  },
  {
    title: "Step 2 – Register on USSP",
    text:
      "After clicking on the establishment registration button, Unified Shram Suvidha Portal (USSP) sign up page will appear on the screen. Then, you need to click the sign up button.",
  },
  {
    title: "Step 3 – Log in to the USSP",
    text:
      "Once the account is created on the USSP, you need to log in. After that, opt for the registration for the EPFO-ESIC button. Thereafter, hit the Apply for new registration button.",
  },
  {
    title: "Step 4 – Two Options Available",
    text:
      "You will have two options — the Employees Provident Fund and Miscellaneous Provision Act, 1952 and the Employees State Insurance Act, 1948. Select the first option and click the submit button.",
  },
  {
    title: "Step 5 – Fill out the Registration Form",
    text:
      "The registration form for EPFO will open. You need to fill in all sections of the form.",
  },
  {
    title: "Step 6 – Attach DSC",
    text:
      "After that, you need to attach the digital signature certificate by clicking on the digital signature button present on the next page.",
  },
  {
    title: "Step 7 – EPF Registration Confirmation Message",
    text:
      "After uploading the DSC, you will get a successful completion message. Further, you will get an email from USSP with a confirmation that EPFO registration is successfully completed.",
  },
];

const GSTProcess = () => {
  return (
    <section className="gst-wrapper">
      {/* ================== PROCESS SECTION ================== */}
      <h2 className="gst-heading">Employee PF Registration Process for Employers</h2>
      <p className="gst-subheading">
        There is a desired Employee PF Registration process for employers as per the government rules and regulations. The well-defined employee provident fund registration process is as follows
      </p>

      <div className="snake-grid">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`snake-step ${
              index % 2 !== 0 ? "right-align" : ""
            }`}
          >
            <div className="step-card">
              <span className="step-badge">{index + 1}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>

            {/* SVG Arrow */}
            {index < steps.length - 1 && (
              <svg
                className={`snake-arrow ${
                  index % 2 !== 0 ? "arrow-left" : "arrow-right"
                }`}
                width="120"
                height="60"
                viewBox="0 0 120 60"
                fill="none"
              >
                <path
                  d="M5 30 H100"
                  stroke="#f4a62a"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                <polygon
                  points="100,24 115,30 100,36"
                  fill="#f4a62a"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

export default GSTProcess;
