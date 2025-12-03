import React, { useState, useRef, useEffect } from "react";
import "./MediaHubBanner.css";

const slides = [
  {
    id: 1,
    title: "Vakilsearch – Media Coverage 1",
    description: "Latest public announcement and media highlight.",
    video: "https://www.youtube.com/embed/NRzO3nhwLEI",
  },
  {
    id: 2,
    title: "Vakilsearch – Media Coverage 2",
    description: "Interview regarding new partnership initiative.",
    video: "https://www.youtube.com/embed/71N8Jt5mSV8",
  },
  {
    id: 3,
    title: "Vakilsearch – Media Coverage 3",
    description: "Success stories and startup support program.",
    video: "https://www.youtube.com/embed/hyq-QdzSOdY",
  },
  {
    id: 4,
    title: "Vakilsearch – Media Coverage 4",
    description: "Behind the scenes look at the innovation process.",
    video: "https://www.youtube.com/embed/VHxLjyAeK7s",
  },
  {
    id: 5,
    title: "Vakilsearch – Media Coverage 5",
    description: "Industry outlook and entrepreneurship initiatives.",
    video: "https://www.youtube.com/embed/5VSAY7UuuL4",
  },
];

const MediaHubBanner = () => {
  const [index, setIndex] = useState(1);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((iframe, i) => {
      if (!iframe) return;
      iframe.src = slides[i].video;
    });
  }, [index]);

  const goPrev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const goNext = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="mediahub-wrapper">

      {/* ✅ Added Header */}
      <h2 className="mediahub-header">Media Coverage</h2>

      <div className="mediahub-container">
        {slides.map((slide, i) => {
          const position =
            i === index
              ? "active"
              : i === (index - 1 + slides.length) % slides.length
              ? "left"
              : i === (index + 1) % slides.length
              ? "right"
              : "hidden";

          return (
            <div className={`mediahub-card ${position}`} key={slide.id}>
              <div className="mediahub-video-wrapper">
                <iframe
                  ref={(el) => (videoRefs.current[i] = el)}
                  className="mediahub-video"
                  src={slide.video}
                  allow="encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              {i === index && (
                <div className="mediahub-content">
                  <h1 className="mediahub-title">{slide.title}</h1>
                  <p className="mediahub-desc">{slide.description}</p>
                  <button className="mediahub-btn">Read More</button>
                </div>
              )}
            </div>
          );
        })}

        <button className="mediahub-arrow mediahub-arrow-left" onClick={goPrev}>
          ←
        </button>

        <button className="mediahub-arrow mediahub-arrow-right" onClick={goNext}>
          →
        </button>

        <div className="mediahub-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`mediahub-dot ${i === index ? "active-dot" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaHubBanner;
