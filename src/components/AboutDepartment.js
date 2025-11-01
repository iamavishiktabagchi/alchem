import React from "react";
import "../styles/AboutDepartment.css";

function AboutDepartment() {
  return (
    <section className="about">
      <div className="container">
        {/* Heading */}
        <h2 className="text-center">
          About the <span>Department</span>
        </h2>
        <p className="about-desc text-center">
          The Department of Chemical Engineering has been at the forefront of
          innovation and education for over three decades, shaping the future of
          chemical engineering through cutting-edge research and exceptional
          academic programs.
        </p>

        {/* Mission + Vision */}
        <div className="mission-vision">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              To nurture technically competent and socially responsible chemical
              engineers who contribute to sustainable development through
              innovative research, quality education, and industry collaboration.
            </p>
          </div>

          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              To be a globally recognized center of excellence in chemical
              engineering education and research, addressing contemporary
              challenges in energy, environment, and materials through innovation
              and sustainable practices.
            </p>

            <div className="stats-row">
              <div className="stat">
                <h4>125</h4>
                <p>Years of Excellence</p>
              </div>
              <div className="stat">
                <h4>67</h4>
                <p>Research Projects</p>
              </div>
              <div className="stat">
                <h4>345</h4>
                <p>Alumni</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="info-cards">
          <div className="info-card">
            <div className="icon">📘</div>
            <h4>Academic Excellence</h4>
            <p>
              Ranked among top chemical engineering programs with distinguished
              faculty.
            </p>
          </div>

          <div className="info-card">
            <div className="icon">🔬</div>
            <h4>Research Focus</h4>
            <p>
              Cutting-edge research in sustainable processes and green chemistry.
            </p>
          </div>

          <div className="info-card">
            <div className="icon">🤝</div>
            <h4>Industry Partnerships</h4>
            <p>
              Strong collaborations with leading chemical and pharmaceutical
              companies.
            </p>
          </div>

          <div className="info-card">
            <div className="icon">🎓</div>
            <h4>Student Success</h4>
            <p>
              Outstanding placement record and alumni network across the globe.
            </p>
          </div>
        </div>

        {/* Research Areas */}
        <div className="research">
          <h3>Key Research Areas</h3>
          <div className="research-tags">
            <span>Process Systems Engineering</span>
            <span>Renewable Energy & Biofuels</span>
            <span>Green Chemistry & Sustainability</span>
            <span>Nanomaterials & Catalysis</span>
            <span>Polymer Science & Engineering</span>
            <span>Environmental Engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDepartment;
