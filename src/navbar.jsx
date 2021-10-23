import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'
import Logo from '../pictures/logo.png';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <img src={Logo} className="logo"/>
      </div>
      <div className="links">
        <Link to="/">Main</Link>
        <Link to="/Team">Our Team</Link>
        <Link to="/About">About</Link>
        <Link to="/Docs">Docs</Link>
      </div>
    </div>
  );
}

export default Navbar