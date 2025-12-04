import React from "react";
import backgroundimg from "../../assets/bg-banner.webp"; 
import "./AboutUsBanner.css";

const AboutUsBanner = ({
  title = "Who we are?",
  subtitle = "We serve many customers, ranging from small businesses and medium entrepreneurs to world-renowned companies.",
  backgroundImage = backgroundimg,
}) => {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section
      className="AboutUsBanner-root"
      role="banner"
      aria-label={title}
      style={bgStyle}
    >
      <div className="AboutUsBanner-inner">
        <h1 className="AboutUsBanner-title">{title}</h1>
        <div className="AboutUsBanner-underline" aria-hidden="true" />
        <p className="AboutUsBanner-subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

export default AboutUsBanner;
