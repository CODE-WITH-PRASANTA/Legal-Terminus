import React from "react";
import "./UdyamRegWhy.css"

const benefits = [
  {
    title: "Complete Online Registration",
    desc: "We handle your entire MSME/Udyam registration process online, from document verification to final submission, ensuring a smooth experience without paperwork hassles.",
  },
  {
    title: "Fast Processing",
    desc: "Get your Udyam Registration done quickly, often within 1 day, so you can access government benefits without delay.",
  },
  {
    title: "Expert Guidance",
    desc: "Receive professional assistance on eligibility, required documents, and form filling to avoid errors and rejections.",
  },
  {
    title: "Official Udyam Certificate",
    desc: "Obtain your digitally signed Udyam Certificate with QR code, issued directly by the Ministry of MSME.",
  },
  {
    title: "Lifetime Validity",
    desc: "Your certificate is valid for life with no renewal needed, saving you time and effort in the future.",
  },
];

const DigiLawyerUdyamHelp = () => {
  return (
    <section className="dl-udyam-help-section">
      <div className="dl-udyam-help-container">
        <h2 className="dl-udyam-help-heading">
          How Can DigiLawyer Help with Udyam Registration?
        </h2>

        <p className="dl-udyam-help-intro">
          DigiLawyer offers a fast, reliable, and 100% online MSME/Udyam
          Registration service, helping your business get officially recognized
          under the Government of India’s Ministry of MSME. Our expert team
          guides you through the entire process, ensuring quick and hassle-free
          registration.
        </p>

        <div className="dl-udyam-help-grid">
          {benefits.map((item, index) => (
            <div key={index} className="dl-udyam-help-card">
              <h3 className="dl-udyam-help-title">{item.title}</h3>
              <p className="dl-udyam-help-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigiLawyerUdyamHelp;
