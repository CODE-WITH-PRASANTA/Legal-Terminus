import React from "react";
import "./GSTRetProcess.css";
import procedureImg from "../../assets/steps_img.webp"; // left image

const steps = [
  {
    step: "1",
    title: "Register for GSTIN",
    desc: "Register for a GSTIN number generated based on your PAN and state code.",
  },
  {
    step: "2",
    title: "Log in to GST Portal",
    desc: "Login using your username and password on the GST portal.",
  },
  {
    step: "3",
    title: "Access Return Dashboard",
    desc: "Choose the financial year and return period.",
  },
  {
    step: "4",
    title: "File Complete Details",
    desc: "Enter sales, purchases, ITC, tax payable, and other details.",
  },
  {
    step: "5",
    title: "Verify Submission Status",
    desc: "Verify details and generate ARN for tracking.",
  },
  {
    step: "6",
    title: "Payment of Tax",
    desc: "Pay tax via net banking, NEFT, or challan.",
  },
  {
    step: "7",
    title: "Offset Tax Liability",
    desc: "Adjust tax liability using available ITC.",
  },
];

const invoices = [
  "Date of Invoice",
  "Customer title",
  "Transportation and billing location",
  "Client and taxpayer's GSTIN",
  "Area of supply",
  "HSN / SAC code",
  "Item details (quantity, unit, value)",
  "Taxable value and discounts",
  "CGST / SGST / IGST rate",
  "Reverse charge applicability",
  "Signature of supplier",
];

const GSTReturnProcedure = () => {
  return (
    <section className="gst-procedure-section">
      <div className="gst-procedure-header">
        <h2>Procedure for GST Return Filing</h2>
        <p>
          The step-by-step procedure required to file GST returns online is
          explained below:
        </p>
      </div>

      {/* ===== GRID ===== */}
      <div className="gst-procedure-grid">
        {/* LEFT IMAGE */}
        <div className="gst-procedure-image sticky">
          <img src={procedureImg} alt="GST Return Filing" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="gst-procedure-content">
          {/* ===== SNAKE STEPS ===== */}
          <div className="gst-snake-grid">
            {steps.map((item, index) => (
              <div className="gst-snake-card" key={index}>
                <div className="gst-step-circle">{item.step}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                {index !== steps.length - 1 && (
                  <span className="gst-arrow">➜</span>
                )}
              </div>
            ))}
          </div>

          {/* ===== INVOICE SECTION ===== */}
          <div className="gst-invoice-section">
            <h3>Invoices Needed to File GST Return Online</h3>
            <p>
              GST-registered taxpayers must issue GST-compliant invoices. The
              following details are mandatory:
            </p>

            <ul className="gst-invoice-list">
              {invoices.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GSTReturnProcedure;
