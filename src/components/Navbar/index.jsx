import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <Link to="/">
            <div className="navbar-brand">
              Bank
              {' '}
              <span>PRO</span>
            </div>
          </Link>
          <div className="nav-items">
            <Link to="/transaction">
              <div className="nav-item">Transaction</div>
            </Link>
            <Link to="/login">
              <div className="nav-item">Logout</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
