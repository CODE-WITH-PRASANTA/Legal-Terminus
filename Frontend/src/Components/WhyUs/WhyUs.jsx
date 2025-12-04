import React from "react";
import {
  LuUserCheck,
  LuBadgeDollarSign,
  LuShieldCheck,
  LuBolt
} from "react-icons/lu";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section className="WhyUs-container" aria-labelledby="whyus-heading">
      <div className="WhyUs-accent" aria-hidden="true" />

      <div className="WhyUs-inner">
        <header className="WhyUs-head">
          <h2 id="whyus-heading" className="WhyUs-title">Why we stand out</h2>
          <p className="WhyUs-subtl">Real people, clear pricing, and compliance-first processes.</p>
        </header>

        <main className="WhyUs-main" role="main">
          <ul className="WhyUs-list" role="list" aria-label="Key reasons we stand out">

            <li className="WhyUs-list-item">
              <span className="WhyUs-badge" aria-hidden="true"><LuUserCheck /></span>
              <span className="WhyUs-list-text">Dedicated project manager for your incorporation</span>
            </li>

            <li className="WhyUs-list-item">
              <span className="WhyUs-badge" aria-hidden="true"><LuBadgeDollarSign /></span>
              <span className="WhyUs-list-text">Transparent & fixed-fee pricing — no hidden charges</span>
            </li>

            <li className="WhyUs-list-item">
              <span className="WhyUs-badge" aria-hidden="true"><LuShieldCheck /></span>
              <span className="WhyUs-list-text">Compliance-first approach with expert guidance</span>
            </li>

            <li className="WhyUs-list-item">
              <span className="WhyUs-badge" aria-hidden="true"><LuBolt /></span>
              <span className="WhyUs-list-text">Fast response time & end-to-end support</span>
            </li>

          </ul>
        </main>

        <aside className="WhyUs-aside" aria-labelledby="whyus-promise">
          <div className="WhyUs-aside-accent" />
          <p id="whyus-promise" className="WhyUs-promise">
            <strong>Our promise:</strong> A smooth, clear, and fully compliant incorporation 
            journey with personalized support at every step.
          </p>
        </aside>
      </div>
    </section>
  );
};

export default WhyUs;
