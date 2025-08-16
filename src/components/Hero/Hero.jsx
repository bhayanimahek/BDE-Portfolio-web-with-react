import React from "react";
import "./Hero.css";
import profileImg from "../../assets/profile.png";
import Reveal from "../Reveal";

export default function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="hero">
      <Reveal direction="left" delay={0.1}>
        <div className="hero-content">
          {/* Name */}
          <h1 className="hero-title">
            Hi!!! I am <span className="highlight-name">Gunjal Panchal</span>
          </h1>

          {/* Typewriter role line */}
          <p className="hero-typewriter">
            Business Development Executive | Growth Strategist{" "}
          </p>

          {/* Your original tagline with minimal highlights */}
          <p className="hero-tagline hero-title">
            I help Companies in{" "}
            <span className="blinking-underline">
              Building Strong Business Connections
            </span>
            , <br />
            <span className="highlight-name">One Deal at a Time</span>
          </p>

          <p className="hero-description">
            As a dedicated Business Development Executive, I specialize in
            creating partnerships, fostering trust, and driving growth for
            companies through innovative strategies and meaningful
            collaborations.
          </p>

          <button className="hero-btn" onClick={scrollToPortfolio}>
            1½ Years of Experience as a BDE
          </button>
        </div>
      </Reveal>

      <Reveal direction="right" delay={0.3}>
        <div className="hero-image">
          <img src={profileImg} alt="Business Development" />
        </div>
      </Reveal>
    </section>
  );
}
