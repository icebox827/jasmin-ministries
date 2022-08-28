import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './NavBar';
import Home from '../containers/Home';
import Footer from './Footer';

function RoutesLink() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default RoutesLink;
