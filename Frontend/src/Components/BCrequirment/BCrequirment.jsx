import React from "react";
import "./BCrequirment.css";

const RequirementsPvt = () => {
  return (
    <section className="req-section">
      <div className="req-container">
        {/* Heading + intro */}
        <header className="req-header">
          <h2 className="req-title">
            Benefits of Bar Code Registration in India
          </h2>
          <p className="req-subtitle">
            A barcode is a unique code printed on products. It can be scanned to quickly get product details from the system. Businesses use barcode registration for many useful reasons:
          </p>
        </header>

        {/* Cards */}
        <div className="req-grid">
          {/* 1 */}
          <article className="req-card">
            <h3 className="req-card-title">Easy Inventory Management</h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
             Stores can manage and track thousands of products easily using barcodes, from manufacturing to final sale.
            </p>
          </article>

          {/* 2 */}
          <article className="req-card">
            <h3 className="req-card-title">Better Asset Tracking</h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              Barcodes help businesses label and track assets like computers, machines, and other office equipment.
            </p>
          </article>

          {/* 3 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Simple Return Tracking
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              Barcodes make it easy to track product returns, especially in online shopping. They also help track invoices and payments.
            </p>
          </article>

          {/* 4 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Fewer Mistakes
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              Since barcode scanning is automatic, it reduces manual data entry and lowers the chance of errors.
            </p>
          </article>

          {/* 5 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Affordable and Convenient
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              Barcodes are low-cost, easy to create, and simple to print on product packaging.
            </p>
          </article>

          {/* 4 */}
          <article className="req-card">
            <h3 className="req-card-title">
              Product Details & Authenticity
            </h3>
            <div className="req-card-underline" />
            <p className="req-card-text">
              Barcodes store useful info like product number, batch number, and serial number, helping confirm product genuineness.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RequirementsPvt;
