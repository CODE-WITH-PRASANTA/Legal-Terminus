import React from "react";
import {
  FaFileAlt,
  FaUserCheck,
  FaFileSignature
} from "react-icons/fa";
import img1 from "../../assets/Showcase1.webp";
import "./HowWeWorkSection.css";

const HowWeWorkSection = () => {
  return (
    <section className="howwework">
      <div className="howwework-container">

        {/* LEFT CONTENT */}
        <div className="howwework-left">

          <h4 className="howwework-tag">How We Work</h4>

          <h2 className="howwework-title">
            What Do You Need To Notarize <br />
            Online With Notariz?
          </h2>

          <p className="howwework-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
            ad minim veniam quis nostrud
          </p>

          {/* STEPS */}
          <div className="howwework-steps">

            {/* STEP 1 */}
            <div className="howwework-step">
              <div className="howwework-step-icon">
                <FaFileAlt />
              </div>
              <div>
                <h3>Upload Your Document To Be Notarized</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="howwework-step">
              <div className="howwework-step-icon">
                <FaUserCheck />
              </div>
              <div>
                <h3>Your Document Will Be Assigned To A Licensed & Certified Public Notary</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="howwework-step">
              <div className="howwework-step-icon">
                <FaFileSignature />
              </div>
              <div>
                <h3>Your Document Is Ready!</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE + CARD */}
        <div className="howwework-right">
          <img src={img1} alt="Showcase" className="howwework-image" />

          <div className="howwework-floating-card">
            <h3>
              Get a Free Estimate or <br />
              Schedule an Appointment
            </h3>

            <button type="button" className="howwework-btn" aria-label="Get started - request a free estimate or schedule appointment">
  GET STARTED →
</button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWorkSection;
