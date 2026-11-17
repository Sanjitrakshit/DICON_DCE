import React from 'react';

const Workshop = () => {
  const sessions = [
    'Introduction to cybersecurity, the modern threat landscape, common attack types, and real-world security breach case studies.',
'Learn networking fundamentals including TCP/IP, DNS, ports, firewalls, HTTP/HTTPS, and basic port scanning techniques.',
'Set up a Kali Linux lab and explore essential Linux commands along with security tools such as Nmap, Netcat, and Curl.',
'Explore cybersecurity career opportunities, certification pathways, and building a personal cybersecurity lab.',
'Learn reconnaissance techniques for identifying targets, fingerprinting servers, and gathering information during security assessments.',
'Understand common web vulnerabilities including SQL Injection, Cross-Site Scripting (XSS), Command Injection, and the OWASP Top 10.',
'Apply cybersecurity concepts through hands-on Capture the Flag (CTF) exercises involving privilege escalation and access control challenges.',
'Session 8: Learn professional vulnerability reporting, CVSS scoring, responsible disclosure practices, and security remediation techniques.'
];

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="page-header committee-page-header">
            <h1>Applied Cybersecurity Techniques: A Practical Intensive</h1>
            <p className="committee-page-subtitle">
              Two Days Practical Oriented Workshop (23–24 April 2027)
            </p>
            <span className="workshop-level-badge">Level: Basic &amp; Intermediate</span>
          </div>

          <div className="card-box workshop-section">
            <h2>About the Workshop</h2>
            <p>
            This two-day hands-on workshop introduces participants to the core principles of cybersecurity, ethical hacking, and web application security through practical demonstrations and guided lab exercises. Participants will explore real-world cyber threats, security tools, and vulnerability assessment techniques in a safe, instructor-led environment.
            </p>
            <p>
              <strong>Facilitated by:</strong> 
              <br />
              
            </p>
            <ul>
              <li>Understand cybersecurity fundamentals and the CIA Triad.
              </li>
              <li>
              Learn networking concepts essential for security professionals.
              </li>
              <li>
              Set up and work with Kali Linux and industry-standard security tools.
              </li>
              <li>
              Identify and analyse common web application vulnerabilities.
              </li>
              <li>
              Learn vulnerability reporting, CVSS scoring, and responsible disclosure practices. </li>
            </ul>
          </div>

          <div className="workshop-stats-grid">
            <div className="card-box workshop-stat-card">
              <h3>2</h3>
              <p>Days</p>
            </div>
            <div className="card-box workshop-stat-card">
              <h3>8</h3>
              <p>Sessions</p>
            </div>
            <div className="card-box workshop-stat-card">
              <h3>4</h3>
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
                src="/images/akash-sharma.png"
                alt="Akash Sharma"
                className="workshop-speaker-photo"
              />
              <div className="workshop-speaker-details">
                <h4> Mr. Aakash Sharma 
                </h4>
                <p>Cybertegh Pvt. Ltd. , Chandigarh</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Workshop;
