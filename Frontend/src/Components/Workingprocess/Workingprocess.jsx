import React from 'react';
import './Workingprocess.css';

const steps = [
  {
    id: 1,
    title: 'Fill Up\nApplication\nForm',
    color: 'blue',
    aria: 'Fill up application form',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V7h4.5L14 3.5zM8 11h8v1H8v-1zm0 3h8v1H8v-1z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Make Online\nPayment',
    color: 'orange',
    aria: 'Make online payment',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M21 7H3a1 1 0 0 0-1 1v2h20V8a1 1 0 0 0-1-1zM2 17a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6H2v6zm4-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Executive will process\nApplication',
    color: 'blue',
    aria: 'Executive will process application',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Get Confirmation\non Mail',
    color: 'orange',
    aria: 'Get confirmation on mail',
    Icon: () => (
      <svg viewBox="0 0 24 24" width="48" height="48" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
];

const Workingprocess = () => {
  return (
    <section className="wp-section" aria-labelledby="wp-heading">
      <div className="wp-inner">
        <h2 id="wp-heading" className="wp-title">Our Working Process</h2>
        <div className="wp-divider" aria-hidden="true" />
        <div className="wp-grid">
          {steps.map((s) => (
            <article
              key={s.id}
              className={`wp-card wp-card--${s.color}`}
              role="group"
              aria-label={s.aria}
            >
              <div className="wp-card__icon" aria-hidden="true">
                <s.Icon />
              </div>
              <h3 className="wp-card__title">
                {s.title.split('\n').map((line, i) => (
                  <span key={i} className="wp-card__title-line">{line}</span>
                ))}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workingprocess;
