import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, onSignOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    onSignOut();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">SaaS Shipping</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/create-order">Create Order</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/orders">Order List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/clients">Client List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">User List</Link>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!isAuthenticated && (
              <li className="nav-item">
                <Link className="btn btn-outline-primary" to="/signup">Sign Up</Link>
              </li>
            )}
            {isAuthenticated ? (
              <li className="nav-item">
                <button className="btn btn-outline-danger ms-2" onClick={handleSignOut}>Sign Out</button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-outline-primary ms-2" to="/login">Sign In</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
