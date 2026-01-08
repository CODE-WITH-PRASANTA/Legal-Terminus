import React, { useEffect, useRef, useState } from "react";
import "./Subscribe.css";
import { HiArrowUpRight } from "react-icons/hi2";
import { FiCheckCircle } from "react-icons/fi";
import girl from "../../assets/cta-img1.webp";

const Subscribe = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className={`subscribe-wrapper ${show ? "subscribe-show" : ""}`}
    >
      <div className="subscribe-container">
        {/* LEFT CONTENT */}
        <div className="subscribe-content">
          <h1 className="subscribe-title delay-1">
            Simplify Your Legal & Compliance Work-
            <br />
            Connect with Our Experts Today
          </h1>

          <p className="subscribe-text delay-2">
            Legal Terminus offers complete legal, tax, and compliance support for startups, businesses, and enterprises. We ensure accurate work, timely service, and reliable support—all in one place.
          </p>

          <div className="subscribe-form delay-3">
            <input
              type="email"
              placeholder="Enter your email for legal assistance"
              className="subscribe-input"
            />
            <button className="subscribe-btn">
              Get Free Legal Consultation <HiArrowUpRight />
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE + FLOATING TAGS */}
        <div className="subscribe-visual delay-4">
          <img
            src={girl}
            alt="Legal compliance expert consultation"
            className="subscribe-girl"
          />

          <div className="subscribe-Subscribe-badges">
            <span className="Subscribe-badge Subscribe-badge-1">
              <FiCheckCircle /> Company & Startup Registration
            </span>
            <span className="Subscribe-badge Subscribe-badge-2">
              <FiCheckCircle /> GST, Tax & Compliance Services
            </span>
            <span className="Subscribe-badge Subscribe-badge-3">
              <FiCheckCircle /> Trademark & Legal Documentation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
