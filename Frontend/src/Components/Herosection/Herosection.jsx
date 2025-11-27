import React from 'react';
import './Herosection.css';

/**
 * OPTIONAL: Import a local banner image for best performance:
 * import bannerImg from './assets/hero-banner.jpg';
 * then set bannerSrc = bannerImg;
 */
const bannerSrc = null;
const fallbackBanner =
  'https://prizon-react.vercel.app/assets/hero-img-BTnfbj5K.jpg';

const underlineDataUri =
  "data:image/svg+xml,%3csvg%20width='394'%20height='27'%20viewBox='0%200%20394%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M334.258%209.71716C334.143%209.72554%20334.027%209.72331%20333.912%209.71108C297.269%206.09419%20260.455%204.49675%20223.636%204.92657C196.491%205.14533%20168.232%206.27889%20139.447%208.29781C134.843%208.62073%20130.227%208.96567%20125.598%209.33377C95.7327%2011.7091%2070.9319%2014.605%2055.3795%2016.616C38.5445%2018.7922%2028.6541%2020.4257%2028.557%2020.4415C28.4909%2020.4521%2028.4275%2020.4594%2028.3677%2020.4636C27.8712%2020.4981%2027.3794%2020.347%2026.9888%2020.0385C26.5983%2019.73%2026.3369%2019.2867%2026.2556%2018.7958C26.1686%2018.2728%2026.2932%2017.7364%2026.6013%2017.305C26.9094%2016.8736%2027.3756%2016.5829%2027.8984%2016.4955C27.9975%2016.4785%2037.9587%2014.8334%2054.8653%2012.6481C70.4624%2010.6309%2095.3312%207.72844%20125.278%205.34637C129.917%204.97824%20134.545%204.63245%20139.163%204.30789C168.031%202.28316%20196.372%201.14864%20223.602%200.927917C260.568%200.496559%20297.529%202.10146%20334.318%205.7354C334.846%205.78993%20335.329%206.05107%20335.664%206.4624C335.998%206.87372%20336.156%207.40107%20336.102%207.92847C336.054%208.39554%20335.842%208.83086%20335.505%209.15783C335.168%209.4848%20334.726%209.68289%20334.258%209.71716Z'%20fill='%23FF9D4D'/%3e%3cpath%20d='M391.55%2026.3973C391.369%2026.4098%20391.187%2026.3983%20391.01%2026.3617C355.871%2019.2117%20313.594%2013.9941%20265.349%2010.8539C226.727%208.34095%20184.224%207.14589%20139.019%207.30405C98.7931%207.4438%2063.8344%208.65133%2041.591%209.64002C18.7391%2010.6554%204.2817%2011.6557%202.72552%2011.7649L2.58329%2011.7748C2.05416%2011.8119%201.53209%2011.6372%201.1317%2011.2893C0.731302%2010.9414%200.485373%2010.4488%200.448261%209.91967C0.411149%209.39054%200.585916%208.86847%200.933827%208.46808C1.28174%208.06768%201.7743%207.82175%202.30343%207.78464L2.44371%207.7748C4.00388%207.66537%2018.5129%206.66541%2041.4154%205.64251C63.6957%204.65223%2098.7146%203.44331%20139.007%203.30285C184.307%203.14503%20226.896%204.3425%20265.612%206.86089C288.607%208.3557%20310.471%2010.3433%20330.596%2012.7642C352.749%2015.4279%20373.344%2018.6874%20391.811%2022.4416C392.33%2022.5476%20392.786%2022.856%20393.079%2023.2983C393.371%2023.7406%20393.476%2024.2805%20393.37%2024.8002C393.283%2025.2289%20393.058%2025.6178%20392.729%2025.9063C392.4%2026.1948%20391.986%2026.3668%20391.55%2026.3973Z'%20fill='%23FF9D4D'/%3e%3c/svg%3e";


const Herosection = () => {
  const banner = bannerSrc || fallbackBanner;

  return (
    <>
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-decor" aria-hidden="true" />

            <h6 id="hero-heading" className="hero-title">
              <span className="line">We Stand Always for</span>

              <span className="line accent-container" aria-hidden="false">
                <span className="accent">Right Justice</span>

                {/* Inline SVG (JSX-safe) — three layered strokes for a premium hand-drawn feel */}
                
              </span>
            </h6>
            <img src={underlineDataUri} alt="" />

           
          </div>

          <aside className="hero-right" aria-labelledby="hero-copy-heading">
            <p id="hero-copy-heading" className="hero-copy">
              Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
              fugit, sed. Beatae vitae dicta. Our attorneys bring decades of experience defending rights and securing
              fair outcomes.
            </p>
          </aside>
        </div>
      </section>

      {/* Full-width banner below the hero */}
      <div
        className="hero-banner"
        role="img"
        aria-label="Team photo banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        
      </div>
    </>
  );
};

export default Herosection;
