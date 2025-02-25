import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="container">
      <Link to="/" className="logo">
        Restaurant
      </Link>
      <Link to="/favorites" className="btn-fav">
        <i className="fas fa-heart"></i>
      </Link>
    </header>
  );
};

export default Header;
