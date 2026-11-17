import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

import Footer from './components/Footer';

import Home from './pages/Home';

import Institute from './pages/Institute';

import Conference from './pages/Conference';

import Workshop from './pages/Workshop';

import Tracks from './pages/Tracks';

import Committee from './pages/Committee';

import Advisory from './pages/Advisory';

import SectionOversight from './pages/SectionOversight';

import Plenary from './pages/Plenary';

import Keynote from './pages/Keynote';

import Registration from './pages/Registration';

import Contact from './pages/Contact';

import Plagiarism from './pages/Plagiarism';

import AuthorSubmission from './pages/AuthorSubmission';

import CameraSubmission from './pages/CameraSubmission';

import Workshop2 from './pages/workshop2';

import Workshop3 from './pages/workshop3';

import Workshop4 from './pages/workshop4';

import './App.css';



function App() {

  return (

    <Router>

      <div className="App">

        <Header />

        <main className="main-content">

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/institute" element={<Institute />} />

            <Route path="/conference" element={<Conference />} />

            <Route path="/workshop" element={<Workshop />} />

            <Route path="/workshop2" element={<Workshop2 />} />

            <Route path="/workshop3" element={<Workshop3 />} />

            <Route path="/workshop4" element={<Workshop4 />} />

            <Route path="/tracks" element={<Tracks />} />

            <Route path="/committee" element={<Committee />} />

            <Route path="/advisory" element={<Advisory />} />

            <Route path="/oversight" element={<SectionOversight />} />

            <Route path="/plenary" element={<Plenary />} />

            <Route path="/keynote" element={<Keynote />} />

            <Route path="/registration" element={<Registration />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/plagiarism" element={<Plagiarism />} />

            <Route path="/author-submission" element={<AuthorSubmission />} />

            <Route path="/camera-submission" element={<CameraSubmission />} />

          </Routes>

        </main>

        <Footer />

      </div>

    </Router>

  );

}



export default App;

