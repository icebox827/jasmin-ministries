import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../containers/Home';
import About from '../containers/About';
import Involved from '../containers/Involved';
import Donate from '../containers/Donate';
import Footer from './Footer';

function RoutesLink() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/involved" element={<Involved />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RoutesLink;
