import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        <div className="about-content">

         <p className="about-subtitle">
            ABOUT RESILIENT INSTITUTE
        </p>

          <h2>
            Building Digital Skills for a Better Future
          </h2>

          <p>
            Resilient Institute Digital Services is a technology and
            digital skills initiative focused on helping individuals,
            students, entrepreneurs, and organizations develop practical
            skills for today's digital world.
          </p>

          <p>
            We combine technology education, creative digital services,
            and practical project-based learning to help people turn
            knowledge into real opportunities.
          </p>

          <p>
            Our goal is simple: make modern technology more accessible,
            practical, and useful for the people and communities we serve.
          </p>

        </div>


        <div className="about-values">

          <div className="value-card">
            <h3>01</h3>
            <h4>Learn</h4>
            <p>
              We provide practical knowledge and skills that people can
              apply in real-world situations.
            </p>
          </div>

          <div className="value-card">
            <h3>02</h3>
            <h4>Innovate</h4>
            <p>
              We encourage creative thinking and the use of technology
              to solve meaningful problems.
            </p>
          </div>

          <div className="value-card">
            <h3>03</h3>
            <h4>Empower</h4>
            <p>
              We help learners and businesses gain the confidence to
              create, work, and grow digitally.
            </p>
          </div>

          <div className="value-card">
            <h3>04</h3>
            <h4>Impact</h4>
            <p>
              We focus on creating digital solutions and knowledge
              that produce lasting value.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;