import React from "react";
import "./HomeLatestBlog.css";
import HomeLatestBlogImg from "../../assets/LatestBlog.webp";

const HomeLatestBlog = () => {
  return (
    <section className="hlb-section">
      <div className="hlb-container">

        {/* Heading */}
        <div className="hlb-header">
          <span className="hlb-subtitle">VISITING OUR BLOG</span>
          <h2 className="hlb-title">
            Latest News And Articles From <br /> Legal Terminus Blog
          </h2>
          <p className="hlb-subdesc">
            Stay informed with the latest legal insights, compliance updates, taxation news, and expert guidance curated by the Legal Terminus team.
          </p>
        </div>

        {/* Content Grid */}
        <div className="hlb-grid">

          {/* Left Featured Blog */}
          <article className="hlb-featured">
            <div className="hlb-meta">
              <span>Legal Compliance</span>
              <span>• Mar 23, 2024</span>
            </div>

            <h3 className="hlb-featured-title">
              Why Legal Compliance Is Crucial for Growing Businesses in India
            </h3>

            <p className="hlb-featured-desc">
              Legal Terminus explains how proper compliance, timely filings,
              and professional legal support help businesses avoid penalties
              and grow with confidence in India’s regulatory ecosystem.
            </p>

            <div className="hlb-image-wrapper">
              <img src={HomeLatestBlogImg} alt="Legal Terminus Blog" />
            </div>
          </article>

          {/* Right Blog List (Scrollable) */}
          <div className="hlb-list hlb-scroll">

            <article className="hlb-card">
              <div className="hlb-meta">
                <span>Company Law</span>
                <span>• April 10, 2024</span>
              </div>
              <h4 className="hlb-card-title">
                Private Limited Company Registration: Step-by-Step Guide
              </h4>
            </article>

            <article className="hlb-card">
              <div className="hlb-meta">
                <span>Taxation</span>
                <span>• April 05, 2024</span>
              </div>
              <h4 className="hlb-card-title">
                GST Registration: Who Needs It and How to Apply Easily
              </h4>
            </article>

            <article className="hlb-card">
              <div className="hlb-meta">
                <span>Startup Advisory</span>
                <span>• March 29, 2024</span>
              </div>
              <h4 className="hlb-card-title">
                OPC vs LLP vs Private Limited: Best Structure for Startups
              </h4>
            </article>

            <article className="hlb-card">
              <div className="hlb-meta">
                <span>Compliance</span>
                <span>• March 22, 2024</span>
              </div>
              <h4 className="hlb-card-title">
                Annual ROC Compliance Checklist for Indian Companies
              </h4>
            </article>

            <article className="hlb-card">
              <div className="hlb-meta">
                <span>Legal Updates</span>
                <span>• March 15, 2024</span>
              </div>
              <h4 className="hlb-card-title">
                Latest MCA & GST Rule Changes Every Business Should Know
              </h4>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLatestBlog;
