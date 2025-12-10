import React from "react";
import "./TrustCertificate.css";

const TrustCertificateSection = () => {
  return (
    <section className="cert-section">
      {/* MAIN HEADING + INTRO */}
      <h2 className="cert-title">Trust Registration Certificate</h2>

      <p className="cert-intro">
        A Trust Registration Certificate is an official document issued by the
        Registrar of Trusts upon the successful registration of a trust. This
        certificate is issued under:
      </p>

      <ul className="cert-acts">
        <li>
          <strong>The Indian Trusts Act, 1882</strong> – for private trusts
        </li>
        <li>
          <strong>The relevant State Public Trust Act</strong> – for public
          trusts
        </li>
      </ul>

      <p className="cert-intro">
        The certificate is official proof that the trust is legally formed,
        recognized by the government, and allowed to carry out its charitable,
        religious, or private activities.
      </p>

      {/* GRID CARDS */}
      <div className="cert-grid">
        {/* CARD 1 – WHY DO YOU NEED IT */}
        <article className="cert-card">
          <h3 className="cert-card-heading">Why Do You Need It?</h3>
          <p className="cert-card-text">
            The Trust Registration Certificate is crucial for several reasons:
          </p>
          <ul className="cert-list">
            <li>
              <strong>Legal Recognition:</strong> It proves the trust’s
              existence and structure, protecting its operations under the law.
            </li>
            <li>
              <strong>Bank Account Opening:</strong> Required to open a bank
              account in the name of the trust.
            </li>
            <li>
              <strong>Tax Benefits &amp; 12A/80G Registration:</strong> A valid
              certificate is needed to apply for income tax exemptions.
            </li>
            <li>
              <strong>Fundraising &amp; Donations:</strong> Establishes
              credibility and is often mandatory for receiving grants or
              donations.
            </li>
            <li>
              <strong>Compliance:</strong> Ensures the trust is registered under
              government norms, preventing legal issues in the future.
            </li>
          </ul>
        </article>

        {/* CARD 2 – HOW TO DOWNLOAD */}
        <article className="cert-card">
          <h3 className="cert-card-heading">
            How to Download the Trust Registration Certificate?
          </h3>
          <p className="cert-card-text">
            Once the trust is registered, the registration certificate can be
            collected either:
          </p>

          <ul className="cert-list">
            <li>
              <strong>Physically:</strong> From the office of the
              Sub-Registrar/Charity Commissioner, where the trust was
              registered.
            </li>
            <li>
              <strong>Online</strong> (if available in your state):
              <ul className="cert-sublist">
                <li>
                  Visit the official website of the Charity Commissioner or
                  Registrar of Trusts.
                </li>
                <li>Log in using your registration details.</li>
                <li>
                  Navigate to “Registered Trusts” or “Trust Search”.
                </li>
                <li>
                  Enter your trust’s name or registration number.
                </li>
                <li>Download and print the certificate in PDF format.</li>
              </ul>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default TrustCertificateSection;
