import { FaRegFileAlt, FaCreditCard, FaHeadset, FaEnvelope } from "react-icons/fa";
import './WorkingProcessPro.css'

const steps = [
  {
    icon: <FaRegFileAlt />,
    text: "Fill out the application form",
    color: "green"
  },
  {
    icon: <FaCreditCard />,
    text: "Complete the online payment",
    color: "lightgreen"
  },
  {
    icon: <FaHeadset />,
    text: "Our executive processes your application",
    color: "green"
  },
  {
    icon: <FaEnvelope />,
    text: "Receive confirmation via email",
    color: "lightgreen"
  }
];

const WorkingProcessPro = () => (
  <section className="WPP-root">
    <h2 className="WPP-title">Our Working Process</h2>
    <div className="WPP-underline"></div>

    <div className="WPP-grid">
      {steps.map((item, index) => (
        <div
          key={index}
          className={`WPP-card ${
            item.color === "green" ? "WPP-green" : "WPP-lightgreen"
          }`}
        >
          <div className="WPP-icon">{item.icon}</div>
          <p className="WPP-text">{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WorkingProcessPro;
