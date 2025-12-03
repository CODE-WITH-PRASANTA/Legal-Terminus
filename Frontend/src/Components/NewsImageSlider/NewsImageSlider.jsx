// NewsImageSlider.jsx
import React, { useEffect, useRef, useState } from "react";
import "./NewsImageSlider.css";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import news1 from "../../assets/NewsPaper.webp";
import news2 from "../../assets/NewsPaper2.webp";
import news3 from "../../assets/NewsPaper3.webp";

const NewsImageSlider = ({ images = [], autoplay = true, interval = 3000 }) => {
  const fallback = [
    { src: news1, alt: "News 1" },
    { src: news2, alt: "News 2" },
    { src: news3, alt: "News 3" },
  ];

  const slides = images.length ? images : fallback;
  const len = slides.length;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // how many slides are visible at once (responsive)
  const [slidesPerView, setSlidesPerView] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768 ? 1 : 3
  );

  const sliderRef = useRef(null);

  // update slidesPerView on resize
  useEffect(() => {
    const handleResize = () => {
      const newPerView = window.innerWidth <= 768 ? 1 : 3;
      setSlidesPerView(newPerView);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // If slides or slidesPerView change, ensure index is within allowed range
  useEffect(() => {
    const maxIndex = Math.max(0, len - slidesPerView);
    if (index > maxIndex) setIndex(maxIndex);
  }, [len, slidesPerView]); // eslint-disable-line react-hooks/exhaustive-deps

  // autoplay
  useEffect(() => {
    if (!autoplay || paused) return;

    const t = setInterval(() => {
      setIndex((i) => {
        const maxIndex = Math.max(0, len - slidesPerView);
        // wrap to start when reaching end (keeps cyclical feel)
        if (i >= maxIndex) return 0;
        return i + 1;
      });
    }, interval);

    return () => clearInterval(t);
  }, [autoplay, paused, len, interval, slidesPerView]);

  // swipe + drag
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    let startX = 0;
    let endX = 0;
    let dragging = false;

    const start = (e) => {
      startX = e.touches ? e.touches[0].clientX : e.clientX;
      endX = startX;
      dragging = true;
      setPaused(true);
    };

    const move = (e) => {
      if (!dragging) return;
      endX = e.touches ? e.touches[0].clientX : e.clientX;
    };

    const end = () => {
      if (!dragging) return;
      dragging = false;
      const dx = endX - startX;

      if (dx > 60) prev();
      else if (dx < -60) next();

      setPaused(false);
    };

    // add listeners
    el.addEventListener("touchstart", start, { passive: true });
    el.addEventListener("touchmove", move, { passive: true });
    el.addEventListener("touchend", end);

    el.addEventListener("mousedown", start);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);

    return () => {
      el.removeEventListener("touchstart", start);
      el.removeEventListener("touchmove", move);
      el.removeEventListener("touchend", end);

      el.removeEventListener("mousedown", start);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
    };
  }, []);

  const maxIndex = Math.max(0, len - slidesPerView);

  const next = () =>
    setIndex((i) => {
      if (i >= maxIndex) return 0; // wrap to start
      return i + 1;
    });

  const prev = () =>
    setIndex((i) => {
      if (i <= 0) return maxIndex; // wrap to end
      return i - 1;
    });

  // compute translation percentage — move by slide width (100 / slidesPerView) per index
  const translatePercent = index * (100 / slidesPerView);

  return (
    <div className="three-wrapper">
      <h2 className="three-header">Print Media</h2>

      <div
        className="three-slider"
        ref={sliderRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="three-track"
          style={{ transform: `translateX(-${translatePercent}%)` }}
        >
          {slides.map((s, i) => (
            <div
              className="three-slide"
              key={i}
              // override slide width responsively to match slidesPerView
              style={{ minWidth: `${100 / slidesPerView}%` }}
              tabIndex={0}
            >
              <img src={s.src} alt={s.alt || `slide-${i}`} draggable="false" />
            </div>
          ))}
        </div>

        {/* Updated React Icons */}
        <button
          className="three-arrow left"
          onClick={prev}
          aria-label="Previous slide"
        >
          <FiChevronLeft size={26} />
        </button>

        <button
          className="three-arrow right"
          onClick={next}
          aria-label="Next slide"
        >
          <FiChevronRight size={26} />
        </button>
      </div>
    </div>
  );
};

export default NewsImageSlider;
