import React from 'react';

const Workshop = () => {
  const sessions = [
'Discover the fundamentals of drones, robotics, emerging autonomous technologies, their applications, and exciting career opportunities.',
'Understand drone architecture, essential hardware components, communication systems, and operational safety practices.',
'Learn the basics of robotics, embedded platforms, sensors, actuators, and real-time data acquisition for intelligent systems.',
'Experience live demonstrations of drone assembly, wiring, calibration, flight controller configuration, and pre-flight safety procedures.',
'Explore robot assembly, sensor integration, basic programming, obstacle detection, and system testing through practical demonstrations.',
'Observe live drone flight and robot navigation demonstrations showcasing real-world autonomous system capabilities.',
'Learn design thinking, system planning, and team collaboration while addressing real-world engineering challenges.',
'Develop innovative prototype concepts for applications in smart agriculture, disaster management, healthcare, and environmental monitoring.',
'Present project ideas and prototype designs while demonstrating engineering concepts, teamwork, and innovative problem-solving approaches.'
];
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="page-header committee-page-header">
            <h1>FutureTech Workshop: Drones, Robotics & Embedded Intelligence</h1>
            <p className="committee-page-subtitle">
              Three Days Practical Oriented Workshop (22–24 April 2027)
            </p>
            <span className="workshop-level-badge">Level: Basic &amp; Intermediate</span>
          </div>

          <div className="card-box workshop-section">
            <h2>About the Workshop</h2>
            <p>
            This three-day hands-on workshop introduces participants to the exciting world of drones, robotics, and embedded intelligence through expert-led sessions, live demonstrations, and innovation-based activities. Participants will gain practical insights into drone architecture, robotic systems, embedded platforms, and prototype design while exploring real-world engineering applications.            </p>
            <p>
              <strong>Facilitated by:</strong> 
              <br />
              
            </p>
            <ul>
              <li>Understand the fundamentals of drones, robotics, and autonomous systems.

              </li>
              <li>
              Explore embedded platforms such as Arduino, ESP32, and Raspberry Pi.
              </li>
              <li>
              Learn sensor interfacing, navigation systems, and real-time data acquisition.
              </li>
              <li>
              Observe live demonstrations of drone assembly, calibration, and robotic systems.
              </li>
              <li>
              Enhance problem-solving, teamwork, and project development skills.  </li>  </ul>
          </div>

          <div className="workshop-stats-grid">
            <div className="card-box workshop-stat-card">
              <h3>3</h3>
              <p>Days</p>
            </div>
            <div className="card-box workshop-stat-card">
              <h3>9</h3>
              <p>Sessions</p>
            </div>
            <div className="card-box workshop-stat-card">
              <h3>3</h3>
              <p>Sessions Per Day</p>
            </div>
          </div>

          <div className="card-box workshop-section">
            <h2>Workshop Sessions</h2>
            <ul className="workshop-sessions-list">
              {sessions.map((session, index) => (
                <li key={index}>
                  <strong>Session {index + 1}:</strong> {session}
                </li>
              ))}
            </ul>
            <p className="workshop-note">
              * Sessions and case studies may be updated according to participant
              requirements.
            </p>
          </div>

          <div className="card-box workshop-speaker-card">
            <div className="workshop-speaker-card-header">
              <h3>Workshop Resource Person</h3>
            </div>
            <div className="workshop-speaker-card-body">
              <img
                src="/images/kajal.jpeg"
                alt="Kajal P. Rajvaidya"
                className="workshop-speaker-photo"
              />
              <div className="workshop-speaker-details">
                <h4>Ms. Kajal P. Rajvaidya</h4>
                <p>CEO &amp; Founder, KITS Tech. Learning Center</p>
                <p>Akola, Maharashtra</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workshop;
