// BlogDetailsAboutUs.jsx
import React from "react";
import { FiCheckSquare, FiShield, FiThumbsUp, FiDollarSign } from "react-icons/fi";
import "./BlogDetailsAboutUs.css";

/* Replace these with your actual image paths */
import Office from "../../assets/aboutus1.webp";
import Portrait from "../../assets/aboutus2.webp";

const features = [
  { id: 1, icon: <FiCheckSquare />, title: "Best Legal Services" },
  { id: 2, icon: <FiShield />, title: "100% Success Rate" },
  { id: 3, icon: <FiThumbsUp />, title: "Expert Lawyer" },
  { id: 4, icon: <FiDollarSign />, title: "Affordable Cost Rate" },
];

const BlogDetailsAboutUs = () => {
  return (
    <section className="blog-details-about-us" aria-labelledby="aboutus-heading">
      <div className="bda-container">
        <div className="bda-grid">
          {/* Left: overlapping image composition */}
          <div className="bda-media" aria-hidden>
            <div
              className="bda-media-bg"
              style={{ backgroundImage: `url(${Office})` }}
              role="img"
              aria-label="Office background"
            />
            <img
              className="bda-portrait"
              src={Portrait}
              alt="Attorney portrait"
              loading="lazy"
            />
          </div>

          {/* Right: copy, features, CTA */}
          <div className="bda-copy">
            <p className="bda-eyebrow">ABOUT US</p>

            <h2 id="aboutus-heading" className="bda-title">
              Your legal safety is
              <br />
              our top priority
            </h2>

            <p className="bda-lead">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam. We deliver practical, ethical, and
              strategic representation focused on outcomes.
            </p>

            <ul className="bda-features" role="list">
              {features.map((f, i) => (
                <li className="bda-feature" key={f.id}>
                  <span className="bda-feature-icon" aria-hidden>
                    {f.icon}
                  </span>
                  <span className="bda-feature-text">{f.title}</span>
                </li>
              ))}
            </ul>

            <div className="bda-cta-wrap">
              <button className="bda-cta" type="button" aria-label="About us">
                ABOUT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsAboutUs;
