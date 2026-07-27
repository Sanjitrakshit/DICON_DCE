import React from 'react';

const AuthorSubmission = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="content">
          <div className="card-box" style={{ lineHeight: '1.7' }}>
            <h1 style={{ margin: '0 0 16px 0', font: '28px Times', color: '#1b5c71', fontWeight: 'bold' }}>
              Author Submission
            </h1>

            <section>
              <h3>Submission Portal (Microsoft CMT)</h3>
              <p>
                All paper submissions must be completed through the Microsoft CMT system.
                Authors can access the submission portal here:
                <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer">CMT Submission Portal</a>.
              </p>
              <p>
                To submit, please create a CMT account if you do not already have one, then log in and follow the instructions to upload your manuscript and author details.
              </p>
            </section>

            <section>
              <h3>Paper Preparation Guidelines</h3>
              <ul>
                <li>Prepare your manuscript using IEEE conference paper templates and formatting.</li>
                <li>Use double-column IEEE style only.</li>
                <li>Submit only PDF files generated from the final manuscript; do not submit source files.</li>
                <li>Ensure the PDF is searchable and free of password protection.</li>
                <li>Keep the page limit and layout within the conference requirements.</li>
              </ul>
            </section>

            <section>
              <h3>Important Instructions Before Submission</h3>
              <ul>
                <li>Submit an anonymized manuscript for double-blind review: remove author names, affiliations, acknowledgments, and self-identifying references.</li>
                <li>Do not include author information anywhere in the submitted paper file.</li>
                <li>Verify that all figures, tables, and references are properly formatted and embedded in the PDF.</li>
                <li>Review the CMT upload checklist before final submission.</li>
              </ul>
            </section>

            <section>
              <h3>Revision and Camera-Ready Submission Process</h3>
              <p>
                If your paper is accepted, you will receive instructions through CMT about the revision and camera-ready submission process.
                Follow the portal's guidelines carefully and upload the final version by the camera-ready deadline.
              </p>
              <p>
                Ensure the camera-ready paper includes author names, affiliations, and any required copyright forms or IEEE metadata as instructed.
              </p>
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
              <h3>Microsoft CMT Acknowledgment</h3>
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
