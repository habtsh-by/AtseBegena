import { useLanguage } from "../com/LanguageContext";
import { useState, useRef, useEffect } from "react";
import logo from "../assets/img/ATseL.png";
import "./navbar.css";

const Navbar = () => {
  const { language, changeLanguage, translations } = useLanguage() || {}; 

  if (!translations) return null; 

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      {/* Hamburger menu for mobile */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`} ref={menuRef}>
        <li><a href="/home">{translations[language]?.home || "Home"}</a></li>
        <li><a href="/about">{translations[language]?.about || "About"}</a></li>
        <li><a href="/services">{translations[language]?.service || "Services"}</a></li>
        <li><a href="/contact">{translations[language]?.contact || "Contact"}</a></li>
      </ul>

      {/* Actions */}
      <div className="actions">
        <button className="register-btn1">
          <a href="/register">{translations[language]?.register || "Register"}</a>
        </button>

        {/* Language Dropdown */}
        <div className="lang-dropdown" ref={dropdownRef}>
          <button className="lang-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {language === "am" ? "ቋንቋ ▼" : "Language ▼"}
          </button>
          {dropdownOpen && (
            <ul className="dropdown-menu active">
              <li onClick={() => changeLanguage("am")}>
                አማርኛ
              </li>
              <li onClick={() => changeLanguage("en")}>
                English
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;