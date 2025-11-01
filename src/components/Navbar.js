import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <ul className="nav-links">
        <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("events")}>Events</li>
        <li onClick={() => scrollToSection("faqs")}>FAQs</li>
        <li onClick={() => scrollToSection("events")}>Schedule</li>
        <li onClick={() => scrollToSection("faqs")}>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
