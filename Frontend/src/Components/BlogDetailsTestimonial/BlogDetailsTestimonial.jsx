import React, { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import testmain from "../../assets/aboutus2.webp";
import test1 from "../../assets/cf1.webp";
import test2 from "../../assets/cf2.webp";
import test3 from "../../assets/cf4.webp";
import "./BlogDetailsTestimonial.css";

const testimonials = [
  {
    id: 1,
    quote:
      "Ignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi, sint occaecatiii gnissimos ducimus qui blanditiis.",
    name: "Rhonda Najar",
    role: "Law Student",
    avatar: test1,
  },
  {
    id: 2,
    quote:
      "Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "James Carter",
    role: "Associate",
    avatar: test2,
  },
  {
    id: 3,
    quote:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    name: "Maya Lee",
    role: "Client",
    avatar: test3,
  },
];

const SLIDE_INTERVAL_MS = 4500;

const BlogDetailsTestimonial = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, SLIDE_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section
      className="testimonial regardingly"
      aria-label="Testimonials section"
    >
      <div className="testimonial-inner">
        <div
          className="test-left center-left"
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials slider"
        >
          <div className="kicker">TESTIMONIAL</div>

          <h2 className="headline">What they say</h2>

          <div className="quote-mark" aria-hidden>
            <FaQuoteLeft />
          </div>

          <div className="slider" role="list" aria-live="polite">
            {testimonials.map((t, i) => {
              const isActive = i === index;
              const offset = i - index;
              let rel = offset;
              if (offset <= -Math.floor(testimonials.length / 2))
                rel = offset + testimonials.length;
              else if (offset > Math.floor(testimonials.length / 2))
                rel = offset - testimonials.length;

              const posClass = `pos${rel < 0 ? rel : rel === 0 ? "" : rel}`.replace(
                /^pos$/,
                "pos0"
              );

              return (
                <article
                  key={t.id}
                  className={`slide ${isActive ? "active" : ""} ${posClass}`}
                  aria-hidden={!isActive}
                  role="listitem"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${testimonials.length}`}
                >
                  <div className="slide-inner">
                    <p className="slide-text">{t.quote}</p>

                    <div className="avatar-row">
                      <img
                        src={t.avatar}
                        alt={`${t.name} avatar`}
                        className="avatar"
                      />
                    </div>

                    <div className="person-name">{t.name}</div>
                    <div className="person-role">{t.role}</div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="test-right" aria-hidden>
          <img src={testmain} alt="Hero" className="hero-img" />
          <div className="hero-overlay" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsTestimonial;
