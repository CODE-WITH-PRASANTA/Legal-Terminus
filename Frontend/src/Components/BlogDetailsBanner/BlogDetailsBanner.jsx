// BlogDetailsBanner.jsx
// Plain React component + separate CSS (see below) to replicate the provided design.

import React from 'react';
import Banner from '../../assets/bg-banner.webp';
import './BlogDetailsBanner.css';

const BlogDetailsBanner = () => {
  return (
    <section className="blog-details-banner">
      <div className="blog-details-banner-top container">
        <div className="blog-details-banner-left">
          <h1 className="blog-details-banner-headline">
            We Stand Always for
            <br />
            Right Justice
          </h1>

          {/* decorative scribble underline (SVG) */}
          <div className="blog-details-banner-scribble" aria-hidden>
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="blog-details-banner-scribble-svg">
              <path d="M10 40 C220 10, 480 10, 700 40 C920 70,1180 80,1190 80" stroke="#f7943d" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.95" />
              <path d="M30 60 C260 30,520 30,740 60 C960 90,1160 100,1180 100" stroke="#ffb06a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.95" />
            </svg>
          </div>
        </div>

        <aside className="blog-details-banner-right">
          <p className="blog-details-banner-lead">
            Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed. Beatae vitae dicta.
          </p>
        </aside>
      </div>

      {/* big image stripe */}
      <div className="blog-details-banner-image-strip" style={{backgroundImage: `url(${Banner})`}}>
      </div>
    </section>
  );
};

export default BlogDetailsBanner;
