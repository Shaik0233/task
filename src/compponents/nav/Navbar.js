import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../nav/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-items">
      <div className="logo">Logo</div>
      
      {/* Mobile Menu Button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navbar Links */}
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/menu" activeClassName="active">Menu</NavLink></li>
        <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/order"><button className="order-btn">Order Online</button></NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
