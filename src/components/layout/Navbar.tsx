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
        <a href="/" className="Logo">
          <img src="\assets\Logo.png" alt="" className="LogoImage" />
          <h1 className="sitename">GREEN MINDSET</h1>
        </a>

        <div className="search-container">
          <button onClick={handleSearch} className="search-button">
            <img
              src="\assets\images\Navbar\SearchButton.png"
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
          <button
            className="hamburger-lines"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </button>
        </div>
      </nav>

      {/* Collapsible Menu */}
      <div className={`nav-collapse ${isOpen ? "show" : ""}`}>
        <div className="XButtonContainer">
          <button className="XButton" onClick={() => setIsOpen(!isOpen)}>
            <span className="line line4"></span>
            <span className="line line5"></span>
          </button>
        </div>

        <div className="navbar-nav">
          <div className="nav-item">
            <a className="nav-link" href="/">
              <div className="nav-link-container">
                <p>Home</p>
              </div>
            </a>
          </div>

          <div className="nav-item">
            <a className="nav-link" href="/">
              <div className="nav-link-container">
                <p>About</p>
              </div>
            </a>
          </div>

          <div
            className="nav-item"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="nav-link-container">
              <p>Blog</p>
              <p>{">"}</p>
            </div>

            <div
              className={`dropdown-menu ${
                dropdownOpen ? "showdropdownitem-Blog" : ""
              }`}
            >
              <div className="dropdown-item-container">
                <div className="XButtonContainer">
                  <button
                    className="XButton"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span className="line line4"></span>
                    <span className="line line5"></span>
                  </button>
                </div>

                <a className="dropdown-item" href="/">
                  Service 1
                </a>

                <a className="dropdown-item" href="/">
                  Service 2
                </a>

                <a className="dropdown-item" href="/">
                  Service 3
                </a>
              </div>
            </div>
          </div>

          <div className="nav-item">
            <a className="nav-link" href="/">
              <div className="nav-link-container">
                <p>Courses</p>
                <p>{">"}</p>
              </div>
            </a>
          </div>

          {/* Dropdown Menu */}
          <div
            className="nav-item dropdown"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <a className="nav-link" href="\pages\Services.tsx">
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
          </div>

          <div
            className="nav-item dropdown"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="nav-link-container">
              <p>Resourses</p>
              <p>{">"}</p>
            </div>
            <ul
              className={`dropdown-menu ${
                dropdownOpen ? "showdropdownitem-Resources" : ""
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
          </div>

          <div className="nav-item">
            <a className="nav-link" href="/">
              <div className="nav-link-container">
                <p>Contact</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
