import React from 'react';

const Workshop = () => {
  const sessions = [
    'Fundamentals of Data Science & Machine Learning',
    'Data Loading, Cleaning and Statistical Analysis using Python (Hands On)',
    'Exploratory Data Analysis, Visualization & Reporting using Python (Hands On)',
    'Feature Engineering using Python with Sample Dataset (Hands On)',
    'Data Science and Machine Learning Implementation using Medical Dataset - Case Study',
    'Data Science and Machine Learning Implementation using Environmental Dataset - Case Study',
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="page-header committee-page-header">
            <h1>Code to Insight: Practical ML for Real-World Applications</h1>
            <p className="committee-page-subtitle">
              Three Days Practical Oriented Workshop
            </p>
            <span className="workshop-level-badge">Level: Basic &amp; Intermediate</span>
          </div>

          <div className="card-box workshop-section">
            <h2>About the Workshop</h2>
            <p>
              This workshop is designed to help beginners understand the
              fundamentals of Data Science and Machine Learning and apply them to
              real-world problems through hands-on learning.
            </p>
            <p>
              <strong>Facilitated by:</strong> Dr. Jagriti Saini
              <br />
              Eternal RESTEM
            </p>
            <ul>
              <li>Understand basics of Data Science and Machine Learning.</li>
              <li>
                Implement data preprocessing and feature engineering techniques.
              </li>
              <li>
                Develop machine learning regression and classification models.
              </li>
              <li>
                Work with real-world datasets through practical case studies.
              </li>
              <li>
                Explore the scope of Data Science and ML in solving industry
                challenges.
              </li>
            </ul>
          </div>

          <div className="workshop-stats-grid">
            <div className="card-box workshop-stat-card">
              <h3>3</h3>
              <p>Days</p>
            </div>
            <div className="card-box workshop-stat-card">
              <h3>6</h3>
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
                src="/images/Dr. Jagriti Saini.jpg"
                alt="Dr. Jagriti Saini"
                className="workshop-speaker-photo"
              />
              <div className="workshop-speaker-details">
                <h4>Dr. Jagriti Saini</h4>
                <p>Eternal RESTEM</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workshop;
