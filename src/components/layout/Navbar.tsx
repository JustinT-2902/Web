import React, { useState } from "react";
import "../../styles/Navbar.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    alert("Searching for: " + query);
  };

  return (
    <header>
      <nav className="Nav">
        <a href="index.html" className="Logo">
          <img src="public\assets\Logo.png" alt="" className="LogoImage" />
          <h1 className="sitename">GREEN MINDSET</h1>
        </a>

        <div className="search-container">
          <button onClick={handleSearch} className="search-button">
            <img
              src="public\assets\images\Navbar\SearchButton.png"
              alt=""
              className="search-icon"
            />
          </button>

          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-bar"
          />
        </div>

        <div className="menu-container">
          <p className="menu">MENU</p>

          <button
            className="navbar"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src="public\assets\images\Navbar\HambugerBar.png"
              alt=""
              className="NavIcon"
            />
          </button>
        </div>
      </nav>

      {/* Collapsible Menu */}
      <div className={`nav-collapse ${isOpen ? "show" : ""}`}>
        <div className="XButtonContainer">
          <p>CLOSE</p>
          <button className="XButton" onClick={() => setIsOpen(!isOpen)}>
            <img
              src="public\assets\images\Navbar\XButton.png"
              alt=""
              className="XImage"
            />
          </button>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <div className="nav-link-container">
                <p>Home</p>
                <p>{">"}</p>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              <div className="nav-link-container">
                <p>About</p>
                <p>{">"}</p>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              <div className="nav-link-container">
                <p>Blog</p>
                <p>{">"}</p>
              </div>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              <div className="nav-link-container">
                <p>Courses</p>
                <p>{">"}</p>
              </div>
            </a>
          </li>

          {/* Dropdown Menu */}
          <li
            className="nav-item dropdown"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <a className="nav-link" href="src\pages\Services.tsx">
              <div className="nav-link-container">
                <p>Services</p>
                <p>{">"}</p>
              </div>
            </a>
            <ul
              className={`dropdown-menu ${
                dropdownOpen ? "showdropdownitem" : ""
              }`}
            >
              <li>
                <a className="dropdown-item" href="/">
                  Service 1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Service 2
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/">
                  Service 3
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              <div className="nav-link-container">
                <p>Contact</p>
                <p>{">"}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <video autoPlay loop muted playsInline style={{ width: "100%" }}>
          <source
            src="public\assets\images\Navbar\Pinterest media.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </header>
  );
};

export default Header;
