import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="navbar">
    <Link to="/" className="navbar-link">
      MUSIC DB
    </Link>
  </nav>
);

export default Navbar;
