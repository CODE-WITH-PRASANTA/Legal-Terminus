import React from "react";
import "./PublicltdRightPlan.css";

const PricingPlans = () => {
  return (
    <div className="pricing-wrapper">
      <div className="pricing-header">
        <h1>Right Plan For Your Business</h1>
        <p>
          Legal Terminus&apos;s incorporation experts register over 1500 companies
          every month.
        </p>
      </div>

      <div className="pricing-grid">
        {/* STANDARD */}
        <div className="pricing-card">
          <div className="card-top">
            <div className="plan-name">Standard</div>
            <div className="plan-subtitle">
              Standard application filing: Regular processing time
            </div>

            <div className="price-row">
              <div className="old-price">₹1,999</div>
              <div className="discount-pill">
                <span className="discount-dot" />
                <span>25% discount</span>
              </div>
            </div>

            <div className="price-main">
              <span className="price-currency">₹</span>
              <span className="price-amount">1,499</span>
            </div>
            <div className="price-note">+ Govt. Fee</div>

            <div className="cashback-bar">
              <div className="cashback-icon">💰</div>
              <div className="cashback-text">
                <strong>Get ₹1000 cashback*</strong>
                <span>
                  Upon opening current acct with our partner banks
                  <a href="#!"> T&amp;C</a>
                </span>
              </div>
            </div>

            <div className="plan-button">
              <button>Get Started</button>
            </div>
          </div>

          <div className="card-features">
            <div className="features-title">What you&apos;ll get</div>
            <ul className="features-list">
              <li>
                <div className="check-icon">✓</div>
                <div>Expert assisted process</div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  Your company name is reserved in just{" "}
                  <strong>2 – 4 days</strong>
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  DSC in <strong>4 – 7 days</strong>
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  LLP Incorporation form filing done in{" "}
                  <strong>21 days*</strong>
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>LLP Incorporation Certificate</div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  LLP agreement form filing done in 14 days (Post
                  Incorporation)
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  Company <strong>PAN+TAN</strong>
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  <strong>DIN</strong> for directors
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* FASTRACK */}
        <div className="pricing-card">
          <div className="card-top">
            <div className="plan-name">Fastrack</div>
            <div className="plan-subtitle">
              Expedited application filing: Faster processing for quicker
              results
            </div>

            <div className="price-row">
              <div className="old-price">₹3,599</div>
              <div className="discount-pill">
                <span className="discount-dot" />
                <span>35% discount</span>
              </div>
            </div>

            <div className="price-main">
              <span className="price-currency">₹</span>
              <span className="price-amount">2,499</span>
            </div>
            <div className="price-note">+ Govt. Fee</div>

            <div className="cashback-bar">
              <div className="cashback-icon">💰</div>
              <div className="cashback-text">
                <strong>Get ₹1000 cashback*</strong>
                <span>
                  Upon opening current acct with our partner banks
                  <a href="#!"> T&amp;C</a>
                </span>
              </div>
            </div>

            <div className="plan-button">
              <button>Get Started</button>
            </div>
          </div>

          <div className="card-features">
            <div className="features-title">What you&apos;ll get</div>
            <ul className="features-list">
              <li>
                <div className="check-icon">✓</div>
                <div>Expert assisted process</div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  Your company name is reserved in just{" "}
                  <strong>24 hours*</strong>
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  DSC in just <strong>24 hours*</strong>
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  LLP Incorporation form filing done in{" "}
                  <strong>14 days*</strong>
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>LLP Incorporation Certificate</div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  LLP agreement form filing done in 7 days (Post Incorporation)
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  Company <strong>PAN+TAN</strong>
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  <strong>Digital welcome kit</strong> that includes a checklist
                  of all post-incorporation compliances
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  <strong>DIN</strong> for directors
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* PREMIUM */}
        <div className="pricing-card">
          <div className="ribbon">Limited time offer</div>

          <div className="card-top">
            <div className="plan-name premium-title">Premium</div>
            <div className="plan-subtitle">
              Complete solution (LLP incorporation + Annual compliance)
            </div>

            <div className="price-row">
              <div className="old-price">₹21,999</div>
              <div className="discount-pill">
                <span className="discount-dot" />
                <span>50% discount</span>
              </div>
            </div>

            <div className="price-main">
              <span className="price-currency">₹</span>
              <span className="price-amount">10,999</span>
            </div>
            <div className="price-note">+ Govt. Fee</div>

            <div className="split-pay-row">
              <div className="toggle-pill">
                <div className="toggle-thumb" />
              </div>
              <div>
                <span>
                  Split payment by 3 with <strong>Zolvit Flex</strong>
                </span>
                <a href="#!"> Click here to know more</a>
              </div>
            </div>

            <div className="cashback-bar">
              <div className="cashback-icon">💰</div>
              <div className="cashback-text">
                <strong>Get ₹1000 cashback*</strong>
                <span>
                  Upon opening current acct with our partner banks
                  <a href="#!"> T&amp;C</a>
                </span>
              </div>
            </div>

            <div className="plan-button">
              <button>Get Started</button>
            </div>
          </div>

          <div className="card-features">
            <div className="features-title">What you&apos;ll get</div>
            <ul className="features-list">
              <li>
                <div className="check-icon">✓</div>
                <div>Expert assisted process</div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  Your company name is reserved in just{" "}
                  <strong>24 hours*</strong>
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  DSC in just <strong>24 hours*</strong>
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  LLP Incorporation form filing done in{" "}
                  <strong>14 days*</strong>
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>LLP Incorporation Certificate</div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  LLP agreement form filing done in 14 days (Post Incorporation)
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  Company <strong>PAN+TAN</strong>
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  <strong>DIN</strong> for directors
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  <strong>30-minute call with a senior CA/CS</strong> for your
                  business planning
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>Form 8 &amp; 11 filing (One year)</div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>DIR 3 KYC (For 2 directors)</div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  One Year Income Tax filing (Upto turnover of 20 lakhs)
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>
                  Accounting &amp; Bookkeeping (Upto 100 transactions)
                </div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>Financial statement preparation</div>
              </li>
              <li>
                <div className="check-icon">✓</div>
                <div>Accounting software (1-year license)</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="note">
        Note: Government fees for incorporation are extra and it varies from
        state to state. T&amp;C
      </div>
    </div>
  );
};

export default PricingPlans;
