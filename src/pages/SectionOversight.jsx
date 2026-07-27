import React from 'react';

const oversightMembers = [
  {
    name: 'Prof. (Dr.) Vivek Shrivastava (LMC)',
    designation:
      'Section Executive Committee Member Co-opted and Member, IEEE Delhi Section Standing Committee on Technical and Professional Activities-Conference.',
    email: 'shvivek@gmail.com',
  },
  {
    name: 'Dr. Ekta Gandotra',
    designation:
      'Lead Member Coordinator for DICON 2027 and Member, IEEE Delhi Section Standing Committee on Technical and Professional Activities-Conference.',
    email: 'ekta.gandotra@juitsolan.in',
  },
  {
    name: 'Prof. (Dr.) Rajnish Sharma',
    designation:
      'Vice Chair and Member, IEEE Delhi Section Standing Committee on Technical and Professional Activities-Conference.',
    email: 'rajnish@ieee.org',
  },
  {
    name: 'Prof. (Dr.) Sneha Kamra',
    designation:
      'Section Secretary, Interim Section Treasurer and Member, IEEE Delhi Section Standing Committee on Technical and Professional Activities-Conference.',
    email: 'snehakabra@ieee.org',
  },
];

const SectionOversight = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="page-header committee-page-header">
            <h1>IEEE Delhi Section Oversight Committee</h1>
            <p className="committee-page-subtitle">
              Technical Sponsorship Oversight for the Conference
            </p>
          </div>

          <div className="card-box committee-single-card">

            <h2 className="committee-section-title">DICON 2027 Section Oversight Committee Members</h2>

            <ul className="committee-member-list">
              {oversightMembers.map((member, index) => (
                <li key={index}>
                  <span className="committee-member-name">{member.name}</span>
                  <br />
                  {member.designation}
                  <br />
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SectionOversight;
