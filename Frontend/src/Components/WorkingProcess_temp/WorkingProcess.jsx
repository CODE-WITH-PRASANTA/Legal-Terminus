import { FaRegFileAlt, FaCreditCard, FaHeadset, FaEnvelope } from "react-icons/fa";
import "./WorkingProcess.css";

const steps = [
  {
    icon: <FaRegFileAlt />,
    text: "Fill Up Application Form",
    color: "green"
  },
  {
    icon: <FaCreditCard />,
    text: "Make Online Payment",
    color: "lightgreen"
  },
  {
    icon: <FaHeadset />,
    text: "Executive will process Application",
    color: "green"
  },
  {
    icon: <FaEnvelope />,
    text: "Get Confirmation on Mail",
    color: "lightgreen"
  }
];

const WorkingProcess = () => (
  <section className="WP-root">
    <h2 className="WP-title">Our Working Process</h2>
    <div className="WP-underline"></div>

    <div className="WP-grid">
      {steps.map((item, i) => (
        <div
          key={i}
          className={`WP-card ${
            item.color === "green" ? "WP-green" : "WP-lightgreen"
          }`}
        >
          <div className="WP-icon">{item.icon}</div>
          <p className="WP-text">{item.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WorkingProcess;
