import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Portfolio</Link>
      <Link to="/coins">Cryptocurrencies</Link>
    </nav>
  );
}

export default Navbar