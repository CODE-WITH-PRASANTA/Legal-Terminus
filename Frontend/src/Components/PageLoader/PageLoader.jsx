import React from "react";
import "./PageLoader.css";
import Logo from "../../assets/Legal-Terminus-LOGO-GIF_300-x-150.gif";

const PageLoader = ({ active }) => {
  return (
    <div className={`page-loader ${active ? "active" : "hide"}`}>
      <div className="loader-box">
        <img
          src={Logo}
          alt="Legal Terminus Logo"
          className="loader-logo"
        />

        <p className="loader-brand">Legal Terminus</p>
        <p className="loader-text">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
