// Import React and Bootstrap CSS
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Functional component for the navigation bar
const NavigationBar = () => {
  return (
    // Navbar component with Bootstrap styling
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* College name */}
        <a className="navbar-brand" href="*">Starford College</a>
        {/* Navbar toggle button for mobile devices */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar links container */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Home link */}
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            {/* Courses link */}
            <li className="nav-item">
              <a className="nav-link" href="*">Courses</a>
            </li>
            {/* About link */}
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Export the NavigationBar component
export default NavigationBar;
