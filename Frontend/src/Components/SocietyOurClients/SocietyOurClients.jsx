import React, { useRef, useEffect } from "react";
import "./SocietyOurClients.css";


import client1 from "../../assets/our (1).webp";
import client2 from "../../assets/our (2).webp";
import client3 from "../../assets/our (3).webp";
import client4 from "../../assets/our (4).webp";
import client5 from "../../assets/our (5).webp";
import client6 from "../../assets/our (6).webp";
import client7 from "../../assets/our (7).webp";
import client8 from "../../assets/our (8).webp";
import client9 from "../../assets/our (9).webp";
import client10 from "../../assets/our (10).webp";
import client11 from "../../assets/our (11).webp";
import client12 from "../../assets/our (12).webp";
import client13 from "../../assets/our (13).webp";
import client14 from "../../assets/our (14).webp";
import client15 from "../../assets/our (15).webp";
import client16 from "../../assets/our (16).webp";
import client17 from "../../assets/our (17).webp";
import client18 from "../../assets/our (18).webp";
import client19 from "../../assets/our (19).webp";
import client20 from "../../assets/our (20).webp";
import client119 from "../../assets/our (119).webp";


/* ---- assets imports stay SAME ---- */

const SocietyOurClients = () => {
  const logos = [
    client1, client2, client3, client4, client5, client6, client7, client8,
    client9, client10, client11, client12, client13, client14, client15,
    client16, client17, client18, client19, client20,
    /* ...rest unchanged */
    client119,
  ];

  const logosDup = [...logos, ...logos];

  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const lastRef = useRef(null);
  const desiredRef = useRef(0);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef(null);

  const SPEED = 60;
  const SMOOTHING = 0.12;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const scroller = track.parentElement;

    scroller.style.overflowX = "auto";
    scroller.style.scrollBehavior = "auto";

    const loop = (t) => {
      if (pausedRef.current) {
        lastRef.current = t;
        rafRef.current = requestAnimationFrame(loop);
        return;
      }

      if (!lastRef.current) lastRef.current = t;
      const dt = (t - lastRef.current) / 1000;
      lastRef.current = t;

      desiredRef.current += SPEED * dt;

      const half = track.scrollWidth / 2;
      if (desiredRef.current >= half) desiredRef.current -= half;

      const current = scroller.scrollLeft;
      const diff = desiredRef.current - current;
      scroller.scrollLeft = current + diff * SMOOTHING;

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const pauseAuto = (ms = 1200) => {
    pausedRef.current = true;
    clearTimeout(resumeTimerRef.current);

    if (ms !== Infinity) {
      resumeTimerRef.current = setTimeout(() => {
        const track = trackRef.current;
        if (track?.parentElement) {
          desiredRef.current = track.parentElement.scrollLeft;
        }
        pausedRef.current = false;
      }, ms);
    }
  };

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;

    const scroller = track.parentElement;
    const card = track.querySelector(".societys-our-clients-card");
    const gap = parseInt(getComputedStyle(track).gap || "40", 10);
    const cardWidth = Math.round(card?.getBoundingClientRect().width || 160);
    const amount = cardWidth + gap;

    pauseAuto(900);

    desiredRef.current += dir === "left" ? -amount : amount;

    const half = track.scrollWidth / 2;
    if (desiredRef.current >= half) desiredRef.current -= half;
    if (desiredRef.current < 0) desiredRef.current += half;

    scroller.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="societys-our-clients-root">
      <div className="societys-our-clients-container">
        <h2 className="societys-our-clients-title">OUR CLIENTS</h2>

        <div className="societys-our-clients-carousel">
          <button
            className="societys-our-clients-arrow societys-our-clients-arrow-left"
            onClick={() => scrollByCard("left")}
          >
            ❮
          </button>

          <div className="societys-our-clients-scroller">
            <ul
              className="societys-our-clients-track"
              ref={trackRef}
            >
              {logosDup.map((src, i) => (
                <li
                  className="societys-our-clients-card"
                  key={i}
                >
                  <figure className="societys-our-clients-logo">
                    <img
                      src={src}
                      alt={`client-${i}`}
                      className="societys-our-clients-img"
                    />
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <button
            className="societys-our-clients-arrow societys-our-clients-arrow-right"
            onClick={() => scrollByCard("right")}
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocietyOurClients;
