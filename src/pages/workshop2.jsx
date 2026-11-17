import React from 'react';

const Workshop = () => {
  const sessions = [
    'Explore the latest MATLAB & Simulink features, industry applications, and signal processing through interactive demonstrations and hands-on exercises.',
    'Learn data analytics and machine learning by importing, cleaning, analysing data, and building predictive models using MATLAB.',
    "Gain practical experience with deep learning, image processing, pre-trained models, and MATLAB's AI development tools.",
    'Discover how AI integrates with Model-Based Design to develop, simulate, and optimize intelligent engineering systems using MATLAB.',
    
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="page-header committee-page-header">
            <h1>Data Analytics, AI & Model-Based Design with MATLAB</h1>
            <p className="committee-page-subtitle">
              Two Days Practical Oriented Workshop 
              (23–24 April 2027)
            </p>
            <span className="workshop-level-badge">Level: Basic &amp; Intermediate</span>
          </div>

          <div className="card-box workshop-section">
            <h2>About the Workshop</h2>
            <p>
            This two-day hands-on workshop is designed to introduce participants to modern Data Analytics, Artificial Intelligence, Deep Learning, and Model-Based Design using MATLAB & Simulink. Through interactive demonstrations and practical exercises, participants will gain industry-relevant skills for analysing data, building AI models, and designing intelligent engineering systems.

            </p>
            <p>
              <strong>Facilitated by:</strong> 
              <br />
              
            </p>
            <ul>
              <li>Explore the latest features of MATLAB & Simulink.</li>
              <li>
              Learn data analytics and machine learning workflows using MATLAB.
              </li>
              <li>
              Build, train, and validate predictive AI models.
              </li>
              <li>
              Understand deep learning concepts through image-based applications.
              </li>
              <li>
              Complete hands-on exercises and live demonstrations using MATLAB.
              </li>
            </ul>
          </div>

          <div className="workshop-stats-grid">
            <div className="card-box workshop-stat-card">
              <h3>2</h3>
              <p>Days</p>
            </div>
            <div className="card-box workshop-stat-card">
              <h3>4</h3>
              <p>Sessions</p>
            </div>
            <div className="card-box workshop-stat-card">
              <h3>2</h3>
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
                src="/images/manojkumar.png"
                alt="Manoj Kumar"
                className="workshop-speaker-photo"
              />
              <div className="workshop-speaker-details">
                <h4>Mr. Manoj Kumar</h4>
                <p>Assistant Manager-Technical, DesignTech Systems Pvt. Ltd.</p>
                <p>Specialized in MathWorks Products</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workshop;
