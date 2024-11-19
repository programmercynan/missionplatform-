import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Sermons from './pages/Sermons';
import Donations from './pages/Donations';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    
  );
};

export default App;