import React from "react";
import "./ReachUsSection.css";
import heroIllustration from "../../assets/heroIllustration.webp";

// React Icons
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";

const ReachUsSection = () => {
  return (
    <div className="ReachUs-root">

      {/* TOP CONTENT */}
      <div className="ReachUs-top">
        <div className="ReachUs-topInner">
          <div className="ReachUs-copy">
            <h2 className="ReachUs-headline">
              Streamlining Business in India: Your Solution for Complex Compliance
            </h2>

            <p className="ReachUs-paragraph">
              We offer India's largest platform for managing compliance across
              1000+ business types, integrating AI-enabled technology...
            </p>

            <p className="ReachUs-paragraph">
              Prompt and client-focused, we ensure quick responses to your queries...
            </p>
          </div>

          <div className="ReachUs-illustrationWrap">
            <img
              src={heroIllustration}
              alt="Analytics illustration"
              className="ReachUs-illustration"
            />
          </div>
        </div>
      </div>

      {/* CONTACT AREA */}
      <div className="ReachUs-cta">
        <div className="ReachUs-ctaInner">

          <div className="ReachUs-contacts">
            <h3 className="ReachUs-ctaTitle">How To Reach Us?</h3>
            <p className="ReachUs-ctaSubtitle">You can reach out to us :-</p>

            <ul className="ReachUs-contactList">
              
              <li className="ReachUs-contactItem">
                <span className="ReachUs-icon ReachUs-icon--mail">
                  <MdEmail size={20} />
                </span>
                <span className="ReachUs-contactText">info@corpbiz.io</span>
              </li>

              <li className="ReachUs-contactItem">
                <span className="ReachUs-icon ReachUs-icon--phone">
                  <FiPhoneCall size={20} />
                </span>
                <span className="ReachUs-contactText">+91-9121230280</span>
              </li>

              <li className="ReachUs-contactItem">
                <span className="ReachUs-icon ReachUs-icon--whatsapp">
                  <FaWhatsapp size={20} />
                </span>
                <span className="ReachUs-contactText">+91-9289379709</span>
              </li>

              <li className="ReachUs-contactItem">
                <span className="ReachUs-icon ReachUs-icon--site">
                  <TbWorldWww size={22} />
                </span>
                <span className="ReachUs-contactText">www.corpbiz.io</span>
              </li>

            </ul>

            {/* Steps */}
            <ul className="ReachUs-steps">
              <li className="ReachUs-step">
                <span className="ReachUs-stepIcon">
                  <IoCheckmarkCircle size={22} />
                </span>
                <span>Submit your query and state your requirements.</span>
              </li>

              <li className="ReachUs-step">
                <span className="ReachUs-stepIcon">
                  <RiCustomerService2Line size={22} />
                </span>
                <span>
                  Receive a call back from our experts with free initial guidance.
                </span>
              </li>
            </ul>
          </div>

          {/* CTA BUTTON */}
          <div className="ReachUs-ctaAction">
            <button className="ReachUs-getStarted">Get Started</button>
          </div>

        </div>
      </div>



    </div>
  );
};

export default ReachUsSection;
