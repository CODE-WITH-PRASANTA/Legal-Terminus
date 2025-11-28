import React from "react";
import "./ContactUsShowcase.css";
import { FiCheckCircle, FiPhone } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import Showcase1 from '../../assets/Showcase1.webp';
import Showcase2 from '../../assets/Showcase2.webp';

const ContactUsShowcase = () => {
  return (
    <section className="contactusshowcase-root">
      {/* TOP ROW: left image | center stacked & stat | right copy */}
      <div className="contactusshowcase-top">
        <div className="contactusshowcase-col images-left">
          <div className="contactusshowcase-img-wrap big">
            <img src={Showcase1} alt="Showcase left" />
          </div>
        </div>

        <div className="contactusshowcase-col images-center">
          <div className="contactusshowcase-img-wrap small">
            <img src={Showcase2} alt="Showcase center" />
          </div>

          <div className="contactusshowcase-statcard">
            <div className="stat-left">
              <div className="stat-icon-circle"><FaGlobe className="stat-icon" /></div>
            </div>
            <div className="stat-right">
              <div className="stat-number">2,250 <span className="plus">+</span></div>
              <div className="stat-sub">Trusted Clients</div>
            </div>
          </div>
        </div>

        <div className="contactusshowcase-col copy-right">
          <div className="eyebrow">Welcome To Legal Terminus</div>
          <h1 className="headline">
            We Are A Legal Terminus Public <br /> That Travels To You
          </h1>

          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam
          </p>

          <ul className="features">
            <li><FiCheckCircle className="tick" /><span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span></li>
            <li><FiCheckCircle className="tick" /><span>Quis nostrud exercitation ullamco laboris nisi minim veniam</span></li>
            <li><FiCheckCircle className="tick" /><span>Nostrum exercitationem ullam corporis suscipit laboriosam</span></li>
          </ul>

          <button className="cta">ABOUT US</button>
        </div>
      </div>

      {/* GAP */}
      <div className="contactusshowcase-gap" />

      {/* BOTTOM ROW */}
      <div className="contactusshowcase-bottom">
        <div className="left-quote">
          <div className="quote-mark">“</div>
          <h2 className="quote-heading">
            Many Years Of Experience Of Our Team, Will Help You Quickly And Effectively Solve Your Problem
          </h2>

          <div className="call-signature-row">
            <div className="call-box">
              <div className="call-icon"><FiPhone /></div>
              <div className="call-text">
                <div className="small">Call for Consultation</div>
                <div className="big">(+62)81 157 5891</div>
              </div>
            </div>

            <div className="signature side">
              <div className="sig-name">Mitchel Conner</div>
              <div className="sig-title">Founder Legal Terminus</div>
            </div>
          </div>
        </div>


        <div className="right-paragraphs">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsShowcase;
