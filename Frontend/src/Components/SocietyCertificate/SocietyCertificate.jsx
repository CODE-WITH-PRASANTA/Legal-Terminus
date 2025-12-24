import React from "react";
import "./SocietyCertificate.css";

const SocietyCertificate = () => {
  return (
    <section className="cert-wrapper">
      <div className="cert-content">
        <h2>Society Registration Certificate</h2>

        <p>
          The Society Registration Certificate is the official document issued by
          the Registrar of Societies upon registration. To obtain this
          certificate, you must first draft a Memorandum of Association (MOA)
          and Rules &amp; Regulations, select at least seven founding members,
          and submit the required documents to the Registrar of Societies.
        </p>

        <p>
          This certificate is crucial for managing all legal and financial
          activities of the society. With certification, you can open a bank
          account in the society&apos;s name and acquire property. Additionally,
          it is essential for applying for a PAN card, seeking tax exemptions,
          and legally accepting donations and grants.
        </p>
      </div>

      <div className="cert-cta">
        <div className="cert-cta-text">
          <p>
            Connect with RegisterKaro and let our experts handle
            <br />
            the legal hassle while you grow your business.
          </p>
        </div>
        <button className="cert-cta-button">Contact Us</button>
      </div>
    </section>
  );
};

export default SocietyCertificate;
