import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo.png" alt="Bike Store Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="/" className="active">HOME</a></li>
          <li><a href="/bikes">BIKES</a></li>
          <li><a href="/gear">GEAR</a></li>
          <li><a href="/parts">PARTS</a></li>
          <li><a href="/tires">TIRES</a></li>
          <li><a href="/service-info">SERVICE-INFO</a></li>
          <li><a href="/catalogues">CATALOGUES</a></li>
          <li><a href="/contact">CONTACT</a></li>
        </ul>
        <div className="nav-icons">
          <button className="icon-button">
            <i className="search-icon"></i>
          </button>
          <button className="icon-button">
            <i className="cart-icon"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
