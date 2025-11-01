import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-col">
          <h4>ALCHEMIX</h4>
          <p>
            Annual MASTI EVENT of the Department of Chemical Engineering
          </p>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Event Details</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h5>Contact Us</h5>
          <p>mastgmat@gmail.com</p>
          <p>+91 9749275675</p>
          <p>Department of Chemical Engineering, University Campus</p>
        </div>

        {/* Event Details */}
        <div className="footer-col">
          <h5>Event Details</h5>
          <p>Nov 14–15, 2025</p>
          <p>H.L. Roy</p>
          <p>8:00 AM – 6:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Department of Chemical Engineering. All rights reserved.</p>
        <p>
          Designed with 💙 by <span className="highlight">Tech Team</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
