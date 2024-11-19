import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  return (
    <nav style={{ padding: '1em', backgroundColor: '#f8f9fa' }}>
      <Link to="/" style={{ marginRight: '1em' }}>Home</Link>
      <Link to="/events" style={{ marginRight: '1em' }}>Events</Link>
      <Link to="/sermons" style={{ marginRight: '1em' }}>Sermons</Link>
      <Link to="/donations" style={{ marginRight: '1em' }}>Donations</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
