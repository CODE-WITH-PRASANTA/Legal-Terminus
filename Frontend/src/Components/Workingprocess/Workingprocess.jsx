import { FaRegFileAlt, FaCreditCard, FaHeadset, FaEnvelope } from "react-icons/fa";
import './WorkingProcess.css'

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
