import React, { useState } from "react";
import "./GSTRetFAQ.css";

const faqs = [
  {
    q: "What is GST?",
    a: `GST (Goods and Services Tax) is a comprehensive indirect tax introduced in India on 1st July 2017. 
        It replaced multiple indirect taxes such as VAT, service tax, excise duty, etc., bringing them under one umbrella.
        
        GST is a destination-based, multi-stage tax levied at every stage of value addition and includes CGST, SGST, IGST, and UGST.`
  },
  {
    q: "What is a GST return?",
    a: `A GST return is a document containing details of income, sales, purchases, tax collected, and tax paid 
        that a registered taxpayer must file with GST authorities periodically.`
  },
  {
    q: "What is the GST return filing process?",
    a: `The process includes logging into the GST portal, selecting the return period, 
        entering transaction details, verifying data, paying tax, and submitting the return online.`
  },
  {
    q: "What are GSTR-1, GSTR-2, and GSTR-3B?",
    a: `GSTR-1 records outward supplies, GSTR-2 captures inward supplies (auto-populated), 
        and GSTR-3B is a monthly self-declaration summary return.`
  },
  {
    q: "What are the types of GST returns?",
    a: `There are multiple GST returns such as GSTR-1, GSTR-3B, GSTR-4, GSTR-7, GSTR-8, GSTR-9, and GSTR-10 
        depending on the taxpayer category.`
  },
  {
    q: "Who should file GST returns?",
    a: `Every registered business under GST must file returns, including regular taxpayers, 
        composition dealers, e-commerce operators, and TDS deductors.`
  },
  {
    q: "Can GST returns be revised?",
    a: `GST returns cannot be revised once filed, but corrections can be made in subsequent returns.`
  },
  {
    q: "What are the benefits of filing GST returns?",
    a: `Filing GST returns ensures legal compliance, allows input tax credit claims, 
        avoids penalties, and improves business credibility.`
  }
];

const GSTReturnFAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="gstfaq">
      <div className="gstfaq-container">

        {/* LEFT SIDE */}
        <div className="gstfaq-left">
          <h2>FAQs on GST Return Filing Services</h2>
          <p>
            Find clear answers to the most frequently asked questions about GST return filing,
            compliance requirements, processes, and benefits.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="gstfaq-right">
          <div className="gstfaq-list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`gstfaq-item ${active === i ? "active" : ""}`}
              >
                <button
                  className="gstfaq-question"
                  onClick={() => setActive(active === i ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <span className="arrow">{active === i ? "▴" : "▾"}</span>
                </button>

                {active === i && (
                  <div className="gstfaq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GSTReturnFAQ;
