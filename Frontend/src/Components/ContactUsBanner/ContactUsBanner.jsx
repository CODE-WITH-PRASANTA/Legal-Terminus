// ContactUsBanner.jsx
import React, { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import "./ContactUsBanner.css";

const ContactUsBanner = () => {
  const IMAGE_URL =
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80";

  const rootRef = useRef(null);
  const imgWrapRef = useRef(null);
  const sweepRef = useRef(null);

  // Cursor motion values
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  // Smooth cursor → movement
  const sx = useSpring(px, { stiffness: 90, damping: 20 });
  const sy = useSpring(py, { stiffness: 90, damping: 20 });

  // Parallax transform based on cursor
  const tiltX = useTransform(sy, (v) => v * -8);
  const tiltY = useTransform(sx, (v) => v * 8);
  const translateX = useTransform(sx, (v) => v * 15);
  const translateY = useTransform(sy, (v) => v * 8);

  // breathing idle motion
  const breath = useSpring(0, { stiffness: 12, damping: 12 });
  useEffect(() => {
    let frame;
    const loop = () => {
      breath.set(Math.sin(Date.now() / 1800) * 6);
      frame = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(frame);
  }, []);

  // cursor tracking
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      px.set(x);
      py.set(y);
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  // Entrance sweep
  useEffect(() => {
    const sweep = sweepRef.current;
    if (!sweep) return;
    sweep.style.transform = "translateX(-120%)";
    sweep.style.opacity = "0";
    setTimeout(() => {
      sweep.style.transition = "1.1s cubic-bezier(.22,.9,.36,1)";
      sweep.style.transform = "translateX(120%)";
      sweep.style.opacity = "0.35";
      setTimeout(() => (sweep.style.opacity = "0"), 900);
    }, 100);
  }, []);

  return (
    <section
      className="contactusbanner-root"
      ref={rootRef}
      aria-label="Hero section for Notary service"
    >
      {/* Image Wrapper */}
      <motion.div
        ref={imgWrapRef}
        className="hero-img-wrap"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          x: translateX,
          y: translateY,
          scale: 1,
        }}
        aria-hidden="true"
      >
        <motion.div
          className="hero-img"
          style={{
            backgroundImage: `url(${IMAGE_URL})`,
            y: breath,
          }}
        />
        <div className="hero-img-glass" aria-hidden="true" />
        <div className="hero-img-sweep" ref={sweepRef} aria-hidden="true" />
      </motion.div>

      {/* Overlay */}
      <div className="contactusbanner-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="contactusbanner-container">
        <div className="contactusbanner-left">
          <h1 className="contactusbanner-title">
            Professional and <br />
            Reliable <span className="highlight-wrap">Legal Terminus</span> Service
            <br />
            That You Can Trust
          </h1>

          <p className="contactusbanner-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud
          </p>

          <div className="contactusbanner-cta">
            <button className="btn-get" aria-label="Get started">
              GET STARTED
            </button>
          </div>
        </div>

        <div style={{ flex: 1 }} />
      </div>
    </section>
  );
};

export default ContactUsBanner;
