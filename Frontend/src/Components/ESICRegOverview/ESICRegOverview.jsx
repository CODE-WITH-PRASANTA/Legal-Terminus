import React, { useState } from "react";
import "./ESICRegOverview.css";

const eligibleEntities = [
  "Newspaper Establishments",
  "Private Educational Institutes",
  "Motor Transportation Units",
  "Cinemas",
  "Restaurants & Hotels",
  "Shops & Commercial Establishments"
];

const ESIRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.state) newErrors.state = "Please select a state";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", mobile: "", state: "" });
    }
  };

  return (
    <section className="esi-section">
      <div className="esi-container">

        {/* LEFT CARD */}
        <div className="esi-card">
          <h2 className="esi-title">Overview of ESI Registration</h2>
          <p>
            The Employees' State Insurance Act, 1948 provides social security
            benefits such as medical care and income protection to workers.
          </p>

          <ul className="esi-points">
            <li><strong>Employer Contribution:</strong> 3.25%</li>
            <li><strong>Employee Contribution:</strong> 0.75%</li>
            <li><strong>Salary Limit:</strong> ₹21,000/month</li>
          </ul>
        </div>

        {/* MIDDLE CARD */}
        <div className="esi-card">
          <h2 className="esi-title">Eligible Entities</h2>

          <div className="esi-entity-grid">
            {eligibleEntities.map((item, index) => (
              <div key={index} className="esi-entity-box">
                {item}
              </div>
            ))}
          </div>

          <p className="esi-note">
            Registration is mandatory for establishments employing 10 or more
            employees (20 in some states).
          </p>
        </div>

        {/* RIGHT FORM SECTION (NOT A CARD) */}
        <div className="esi-form-section">
          <h2 className="esi-title esi-center">Book a Free Consultation</h2>
          <p className="esi-subtitle">Get response within 1 hour</p>

          <form className="esi-form" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "esi-error-input" : ""}
              />
              {errors.name && <span className="esi-error">{errors.name}</span>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "esi-error-input" : ""}
              />
              {errors.email && (
                <span className="esi-error">{errors.email}</span>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number*"
                value={formData.mobile}
                onChange={handleChange}
                className={errors.mobile ? "esi-error-input" : ""}
              />
              {errors.mobile && (
                <span className="esi-error">{errors.mobile}</span>
              )}
            </div>

            <div>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={errors.state ? "esi-error-input" : ""}
              >
                <option value="">Select State*</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
                <option>Karnataka</option>
                <option>Tamil Nadu</option>
              </select>
              {errors.state && (
                <span className="esi-error">{errors.state}</span>
              )}
            </div>

            <button type="submit" className="esi-btn">
              SEND NOW
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ESIRegistration;
