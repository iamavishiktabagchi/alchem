import React from "react";
import "../styles/ProgramSchedule.css";

function ProgramSchedule() {
  return (
    <section className="program">
      <div className="program-header text-center">
        <span className="badge">Event Schedule</span>
        <h2>Two-Day Program</h2>
      </div>

      <div className="program-grid">
        <div className="day-card">
          <h3>Day 1 – March 15</h3>
          <ul>
            <li><span>09:00 AM</span> Inauguration Ceremony (Opening)</li>
            <li><span>10:30 AM</span> Masti (Keynote)</li>
            <li><span>02:00 PM</span> Gang (Session)</li>
            <li><span>04:00 PM</span> Hello (Panel)</li>
          </ul>
        </div>

        <div className="day-card">
          <h3>Day 2 – March 16</h3>
          <ul>
            <li><span>12:00 PM</span> Nikon (Workshop)</li>
            <li><span>01:30 PM</span> Sithkal Bangali (Konwak)</li>
            <li><span>03:00 PM</span> SM Shi (Competition)</li>
            <li><span>05:00 PM</span> Prize Distribution & Closing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProgramSchedule;
