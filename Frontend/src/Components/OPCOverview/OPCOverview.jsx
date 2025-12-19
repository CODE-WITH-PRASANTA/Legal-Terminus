import React from "react";
import "./OPCOverview.css";
import opcImage from "../../assets/overview-icon.webp"; // adjust path if needed

const OPCOverview = () => {
  return (
    <section className="opc-section">
      <div className="opc-container">
        {/* LEFT CONTENT */}
        <div className="opc-text-wrapper">
          <h1 className="opc-heading">
            One Person Company (OPC) Registration in India – Overview
          </h1>

          <p>
            A One Person Company (OPC) is a perfect business type for solo
            entrepreneurs in India who want the advantages of a registered
            company coupled with the ease of a single-owner business. A sole
            person can start and run a business with the benefit of limited
            liability protection, which protects personal assets from the
            liabilities of the business.
          </p>

          <p>
            Registering a One Person Company (OPC) in India is straightforward
            but involves several legal steps. First, you must choose a unique
            business name and get it approved through the Ministry of Corporate
            Affairs (MCA) portal using the SPICe form. Next, you need to prepare
            and file the Memorandum of Association (MoA) and Articles of
            Association (AoA) as per the Companies Act, 2013.
          </p>

          <p>
            After submitting address proof and identity documents, and once the
            Registrar of Companies (RoC) approves them, the company is issued a
            Certificate of Incorporation. OPCs have fewer compliance obligations
            than private or public limited companies.
          </p>

          <p>
            This structure is ideal for entrepreneurs who want complete control
            over business decisions while enjoying the benefits of a registered
            company. Our expert OPC registration services ensure a smooth,
            compliant, and hassle-free setup.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="opc-image-wrapper">
          <img src={opcImage} alt="OPC Registration Illustration" />
        </div>
      </div>
    </section>
  );
};

export default OPCOverview;
