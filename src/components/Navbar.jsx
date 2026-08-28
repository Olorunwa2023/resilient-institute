import logo from "../images/resilient-logo.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-container">
        <img
          src={logo}
          alt="Resilient Institute Digital Services Logo"
        />
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#founder">Founder</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#training">Training</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;