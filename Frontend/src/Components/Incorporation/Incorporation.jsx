// FILE: Incorporation.jsx
import React from "react";
// Keeping react-icons (Ant Design) for clean glyphs used throughout
import { AiOutlineCheckCircle, AiOutlineClockCircle, AiOutlineFileText, AiOutlineTrophy } from "react-icons/ai";
import { motion } from "framer-motion";
import "./Incorporation.css";

/**
 * NOTE:
 * - All original function, component and class names preserved exactly.
 * - Only presentational markup and additional wrapper classes were added to enable a fresher design.
 * - Content text remains verbatim.
 */

const Incorporation = () => {
  return (
    <main className="incorporation-container" aria-labelledby="inc-title">
      {/* HERO / Header */}
      <header
        className="incorporation-hero"
        role="region"
        aria-label="Incorporation hero"
      >
        {/* decorative grid wrapper added for modern layout (doesn't change original class names) */}
        <div className="incorporation-hero-grid">
          <motion.div
            className="incorporation-hero-inner"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, ease: "easeOut" }}
            aria-hidden="false"
          >
            <div className="incorporation-eyebrow">Trusted Business Setup</div>

            <h1 id="inc-title" className="incorporation-title">
              Incorporation of Wholly Owned Subsidiary in India
            </h1>

            <p className="incorporation-tagline">Save 50% Today on Professional Services</p>

            <p className="incorporation-intro">
              Legal Terminus can help you with Incorporation of Wholly Owned
              Subsidiary (WOS) in India, as and when required, in a hassle-free
              manner within a reasonable time span. We provide expert assistance
              to meet your business setup needs in India.
            </p>

            <div className="incorporation-cta-wrap">
              <a
                href="#inc-features"
                className="incorporation-cta"
                role="button"
                aria-label="See what's included"
              >
                See what's included
              </a>
              <a
                href="tel:"
                className="incorporation-cta-secondary"
                aria-label="Contact Legal Terminus"
              >
                Contact Legal Terminus
              </a>
            </div>
          </motion.div>

          <motion.div
            className="incorporation-hero-panel"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            aria-hidden="true"
          >
            <div className="incorporation-hero-stats">
              <div className="incorporation-stat">
                <div className="inc-stat-value">1-2</div>
                <div className="inc-stat-label">Weeks to register</div>
              </div>
              <div className="incorporation-divider" />
              <div className="incorporation-stat">
                <div className="inc-stat-value">2-4</div>
                <div className="inc-stat-label">Days for DSC</div>
              </div>
            </div>

            <div className="incorporation-hero-badge">Limited time: 50% off</div>
          </motion.div>
        </div>
      </header>

      {/* FEATURES / What's Included */}
      <section
        id="inc-features"
        className="incorporation-features"
        aria-labelledby="inc-features-title"
        role="region"
      >
        <motion.h2
          id="inc-features-title"
          className="incorporation-features-title"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          What's Included?
        </motion.h2>

        {/* modern cards grid with subtle glass and badges */}
        <div className="incorporation-features-grid">
          <article className="incorporation-feature feature-card" tabIndex={0} aria-labelledby="f1">
            <div className="inc-feature-left">
              <span className="incorporation-feature-icon" aria-hidden="true">
                <AiOutlineCheckCircle />
              </span>
              <div>
                <h3 id="f1" className="incorporation-feature-title">Registration in 1-2 Weeks</h3>
                <p className="incorporation-feature-desc">Registration in 1-2 Weeks</p>
              </div>
            </div>
            <div className="inc-feature-badge">Fast</div>
          </article>

          <article className="incorporation-feature feature-card" tabIndex={0} aria-labelledby="f2">
            <div className="inc-feature-left">
              <span className="incorporation-feature-icon" aria-hidden="true">
                <AiOutlineClockCircle />
              </span>
              <div>
                <h3 id="f2" className="incorporation-feature-title">MCA Name Approval</h3>
                <p className="incorporation-feature-desc">MCA Name Approval</p>
              </div>
            </div>
            <div className="inc-feature-badge badge-muted">Included</div>
          </article>

          <article className="incorporation-feature feature-card" tabIndex={0} aria-labelledby="f3">
            <div className="inc-feature-left">
              <span className="incorporation-feature-icon" aria-hidden="true">
                <AiOutlineFileText />
              </span>
              <div>
                <h3 id="f3" className="incorporation-feature-title">DSC in 2-4 Days</h3>
                <p className="incorporation-feature-desc">DSC in 2-4 Days</p>
              </div>
            </div>
            <div className="inc-feature-badge badge-strong">Priority</div>
          </article>

          <article className="incorporation-feature feature-card" tabIndex={0} aria-labelledby="f4">
            <div className="inc-feature-left">
              <span className="incorporation-feature-icon" aria-hidden="true">
                <AiOutlineTrophy />
              </span>
              <div>
                <h3 id="f4" className="incorporation-feature-title">DIN, PAN, and SPICE+ Compliance</h3>
                <p className="incorporation-feature-desc">DIN, PAN, and SPICE+ Compliance</p>
              </div>
            </div>
            <div className="inc-feature-badge">Compliant</div>
          </article>

          <article className="incorporation-feature feature-card" tabIndex={0} aria-labelledby="f5">
            <div className="inc-feature-left">
              <span className="incorporation-feature-icon" aria-hidden="true">
                <AiOutlineCheckCircle />
              </span>
              <div>
                <h3 id="f5" className="incorporation-feature-title">MOA &amp; AOA Drafting</h3>
                <p className="incorporation-feature-desc">MOA &amp; AOA Drafting</p>
              </div>
            </div>
            <div className="inc-feature-badge badge-muted">Docs</div>
          </article>
        </div>
      </section>

      {/* CALL TO ACTION / Contact card */}
      <aside className="incorporation-contact" role="region" aria-label="Call to action">
        <motion.div
          className="incorporation-contact-card contact-panel"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="contact-left">
            <strong className="incorporation-contact-spark">Limited time</strong>
            <p className="incorporation-contact-copy">
              Save 50% Today on Professional Services — get a quick consultation and step-by-step support to register your Wholly Owned Subsidiary in India.
            </p>
          </div>

          <div className="contact-actions-vertical">
            <a className="incorporation-cta" href="#contact" aria-label="Book a consultation">Book a consultation</a>
            <a className="incorporation-cta-secondary" href="#contact" aria-label="Request quote">Request quote</a>
            <a className="incorporation-quick" href="tel:" aria-label="Quick call">Quick call</a>
          </div>
        </motion.div>
      </aside>
    </main>
  );
};

export default Incorporation;
