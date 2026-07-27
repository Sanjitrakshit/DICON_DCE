import React from 'react';

const advisoryMembers = [
  {
    name: 'Prof. (Dr.) Prerna Gaur',
    designation:
      'Director Netaji Subhas University of Technology & Chair, IEEE India Council, New Delhi',
  },
  {
    name: 'Prof. (Dr.) M.N. Hoda',
    designation:
      'Vice-Chancellor, Bharti Vidyapeeth Deemed University & Chairperson, IEEE Delhi Section',
  },
  {
    name: 'Prof. (Dr.) Rajnish Sharma',
    designation:
      'Vice-Chancellor, Chitkara University, Baddi & Vice Chair, IEEE Delhi Section',
  },
  {
    name: 'Prof. (Dr.) A.Q. Ansari',
    designation:
      'Professor, Jamia Millia Islamia, New Delhi & Chair, SIGHT (IEEE OU), Ex-Chair, IEEE Delhi Section',
  },
  {
    name: 'Prof. (Dr.) Sneha Kamra',
    designation:
      'Professor, Department of Electronics Science, University of Delhi, South Campus, New Delhi & Secretary, IEEE Delhi Section',
  },
  {
    name: 'Prof. (Dr.) Rashmi Aggarwal',
    designation:
      'Dean, School of Computer Applications, Manav Rachna International Institute of Research and Studies & Chairperson, Women In Engineering (WIE), IEEE Delhi Section',
  },
  {
    name: 'Prof. (Dr.) S.S. Tyagi',
    designation:
      'Dean Faculty of Science and Technology Gurugram University, Gurugram & Chair, Systems, Man and Cybernetics Chapter, IEEE Delhi Section, India',
  },
  {
    name: 'Prof. (Dr.) K. Subramanian',
    designation:
      'Professor, Department of Electrical Engineering, Netaji Subhas Technical University, New Delhi & Chair, Computer Society, IEEE Delhi Section, India',
  },
  {
    name: 'Prof. (Dr.) Ghansyam Singh',
    designation:
      'Director, Center for Smart Information and Communication Systems, University of Johannesburg, South Africa',
  },
  {
    name: 'Prof. (Dr.) Dharm Singh Jat',
    designation:
      'Professor of Computer Science & UNESCO Chairholder, Secure High-performance Computing for Higher Education and Research, Namibia University of Science and Technology, Windhoek, Namibia',
  },
  {
    name: 'Dr. Richa Sharma',
    designation:
      'Assistant Professor, Department of Mathematics, Computer science & Digital Forensics, Commonwealth University, Pennsylvania (PA), USA',
  },
  {
    name: 'Prof. (Dr.) Ashwani Sharma',
    designation:
      'Associate professor, Indian Institute of Technology, Ropar, Punjab, India.',
  },
  {
    name: 'Dr. Ashutosh Sharma',
    designation:
      'Distinguished Professor, Institute of Management Science and Engineering, HAUST, China',
  },
  {
    name: 'Prof. (Dr.) Soobin Jeon',
    designation: 'Daegu Catholic University, South Korea',
  },
  {
    name: 'Prof. (Dr.) Kim Daehee',
    designation: 'Daegu Catholic University, South Korea',
  },
  {
    name: 'Prof. (Dr.) Sugandha Singh',
    designation:
      'Dean, School of Engineering and Technology, Noida International University, Greater Noida & Senior Member IEEE',
  },
  {
    name: 'Prof. (Dr.) Vivekanand Jha',
    designation: 'Department of Computer Science and Engineering, IGDTUW, Delhi',
  },
  {
    name: 'Prof. (Dr.) C. Ramakrishna',
    designation:
      'Dean, Administration and Finance, Professor and Head, Department of Computer Science Engineering, NITTTR, Chandigarh',
  },
  {
    name: 'Prof. (Dr.) Maitreyee Dutta',
    designation:
      'Head, Department of Information Management and Emerging Engineering, NITTTR, Chandigarh',
  },
  {
    name: 'Dr. B.S. Dhaliwal',
    designation:
      'Associate Dean, Academics and Students, Professor, Department of Electronics and Communication Engineering, NITTTR, Chandigarh & Senior Member IEEE',
  },
  {
    name: 'Dr. Shruti Jain',
    designation:
      'Professor & Associate Dean, Department of Electronics and Communication Engineering, Jaypee University of Information Technology, Solan, Himachal Pradesh & Senior Member IEEE',
  },
  {
    name: 'Prof. (Dr.) Mayuri Mehta',
    designation:
      'Professor, Department of Computer Engineering, Sarvajanik College of Engineering and Technology (NIT Surat) & SMIEEE, IEEE WIE, IEEE SPS',
  },
  {
    name: 'Dr. Pooja Jain',
    designation: 'Associate Professor, Department of Computer Science, IIIT Nagpur',
  },
  {
    name: 'Dr. Semma Avasthi',
    designation:
      'Associate Professor, Department of Electronics and Communication, IIT, Kanpur',
  },
  {
    name: 'Dr. Geetanjali Rathee',
    designation:
      'Associate Department of Computer Science and Engineering, Netaji Subhas University of Technology, New Delhi',
  },
  {
    name: 'Dr. Manoj Kumar Tiwari',
    designation: 'Senior Principal Design, Cadence Design System, Hyderabad',
  },
  {
    name: 'Dr Manoj Tiwari',
    designation: 'ST Microelectronics, Gautam Buddha Nagar, Uttar Pradesh, India',
  },
  {
    name: 'Mr. Srini Vasudevan',
    designation: 'CTO KangaSys / Cloud Architect, Sydney, Australia',
  },
  {
    name: 'Dr. Yogesh S. Chauhan',
    designation:
      'Head, Department of Electronics and Communication, IIT Kanpur & Senior Member IEEE',
  },
  {
    name: 'Dr. Neeraj Gehlot',
    designation:
      'Assistant Professor, Department of Computer Science, IIIT Alahabad & Senior Member IEEE',
  },
  {
    name: 'Dr. Shubham Goel',
    designation:
      'Assistant Professor, Department of Engineering and Technology, Gurugram University, India',
  },
  {
    name: 'Dr. Sumit Choudhary',
    designation:
      'Assistant Professor, Department of Engineering and Technology, Gurugram University, India & Senior Member IEEE',
  },
  {
    name: 'Dr. Neha Jain',
    designation:
      'Head, Department of Data Science and Big Data, IILM University, Greater Noida',
  },
  {
    name: 'Dr. Adesh Mishra',
    designation: 'Assistant Professor, Department of Electrical Engineering, MDU, Rohtak',
  },
  {
    name: 'Dr. Anshul Vrashney',
    designation: 'Senior Scientist, National Physics Laboratory, CSIR',
  },
  {
    name: 'Dr. Avni Khatkar',
    designation:
      'Scientist, National Physics Laboratory, CSIR & Senior Member IEEE',
  },
  {
    name: 'Mr. Deepak Malhotra',
    designation:
      'Director, Delloite, India & Expert in Technology Strategy & Architecture',
  },
  {
    name: 'Mr. Mohit Sehgal',
    designation: 'General Manager, Maruti Suzuki, MSIL, India',
  },
  {
    name: 'Mr. Yogesh Puri',
    designation: 'Senior Architect-Tech (AIA-Data) Cognizant, Sydney, Australia',
  },
];

const Advisory = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="page-header committee-page-header">
            <h1>Advisory Committee</h1>
            <p className="committee-page-subtitle">
              Distinguished Experts Guiding DICON 2027
            </p>
          </div>

          <div className="card-box committee-single-card">
              <ul className="committee-member-list">
              {advisoryMembers.map((member, index) => (
                <li key={index}>
                  <span className="committee-member-name">{member.name}</span>
                  <br />
                  {member.designation}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Advisory;
