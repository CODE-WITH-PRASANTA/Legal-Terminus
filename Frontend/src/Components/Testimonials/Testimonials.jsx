import { useState } from "react";
import "./Testimonials.css";
import testimonialImg from "../../assets/testimonial.webp";

const DATA = [
  {
    id: 1,
    name: "Amit Verma",
    role: "Founder, Startup Pvt. Ltd.",
    text: "Legal Terminus made our company registration and compliance process extremely smooth. Their team handled everything professionally, kept us informed at every step, and ensured zero compliance issues. Highly reliable legal partners.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Director, E-Commerce Business",
    text: "From GST registration to ongoing compliance, Legal Terminus has been exceptional. Their accuracy, responsiveness, and legal clarity helped us focus on business growth without worrying about regulatory challenges.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Co-Founder, Tech Startup",
    text: "Trademark registration and legal documentation were handled seamlessly. The team at Legal Terminus is knowledgeable, transparent, and very professional. We felt confident knowing our legal matters were in expert hands.",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "Operations Head, Consulting Firm",
    text: "Legal Terminus has become our go-to legal and compliance partner. Their timely filings, expert advice, and clear communication make them stand out. Truly dependable legal support for growing businesses.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(DATA[0]);

  return (
    <section className="Testimonials-container">
      <div className="Testimonials-header">
        <span className="Testimonials-badge">CLIENT TESTIMONIALS</span>
        <h2>
          Trusted by Businesses
          Across India
        </h2>
      </div>

      <div className="Testimonials-layout">
        {/* LEFT IMAGE */}
        <div className="Testimonials-image">
          <div className="image-wrapper">
            <img src={testimonialImg} alt="Legal consultation discussion" />
            <div className="image-overlay"></div>
          </div>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="Testimonials-card">
          <div className="card-glow"></div>

          <div className="Testimonials-stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>

          <p className="Testimonials-text">"{active.text}"</p>

          <div className="Testimonials-user">
            <div className="avatar-ring">
              <img src={active.avatar} alt={active.name} />
            </div>
            <div className="user-info">
              <h4>{active.name}</h4>
              <span>{active.role}</span>
            </div>
          </div>

          <span className="Testimonials-quote">"</span>
        </div>

        {/* AVATAR SWITCH */}
        <div className="Testimonials-switch">
          {DATA.map((item) => (
            <button
              key={item.id}
              className={`Testimonials-switchItem ${
                active.id === item.id ? "active" : ""
              }`}
              onClick={() => setActive(item)}
            >
              <div className="avatar-indicator"></div>
              <img src={item.avatar} alt={item.name} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
