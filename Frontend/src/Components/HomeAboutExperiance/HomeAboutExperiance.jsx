import React, { useEffect, useRef } from "react";
import "./HomeAboutExperiance.css";
import Leftimg from "../../assets/about-5.webp";

const HomeAboutExperiance = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("hae-visible");
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hae-section" ref={sectionRef}>
      <div className="hae-container">
        {/* Left Image */}
        <div className="hae-images">
          <div className="hae-image hae-image--large">
            <img src={Leftimg} alt="Legal consultation and compliance support" />
          </div>
        </div>

        {/* Content */}
        <div className="hae-content">
          <span className="hae-subtitle">ABOUT LEGAL TERMINUS</span>

          <h2 className="hae-title">
            Simplifying Legal & Compliance <br /> Services for Businesses
          </h2>

          <p className="hae-description">
            Legal Terminus helps startups, SMEs, and enterprises manage legal,
            tax, and regulatory requirements with ease. Our expert-driven
            approach ensures accuracy, compliance, and timely execution—so
            you can focus on growing your business with confidence.
          </p>

          <div className="hae-stats">
            <div className="hae-stat">
              <div className="hae-circle hae-circle--green">98%</div>
              <span>Client Satisfaction</span>
            </div>

            <div className="hae-stat">
              <div className="hae-circle hae-circle--blue">100%</div>
              <span>Compliance Accuracy</span>
            </div>

            <div className="hae-stat">
              <div className="hae-circle hae-circle--orange">24×7</div>
              <span>Expert Assistance</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="hae-cta">
        <p>Need legal or compliance support?</p>
        <div className="hae-cta-divider"></div>
        <p>
          <span className="hae-phone-icon">📞</span>
          Talk to a Legal Expert Today (+91 828 009 3456)
        </p>
      </div>
    </section>
  );
};

export default HomeAboutExperiance;
