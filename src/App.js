import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import EventDetails from "./components/EventDetails";
import ProgramSchedule from "./components/ProgramSchedule";
import AboutDepartment from "./components/AboutDepartment";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />

      {/* About Section */}
      <section id="about">
        <AboutDepartment />
      </section>

      {/* Events Section */}
      <section id="events">
        <EventDetails />
        <ProgramSchedule />
      </section>

      {/* FAQs Section */}
      <section id="faqs">
        <FAQSection />
      </section>

      <Footer />
    </div>
  );
}

export default App;
