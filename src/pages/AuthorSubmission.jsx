import React from 'react';

const AuthorSubmission = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="card-box" style={{ lineHeight: '1.7' }}>
            <h1 style={{ margin: '0 0 16px 0', font: '28px Times', color: '#1b5c71', fontWeight: 'bold' }}>
              Author's Submission Guidelines

            </h1>
            <p>Authors are invited to submit original, high-quality, and previously unpublished research articles. Submissions must not be under review by any other publication or conference. All manuscripts should be submitted electronically via Microsoft CMT in strict adherence to the IEEE standard two-column conference template, which can be accessed through the provided link. Each manuscript is limited to a maximum of six (6) pages, including figures, tables, and references. Additional pages may be accommodated with a nominal fee.
            </p>


            <section>
              <h3>Submission Portal (Microsoft CMT)</h3>
              <p>
                All paper submissions must be completed through the Microsoft CMT system.
                Authors can access the submission portal here:
                <a href="https://cmt3.research.microsoft.com/DICON2027" target="_blank" rel="noopener noreferrer">CMT Submission Portal</a>.
              </p>
              <p>
                To submit, please create a CMT account if you do not already have one, then log in and follow the instructions to upload your manuscript and author details.
              </p>
            </section>
            <section>
              <h3>General Instructions</h3>
              <p>
                <ul>
                  <li>Papers violating formatting guidelines may be rejected.</li>
                  <li> Submissions must be original, unpublished work not under review elsewhere.</li>
                  <li> Simultaneous submissions to other conferences or journals are prohibited.</li>
                  <li> All manuscripts must be written in English and prepared as a PDF document.</li>
                  <li>Papers should strictly adhere to the IEEE two-column format with 10pt font size.</li>
                  <li> The page limit is six (6) pages. An additional two pages are allowed with extra charges</li>
                  <li>All figures, tables, and references must fit within the page limit.</li>
                  <li>Papers will be reviewed based on originality, significance, technical quality, and clarity.</li>
                  <li>The decision to accept or reject a paper rests with the Technical Program Committee.</li>
                  <li> Accepted papers must address reviewers' comments and meet final submission requirements.</li>
                  <li>The Conference Chair reserves the right to exclude papers not presented or meeting guidelines from the proceedings.</li>
                  <li>All submissions should be made via Microsoft CMT.</li>
                </ul>
              </p>
            </section>

            <section>
              <h3>Paper Formatting Guidelines</h3>
              <ul>
                <li><strong>Paper Size:</strong> A4 (8.27" × 11.69").</li>
                <li><strong>Paper Length:</strong> Maximum of 6 pages, including figures, tables, and references. Two additional pages are permitted with a charge of ₹1000 per page (Indian authors) or $50 per page (International authors).</li>

                <li><strong>Formatting:</strong> Double-column layout, single-spaced, using 10pt Times New Roman font.</li>

                <li><strong>Margins:</strong> Top: 1" (25 mm) on the title page; 0.75" (19 mm) elsewhere. Left, Right, and Bottom margins: 0.75" (19 mm).</li>

                <li><strong>File Format:</strong> PDF, with a maximum size of 5MB. All fonts must be embedded.</li>

                <li><strong>No Page Numbering:</strong> No page numbering should be included in the manuscript.</li>

                <li><strong>IEEE Template:</strong> Use the IEEE MS Word template provided via the link below <a href="https://www.ieee.org/conferences/publishing/templates" target="_blank" rel="noopener noreferrer">here</a> for proper formatting.</li>
              </ul>
            </section>

            <section>
              <h3>Important Instructions</h3>
              <ul>
                <li>Papers of acceptable quality presented at the conference will be submitted to <strong>IEEE Xplore</strong> for potential inclusion.</li>

                <li><strong>Presentation Requirement:</strong> Accepted papers must be presented by at least one author. Authors must complete paid registration to upload the final IEEE-compliant version of their paper.</li>

                <li><strong>Registration Policy:</strong> Failure to register or present the paper will result in removal from the conference program and proceedings.</li>

                <li><strong>Cancellation Policy:</strong> No refunds will be provided for cancellations, but substitutions are allowed before the event.</li>
              </ul>
            </section>
            <section>
              <h3>Best Paper Awards</h3>

              <p>
                The awards are intended to encourage high-quality research contributions and recognize outstanding academic achievements.
                Best Paper Awards and Poster Awards will be presented to authors and participants whose work demonstrates
                groundbreaking research and exceptional presentation quality. Papers will be nominated by the session chairs
                and reviewed by the evaluation committee based on reviewers’ comments and recommendation statements.
              </p>

              <h5>Evaluation Criteria</h5>
              <ul>
                <li>Originality and novelty of the research work.</li>
                <li>Technical quality and depth of the research.</li>
                <li>Clarity of presentation and communication skills.</li>
                <li>Research methodology and experimental validation.</li>
                <li>Relevance to conference themes and societal/industrial impact.</li>
                <li>Ability to answer questions and defend the research contribution.</li>
              </ul>
            </section>

            <section>
              <h3>Contact Information</h3>
              <p>
                For submission-related queries, please contact the conference paper submission team at:
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:dicon.dce@gmail.com">dicon.dce@gmail.com</a>
              </p>
            </section>

            <section>
              <h3>CMT Acknowledgment</h3>
              <p>
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as software development and support.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AuthorSubmission;
