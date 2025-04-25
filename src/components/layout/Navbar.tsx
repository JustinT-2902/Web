import React, { useState } from "react";
import "../../styles/Navbar.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownBlog, setDropdownBlog] = useState(false);
  const [dropdownServices, setDropdownServices] = useState(false);
  const [dropdownResources, setDropdownResources] = useState(false);
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    alert("Searching for: " + query);
  };

  return (
    <header>
      <div className="NavBar">
        <span className="GreenLine"></span>
        <nav className="Nav">
          <div className="Nav-Items-Containers">
            <a href="/" className="Nav-Items">
              Home
            </a>
            <span className="Nav-Line"></span>
          </div>
          <div className="Nav-Items-Containers">
            <a href="/" className="Nav-Items">
              About
            </a>
            <span className="Nav-Line"></span>
          </div>
          <div className="Nav-Items-Containers">
            <a href="/" className="Nav-Items">
              Service
            </a>
            <span className="Nav-Line"></span>
          </div>
          <a href="/" className="Logo">
            <img
              src=".\assets\images\Navbar\Logo.png"
              alt=""
              className="LogoImage"
            />
          </a>
          <div className="Nav-Items-Containers">
            <a href="/" className="Nav-Items">
              Resume
            </a>
            <span className="Nav-Line"></span>
          </div>
          <div className="Nav-Items-Containers">
            <a href="/" className="Nav-Items">
              Project
            </a>
            <span className="Nav-Line"></span>
          </div>
          <div className="Nav-Items-Containers">
            <a href="/" className="Nav-Items">
              Contact
            </a>
            <span className="Nav-Line"></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

{
  /*        
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
      </div>
      Collapsible Menu
      <div className={`nav-collapse ${isOpen ? "show" : ""}`}>
        <div>
          <div className="XButtonContainer">
            <button className="XButton" onClick={() => setIsOpen(!isOpen)}>
              <img
                src=".\assets\images\Navbar\XButton.png"
                alt=""
                className="XButton-Icon"
              />
            </button>
          </div>

          <div className="sitename-container">
            <h1 className="sitename">GREEN MINDSET</h1>
          </div>

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
              onClick={() => setDropdownBlog(!dropdownBlog)}
            >
              <div className="nav-link-container">
                <p>Blog</p>
                <p>{">"}</p>
              </div>
            </div>

            <div
              className={`dropdown-menu ${
                dropdownBlog ? "showdropdownitem-Blog" : ""
              }`}
            >
              <div className="dropdown-item-container">
                <div className="XButtonContainer">
                  <button
                    className="XButton"
                    onClick={() => setDropdownBlog(!dropdownBlog)}
                  >
                    <img
                      src=".\assets\images\Navbar\XButton.png"
                      alt=""
                      className="XButton-Icon"
                    />
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

            <div
              className="nav-item"
              onClick={() => setDropdownBlog(!dropdownBlog)}
            >
              <div className="nav-link-container">
                <p>Services</p>
                <p>{">"}</p>
              </div>
            </div>

            <div
              className={`dropdown-menu ${
                dropdownServices ? "showdropdownitem-Services" : ""
              }`}
            >
              <div className="dropdown-item-container">
                <div className="XButtonContainer">
                  <button
                    className="XButton"
                    onClick={() => setDropdownBlog(!dropdownBlog)}
                  >
                    <img
                      src=".\assets\images\Navbar\XButton.png"
                      alt=""
                      className="XButton-Icon"
                    />
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

            <div
              className="nav-item"
              onClick={() => setDropdownBlog(!dropdownBlog)}
            >
              <div className="nav-link-container">
                <p>Resources</p>
                <p>{">"}</p>
              </div>
            </div>

            <div
              className={`dropdown-menu ${
                dropdownResources ? "showdropdownitem-Resources" : ""
              }`}
            >
              <div className="dropdown-item-container">
                <div className="XButtonContainer">
                  <button
                    className="XButton"
                    onClick={() => setDropdownBlog(!dropdownBlog)}
                  >
                    <img
                      src=".\assets\images\Navbar\XButton.png"
                      alt=""
                      className="XButton-Icon"
                    />
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

            <div className="nav-item">
              <a className="nav-link" href="/">
                <div className="nav-link-container">
                  <p>Contact</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="SocialNetwork">
          <div className="Channel-Container">
            <a href="/">
              <img src=".\assets\images\Navbar\Facebook.png" alt="" />
            </a>
            <a href="/">
              <img src=".\assets\images\Navbar\Youtube.png" alt="" />
            </a>
            <a href="/">
              <img src=".\assets\images\Navbar\Insta.png" alt="" />
            </a>
            <a href="/">
              <img src=".\assets\images\Navbar\Tiktok.png" alt="" />
            </a>
          </div>
          <div className="Join-Community-Container">
            <a href="/">
              <p className="Join-Community-Text">Join Our Community</p>
            </a>
          </div>
          <div className="Log-In-Container">
            <a href="/">
              <p className="Log-In-Text">Log In</p>
            </a>
          </div>
        </div>
      </div>
      */
}
