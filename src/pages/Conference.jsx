import React from "react";

const Conference = () => {
  return (
    <div className="page-layout">
      <main className="content">
        <div className="card-box">
          <h1 style={{ color: "#185668" }}>
            About DICON 2027
          </h1>
          <p>
            <strong>
              1<sup>st</sup> Dronacharya International Conference on Intelligent
              Computing and Emerging Technologies (DICON 2027)
            </strong>{" "}
            is a first-time, international, peer-reviewed conference centered
            on the theme of intelligent, sustainable, and future-ready
            computing technologies. The conference is envisioned as a global
            platform for researchers, academicians, industry experts, and
            students to come together and explore how artificial intelligence,
            data-driven systems, smart electronics, and sustainable digital
            paradigms are reshaping the future of technology and society.
            DICON 2027 promotes rigorous peer review, ethical research
            practices, and interdisciplinary collaboration while encouraging
            innovative ideas that address real-world challenges.
          </p>

          <p>
            Organized by Dronacharya College of Engineering, Gurugram, an
            institution known for academic excellence and strong
            industry-oriented research culture, DICON 2027 benefits from a rich
            research ecosystem, extensive scholarly contributions, funded
            research projects, and international collaborations. The
            institute's advanced laboratories, digital resources, and
            research-focused academic environment provide a strong foundation
            for hosting a high-quality international conference and fostering
            impactful scholarly engagement.
          </p>

          <h2>Conference Goals</h2>

          <p>
            The primary goals of DICON 2027 are to promote original and
            high-quality research in intelligent computing and emerging
            technologies, encourage meaningful collaboration between academia
            and industry, publish accepted and presented papers in IEEE Xplore
            in accordance with IEEE standards, and strengthen student and young
            professional engagement with IEEE. Through these objectives, the
            conference aims to inspire innovation, support sustainable
            technological development, and contribute significantly to global
            research advancement.
          </p>

          <h2>Conference Tracks</h2>

          <ul className="conference-tracks">
            <li>
              <strong>Track 1:</strong> Artificial Intelligence and Computational
              Intelligence
            </li>

            <li>
              <strong>Track 2:</strong> IoT and Sensor Networks
            </li>

            <li>
              <strong>Track 3:</strong> Cybersecurity and Privacy in Intelligent
              Systems
            </li>

            <li>
              <strong>Track 4:</strong> Electronics and Embedded Systems for Smart
              Technologies
            </li>

            <li>
              <strong>Track 5:</strong> Sustainable Computing and Emerging
              Paradigms
            </li>

            <li>
              <strong>Track 6:</strong> Data Science, Cloud, and Edge Computing
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Conference;