import React from "react";
import "./LLPOverview.css";

const LLPInfo = () => {
  return (
    <section className="llp-section">
      <div className="llp-container">
        {/* Part 1 - Main heading + intro paragraphs (image 1) */}
        <header className="llp-hero">
          <h1 className="llp-title">What is Limited Liability Partnership (LLP) Registration</h1>

          <div className="llp-paragraphs">
            <p>
              Limited Liability Partnership (LLP) registration is a popular choice for startups and
              small businesses, blending the features of a partnership and a private company. One key
              advantage is that LLPs require no minimum capital, making them accessible to new entrepreneurs.
              The process starts with selecting the availability of an unique business name, which is checked
              for availability using the RUN-LLP service on the Ministry of Corporate Affairs (MCA) portal.
            </p>

            <p>
              To formally register, applicants have to submit a form on the MCA. The form provides the proposed
              name of LLP, the address of its registered office, and details of partners. Every partner should
              have either a Director Identification Number (DIN) or Designated Partner Identification Number (DPIN),
              and a Digital Signature Certificate (DSC) to electronically sign documents. Documents necessary are
              identification and address proof for partners and proof of the registered office address.
            </p>

            <p>
              Once the business name is approved, the LLP agreement is prepared to establish roles, duties, and
              profit-sharing percentages between partners. The agreement is a document of internal governance of the LLP.
              After verification, the MCA delivers a Certificate of Incorporation officially identifying the LLP
              as an existing legal entity.
            </p>

            <p>
              After incorporation, the LLP is required to open a bank account in its name and acquire PAN and TAN for
              tax purposes. Also, businesses can optionally register an MSME to avail government incentives for small
              businesses. LLPs provide management flexibility, individual asset protection, and have lesser compliance
              requirements compared to a private limited company, and hence are a popular choice for small businesses
              looking for a scalable, low-compliance setup.
            </p>
          </div>
        </header>

        {/* Part 2 - LLP Act heading + short description (image 2) */}
        <aside className="llp-act">
          <h2 className="llp-act-title">Limited Liability Partnership Act, 2008</h2>

          <p className="llp-act-text">
            This Act makes provisions for the formation and regulation of limited liability partnerships and for
            matters connected therewith or incidental thereto. As per Company Law, Limited Liability Partnerships (LLPs)
            are unique entities offering limited liability protection to partners while maintaining operational flexibility
            akin to partnerships. The LLP Act (2008) facilitates streamlined registration and operational processes for businesses in India.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default LLPInfo;
