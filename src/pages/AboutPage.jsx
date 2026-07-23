import { useEffect } from 'react';
import AboutSection from '../components/sections/AboutSection';
import FAQSection from '../components/sections/FAQSection';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page" id="about-page">
      {/* Top Hero Section of About Us Page */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-grid">
            {/* Left Column: Heading & Button */}
            <div className="about-hero-left">
              <h1 className="about-hero-title">
                Who<br />
                are<br />
                we?
              </h1>
              <a href="#reviews" className="read-reviews-btn" id="read-reviews-btn">
                Read reviews
              </a>
            </div>

            {/* Right Column: Detailed Story Paragraphs */}
            <div className="about-hero-right">
              <h4 className="about-car-model-title">
                1966 Chevrolet Chevelle SS - STK 2801
              </h4>
              <div className="about-story-text">
                <p>
                  The 1966 Chevelle SS396 captivated onlookers with its striking appearance. The revamped Fisher body ushered in a new era for the mid-size Chevy, establishing it as a performance icon. In this iteration, the SS396 evolved into a distinct model within the Chevelle lineup, showcasing numerous styling upgrades and an unwavering focus on performance.
                </p>
                <p>
                  This '138' code Chevelle SS396 underwent an impressive frame-off restoration in 2013, emerging as a visual masterpiece. A professional application of Bolero Red paint revitalized the exterior, complemented by a meticulous restoration of the interior in original red vinyl. Every authentic detail, including the Muncie 'hypodermic' shifter, was thoughtfully recreated. The cabin features a complete set of SunPro gauges alongside a column-mounted tachometer, tinted windows, and an aftermarket AM/FM/cassette stereo system.
                </p>
                <p>
                  Under the hood, the original 396ci 'Rat' powerplant gave way to a robust 427ci big block. This powerhouse, meticulously rebuilt, boasts an aluminum intake, dual-line Holley carburetor, and a street-savvy cam. Paired with a 4-speed manual transmission, the throaty exhaust note resonates with power (Trivia: A few years later, Don Yenko Chevrolet in Pittsburgh adopted a similar drivetrain package for their COPO Chevelles).
                </p>
                <p>
                  GM Rally wheels with trim rings and centers embrace sturdy 15" BFG Radial T/A tires. Steering is managed manually, while power disc/drum brakes, a front sway bar, and HD shocks contribute to a balanced driving experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with 3 Stat Circles & Overlapping Car */}
      <AboutSection showTopHeader={false} />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default AboutPage;
