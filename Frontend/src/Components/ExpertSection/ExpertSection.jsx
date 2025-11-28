import React from "react";
import "./ExpertSection.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Expert1 from '../../assets/Expert1.webp';
import Expert2 from '../../assets/Expert2.webp';
import Expert3 from '../../assets/Expert3.webp';


const experts = [
  {
    name: "Mitchel Conner",
    role: "Founder Notariz",
    image:Expert1
  },
  {
    name: "Emily Parsons",
    role: "Document Identification",
    image:Expert2
  },
  {
    name: "Ellen Stevens",
    role: "Signing Agent",
    image:Expert3
  },
];

const ExpertSection = () => {
  return (
    <section className="expert-section">
      <div className="expert-header">
  <div className="expert-header-bar"></div> {/* gold bar */}
  <h2>Meet With Our Expert</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>


      <div className="expert-cards">
        {experts.map((expert, index) => (
          <div key={index} className="expert-card" tabIndex={0}>
            <div className="expert-image-wrap">
              <img src={expert.image} alt={expert.name} className="expert-img" />
              {/* Social stack — shown on hover/focus */}
              <div className="expert-social" aria-hidden="false">
                <a
                  className="expert-social-btn"
                  href="#"
                  aria-label={`${expert.name} on Facebook`}
                >
                  <FaFacebookF />
                </a>
                <a
                  className="expert-social-btn"
                  href="#"
                  aria-label={`${expert.name} on Twitter`}
                >
                  <FaTwitter />
                </a>
                <a
                  className="expert-social-btn"
                  href="#"
                  aria-label={`${expert.name} on Instagram`}
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="expert-info">
              <h3>{expert.name}</h3>
              <p>{expert.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertSection;
