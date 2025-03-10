import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../nav/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>

      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        ☰
      </button>

      {/* Navbar Links */}
      <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
        <li><NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : '')}>Menu</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')}>Blog</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
        <li>
          <button className="order-btn" onClick={() => navigate('/order')}>
            Order Online
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
