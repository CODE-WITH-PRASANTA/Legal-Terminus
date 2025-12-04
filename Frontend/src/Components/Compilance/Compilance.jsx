import React from 'react';
import './Compilance.css';

const Compliance = () => {
  const handleGetStarted = () => {
    // Add your download/action logic here
    console.log('Download Compliance Calendar initiated');
    // Example: window.location.href = '/download-calendar';
  };

  return (
    <section className="compliance-banner" aria-label="Compliance Information">
      <div className="compliance-left">
        <h2>Start your 10,000+ compliance</h2>
        <h2>With Us!</h2>
      </div>

      <div className="compliance-right">
        <h3>Download Compliance Calendar</h3>
        <button 
          className="cta-btn" 
          onClick={handleGetStarted}
          aria-label="Get started with compliance calendar"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Compliance;