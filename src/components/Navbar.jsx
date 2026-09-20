import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        <img
          src="/favicon.png"
          alt="Murukalai Hotel Logo"
          className="navbar-logo"
        />

        <span>MURUKALAI HOTEL</span>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#menu" onClick={closeMenu}>Menu</a>
        <a href="#specialities" onClick={closeMenu}>Specialities</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#reviews" onClick={closeMenu}>Reviews</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

      </div>

    </nav>
  );
}

export default Navbar;