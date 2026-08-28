import "./Hero.css";
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-subtitle">
          DIGITAL SKILLS • WEB DEVELOPMENT • DATA • INNOVATION
        </p>

        <h1>
          Building Skills.
          <br />
          Creating Opportunities.
          <br />
          Driving Impact.
        </h1>

        <p className="hero-description">
          Resilient Institute Digital Services helps individuals,
          students, entrepreneurs, and organizations develop practical
          digital skills and technology solutions for the modern world.
        </p>

        <div className="hero-buttons">

          <a href="#services" className="btn primary-btn">
            Explore Our Services
          </a>

          <a href="#contact" className="btn secondary-btn">
            Get In Touch
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;