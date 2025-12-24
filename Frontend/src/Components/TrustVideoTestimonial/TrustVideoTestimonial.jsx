import React, { useRef } from "react";
import "./TrustVideoTestimonial.css";

const videoTestimonials = [
  {
    name: "Kirti Ranjan Sahu",
    role: "Proprietor of Keshab Jewellers",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Gobinda Chandra Mishra",
    role: "Influencer",
    videoUrl: "https://www.youtube.com/embed/ysz5PUM2z2A",
  },
  {
    name: "Babaji Samal",
    role: "MD, AppsSys Technosoft",
    videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
  {
    name: "Pritam Rath",
    role: "Director, Stabdha Utility Insights",
    videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
  },
  // add more items as needed
];

const VideoTestimonials = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const card = container.querySelector(".tv-card");
    if (!card) return;

    const gap = 24; // must match CSS .tv-slider gap
    const cardWidth = card.offsetWidth + gap;

    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="tv-section">
      <div className="tv-container">
        <h2 className="tv-heading">Video Testimonials</h2>
        <p className="tv-subtitle">
          Hear directly from our clients about their experience working with us.
        </p>

        <div className="tv-slider-wrapper">
          {/* Left arrow */}
          <button
            className="tv-side-arrow tv-left"
            aria-label="Previous video"
            onClick={() => handleScroll("prev")}
          >
            ❮
          </button>

          {/* Cards slider */}
          <div className="tv-slider" ref={sliderRef}>
            {videoTestimonials.map((item, idx) => (
              <article className="tv-card" key={idx}>
                <div className="tv-video-wrap">
                  <div className="tv-video-aspect">
                    <iframe
                      className="tv-video"
                      src={item.videoUrl}
                      title={item.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <h3 className="tv-name">{item.name}</h3>
                <p className="tv-role">{item.role}</p>
              </article>
            ))}
          </div>

          {/* Right arrow */}
          <button
            className="tv-side-arrow tv-right"
            aria-label="Next video"
            onClick={() => handleScroll("next")}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
