import profilePicture from "../images/hamzah.jpg";
import "./Founder.css";

function Founder() {
  return (
    <section className="founder-section" id="founder">

      <div className="founder-container">

        <div className="founder-image">

          <img
            src={profilePicture}
            alt="Hamzah - Founder of Resilient Institute Digital Services"
          />

        </div>


        <div className="founder-content">

          <p className="section-subtitle">
            MEET THE PERSON BEHIND RESILIENT
          </p>

          <h2>
            Hamzah Ajiyan
          </h2>

          <h3>
            Founder • Technology Trainer • Frontend Developer
          </h3>

          <p>
            Hamzah is a Computer Science professional with a strong
            interest in frontend web development, data analysis,
            digital education, and technology-driven solutions.
          </p>

          <p>
            Through Resilient Institute Digital Services, he is
            passionate about helping students, individuals, and
            aspiring professionals develop practical digital skills
            that can be applied to real-world opportunities.
          </p>

          <p>
            His approach combines continuous learning, practical
            projects, and accessible technology education with a
            vision of using digital skills to create meaningful and
            lasting impact.
          </p>

          <a href="#contact" className="founder-btn">
            Let's Connect
          </a>

        </div>

      </div>

    </section>
  );
}

export default Founder;