import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import CareerApply from './pages/CareerApply';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Distribusi from './pages/Distribusi';
import Home from './pages/Home';
import Lifestyle from './pages/Lifestyle';
import Retail from './pages/Retail';
import SubRetail from './pages/SubRetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/career-apply" element={<CareerApply />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/distribusi" element={<Distribusi />} />
        <Route path="/" element={<Home />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/sub-retail" element={<SubRetail />} />
      </Routes>
    </Router>
  );
}

export default App;
