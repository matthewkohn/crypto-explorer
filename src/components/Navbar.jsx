import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Link to="/">Portfolio</Link>
      <Link to="/coins">Cryptocurrencies</Link>
    </>
  )
}

export default Navbar