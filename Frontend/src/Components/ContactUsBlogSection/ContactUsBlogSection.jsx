// ContactUsBlogSection.jsx
import React from "react";
import "./ContactUsBlogSection.css";
import Blog1 from '../../assets/Blog-1.webp';
import Blog2 from '../../assets/Blog-2.webp';
import Blog3 from '../../assets/Blog-3.webp';




const blogPosts = [
  {
    id: 1,
    title: "5 Things You Should Do When Purchasing A Luxury Home",
    date: "August 2, 2021",
    desc:
      "Before you sign the papers, learn the top 5 checks every buyer should perform — from inspections to title reviews.",
    img: Blog1
  },
  {
    id: 2,
    title: "How to Legally Change Your Name: Steps & Process",
    date: "July 18, 2021",
    desc:
      "A clear step-by-step guide to the legal name change process so you can navigate forms, court dates and documents confidently.",
    img:Blog2
  },
  {
    id: 3,
    title: "Notarization vs Attestation: What’s The Difference?",
    date: "June 10, 2021",
    desc:
      "Understand the practical differences between notarization and attestation — when to use each and why it matters for documents.",
    img:Blog3
  },
];


const ContactUsBlogSection = () => {
  return (
    <section className="contactusblogsection-section" aria-labelledby="contactusblogsection-title">
      <div className="contactusblogsection-header">
        <p className="contactusblogsection-subtitle">Our Blog</p>
        <h2 id="contactusblogsection-title" className="contactusblogsection-title">
          Latest Articles & Insights
        </h2>
        <p className="contactusblogsection-description">
          Practical guidance, industry tips and how-to guides — curated to help you make informed decisions.
        </p>
      </div>

      <div className="contactusblogsection-cards">
        {blogPosts.map((post) => (
          <article key={post.id} className="contactusblogsection-card" tabIndex={0}>
            <div className="contactusblogsection-image-wrap" aria-hidden="true">
              <img src={post.img} alt={post.title} className="contactusblogsection-image" />
              <div className="contactusblogsection-image-overlay" />
            </div>

            <div className="contactusblogsection-body">
              <div className="contactusblogsection-meta">
                <time className="contactusblogsection-date">{post.date}</time>
                <span className="contactusblogsection-tag">Insight</span>
              </div>

              <h3 className="contactusblogsection-card-title">{post.title}</h3>
              <p className="contactusblogsection-desc">{post.desc}</p>

              <div className="contactusblogsection-cta-row">
                <a href="#" className="contactusblogsection-read-more" aria-label={`Read more: ${post.title}`}>
                  READ ARTICLE <span className="contactusblogsection-arrow">→</span>
                </a>
                <button className="contactusblogsection-share" aria-label={`Share ${post.title}`}>
                  Share
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContactUsBlogSection;
