import React from "react";
import "./BlogPage.css";

// Import images
import bdp1 from "../../assets/bdp1.webp";
import bdp2 from "../../assets/bdp2.webp";
import bdp3 from "../../assets/bdp3.webp";
import bdp4 from "../../assets/bdp4.webp";
import bdp5 from "../../assets/bdp5.webp";
import bdp6 from "../../assets/bdp6.webp";

const BlogPage = () => {
  const images = [bdp1, bdp2, bdp3, bdp4, bdp5, bdp6];

  const cards = new Array(6).fill(0).map((_, i) => ({
    id: i + 1,
    img: images[i % images.length],
    tags:
      i % 3 === 0 ? ["Federal", "Laws"] : i % 3 === 1 ? ["Laws", "Public"] : ["Laws", "Legal"],
    date: "May 5, 2023",
    title: [
      "Long Live Federals Power Act’s Bright Line",
      "Constitutionals Off-Loading the City Limits",
      "Empirical Study of Fourth Amendment Law",
      "The Common Laws as Statutory Backdrops",
      "Public Reporting of Monitorship Outcomes",
      "Constitutional In One Era and Out the Other",
    ][i],
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit…",
  }));

  return (
    <section className="blogpage-root">
      <div className="blogpage-grid-wrap">
        <div className="blogpage-grid">
          {cards.map((card) => (
            <article key={card.id} className="blogpage-card">
              <div className="blogpage-card-media">
                <img className="blogpage-card-image" src={card.img} alt={card.title} />
                <div className="blogpage-tags">
                  {card.tags.map((t, idx) => (
                    <span className="blogpage-tag" key={idx}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="blogpage-card-body">
                <time className="blogpage-date">{card.date}</time>
                <h3 className="blogpage-title">{card.title}</h3>
                <p className="blogpage-excerpt">{card.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <hr className="blogpage-divider" />

      <aside className="blogpage-newsletter">
        <small className="blogpage-newsletter-label">NEWSLETTER</small>

        <h2 className="blogpage-newsletter-heading">
          Get the Latest <em>Update</em>
          <br />
          From <em>Notrav</em>
        </h2>

        <form
          className="blogpage-newsletter-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="bp-email" className="blogpage-sr-only">
            Your email
          </label>

          <input
            id="bp-email"
            type="email"
            placeholder="Your email"
            className="blogpage-input"
          />

          <button type="submit" className="blogpage-submit" aria-label="subscribe">
            →
          </button>
        </form>
      </aside>
    </section>
  );
};

export default BlogPage;
