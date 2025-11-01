import React, { useState } from "react";
import "../styles/EventsPage.css";

// Example event data (replace with your real event posters & info)
const eventsData = [
  {
    id: 1,
    title: "Chem Quest",
    image: "/images/event1.jpg",
    description: "A thrilling quiz competition testing your chemistry IQ."
  },
  {
    id: 2,
    title: "Reactathon",
    image: "/images/event2.jpg",
    description: "Build, innovate, and showcase your coding prowess."
  },
  {
    id: 3,
    title: "EcoVision",
    image: "/images/event3.jpg",
    description: "Sustainable ideas competition for a greener tomorrow."
  },
  {
    id: 4,
    title: "InnovateX",
    image: "/images/event4.jpg",
    description: "Present your breakthrough engineering innovations."
  },
  {
    id: 5,
    title: "Lab Master",
    image: "/images/event5.jpg",
    description: "Hands-on experimental challenge for future scientists."
  },
  {
    id: 6,
    title: "TechExpo",
    image: "/images/event6.jpg",
    description: "A showcase of futuristic chemical tech prototypes."
  },
  {
    id: 7,
    title: "PosterMania",
    image: "/images/event7.jpg",
    description: "Unleash your creativity through poster presentations."
  },
  {
    id: 8,
    title: "BrainStorm",
    image: "/images/event8.jpg",
    description: "Collaborate, debate, and discover with your peers."
  },
];

function EventsPage() {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((fav) => fav !== id));
    } else {
      setFavourites([...favourites, id]);
    }
  };

  return (
    <section className="events-page">
      <div className="container">
        <h2 className="text-center">Alchemix 2025 Events</h2>
        <p className="subtitle text-center">
          Explore the 8 exciting events happening this year — register early to secure your spot!
        </p>

        <div className="events-grid">
          {eventsData.map((event) => (
            <div className="event-card" key={event.id}>
              <img src={event.image} alt={event.title} className="event-image" />

              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>

                <div className="event-buttons">
                  <button className="register-btn">Register Now</button>
                  <button
                    className={`fav-btn ${
                      favourites.includes(event.id) ? "active" : ""
                    }`}
                    onClick={() => toggleFavourite(event.id)}
                  >
                    {favourites.includes(event.id) ? "★ Added" : "☆ Add to Favourites"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsPage;
