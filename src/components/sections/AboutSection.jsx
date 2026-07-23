import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 32, label: 'Retro car', suffix: '' },
  { number: 400, label: 'Satisfied clients', suffix: '' },
  { number: 5, label: 'Delighting our clients', suffix: 'Years' },
];

const AboutSection = ({ showTopHeader = true }) => {
  const [counted, setCounted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.number / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                current = stat.number;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.round(current);
                return newCounts;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [counted]);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="container">
        {/* Top Grid: Title on left, Description on right (Optional) */}
        {showTopHeader && (
          <div className="about-top-grid">
            <h2 className="about-heading reveal">
              About us<br />
              in numbers
            </h2>
            <p className="about-desc reveal reveal-delay-1">
              From acquisition to restoration, we specialize in iconic automobiles, ensuring each drive is a celebration of timeless style. Elevate your journey with our passion for preserving automotive heritage.
            </p>
          </div>
        )}

        {/* Visual Container with 3 Circles and Overlapping Car */}
        <div className="about-visual-container reveal reveal-delay-2">
          {/* 3 Circular Stat Cards */}
          <div className="stats-circles-grid">
            {stats.map((stat, index) => (
              <div className="stat-circle-card" key={index}>
                <div className="stat-number-box">
                  <span className="stat-number">{counts[index]}</span>
                  {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
                </div>
                <span className="stat-label-text">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Overlapping Classic Car Image */}
          <div className="overlapping-car-wrap">
            <img
              src="/images/cars/vintage.png"
              alt="Vintage Classic Automobile"
              loading="lazy"
              className="overlapping-car-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
