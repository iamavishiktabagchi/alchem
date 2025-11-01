import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="event-tag">Annual masti event 2025</div>
      <h1 className="event-title">ALchemix</h1>
      <p className="event-subtitle">Igniting Innovation in Chemical Engineering</p>

      <div className="event-info">
        <span>📅 November 14-15, 2025</span>
        <span>📍 HL Roy</span>
      </div>

      <p className="event-desc">
        Join us for two days of groundbreaking research presentations, interactive workshops,
        and networking opportunities with industry leaders and academic pioneers in chemical engineering.
      </p>

      <div className="buttons">
        <button className="register-btn">Register Now</button>
        <button className="schedule-btn">View Schedule</button>
      </div>
    </section>
  );
}

export default Hero;
