import React from "react";
import "../styles/EventDetails.css";

function EventDetails() {
  return (
    <section className="event-details">
      <h2>Event Details</h2>
      <p>Everything you need to know about Alchemix 2025</p>

      <div className="details-grid">
        <div className="detail-card">
          <h4>📅 Event Date</h4>
          <p>November 14–15, 2025</p>
          <span>Two full days of chemical sessions!</span>
        </div>

        <div className="detail-card">
          <h4>📍 Venue</h4>
          <p>HL Roy</p>
          <span>Modern auditorium with labs & workshops</span>
        </div>

        <div className="detail-card">
          <h4>👥 Participants</h4>
          <p>500+ Expected</p>
          <span>Students, faculty, and industry experts</span>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
