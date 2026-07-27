import React from 'react';

const Plenary = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="page-header">
            <h1>Plenary Speakers</h1>
          </div>
          <div className="speakers-grid">


            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/simon-muchinenyika.jpeg"
                alt="Dr. Simon Muchinenyika"
              />
              <h3>Dr. Simon Muchinenyika</h3>
              <p>
                Head, Department of Software Engineering
                <br />
                Namibia University of Science and Technology, Namibia, South Africa
              </p>
            </div>

            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/ghanshyam-singh.jpeg"
                alt="Prof. Ghanshyam Singh"
              />
              <h3>Prof. Ghanshyam Singh</h3>
              <p>
                Department of Electrical and Electronics Engineering and the Built
                Environment
                <br />
                Auckland Park Kingsway Campus, University of Johannesburg, South Africa
              </p>
            </div>

            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/shruti-sharma.jpeg"
                alt="Dr. Shruti Sharma"
              />
              <h3>Dr. Shruti Sharma</h3>
              <p>
                Research Scientist, Department of Electrical and Computer Engineering
                <br />
                Ajou University, South Korea
              </p>
            </div>

            <div className="speaker-card">
              <img
                className="circular-img"
                src="/images/dong-zhang.jpeg"
                alt="Dr. Dong Zhang"
              />
              <h3>Dr. Dong Zhang</h3>
              <p>
                Associate Professor, Department of Mathematics, Computer Science, and
                Digital Forensics
                <br />
                Commonwealth University of Pennsylvania, United States
              </p>
            </div>
          </div>


        </main>
      </div>
    </div>
  );
};

export default Plenary;
