import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar-container">
      <Link className="logo" to="/">
        #CarZee
      </Link>
      <div className="nav-links">
        <Link aria-label="Home" className="nav-link" to="/">
          Home
        </Link>
        <Link aria-label="Cars" className="nav-link" to="/Cars">
          Cars
        </Link>
        <Link aria-label="About Us" className="nav-link" to="/about">
          About Us
        </Link>
        <Link aria-label="Contact" className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
