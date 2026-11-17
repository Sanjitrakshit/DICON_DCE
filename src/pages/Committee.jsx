import React from 'react';

const sections = [
  {
    title: 'Chief Patron',
    members: [
      'Dr. Satish Yadav, Chairman, Dronacharya College of Engineering, Gurugram, Haryana, India.',
    ],
  },
  {
    title: 'Patrons',
    members: [
      'Prof. (Dr.) B.M.K. Prasad, Director, Dronacharya College of Engineering, Gurugram, Haryana, India.',
    ],
  },
  {
    title: 'Honorary Chair & International Advisory Board',
    members: [
      'Prof. (Dr.) M.N. Hoda, Vice-Chancellor, Bharti Vidyapeeth Deemed University & Chairperson, IEEE Delhi Section, India',
      'Prof. (Dr.) Rajnish Sharma, Vice-Chancellor, Chitkara University, Baddi & Vice Chair, IEEE Delhi Section, India.',
      'Prof. (Dr.) Ghansyam Singh, Director, Centre for Smart Information and Communication Systems, University of Johannesburg, South Africa.',
      'Dr. Simon Muchinenyika, Head of Department, Namibia University of Science and Technology, Windhoek, Namibia',
      'Dr. Dong Zhang, Associate Professor, Department of Mathematics, Computer Science and Digital Forensics, Commonwealth University of Pennsylvania, United Staes of America (USA).',
    ],
  },
  {
    title: 'General Chairs ( Conference Convenors / Organizing Secretaries)',
    members: [
      'Prof. (Dr.) Isha Malhotra, Professor & Principal, Dronacharya College of Engineering, Gurugram, Haryana, India',
      'Prof. Tamanna Sehgal, Assistant Professor, Department of Computer Science & Engineering (Artificial Intelligence and Machine Learning), Dronacharya College of Engineering, Gurugram, Haryana, India.',
    ],
  },
  {
    title: 'Internal Advisory Board',
    members: [
      'Prof. (Dr.) Ashima Mehta, Vice-Principal, Dronacharya College of  Engineering, Gurugram, Haryana, India.',
      'Ms. Neha Chauhan, Head RDC & HoD, Department of Mechanical Engineering, Dronacharya College of Engineering,  Gurugram, Haryana, India',
      'Ms. Pooja Sharma, HoD, Department of Applied Science & Humanities, Dronachary College of Engineering, Gurugram, Haryana, India. (Technical Program Chair)',
      'Mr. Yashvardhan Soni, HoD, Department of Computer Science and Engineering , (Artificial Intelligence and Machine Learning), Dronacharya College of Engineering, Gurugram, Haryana, India',
      'Dr. Monika Rani, HoD, Department of Electronics and Communication Engineering, Dronacharya College of Engineering, Gurugram, Haryana, India',
      'Mr. Ashwani Kumar, HoD, Department of Computer Science and Information Technology, Dronacharya College of Engineering, Gurugram, Haryana, India',
      'Ms. Sravani Nidadavolu, Head, IQAC, Dronacharya College of Engineering, Gurugram, Haryana, India',
    ],
  },
  {
    title: 'Industry Liaison & Business Development Chairs',
    members: [
      'Ms. Renu Dua, Head, Career and Development Cell, Dronacharya College of Engineering, Gurugram, Haryana, India',
      'Ms Akanksha, Training and Placement Officer, Dronacharya College of Engineering, Gurugram, Haryana, India',
      'Ms. Sonali Thakur, Professional Skills Coach, Dronacharya College of Engineering, Gurugram, Haryana, India',
      'Ms. Nidhi Srivastava, Assistant Professor, Department of Computer Science and Information Technology, Dronacharya College of Engineering, Gurugram, Haryana, India',
      'Ms. Kanika Lamba, IEEE Student Branch Counceller, Dronacharya College of Engineering, Gurugram, Haryana, India.',
    ],
  },
  {
    title: 'Student Activities & Poster Presentation Chairs',
    members: [
      'Dr. Priyanka Verma, Assistant Professor, Department of Electronics and Communication Engineering, Dronacharya College of Engineering, Gurugram, Haryana, India',
      'Ms. Vimmi Malhotra, Assistant Professor, Department of Computer Science and Information Technology, Dronacharya College of Engineering, Gurugram, Haryana, India.',
      'Ms. Ruchi, Assistant Professor, Department of Electronics and Communication Engineering, Dronacharya College of Engineering, Gurugram, Haryana, India.',
      'Ms. Karuna, Assistant Professor, Department of Applied Science and Humanities, Dronacharya College of Engineering, Gurugram, Haryana, India'
    ],
  },
  {
    title: 'Logistics and Financial Control Chairs',
    members: [
      'Dr. Hansraj Yadav, Registrar, Dronacharya College of Engineering, Gurugram, Haryana, India. (Conference Treasurer)',
      'Dr. Ashok Kumar, Associate Professor, Department of Computer Science and Information Technology, Dronacharya College of Engineering, Gurugram, Haryana, India.',
      'Dr. Dixita Barua, Assistant Professor, Department of Applied Science and Humanities,  Dronacharya College of Engineering, Gurugram, Haryana, India.',
    ],
  },
  {
    title: 'Public Relation & Registration Chairs',
    members: [
      'Ms. Renu Narwal, Assistant Professor, Department of Computer Science Engineering, Dronacharya College of Engineering, Gurugram, Haryana, India.',
      'Dr. Ankit Aggarwal, Assistant Professor, Department of Mechanical Engieering, Dronacharya College of Engineering, Gurugram, Haryana, India.',
    ],
  },
  {
    title: 'Publication and Xplore Compliance Chairs',
    members: [
      'Dr. Sakshi Gupta, Assistant Professor, Department of Applied Science and Humanities,  Dronacharya College of Engineering, Gurugram, Haryana, India.',
      'Dr. Neha Mathur, Assistant Professor, Department of Electronics and Communication Engineering, Dronacharya College of Engineering, Gurugram, Haryana, India.',
    ],
  },
  {
    title: 'Publicity & Media Chairs',
    members: [
      'Dr. Madhu Mathur, Assistant Professor, Department of Applied Science and Humanities,  Dronacharya College of Engineering, Gurugram, Haryana, India.',
      'Dr. Nimisha Yadav, Assistant Professor, Department of Applied Science and Humanities,  Dronacharya College of Engineering, Gurugram, Haryana, India.',
    ],
  },
  {
    title: 'DICON 2027 Section Oversight Committee Members',
    members: [
      'Prof. (Dr.) Vivek Shrivastava (LMC), Section Executive Committee Member Co-opted and Member, IEEE Delhi Section Standing Committee on Technical and Professional Activities-Conference.',
      'Dr. Ekta Gandotra, Lead Member Coordinator for DICON 2027 and Member, IEEE Delhi Section Standing Committee on Technical and Professional Activities-Conference.',
      'Prof. (Dr.) Rajnish Sharma, Vice Chair and Member, IEEE Delhi Section Standing Committee on Technical and Professional Activities-Conference.',
      'Prof. (Dr.) Sneha Kamra, Section Secretary, Interim Section Treasurer and Member, IEEE Delhi Section Standing Committee on Technical and Professional Activities-Conference.',
    ],
  },
  {
    title: 'Technical Program Committee (TPC) Members',
    members: [
      'Prof. (Dr.) Prerna Gaur, Director Netaji Subhas University of Technology & Chair, IEEE India Council, New Delhi.',
      'Prof. (Dr.) A.Q. Ansari, Professor, Jamia Millia Islamia, New Delhi & Chair, SIGHT (IEEE OU), Ex-Chair, IEEE Delhi Section.',
      'Prof. (Dr.) Jasdeep Dhanoa, Executive Vice-Chair, IEEE Delhi Section.',
      'Dr. Shruti Jain, Professor & Associate Dean, Department of Electronics and Communication Engineering, Jaypee University of Information Technology, Solan, Himachal Pradesh & Joint Secretary, IEEE Delhi Section.',
      'Prof. (Dr.) Rashmi Aggarwal, Dean, School of Computer Applications, Manav Rachna International Institute of research and Studies & Chairperson, Women In Engineering (WIE), IEEE Delhi Section.',
      'Prof. (Dr.) S.S. Tyagi, Dean Faculty of Science and Technology, Gurugram University, Gurugram & Chair, Systems, Man and Cybernetics Chapter, IEEE Delhi Section, India.',
      'Prof. (Dr.) K. Subramanian, Professor, Department of Electrical Engineering, Netaji Subhas Technical University, New Delhi & Chair, Computer Society, IEEE Delhi Section, India.',
      'Prof. (Dr.) Dharm Singh Jat, Professor of Computer Science & UNESCO Chairholder, Secure High-performance Computing for Higher Education and Research, Namibia University of Science and Technology, Windhoek, Namibia',
      'Dr. Richa Sharma, Assistant Professor, Department of Mathematics, Computer science & Digital Forensics, Commonwealth University, Pennsylvania (PA), USA.',
      'Dr. Rajesh Yadav, Depatment of Cyber Security and Computer Science, University of Southampton, Delhi, India.',
      'Prof. (Dr.) Ashwani Sharma, Associate professor, Indian IIT, Ropar, Punjab, India.',
      'Dr. Pooja Jain, Associate Professor, Department of Computer Science, IIIT Nagpur.',
      'Dr. Semma Avasthi, Associate Professor, Department of Electronics and Communication, IIT, Kanpur.',
      'Dr. Yogesh S. Chauhan, Head, Department of Electronics and Communication, IIT Kanpur & Senior Member IEEE.',
      'Dr. Neeraj Gehlot, Assistant Professor, Department of Computer Science, IIIT Allahabad & Senior Member IEEE.',
      'Prof. (Dr.) C. Ramakrishna, Dean, Administration and Finance, Professor and Head, Department of Computer Science Engineering, NITTTR, Chandigarh, SMIEEE.',
      'Prof. (Dr.) Maiteryee Dutta, Chairperson, Media and PR Committtee, NITTTR, Chandigarh.',
      'Dr. B.S. Dhaliwal, Associate Dean, Academics and Students, Professor, Department of Electronics and Communication Engineering, NITTTR, Chandigarh & Senior Member',
      'Dr. Shweta Pandit, Associate Professor & Head, ECE, Jaypee University of Information Technology, Waknaghat, HP, India',
      'Prof. (Dr.) Mayuri Mehta, Department of Computer Engineering, NIT Surat, Gujrat, India, SMIEEE, member IEEE WIE and IEEE SPS.',
      'Dr. Anshul Vrashney, Senior Scientist, National Physics Laboratory, CSIR.',
      'Dr. Avni Khatkar, Scientist, National Physics Laboratory, CSIR & Senior Member IEEE.',
      'Prof. (Dr.) Vivekanand Jha, Department of Computer Science and Engineering, IGDTUW, Delhi.',
      'Dr. Sweta Tripathi, IEEE WIE Revitalization committee chair 2024, Past Chair IEEE WIE UP Section, Department of Electronics and Communication, Amity University Gurgaon',
      'Prof. (Dr.) Sugandha Singh, Dean, School of Engineering and technology, Noida International University, Greater Noida & Senior Member IEEE.',
      'Dr. Manoj Kumar Tiwari, Senior Principal Design, Cadence Design System, Hyderabad.',
      'Dr Manoj Tiwari, ST Microelectronics, Gautam Buddha Nagar, Uttar Pradesh, India',
      'Dr. Shubham Goel, Assistant Professor, Department of Engineering and Technology, Gurugram University, India.',
      'Dr. Sumit Choudhary, Assistant Professor, Department of Engineering and Technology, Gurugram University, India & Senior Member IEEE.',
      'Dr. Neha Jain, Head, Department of Data Science and Big Data, IILM University, Greater Noida.',
      'Dr. Adesh Mishra, Assistant Professor, Department of Electrical Engineering, MDU, Rohtak.',
      'Mr. Srini Vasudevan, CTO & Co-Founder KangaSys, Sydney, Australia.',
      'Mr. Deepak Malhotra, Director, Delloite, India & Expert in Technology Strategy & Architecture.',
      'Mr. Mohit Sehgal, General Manager, Production business vertical, Maruti Suzuki, MSIL, India',
      'Mr. Yogesh Puri, Senior Architect-Tech (AIA-Data) Cognizant, Sydney, Australia.',
    ],
  },
];

const Committee = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="page-header committee-page-header">
            <h1>Organizing Committee of DICON 2027</h1>
            <p className="committee-page-subtitle">April 23-24, 2027</p>
          </div>

          <div className="card-box committee-single-card">
            {sections.map((section, sIdx) => (
              <div key={sIdx} className="committee-single-section">
                <h2 className="committee-section-title">{section.title}</h2>
                <ul className="committee-member-list">
                  {section.members.map((member, idx) => (
                    <li key={`${sIdx}-${idx}`}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Committee;
