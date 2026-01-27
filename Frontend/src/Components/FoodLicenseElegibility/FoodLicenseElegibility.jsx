import React from "react";
import "./FoodLicenseElegibility.css";

const steps = [
  {
    title: "Step 1 – Document Submission",
    text:
      "Submit all the necessary business and personal documents required for Food License (FSSAI) registration as per the provided checklist.",
  },
  {
    title: "Step 2 – Application Preparation",
    text:
      "We prepare your FSSAI application in accordance with the Food Safety and Standards Authority of India (FSSAI) guidelines using your business and address details.",
  },
  {
    title: "Step 3 – Digital Signature Certificate (DSC)",
    text:
      "If the applicant does not have a Digital Signature Certificate (DSC), one will be generated and used to sign the FSSAI registration application online.",
  },
  {
    title: "Step 4 – Application Filing with FSSAI",
    text:
      "We submit the FSSAI registration form on the official portal along with the applicable government fees for verification and processing.",
  },
  {
    title: "Step 5 – Inspection and Verification",
    text:
      "The FSSAI authority may inspect the premises or review the submitted details. Our experts coordinate to respond to any clarifications promptly.",
  },
  {
    title: "Step 6 – Approval and License Generation",
    text:
      "Upon successful verification, the FSSAI issues a valid Food License number for your business operations.",
  },
  {
    title: "Step 7 – License Certificate Delivery",
    text:
      "Your FSSAI license certificate will be emailed to you and can be downloaded directly from the official FSSAI portal for display at your business location.",
  },
];

const FoodLicenseElegibility = () => {
  return (
    <section className="foodelg-wrapper">
      <h2 className="foodelg-heading">
        STEPS FOR FOOD LICENSE (FSSAI) REGISTRATION IN INDIA
      </h2>
      <p className="foodelg-subheading">
        The process for obtaining a Food License (FSSAI) registration in India includes the following steps:
      </p>

      <div className="foodelg-timeline">
        <div className="foodelg-timeline-line" />

        {steps.map((step, index) => (
          <div
            key={index}
            className={`foodelg-timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="foodelg-timeline-dot">{index + 1}</div>

            <div className="foodelg-timeline-card">
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodLicenseElegibility;
