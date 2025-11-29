import React from "react";
import "./BlogDetailsPage.css";

const BlogDetailsPage = () => {
  const cards = new Array(9).fill(0).map((_, i) => ({
    id: i + 1,
    img: `/images/placeholder-${(i % 6) + 1}.jpg`, // replace with your images
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
    ][i % 6],
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit…",
  }));

  return (
    <section className="blogdetailspage-root" aria-labelledby="blogDetailsHeading">
      <div className="blogdetailspage-grid-wrap">
        <div className="blogdetailspage-grid">
          {cards.map((card) => (
            <article key={card.id} className="blogdetailspage-card">
              <div className="blogdetailspage-card-media">
                <img
                  className="blogdetailspage-card-image"
                  src={card.img}
                  alt={card.title}
                />
                <div className="blogdetailspage-tags">
                  {card.tags.map((t, idx) => (
                    <span className="blogdetailspage-tag" key={idx}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="blogdetailspage-card-body">
                <time className="blogdetailspage-date">{card.date}</time>
                <h3 className="blogdetailspage-title">{card.title}</h3>
                <p className="blogdetailspage-excerpt">{card.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <hr className="blogdetailspage-divider" />

      <aside className="blogdetailspage-newsletter">
        <small className="blogdetailspage-newsletter-label">NEWSLETTER</small>
        <h2 className="blogdetailspage-newsletter-heading">
          Get the Latest <em>Update</em>
          <br />
          From <em>Notrav</em>
        </h2>

        <form
          className="blogdetailspage-newsletter-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="bd-email" className="blogdetailspage-sr-only">
            Your email
          </label>

          <input
            id="bd-email"
            name="email"
            type="email"
            placeholder="Your email"
            className="blogdetailspage-input"
          />

          <button type="submit" aria-label="subscribe" className="blogdetailspage-submit">
            →
          </button>
        </form>
      </aside>
    </section>
  );
};

export default BlogDetailsPage;
