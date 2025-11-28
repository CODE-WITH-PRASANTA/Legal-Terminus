// BlogDetailsOurClient.jsx
import React from "react";
import "./BlogDetailsOurClient.css";

/**
 * BlogDetailsOurClient
 * - No external libs
 * - Inline SVG logos (replace with <img src="..."> if you have assets)
 */

const logos = [
  { id: "bbc", title: "BBC", viewBox: "0 0 120 40", svg: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="4" y="6" width="28" height="28" rx="3" fill="currentColor"/>
      <rect x="36" y="6" width="28" height="28" rx="3" fill="currentColor"/>
      <rect x="68" y="6" width="28" height="28" rx="3" fill="currentColor"/>
    </svg>
  )},
  { id: "discovery", title: "Discovery", viewBox: "0 0 120 40", svg: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="20" cy="20" r="12" fill="currentColor"/>
      <path d="M48 8c6 0 12 4 12 12s-6 12-12 12" stroke="currentColor" strokeWidth="3" fill="none"/>
    </svg>
  )},
  { id: "khou", title: "KHOU", viewBox: "0 0 120 40", svg: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="6" y="8" width="44" height="24" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
      <circle cx="90" cy="20" r="12" stroke="currentColor" strokeWidth="3" fill="none"/>
    </svg>
  )},
  { id: "cnn", title: "CNN", viewBox: "0 0 120 40", svg: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 30V10h18v4h4v12" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M66 30V10h18v20" stroke="currentColor" strokeWidth="3" fill="none"/>
    </svg>
  )},
  { id: "daily", title: "Daily News", viewBox: "0 0 120 40", svg: (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="6" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="44" y="10" width="60" height="8" rx="1" fill="currentColor" opacity="0.08"/>
      <rect x="44" y="22" width="60" height="8" rx="1" fill="currentColor" opacity="0.08"/>
    </svg>
  )},
];

const BlogDetailsOurClient = () => {
  return (
    <section className="blog-details-our-client" aria-labelledby="our-client-heading">
      <div className="client-inner">
        <header className="client-header">
          <div className="client-left">
            <p className="client-eyebrow">OUR CLIENT</p>
            <h2 id="our-client-heading" className="client-title">
              Check our best
              <br />
              clients & partners
            </h2>
          </div>

          <div className="client-right">
            <p className="client-desc">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <p className="client-desc">
              Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </header>

        <div className="client-logos" role="list" aria-label="Client logos">
          {logos.map((l, i) => (
            <div
              className={`client-logo`}
              key={l.id}
              role="listitem"
              aria-label={l.title}
              tabIndex={0}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="logo-wrap" aria-hidden>
                {l.svg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsOurClient;
