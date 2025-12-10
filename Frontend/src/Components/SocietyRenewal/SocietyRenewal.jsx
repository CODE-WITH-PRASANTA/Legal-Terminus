import React from "react";
import "./SocietyRenewal.css";

const renewalPoints = [
  {
    title: "Submit Renewal Application",
    text: "File a renewal application with the Registrar of Societies before the current registration expires.",
  },
  {
    title: "Provide Updated Documents",
    text: "Submit documents such as the original registration certificate, annual audit reports, updated list of governing body members, and minutes of Annual General Meetings.",
  },
  {
    title: "Pay Renewal Fees",
    text: "Pay the prescribed renewal fees as per the rules of the respective state.",
  },
];

const cancellationPoints = [
  {
    title: "Failure to File Reports",
    text: "Not filing annual reports or other required documents with the Registrar.",
  },
  {
    title: "Operating Against Objectives",
    text: "Running the society in a way that conflicts with the stated objectives in the MOA.",
  },
  {
    title: "Illegal Activities",
    text: "Engaging in activities that are unlawful or contrary to public policy.",
  },
  {
    title: "Financial Mismanagement",
    text: "Misuse or mismanagement of society funds and financial irregularities.",
  },
  {
    title: "Fraudulent Registration",
    text: "Obtaining registration through false information or fraudulent means.",
  },
  {
    title: "Bankruptcy or Closure",
    text: "Becoming bankrupt or ceasing to operate as a functioning society.",
  },
];

const RenewalCancellation = () => {
  return (
    <section className="rc-wrapper">
      <header className="rc-header">
        <h2>Renewal and Cancellation of Society Registration</h2>
        <p>
          It is important to know the requirements and legal grounds for
          renewing or canceling a society&apos;s registration.
        </p>
      </header>

      {/* PART 1 – Renewal */}
      <section className="rc-section">
        <h3 className="rc-subtitle">Renewal of Society Registration</h3>
        <p className="rc-intro">
          Society registrations are generally valid for 5 years and require
          timely renewal. The renewal process typically involves:
        </p>

        <div className="rc-grid rc-grid--renewal">
          {renewalPoints.map((item) => (
            <article className="rc-card rc-card--renewal" key={item.title}>
              <h4 className="rc-card-title">{item.title}</h4>
              <p className="rc-card-text">{item.text}</p>
            </article>
          ))}
        </div>

        <p className="rc-note">
          It is essential to renew registration on time to avoid penalties and
          maintain legal recognition.
        </p>
      </section>

      {/* PART 2 – Cancellation */}
      <section className="rc-section">
        <h3 className="rc-subtitle">Society Registration Cancellation</h3>
        <p className="rc-intro">
          The Registrar of Societies can cancel a society&apos;s registration
          for various reasons, including:
        </p>

        <div className="rc-grid rc-grid--cancellation">
          {cancellationPoints.map((item) => (
            <article className="rc-card rc-card--cancellation" key={item.title}>
              <h4 className="rc-card-title">{item.title}</h4>
              <p className="rc-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};

export default RenewalCancellation;
