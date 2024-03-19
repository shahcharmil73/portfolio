import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <a href="/"><img src="./img/logp.png" alt="CHR" width ="79px"/></a>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
          <a href="/" onClick={closeMenu} className="navbar--content">
              Home 
            </a>
          </li>
          <li>
          <a href="/About-me" onClick={closeMenu} className="navbar--content">
              About Me
            </a>
          </li>
            
          <li>
          <a href="/portfolio" onClick={closeMenu} className="navbar--content">
              Experience
            </a>
          </li>
          
        
      <a href="/contact" onClick={closeMenu} className="navbar--content">
              Contact-Me
            </a>

            </ul>
      </div>
    </nav>
  );
}

export default Navbar;
