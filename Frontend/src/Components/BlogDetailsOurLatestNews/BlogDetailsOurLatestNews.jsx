import React, { useEffect, useRef, useState } from "react";
import { FiMessageCircle } from "react-icons/fi";
import img1 from "../../assets/ourblog1.webp";
import img2 from "../../assets/ourblog2.webp";
import img3 from "../../assets/ourblog3.webp";
import "./BlogDetailsOurLatestNews.css";

/*
  NOTE: class names and component name preserved exactly as requested.
  We add more posts (6 total) and implement an infinite auto slider by duplicating the list.
*/

const originalPosts = [
  {
    id: 1,
    img: img1,
    category: "CIVIL LAW",
    title: "The best ways to protect your family and business in 2023",
    date: "February 05 2024",
    comments: 1,
  },
  {
    id: 2,
    img: img2,
    category: "LABOUR LAW",
    title: "Workers charged in a pursuit that paralyzed a payment",
    date: "February 15 2024",
    comments: 1,
  },
  {
    id: 3,
    img: img3,
    category: "CRIMINAL LAW",
    title: "Ten myths about lawyers and criminal defence attorneys",
    date: "February 28 2024",
    comments: 1,
  },
  // three additional posts (same images, different content)
  {
    id: 4,
    img: img1,
    category: "FAMILY LAW",
    title: "How to approach family disputes with the right counsel",
    date: "March 08 2024",
    comments: 2,
  },
  {
    id: 5,
    img: img2,
    category: "EMPLOYMENT LAW",
    title: "Key changes in labour legislation you should know",
    date: "March 18 2024",
    comments: 0,
  },
  {
    id: 6,
    img: img3,
    category: "PENAL LAW",
    title: "Defending complex cases: strategies that work",
    date: "April 02 2024",
    comments: 3,
  },
];

const AUTO_MS = 3800; // autoplay interval

const BlogDetailsOurLatestNews = () => {
  // we duplicate posts for seamless infinite loop
  const posts = [...originalPosts];
  const trackPosts = [...posts, ...posts]; // duplicated array

  const trackRef = useRef(null);
  const cardRef = useRef(null);
  const [index, setIndex] = useState(0); // 0 .. originalLen-1 doubled scrolling triggers reset
  const [isTransitioning, setIsTransitioning] = useState(false);
  const originalLen = posts.length;
  const gap = 36; // must match CSS gap

  // compute shift when DOM loads or on resize
  const computeShift = () => {
    const card = cardRef.current;
    if (!card || !trackRef.current) return 0;
    // width includes margin/gap? We'll compute using offsetWidth and use gap separately.
    return card.offsetWidth + gap;
  };

  // move the track according to index
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const shift = computeShift();
    // apply transition
    requestAnimationFrame(() => {
      track.style.transition = isTransitioning ? "transform 700ms cubic-bezier(.22,.61,.36,1)" : "none";
      const x = -(index * shift);
      track.style.transform = `translateX(${x}px)`;
    });
  }, [index, isTransitioning]);

  // autoplay
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = setInterval(() => {
      // start transitioning
      setIsTransitioning(true);
      setIndex((prev) => prev + 1);
    }, AUTO_MS);

    return () => clearInterval(id);
  }, []);

  // when index reaches originalLen (i.e., we've moved past the first full set),
  // after transition ends we reset to index 0 without transition so it appears infinite.
  useEffect(() => {
    if (index === originalLen) {
      // after one transition completes, reset back to 0 with no transition
      const handle = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 720); // slightly longer than transition to ensure it finished
      return () => clearTimeout(handle);
    }
    // ensure isTransitioning flag is cleared after normal slide
    if (index < originalLen) {
      const t = setTimeout(() => setIsTransitioning(false), 720);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [index, originalLen]);

  // handle resizing so shift is recalculated
  useEffect(() => {
    const onResize = () => {
      // force reapply transform to correct px values
      const track = trackRef.current;
      if (!track) return;
      // temporarily disable transition
      track.style.transition = "none";
      const shift = computeShift();
      const x = -(index * shift);
      track.style.transform = `translateX(${x}px)`;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <section className="blogdetailsourlatestnews-regardingly" aria-labelledby="ourlatest-heading">
      <div className="blogdetailsourlatestnews-inner container">
        <header className="blogdetailsourlatestnews-header">
          <div className="blogdetailsourlatestnews-kicker" style={{ color: "#f6b42a" }}>
            From Our Blog
          </div>
          <h2 id="ourlatest-heading" className="blogdetailsourlatestnews-title">
            Our latest news
          </h2>
        </header>

        {/* Carousel track: we keep the same top-level class name but change layout to a track */}
        <div
          className="blogdetailsourlatestnews-grid"
          role="list"
          aria-roledescription="carousel"
          aria-label="Latest blog posts carousel"
        >
          <div
            className="carousel-track"
            ref={trackRef}
            // inline style initial transform to position correctly before JS computes
            style={{ transform: "translateX(0px)" }}
          >
            {trackPosts.map((p, idx) => (
              <article
                className="blogdetailsourlatestnews-card"
                key={`${p.id}-${idx}`}
                role="listitem"
                ref={idx === 0 ? cardRef : null} // keep a ref to the first card to compute width
              >
                <figure className="blogdetailsourlatestnews-media" aria-hidden>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="blogdetailsourlatestnews-image"
                  />
                </figure>

                <div className="blogdetailsourlatestnews-body">
                  <div className="blogdetailsourlatestnews-category">{p.category}</div>
                  <h3 className="blogdetailsourlatestnews-posttitle">{p.title}</h3>

                  <div className="blogdetailsourlatestnews-meta">
                    <time className="blogdetailsourlatestnews-date" dateTime={p.date}>
                      {p.date}
                    </time>
                    <span className="blogdetailsourlatestnews-divider" />
                    <span className="blogdetailsourlatestnews-comments">
                      <FiMessageCircle className="icon" aria-hidden /> {p.comments} comment
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsOurLatestNews;
