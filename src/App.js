import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <nav className="navbar">
          <div className="nav-logo">
            <Link to="/">A.K WEB</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/blogs">BLOGs</Link>
            </li>
          </ul>
          <button onClick={toggleDarkMode} className="toggle-mode">
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<h1>A.K WEB</h1>} />
            <Route path="/about" element={<h2>About Page</h2>} />
            <Route path="/projects" element={<h2>Projects Page</h2>} />
            <Route path="/blogs" element={<h2>Blogs Page</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
