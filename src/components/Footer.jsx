import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Resilient Institute</h2>

          <p>
            Empowering individuals with practical digital skills
            for career, business and personal growth.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="WhatsApp">wa</a>
          </div>
        </div>


        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/courses">Courses</a>
          <a href="/contact">Contact</a>
        </div>


        {/* Training */}
        <div className="footer-column">
          <h3>Our Training</h3>

          <a href="/courses">Web Development</a>
          <a href="/courses">Data Analysis</a>
          <a href="/courses">Graphic Design</a>
          <a href="/courses">Prompt Engineering</a>
        </div>


        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>📍 Lagos, Nigeria</p>
          <p>📞 +234 803 973 5306, +234 806 991 7400</p>
          <p>✉️ info@resilientinstitutedigitalservice.com</p>
        </div>

      </div>


      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Resilient Institute.
          All rights reserved.
        </p>

        <p>Learn. Build. Grow. Become Resilient.</p>
      </div>
    </footer>
  );
}

export default Footer;